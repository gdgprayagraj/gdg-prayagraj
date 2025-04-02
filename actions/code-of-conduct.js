"use server";

import nodemailer from "nodemailer";
import connectToDB from "@/db";
import CodeOfConductSubmission from "@/db/models/code-of-conduct-submission";

// Admin email addresses
const ADMIN_EMAILS = process.env.ADMIN_EMAILS ? JSON.parse(process.env.ADMIN_EMAILS) : ["gdgprayag@gmail.com"];

// Configure nodemailer transporter
// Note: For production use, you should use a real SMTP service
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Helper function to send email
async function sendEmail(to, subject, html) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject,
      html,
      replyTo: process.env.REPLY_TO,
    });
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}

// Generate user confirmation email content
function getUserEmailContent(name) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Code of Conduct Confirmation</h2>
      <p>Dear ${name},</p>
      <p>Thank you for accepting the GDG Prayagraj Code of Conduct. We're excited to have you as part of our community!</p>
      
      <h3>Code of Conduct Summary:</h3>
      <ul>
        <li><strong>Core Values:</strong> Commitment, Collaboration, Respect, Honesty and Integrity</li>
        <li><strong>Decision-making:</strong> Transparent and community-focused</li>
        <li><strong>Unacceptable Behavior:</strong> Harassment, disrespect, or immoral activities will not be tolerated</li>
        <li><strong>Reporting:</strong> Any incidents can be reported to info2ankitkumarverma@gmail.com</li>
        <li><strong>Conflicts of Interest:</strong> All potential conflicts should be disclosed</li>
        <li><strong>Violation:</strong> May result in removal from the community</li>
      </ul>
      
      <p>The full Code of Conduct can be found on our website. For any questions or concerns, please feel free to contact us.</p>
      
      <p>Best regards,<br>GDG Prayagraj Team</p>
    </div>
  `;
}

// Generate admin notification email content
function getAdminEmailContent(name, email) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>New Code of Conduct Acceptance</h2>
      <p>A new user has accepted the GDG Prayagraj Code of Conduct:</p>
      
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
      </ul>
      
      <p>This is an automated notification.</p>
    </div>
  `;
}

// Save form submission to MongoDB
async function saveToDatabase(name, email) {
  try {
    // Connect to the database
    await connectToDB();

    // Insert the document
    const result = new CodeOfConductSubmission({
      name,
      email,
      acceptedAt: new Date(),
      createdAt: new Date(),
    });

    // Save the document to the database
    await result.save();

    return { success: true, id: result._id };
  } catch (error) {
    console.error("Error saving to database:", error);
    return { success: false, error: error.message };
  }
}

// Main server action to handle form submission
export async function submitCodeOfConduct(formData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const acceptedTerms = formData.get("acceptTerms") === "on";

    // Validate form data
    if (!name || !email || !acceptedTerms) {
      return {
        success: false,
        error: "Please fill out all fields and accept the terms.",
      };
    }

    // Save to MongoDB database
    const dbResult = await saveToDatabase(name, email);
    if (!dbResult.success) {
      console.error("Failed to save to database:", dbResult.error);
      // Continue with the process even if DB save fails - we'll log but not block the submission
    }

    // Send confirmation email to user
    const userEmailResult = await sendEmail(
      email,
      "GDG Prayagraj Code of Conduct Confirmation",
      getUserEmailContent(name),
    );

    // Send notifications to all admin emails
    const adminNotifications = await Promise.all(
      ADMIN_EMAILS.map((adminEmail) =>
        sendEmail(adminEmail, "New Code of Conduct Acceptance", getAdminEmailContent(name, email)),
      ),
    );

    // Check if any admin notification failed
    const anyAdminEmailFailed = adminNotifications.some((result) => !result.success);

    return {
      success: userEmailResult.success && !anyAdminEmailFailed,
      error: userEmailResult.success
        ? anyAdminEmailFailed
          ? "Failed to notify all administrators"
          : null
        : userEmailResult.error,
      dbSuccess: dbResult.success,
    };
  } catch (error) {
    console.error("Error in submitCodeOfConduct:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}

/**
 * Fetches all users who have signed up
 * @returns {Promise<Array>} Array of user objects
 */
export async function getUsers() {
  try {
    await connectToDB();
    // Fetch users sorted by most recent first
    const users = await CodeOfConductSubmission.find({})
      .sort({ createdAt: -1 })
      .select("_id name email acceptedAt");

    return { success: true, data: users };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      success: false,
      error: "Failed to fetch users. Please try again later.",
    };
  }
}
