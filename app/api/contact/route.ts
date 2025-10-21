import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Ensure this route runs on the Node.js runtime (required for Nodemailer)
export const runtime = 'nodejs';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  // possible honeypot fields used by forms
  honeypot?: string;
  hp?: string;
  company?: string;
};

function isValidEmail(email: string): boolean {
  // Basic RFC2822-ish email validation
  const re = /^(?:[a-zA-Z0-9_'^&+/=?`{|}~!-]+(?:\.[a-zA-Z0-9_'^&+/=?`{|}~!-]+)*|"[^"]+")@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  return re.test(email.trim());
}

function sanitize(input: string): string {
  // Remove control characters and trim to avoid header injection
  return input.replace(/[\r\n\t\0]/g, ' ').trim();
}

export async function POST(request: Request) {
    let data: ContactPayload;
    try {
        data = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const name = sanitize(String(data.name || ''));
    const email = sanitize(String(data.email || ''));
    const phone = data.phone ? sanitize(String(data.phone)) : '';
    const subject = data.subject ? sanitize(String(data.subject)) : 'New Contact Form Submission';
    const message = sanitize(String(data.message || ''));

    // Honeypot check (any of these fields being non-empty indicates a bot)
    if ((data.honeypot && data.honeypot.trim()) || (data.hp && data.hp.trim()) || (data.company && data.company.trim())) {
        // Pretend success to not tip off bots
        return NextResponse.json({ success: true }, { status: 200 });
    }

    // Required fields
    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing required fields', fields: { name: !name, email: !email, message: !message } }, { status: 400 });
    }
    if (!isValidEmail(email)) {
        return NextResponse.json({ error: 'Invalid email address' }, { status: 422 });
    }
    if (message.length > 5000) {
        return NextResponse.json({ error: 'Message too long' }, { status: 413 });
    }

    const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
    const SMTP_URL = process.env.SMTP_URL;
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const SMTP_SECURE = (process.env.SMTP_SECURE || '').toLowerCase() === 'true';
    const SMTP_FROM = process.env.SMTP_FROM || CONTACT_EMAIL;
    const SMTP_NAME = process.env.SMTP_NAME || 'Website Contact Form';

    if (!CONTACT_EMAIL) {
        return NextResponse.json({ error: 'Server is not configured: CONTACT_EMAIL missing' }, { status: 500 });
    }

    let transporter;
    try {
        if (SMTP_URL) {
            transporter = nodemailer.createTransport(SMTP_URL);
        } else if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS) {
            transporter = nodemailer.createTransport({
                host: SMTP_HOST,
                port: SMTP_PORT,
                secure: SMTP_SECURE,
                auth: { user: SMTP_USER, pass: SMTP_PASS },
            });
        } else {
            return NextResponse.json({ error: 'Server is not configured: SMTP settings missing' }, { status: 500 });
        }
    } catch (e) {
        return NextResponse.json({ error: 'Failed to initialize mail transport' }, { status: 500 });
    }

    const url = new URL(request.url);
    const site = url.origin;

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial,sans-serif;line-height:1.5;color:#111">
        <h2 style="margin:0 0 12px 0">New Contact Form Submission</h2>
        <p style="margin:0 0 16px 0;color:#444">You received a new message from your website contact form.</p>
        <table style="border-collapse:collapse;width:100%;max-width:640px">
          <tbody>
            <tr><td style="padding:6px 0;width:120px;color:#555">Name</td><td style="padding:6px 0">${name}</td></tr>
            <tr><td style="padding:6px 0;width:120px;color:#555">Email</td><td style="padding:6px 0">${email}</td></tr>
            ${phone ? `<tr><td style="padding:6px 0;width:120px;color:#555">Phone</td><td style="padding:6px 0">${phone}</td></tr>` : ''}
            <tr><td style="padding:6px 0;width:120px;color:#555">From</td><td style="padding:6px 0">${site}</td></tr>
          </tbody>
        </table>
        <hr style="margin:16px 0;border:none;border-top:1px solid #eee"/>
        <p style="margin:0 0 6px 0;color:#555">Subject</p>
        <p style="margin:0 0 16px 0"><strong>${subject}</strong></p>
        <p style="margin:0 0 6px 0;color:#555">Message</p>
        <div style="white-space:pre-wrap;border:1px solid #eee;padding:12px;border-radius:6px">${message}</div>
      </div>
    `;

    const text = `New Contact Form Submission\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      (phone ? `Phone: ${phone}\n` : '') +
      `From: ${site}\n\n` +
      `Subject: ${subject}\n\n` +
      `${message}\n`;

    try {
        await transporter.sendMail({
            from: SMTP_FROM ? `${SMTP_NAME} <${SMTP_FROM}>` : undefined,
            to: CONTACT_EMAIL,
            subject: subject || `New contact form submission — ${name}`,
            html,
            text,
            replyTo: email,
            headers: { 'X-Website-Origin': site },
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        // Do not leak detailed error information to the client
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}