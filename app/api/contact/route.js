import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { email, service, name, phone, message, preferredContact } = await request.json();

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'zamentorship@gmail.com',
      subject: `New Appointment Inquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>preferred Contact Method:</strong> ${preferredContact}</p>

      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}