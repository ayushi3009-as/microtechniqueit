import { Router } from 'express';
import { prisma } from '../prisma';
import { hashPassword, comparePassword, signToken } from '../auth';
import { requireAuth } from '../middleware/auth';
import { sendOtpEmail } from '../utils/email';

const router = Router();

// Helper to generate 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      // Return success even if user doesn't exist for security reasons (don't leak emails)
      return res.json({ message: 'If that email exists, an OTP has been sent.' });
    }

    const otp = generateOTP();
    const expiry = new Date();
    expiry.setMinutes(expiry.getMinutes() + 15);

    await prisma.user.update({
      where: { id: user.id },
      data: { resetPasswordOtp: otp, resetPasswordOtpExpiry: expiry },
    });

    await sendOtpEmail(user.email, otp);
    res.json({ message: 'OTP sent to email.' });
  } catch (error: any) {
    console.error('Forgot password error:', error);
    res.status(500).json({ error: 'Failed to process request.' });
  }
});

router.post('/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ error: 'Email and OTP are required' });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.resetPasswordOtp !== otp || !user.resetPasswordOtpExpiry) {
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    if (user.resetPasswordOtpExpiry < new Date()) {
      return res.status(400).json({ error: 'OTP has expired' });
    }

    res.json({ message: 'OTP verified successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process request.' });
  }
});

router.post('/reset-password', async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    if (!email || !otp || !newPassword) return res.status(400).json({ error: 'All fields are required' });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.resetPasswordOtp !== otp || !user.resetPasswordOtpExpiry) {
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    if (user.resetPasswordOtpExpiry < new Date()) {
      return res.status(400).json({ error: 'OTP has expired' });
    }

    const hashedPassword = await hashPassword(newPassword);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetPasswordOtp: null,
        resetPasswordOtpExpiry: null,
      },
    });

    res.json({ message: 'Password has been reset successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process request.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.isActive) {
      return res.status(401).json({ error: 'Invalid credentials or inactive account' });
    }

    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName
    });

    res.json({ token, user: { id: user.id, email: user.email, role: user.role, firstName: user.firstName, lastName: user.lastName } });
  } catch (error: any) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName, role } = req.body;
    
    if (!email || !password || !firstName || !lastName || !role) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role
      }
    });

    const token = signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName
    });

    res.status(201).json({ token, user: { id: user.id, email: user.email, role: user.role, firstName: user.firstName, lastName: user.lastName } });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/me', requireAuth, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.userId },
      select: { id: true, email: true, firstName: true, lastName: true, role: true, isActive: true }
    });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
