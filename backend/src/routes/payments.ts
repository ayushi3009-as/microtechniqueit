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
        include: { paidTo: true, project: true }
      });
    } else {
      payments = await prisma.payment.findMany({
        where: { paidToId: userId },
        include: { project: true }
      });
    }
    
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new payment (admin only)
router.post('/', requireAuth, requireRole(['SUPER_ADMIN']), async (req, res) => {
  try {
    const payment = await prisma.payment.create({
      data: req.body
    });
    
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
