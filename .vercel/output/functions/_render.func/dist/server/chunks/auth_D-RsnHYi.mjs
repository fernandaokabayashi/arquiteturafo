const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://www.foarquitetura.com.br", "SSR": true};
const COOKIE_NAME = "jadm";
const TTL_SECONDS = 60 * 60 * 8;
function env(name, required = true) {
  const v = Object.assign(__vite_import_meta_env__, { Path: process.env.Path })[name] ?? process.env?.[name];
  if (required && !v) throw new Error(`env ausente: ${name}`);
  return v ?? "";
}
function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
async function hmac(secret, payload) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return btoa(String.fromCharCode(...new Uint8Array(sig)));
}
async function checkCredentials(email, password) {
  const expectedEmail = env("ADMIN_EMAIL").trim().toLowerCase();
  const expectedPassword = env("ADMIN_PASSWORD");
  return timingSafeEqual(email.trim().toLowerCase(), expectedEmail) && timingSafeEqual(password, expectedPassword);
}
async function createSessionCookie() {
  const secret = env("SESSION_SECRET");
  const exp = Math.floor(Date.now() / 1e3) + TTL_SECONDS;
  const payload = `v1.${exp}`;
  const sig = await hmac(secret, payload);
  const value = `${payload}.${sig}`;
  return [
    `${COOKIE_NAME}=${value}`,
    "Path=/",
    "HttpOnly",
    "Secure",
    "SameSite=Strict",
    `Max-Age=${TTL_SECONDS}`
  ].join("; ");
}
function clearSessionCookie() {
  return [
    `${COOKIE_NAME}=`,
    "Path=/",
    "HttpOnly",
    "Secure",
    "SameSite=Strict",
    "Max-Age=0"
  ].join("; ");
}
async function isAuthenticated(request) {
  const cookie = request.headers.get("cookie") || "";
  const match = cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  if (!match) return false;
  const value = decodeURIComponent(match[1]);
  const lastDot = value.lastIndexOf(".");
  if (lastDot < 0) return false;
  const payload = value.slice(0, lastDot);
  const sig = value.slice(lastDot + 1);
  const expected = await hmac(env("SESSION_SECRET"), payload);
  if (!timingSafeEqual(sig, expected)) return false;
  const parts = payload.split(".");
  if (parts[0] !== "v1") return false;
  const exp = Number(parts[1]);
  if (!exp || exp < Math.floor(Date.now() / 1e3)) return false;
  return true;
}

export { createSessionCookie as a, clearSessionCookie as b, checkCredentials as c, isAuthenticated as i };
