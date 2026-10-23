export type InquiryInput = {
  name: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  budget: string;
  timeline: string;
  message: string;
  consent: boolean;
  website: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

/** Server-side validation for the contact endpoint. Returns cleaned data or an error message. */
export function parseInquiry(body: unknown): { ok: true; data: InquiryInput } | { ok: false; message: string } {
  if (!body || typeof body !== 'object') return { ok: false, message: 'Invalid request.' };
  const b = body as Record<string, unknown>;
  const data: InquiryInput = {
    name: str(b.name, 120),
    email: str(b.email, 200),
    phone: str(b.phone, 40),
    company: str(b.company, 160),
    services: Array.isArray(b.services) ? b.services.filter((s): s is string => typeof s === 'string').slice(0, 10).map((s) => s.slice(0, 60)) : [],
    budget: str(b.budget, 40),
    timeline: str(b.timeline, 40),
    message: str(b.message, 5000),
    consent: b.consent === true,
    website: str(b.website, 200),
  };
  if (!data.name) return { ok: false, message: 'Name is required.' };
  if (!EMAIL.test(data.email)) return { ok: false, message: 'A valid email address is required.' };
  if (data.message.length < 10) return { ok: false, message: 'Project description is required.' };
  if (!data.consent) return { ok: false, message: 'Consent is required.' };
  return { ok: true, data };
}
