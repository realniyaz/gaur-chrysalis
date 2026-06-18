// src/app/api/enquiry/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your protected background API token
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, context } = body;

    // 1. Core Validation Guard Checks
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Contact Number fields are required." },
        { status: 400 }
      );
    }

    // 2. Format a Premium Real Estate Lead Email HTML Layout
    const emailHtmlHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background-color: #261a0f; padding: 24px; text-align: center; border-bottom: 2px solid #dfc7a1;">
          <h2 style="color: #dfc7a1; margin: 0; text-transform: uppercase; tracking-spacing: 2px; font-size: 20px;">RealtyFM Lead Notification</h2>
          <p style="color: #ffffff; margin: 4px 0 0 0; font-size: 12px; font-weight: bold; opacity: 0.8;">Project Source: Gaur Chrysalis Portal</p>
        </div>
        
        <div style="padding: 24px; bg-color: #ffffff;">
          <h3 style="color: #1c1c1c; margin-top: 0; border-bottom: 1px solid #f0f0f0; padding-bottom: 8px;">Prospect Details:</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; font-weight: bold; width: 30%;">Full Name:</td>
              <td style="padding: 10px 0; color: #111; font-size: 14px; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; font-weight: bold;">Phone Number:</td>
              <td style="padding: 10px 0; color: #111; font-size: 14px; font-weight: bold;">
                <a href="tel:${phone}" style="color: #4a3621; text-decoration: underline;">+91 ${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; font-weight: bold;">Email Address:</td>
              <td style="padding: 10px 0; color: #111; font-size: 14px;">${email || "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; font-weight: bold;">Form Context:</td>
              <td style="padding: 10px 0; color: #b45309; font-size: 12px; font-weight: bold; text-transform: uppercase;">
                ✨ ${context || "General / Main Hero Form"}
              </td>
            </tr>
          </table>

          <h3 style="color: #1c1c1c; border-bottom: 1px solid #f0f0f0; padding-bottom: 8px; margin-top: 24px;">User Message:</h3>
          <div style="background-color: #f9f9f9; padding: 16px; border-radius: 8px; border-left: 4px solid #dfc7a1; color: #444; font-size: 13px; line-height: 1.6;">
            ${message || "No additional message parameters added by user."}
          </div>
        </div>

        <div style="background-color: #fafafa; padding: 16px; text-align: center; border-top: 1px solid #eaeaea; color: #888; font-size: 11px;">
          This tracking alert was routed autonomously on behalf of your Next.js application stack.
        </div>
      </div>
    `;

    // 3. Dispatch the Email with Resend API Configuration
    // NOTE: If you haven't verified a custom domain on your Resend dashboard yet,
    // you MUST use 'onboarding@resend.dev' as the "from" address to test initially.
    await resend.emails.send({
      from: "Gaur Lead Portal <onboarding@resend.dev>",
      to: ["realtyfmleads@gmail.com"],
      subject: `🚨 New Lead: ${name} (${context || "Gaur Chrysalis Enquiry"})`,
      html: emailHtmlHtml,
    });

    return NextResponse.json({ success: true, message: "Lead dispatched safely." }, { status: 200 });
  } catch (error: any) {
    console.error("Resend Processing Error Intercepted:", error);
    return NextResponse.json(
      { error: "Internal server compilation error." },
      { status: 500 }
    );
  }
}