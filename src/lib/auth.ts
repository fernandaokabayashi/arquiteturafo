/**
 * Autenticação leve baseada em cookie HMAC-assinado (sem banco de dados).
 *
 * Variáveis de ambiente:
 * - ADMIN_EMAIL    : e-mail da aluna (login)
 * - ADMIN_PASSWORD : senha da aluna
 * - SESSION_SECRET : segredo HMAC para assinar o cookie (>=32 bytes)
 */

const COOKIE_NAME = 'jadm';
const TTL_SECONDS = 60 * 60 * 8; // 8h

function env(name: string, required = true): string {
  const v = (import.meta.env[name] ?? process.env?.[name]) as string | undefined;
  if (required && !v) throw new Error(`env ausente: ${name}`);
  return v ?? '';
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function hmac(secret: string, payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
  return btoa(String.fromCharCode(...new Uint8Array(sig)));
}

export async function checkCredentials(email: string, password: string): Promise<boolean> {
  const expectedEmail = env('ADMIN_EMAIL').trim().toLowerCase();
  const expectedPassword = env('ADMIN_PASSWORD');
  return (
    timingSafeEqual(email.trim().toLowerCase(), expectedEmail) &&
    timingSafeEqual(password, expectedPassword)
  );
}

export async function createSessionCookie(): Promise<string> {
  const secret = env('SESSION_SECRET');
  const exp = Math.floor(Date.now() / 1000) + TTL_SECONDS;
  const payload = `v1.${exp}`;
  const sig = await hmac(secret, payload);
  const value = `${payload}.${sig}`;
  return [
    `${COOKIE_NAME}=${value}`,
    'Path=/',
    'HttpOnly',
    'Secure',
    'SameSite=Strict',
    `Max-Age=${TTL_SECONDS}`,
  ].join('; ');
}

export function clearSessionCookie(): string {
  return [
    `${COOKIE_NAME}=`,
    'Path=/',
    'HttpOnly',
    'Secure',
    'SameSite=Strict',
    'Max-Age=0',
  ].join('; ');
}

export async function isAuthenticated(request: Request): Promise<boolean> {
  const cookie = request.headers.get('cookie') || '';
  const match = cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  if (!match) return false;
  const value = decodeURIComponent(match[1]);
  const lastDot = value.lastIndexOf('.');
  if (lastDot < 0) return false;
  const payload = value.slice(0, lastDot);
  const sig = value.slice(lastDot + 1);
  const expected = await hmac(env('SESSION_SECRET'), payload);
  if (!timingSafeEqual(sig, expected)) return false;
  const parts = payload.split('.');
  if (parts[0] !== 'v1') return false;
  const exp = Number(parts[1]);
  if (!exp || exp < Math.floor(Date.now() / 1000)) return false;
  return true;
}
