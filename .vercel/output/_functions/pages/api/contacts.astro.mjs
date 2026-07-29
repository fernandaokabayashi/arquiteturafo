import { i as isAuthenticated } from '../../chunks/auth_D-RsnHYi.mjs';
import { g as getContacts, s as saveContacts } from '../../chunks/store_ezP81ter.mjs';
export { renderers } from '../../renderers.mjs';

const ALLOWED_KEYS = [
  "whatsapp_e164",
  "whatsapp_display",
  "whatsapp_msg",
  "email",
  "instagram_handle",
  "linkedin_url",
  "hero_image_url",
  "hero_image_url_mobile",
  "about_photo_url",
  "about_photo_url_mobile"
];
const URL_KEYS = /* @__PURE__ */ new Set([
  "linkedin_url",
  "hero_image_url",
  "hero_image_url_mobile",
  "about_photo_url",
  "about_photo_url_mobile"
]);
function sanitize(input) {
  const out = {};
  for (const k of ALLOWED_KEYS) {
    const v = input[k];
    let s = typeof v === "string" ? v.trim() : "";
    if (URL_KEYS.has(k) && s && !/^https?:\/\//i.test(s)) {
      s = "";
    }
    out[k] = s;
  }
  out.whatsapp_e164 = out.whatsapp_e164.replace(/\D/g, "");
  return out;
}
const GET = async ({ request }) => {
  if (!await isAuthenticated(request)) {
    return new Response(JSON.stringify({ error: "nao autenticado" }), { status: 401 });
  }
  try {
    const { data, sha } = await getContacts();
    return new Response(JSON.stringify({ contacts: data, sha }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
};
const PUT = async ({ request }) => {
  if (!await isAuthenticated(request)) {
    return new Response(JSON.stringify({ error: "nao autenticado" }), { status: 401 });
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "json invalido" }), { status: 400 });
  }
  if (!body.contacts || typeof body.contacts !== "object") {
    return new Response(JSON.stringify({ error: "contacts obrigatorio" }), { status: 400 });
  }
  const data = sanitize(body.contacts);
  try {
    const result = await saveContacts({ data, sha: body.sha });
    return new Response(JSON.stringify({ ok: true, sha: result.sha }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
