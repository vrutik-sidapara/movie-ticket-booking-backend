const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendVerificationEmail = async (toEmail, token) => {
  const verifyLink = `${process.env.BACKEND_URL}/api/auth/verify?token=${token}`;

  await resend.emails.send({
    from: "CineBook <onboarding@resend.dev>",
    to: toEmail,
    subject: "Verify your CineBook account",
    html: `
      <h2>Welcome to CineBook!</h2>
      <p>Click the link below to verify your email address:</p>
      <a href="${verifyLink}" style="background:#e50914;color:#fff;padding:10px 20px;text-decoration:none;border-radius:5px;">Verify Email</a>
      <p>This link will expire in 24 hours.</p>
    `,
  });
};