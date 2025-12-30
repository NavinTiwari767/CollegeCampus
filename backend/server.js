const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // या आपका email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Email route
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, service, contactMethod, message, otherService } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL, // जहाँ email receive करना चाहते हैं
      subject: `New Project Inquiry: ${service}`,
      html: `
        <h2>New Project Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service} ${otherService ? `- ${otherService}` : ''}</p>
        <p><strong>Preferred Contact:</strong> ${contactMethod}</p>
        <p><strong>Project Details:</strong></p>
        <p>${message}</p>
        <hr>
        <p>Sent from CollegiCampus Contact Form</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 