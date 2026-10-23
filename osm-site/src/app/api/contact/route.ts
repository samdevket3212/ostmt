import { NextResponse } from 'next/server';
import { parseInquiry } from '@/lib/validation';

/*
 * Project inquiry endpoint.
 * Delivery uses Resend (https://resend.com) when these environment variables are set:
 *   RESEND_API_KEY      server-only API key (never exposed to the browser)
 *   CONTACT_TO_EMAIL    the verified inbox that receives inquiries
 *   CONTACT_FROM_EMAIL  a sender on a domain verified in Resend, e.g. "One Stop Media Website <hello@yourdomain.com>"
 * Without them the endpoint answers 503 and the form tells the visitor nothing was sent.
 */

const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = parseInquiry(body);
  if (!parsed.ok) return NextResponse.json({ error: 'invalid', message: parsed.message }, { status: 400 });
  const d = parsed.data;

  // Honeypot: bots fill the hidden field. Pretend success so they don't retry.
  if (d.website) return NextResponse.json({ ok: true });

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) return NextResponse.json({ error: 'rate_limited', message: 'Too many inquiries. Please try again later.' }, { status: 429 });

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    return NextResponse.json({ error: 'not_configured', message: 'Inquiry delivery is not configured.' }, { status: 503 });
  }

  const rows: [string, string][] = [
    ['Name', d.name],
    ['Email', d.email],
    ['Phone', d.phone || '(not given)'],
    ['Company', d.company || '(not given)'],
    ['Services', d.services.join(', ') || '(not given)'],
    ['Budget', d.budget || '(not given)'],
    ['Timeline', d.timeline || '(not given)'],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\n${d.message}`;
  const html = `<table>${rows.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${esc(v)}</td></tr>`).join('')}</table><p style="white-space:pre-wrap">${esc(d.message)}</p>`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: CONTACT_FROM_EMAIL, to: [CONTACT_TO_EMAIL], reply_to: d.email, subject: `New project inquiry from ${d.name}`, text, html }),
    });
    if (!res.ok) {
      console.error('Inquiry delivery failed', res.status, await res.text().catch(() => ''));
      return NextResponse.json({ error: 'delivery_failed' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Inquiry delivery error', err);
    return NextResponse.json({ error: 'delivery_failed' }, { status: 502 });
  }
}
