import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../lib/auth';
import { getContacts, saveContacts } from '../../lib/store';

const ALLOWED_KEYS = [
  'whatsapp_e164',
  'whatsapp_display',
  'whatsapp_msg',
  'email',
  'instagram_handle',
  'linkedin_url',
  'hero_image_url',
  'hero_image_url_mobile',
  'about_photo_url',
  'about_photo_url_mobile',
] as const;

const URL_KEYS = new Set([
  'linkedin_url',
  'hero_image_url',
  'hero_image_url_mobile',
  'about_photo_url',
  'about_photo_url_mobile',
]);

function sanitize(input: Record<string, unknown>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const k of ALLOWED_KEYS) {
    const v = input[k];
    let s = typeof v === 'string' ? v.trim() : '';
    if (URL_KEYS.has(k) && s && !/^https?:\/\//i.test(s)) {
      // permite vazio, mas se preenchido exige http(s)://
      s = '';
    }
    out[k] = s;
  }
  out.whatsapp_e164 = out.whatsapp_e164.replace(/\D/g, '');
  return out;
}

export const GET: APIRoute = async ({ request }) => {
  if (!(await isAuthenticated(request))) {
    return new Response(JSON.stringify({ error: 'nao autenticado' }), { status: 401 });
  }
  try {
    const { data, sha } = await getContacts();
    return new Response(JSON.stringify({ contacts: data, sha }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
};

export const PUT: APIRoute = async ({ request }) => {
  if (!(await isAuthenticated(request))) {
    return new Response(JSON.stringify({ error: 'nao autenticado' }), { status: 401 });
  }
  let body: { contacts?: Record<string, unknown>; sha?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'json invalido' }), { status: 400 });
  }
  if (!body.contacts || typeof body.contacts !== 'object') {
    return new Response(JSON.stringify({ error: 'contacts obrigatorio' }), { status: 400 });
  }
  const data = sanitize(body.contacts);
  try {
    const result = await saveContacts({ data, sha: body.sha });
    return new Response(JSON.stringify({ ok: true, sha: result.sha }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
};
