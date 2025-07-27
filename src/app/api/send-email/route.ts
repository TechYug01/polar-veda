import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, message } = body;

  try {
    const data = await resend.emails.send({
      from: "PolarVeda <onboarding@resend.dev>",
      to: "education@polarveda.co.in",
      subject: `New Contact Message from ${name}`,
      replyTo: email,
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Phone:</strong> ${phone}<br/>
        <strong>Message:</strong><br/>${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
