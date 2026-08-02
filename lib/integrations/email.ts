// SendGrid Email Integration
import sgMail from '@sendgrid/mail';

// Initialize only when needed
const initSendGrid = () => {
  if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }
};

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  templateId?: string;
  dynamicTemplateData?: Record<string, any>;
}

export async function sendEmail(options: EmailOptions) {
  try {
    initSendGrid();
    const msg = {
      to: options.to,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@jhco.org.jo',
      subject: options.subject,
      html: options.html,
      ...(options.templateId && {
        templateId: options.templateId,
        dynamicTemplateData: options.dynamicTemplateData,
      }),
    };

    await sgMail.send(msg as any);
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: String(error) };
  }
}

export async function sendDonationConfirmation(
  email: string,
  donorName: string,
  amount: number,
  transactionId: string
) {
  const htmlContent = `
    <h2>Thank you for your donation, ${donorName}!</h2>
    <p>Amount: $${amount}</p>
    <p>Transaction ID: ${transactionId}</p>
    <p>Your support makes a difference in the lives of millions.</p>
  `;

  return sendEmail({
    to: email,
    subject: 'Donation Confirmation - JHCO',
    html: htmlContent,
  });
}

export async function sendVolunteerConfirmation(
  email: string,
  volunteerName: string,
  role: string
) {
  const htmlContent = `
    <h2>Welcome to JHCO, ${volunteerName}!</h2>
    <p>We're excited to have you join us as a ${role}.</p>
    <p>Next steps: We'll contact you within 48 hours with more details.</p>
  `;

  return sendEmail({
    to: email,
    subject: 'Volunteer Application Received - JHCO',
    html: htmlContent,
  });
}

export async function sendContactFormNotification(
  contactName: string,
  contactEmail: string,
  subject: string,
  message: string
) {
  // Send to admin
  const adminMsg = `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${contactName} (${contactEmail})</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  return sendEmail({
    to: process.env.SENDGRID_FROM_EMAIL || 'admin@jhco.org.jo',
    subject: `New Contact: ${subject}`,
    html: adminMsg,
  });
}
