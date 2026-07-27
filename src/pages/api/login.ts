import type { APIRoute } from 'astro';
import { checkCredentials, createSessionCookie } from '../../lib/auth';

export const POST: APIRoute = async ({ request }) => {
  let body: { email?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'json invalido' }), { status: 400 });
  }
  const email = String(body.email || '');
  const password = String(body.password || '');
  if (!email || !password) {
    return new Response(JSON.stringify({ error: 'email e senha obrigatorios' }), { status: 400 });
  }
  const ok = await checkCredentials(email, password);
  if (!ok) {
    return new Response(JSON.stringify({ error: 'credenciais invalidas' }), { status: 401 });
  }
  const cookie = await createSessionCookie();
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json', 'Set-Cookie': cookie },
  });
};

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ error: 'metodo nao permitido' }), { status: 405 });
};
