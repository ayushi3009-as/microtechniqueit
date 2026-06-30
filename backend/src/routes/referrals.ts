import { Router } from 'express';
import { prisma } from '../prisma';
import { requireAuth, requireRole } from '../middleware/auth';
import { hashPassword } from '../auth';

const router = Router();

// GET all referrals (admin) or user's referrals
router.get('/', requireAuth, async (req, res) => {
  try {
    const { role, userId } = req.user!;
    let referrals;
    
    if (role === 'SUPER_ADMIN') {
      referrals = await prisma.referral.findMany({
        include: { referredBy: true, project: true }
      });
    } else {
      referrals = await prisma.referral.findMany({
        where: { referredById: userId }
      });
    }
    
    res.json({ referrals });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new referral
router.post('/', requireAuth, async (req, res) => {
  try {
    const referral = await prisma.referral.create({
      data: {
        ...req.body,
        referredById: req.user!.userId
      }
    });
    
    res.status(201).json(referral);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST accept referral
router.post('/:id/accept', requireAuth, requireRole(['SUPER_ADMIN']), async (req, res) => {
  try {
    const { finalPrice, commissionAmount, assignedToId, adminNotes, empCommissionAmount } = req.body;
    
    const referral = await prisma.referral.findUnique({
      where: { id: req.params.id }
    });

    if (!referral) {
      return res.status(404).json({ error: 'Referral not found' });
    }

    const hashedPassword = await hashPassword('Microtech@123');

    const newUser = await prisma.user.create({
      data: {
        role: 'CLIENT',
        email: referral.customerEmail || `client_${Date.now()}@temp.com`,
        firstName: referral.customerName,
        lastName: '',
        password: hashedPassword,
        phone: referral.customerPhone
      }
    });

    const newProject = await prisma.project.create({
      data: {
        name: referral.productInterest,
        clientName: referral.customerName,
        clientId: newUser.id,
        assignedToId: assignedToId || null,
        totalAmount: finalPrice ? parseFloat(finalPrice) : 0,
        empCommissionAmount: empCommissionAmount ? parseFloat(empCommissionAmount) : null,
        empCommissionStatus: empCommissionAmount ? 'PENDING' : null,
        status: 'IN_PROGRESS',
        clientEmail: referral.customerEmail
      }
    });

    const updatedReferral = await prisma.referral.update({
      where: { id: req.params.id },
      data: {
        status: 'ACCEPTED',
        projectId: newProject.id,
        finalPrice: finalPrice ? parseFloat(finalPrice) : null,
        commissionAmount: commissionAmount ? parseFloat(commissionAmount) : null,
        adminNotes
      }
    });

    res.json({ referral: updatedReferral, defaultPassword: 'Microtech@123' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PATCH update referral status
router.patch('/:id', requireAuth, requireRole(['SUPER_ADMIN']), async (req, res) => {
  try {
    const referral = await prisma.referral.update({
      where: { id: req.params.id as string },
      data: req.body
    });
    
    res.json(referral);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
