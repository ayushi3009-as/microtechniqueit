import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendOtpEmail = async (to: string, otp: string) => {
  const mailOptions = {
    from: process.env.SMTP_FROM || 'noreply@microtechniqueit.com',
    to,
    subject: 'Password Reset OTP - MicrotechniqueIT',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
        <h2 style="color: #333;">Password Reset Request</h2>
        <p>You recently requested to reset your password for your MicrotechniqueIT account. Your One-Time Password (OTP) is:</p>
        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; border-radius: 5px; margin: 20px 0;">
          <h1 style="margin: 0; color: #007bff; letter-spacing: 5px;">${otp}</h1>
        </div>
        <p>This OTP is valid for 15 minutes. If you did not request a password reset, please ignore this email.</p>
        <br />
        <p>Best regards,<br/>The MicrotechniqueIT Team</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`OTP sent to ${to}`);
  } catch (error) {
    console.error('Error sending OTP email:', error);
    throw new Error('Failed to send email. Please check SMTP configuration.');
  }
};
