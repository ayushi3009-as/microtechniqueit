import { Router } from 'express';
import { prisma } from '../prisma';
import { requireAuth, requireRole } from '../middleware/auth';
import { hashPassword } from '../auth';

const router = Router();

router.use(requireAuth, requireRole(['SUPER_ADMIN']));

// GET all users
router.get('/users', async (req, res) => {
  try {
    const { role } = req.query;
    const where = role ? { role: role as any } : {};

    const users = await prisma.user.findMany({
      where,
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        companyName: true,
        gstNumber: true,
        employeeId: true,
        department: true,
        isActive: true,
        createdAt: true,
      },
    });

    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET single user
router.get('/users/:id', async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
      include: {
        assignedProjects: true,
        referrals: true,
        payments: true,
      },
    });

    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST create user
router.post('/users', async (req, res) => {
  try {
    const { email, password, firstName, lastName, role, phone, companyName, gstNumber, employeeId, department } = req.body;

    if (!email || !password || !firstName || !lastName || !role) {
      return res.status(400).json({ error: 'Missing required fields: email, password, firstName, lastName, role' });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role,
        phone,
        companyName,
        gstNumber,
        employeeId,
        department,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        companyName: true,
        gstNumber: true,
        employeeId: true,
        department: true,
        isActive: true,
        createdAt: true,
      },
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PATCH update user
router.patch('/users/:id', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, role, companyName, gstNumber, employeeId, department, isActive } = req.body;

    const updateData: any = {};
    if (firstName !== undefined) updateData.firstName = firstName;
    if (lastName !== undefined) updateData.lastName = lastName;
    if (email !== undefined) updateData.email = email;
    if (phone !== undefined) updateData.phone = phone;
    if (role !== undefined) updateData.role = role;
    if (companyName !== undefined) updateData.companyName = companyName;
    if (gstNumber !== undefined) updateData.gstNumber = gstNumber;
    if (employeeId !== undefined) updateData.employeeId = employeeId;
    if (department !== undefined) updateData.department = department;
    if (isActive !== undefined) updateData.isActive = isActive;

    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: updateData,
    });

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET admin stats
router.get('/stats', async (req, res) => {
  try {
    const [totalUsers, activeProjects, totalReferrals, revenueResult] = await Promise.all([
      prisma.user.count(),
      prisma.project.count({ where: { status: 'IN_PROGRESS' } }),
      prisma.referral.count(),
      prisma.project.aggregate({ _sum: { totalAmount: true } }),
    ]);

    const totalRevenue = revenueResult._sum.totalAmount || 0;

    res.json({
      stats: {
        totalUsers,
        activeProjects,
        totalReferrals,
        totalRevenue,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
