// src/app/api/enquiry/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

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

    // 2. Format & Sanitize Parameters for CRM
    const cleanedMobile = phone.replace(/\D/g, "").slice(-10);

    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    const submittedDate = `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${String(now.getFullYear()).slice(-2)}`;
    const submittedTime = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    // 3. PUSH LEAD TO LEADRAT CRM (Array Payload Format)
    try {
      await fetch("https://connect.leadrat.com/api/v1/integration/Website", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-Key": "YTBlMzgxODItZWU0NC00M2I1LThhNDQtZWVlOTg3M2I0ZmFl",
        },
        body: JSON.stringify([
          {
            name: name,
            mobile: cleanedMobile,
            email: email || "",
            countryCode: "91",
            project: "Gaur Chrysalis",
            property: "Apartment",
            propertyType: context || "Luxury Residences",
            notes: `Source Context: ${context || "General Enquiry"}. User Message: ${message || "N/A"}`,
            submittedDate: submittedDate,
            submittedTime: submittedTime,
            subsource: "Website Direct",
            leadStatus: "New",
          },
        ]),
      });
    } catch (crmError) {
      // Failsafe: Log CRM error so Resend email dispatch continues uninterrupted
      console.error("LeadRat CRM Integration Error:", crmError);
    }

    // 4. DISPATCH RESEND LEAD NOTIFICATION EMAIL
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing runtime server environment variable: RESEND_API_KEY");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const recipientEmail = process.env.LEAD_RECIPIENT_EMAIL || "realtyfmleads@gmail.com";

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background-color: #261a0f; padding: 24px; text-align: center; border-bottom: 2px solid #dfc7a1;">
          <h2 style="color: #dfc7a1; margin: 0; text-transform: uppercase; letter-spacing: 2px; font-size: 20px;">RealtyFM Lead Notification</h2>
          <p style="color: #ffffff; margin: 4px 0 0 0; font-size: 12px; font-weight: bold; opacity: 0.8;">Project Source: Gaur Chrysalis Portal</p>
        </div>
        
        <div style="padding: 24px; background-color: #ffffff;">
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
          This tracking alert was routed to LeadRat CRM and delivered to your inbox via Resend.
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Gaur Lead Portal <sales@gaursresidences.in>",
      to: [recipientEmail],
      subject: `🚨 New Lead: ${name} (${context || "Gaur Chrysalis Enquiry"})`,
      html: emailHtml,
    });

    return NextResponse.json(
      { success: true, message: "Lead dispatched safely to CRM and Email." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Lead Processing Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server compilation error." },
      { status: 500 }
    );
  }
}