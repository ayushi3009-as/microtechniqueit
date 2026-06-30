import { Router } from 'express';
import { prisma } from '../prisma';
import { requireAuth, requireRole } from '../middleware/auth';

const router = Router();

// GET all projects (admin sees all with assignedTo+payments, others see their own)
router.get('/', requireAuth, async (req, res) => {
  try {
    const { role, userId } = req.user!;
    let projects;

    if (role === 'SUPER_ADMIN') {
      projects = await prisma.project.findMany({
        include: { assignedTo: true, client: true, payments: true, referral: true },
      });
    } else if (role === 'CHANNEL_PARTNER') {
      projects = await prisma.project.findMany({
        where: { referral: { referredById: userId } },
        include: { client: true, payments: true, referral: true },
      });
    } else if (role === 'CLIENT') {
      projects = await prisma.project.findMany({
        where: { clientId: userId },
        include: { client: true, payments: true, referral: true },
      });
    } else {
      projects = await prisma.project.findMany({
        where: { 
          OR: [
            { assignedToId: userId },
            { clientId: userId }
          ]
        },
        include: { client: true, payments: true, referral: true },
      });
    }

    const strippedProjects = projects.map(p => {
      const project = { ...p } as any;
      if (role === 'CHANNEL_PARTNER') {
        delete project.empCommissionAmount;
        delete project.empCommissionStatus;
      }
      if (role === 'WORKING_PARTNER') {
        if (project.referral) {
          delete project.referral.commissionAmount;
          delete project.referral.commissionRate;
          delete project.referral.commissionStatus;
        }
      }
      if (role === 'CLIENT') {
        delete project.empCommissionAmount;
        delete project.empCommissionStatus;
        if (project.referral) {
          delete project.referral.commissionAmount;
          delete project.referral.commissionRate;
          delete project.referral.commissionStatus;
        }
      }
      return project;
    });

    res.json({ projects: strippedProjects });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET single project
router.get('/:id', requireAuth, async (req, res) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: req.params.id },
      include: { assignedTo: true, client: true, payments: true, referral: true },
    });

    if (!project) return res.status(404).json({ error: 'Not found' });

    res.json({ project });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new project (SUPER_ADMIN only)
router.post('/', requireAuth, requireRole(['SUPER_ADMIN']), async (req, res) => {
  try {
    const { name, description, clientName, clientEmail, clientPhone, assignedToId, clientId, deadline, totalAmount } = req.body;

    let finalClientName = clientName;
    let finalClientEmail = clientEmail;
    let finalClientPhone = clientPhone;

    if (clientId) {
      const clientUser = await prisma.user.findUnique({ where: { id: clientId }, select: { firstName: true, lastName: true, email: true, phone: true } });
      if (clientUser) {
        if (!finalClientName) finalClientName = `${clientUser.firstName} ${clientUser.lastName}`;
        if (!finalClientEmail) finalClientEmail = clientUser.email;
        if (!finalClientPhone) finalClientPhone = clientUser.phone;
      }
    }

    const project = await prisma.project.create({
      data: {
        name,
        description,
        clientName: finalClientName || 'Unknown Client',
        clientEmail: finalClientEmail,
        clientPhone: finalClientPhone,
        assignedToId: assignedToId || null,
        clientId: clientId || null,
        deadline: deadline ? new Date(deadline) : null,
        totalAmount: totalAmount ? parseFloat(totalAmount) : 0,
      },
    });

    res.status(201).json({ project });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PATCH update project (SUPER_ADMIN only)
router.patch('/:id', requireAuth, requireRole(['SUPER_ADMIN']), async (req, res) => {
  try {
    const { name, description, clientName, clientEmail, clientPhone, assignedToId, clientId, status, deadline, totalAmount } = req.body;

    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (clientName !== undefined) updateData.clientName = clientName;
    if (clientEmail !== undefined) updateData.clientEmail = clientEmail;
    if (clientPhone !== undefined) updateData.clientPhone = clientPhone;
    if (status !== undefined) updateData.status = status;
    if (totalAmount !== undefined) updateData.totalAmount = parseFloat(totalAmount);
    if (deadline !== undefined) updateData.deadline = new Date(deadline);
    if (assignedToId !== undefined) {
      updateData.assignedToId = assignedToId === '' ? null : assignedToId;
    }
    if (clientId !== undefined) {
      updateData.clientId = clientId === '' ? null : clientId;
    }
    const { empCommissionAmount, empCommissionStatus } = req.body;
    if (empCommissionAmount !== undefined) updateData.empCommissionAmount = empCommissionAmount ? parseFloat(empCommissionAmount) : null;
    if (empCommissionStatus !== undefined) updateData.empCommissionStatus = empCommissionStatus;

    const project = await prisma.project.update({
      where: { id: req.params.id },
      data: updateData,
    });

    res.json({ project });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
