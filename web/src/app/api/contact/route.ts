import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check for required environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing email configuration:", {
        hasGmailUser: !!process.env.GMAIL_USER,
        hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD,
      });
      return NextResponse.json(
        { error: "Email service is not properly configured" },
        { status: 503 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 503 }
      );
    }

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "steviebdesigns1@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact Form: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 14px; color: #6c757d;">
            <p style="margin: 0;">This message was sent from the Steviebdesigns portfolio contact form.</p>
            <p style="margin: 5px 0 0 0;">You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Contact Details:
        Name: ${name}
        Email: ${email}
        Date: ${new Date().toLocaleString()}
        
        Message:
        ${message}
        
        ---
        This message was sent from the Steviebdesigns portfolio contact form.
        You can reply directly to this email to respond to ${name}.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined,
    });
    return NextResponse.json(
      {
        error: "Failed to send email. Please try again or contact me directly.",
      },
      { status: 500 }
    );
  }
}
