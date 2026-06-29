import { Router } from 'express';
import { prisma } from '../prisma';
import { requireAuth } from '../middleware/auth';

const router = Router();

// GET all projects (admin/staff) or user's projects
router.get('/', requireAuth, async (req, res) => {
  try {
    const { role, userId } = req.user!;
    let projects;
    
    if (role === 'SUPER_ADMIN') {
      projects = await prisma.project.findMany({
        include: { assignedTo: true, payments: true }
      });
    } else {
      projects = await prisma.project.findMany({
        where: { assignedToId: userId },
        include: { payments: true }
      });
    }
    
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET single project
router.get('/:id', requireAuth, async (req, res) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: req.params.id as string },
      include: { assignedTo: true, payments: true, referral: true }
    });
    
    if (!project) return res.status(404).json({ error: 'Not found' });
    
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new project
router.post('/', requireAuth, async (req, res) => {
  try {
    if (req.user!.role !== 'SUPER_ADMIN') {
      return res.status(403).json({ error: 'Forbidden' });
    }
    
    const project = await prisma.project.create({
      data: req.body
    });
    
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
