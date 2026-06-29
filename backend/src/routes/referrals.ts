import { Router } from 'express';
import { prisma } from '../prisma';
import { requireAuth, requireRole } from '../middleware/auth';

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
    
    res.json(referrals);
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
