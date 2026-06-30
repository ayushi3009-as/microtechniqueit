import { Router } from 'express';
import { prisma } from '../prisma';
import { requireAuth, requireRole } from '../middleware/auth';

const router = Router();

// GET all payments
router.get('/', requireAuth, async (req, res) => {
  try {
    const { role, userId } = req.user!;
    let payments;

    if (role === 'SUPER_ADMIN') {
      payments = await prisma.payment.findMany({
        include: { paidTo: true, project: true },
      });
    } else {
      payments = await prisma.payment.findMany({
        where: { 
          OR: [
            { paidToId: userId },
            { project: { clientId: userId } }
          ]
        },
        include: { paidTo: true, project: true },
      });
    }

    res.json({ payments });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new payment (SUPER_ADMIN only)
router.post('/', requireAuth, requireRole(['SUPER_ADMIN']), async (req, res) => {
  try {
    const { amount, paidToId, projectId, description, paymentMode, percentagePaid } = req.body;

    const payment = await prisma.payment.create({
      data: {
        amount: parseFloat(amount),
        paidToId,
        projectId: projectId || null,
        description,
        paymentMode: paymentMode || null,
        percentagePaid: percentagePaid ? parseFloat(percentagePaid) : 0,
      },
    });

    res.status(201).json({ payment });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PATCH update payment (SUPER_ADMIN only)
router.patch('/:id', requireAuth, requireRole(['SUPER_ADMIN']), async (req, res) => {
  try {
    const { amount, paidToId, projectId, description, status, paidAt, paymentMode, percentagePaid } = req.body;

    const updateData: any = {};
    if (amount !== undefined) updateData.amount = parseFloat(amount);
    if (paidToId !== undefined) updateData.paidToId = paidToId;
    if (description !== undefined) updateData.description = description;
    if (status !== undefined) updateData.status = status;
    if (paidAt !== undefined) updateData.paidAt = new Date(paidAt);
    if (paymentMode !== undefined) updateData.paymentMode = paymentMode;
    if (percentagePaid !== undefined) updateData.percentagePaid = parseFloat(percentagePaid);
    if (projectId !== undefined) {
      updateData.projectId = projectId === '' ? null : projectId;
    }

    // Auto-set paidAt when status changes to PAID and paidAt wasn't explicitly provided
    if (status === 'PAID' && paidAt === undefined) {
      updateData.paidAt = new Date();
    }

    const payment = await prisma.payment.update({
      where: { id: req.params.id },
      data: updateData,
    });

    res.json({ payment });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
