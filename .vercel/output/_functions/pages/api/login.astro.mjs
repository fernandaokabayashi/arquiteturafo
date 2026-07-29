import { c as checkCredentials, a as createSessionCookie } from '../../chunks/auth_D-RsnHYi.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "json invalido" }), { status: 400 });
  }
  const email = String(body.email || "");
  const password = String(body.password || "");
  if (!email || !password) {
    return new Response(JSON.stringify({ error: "email e senha obrigatorios" }), { status: 400 });
  }
  const ok = await checkCredentials(email, password);
  if (!ok) {
    return new Response(JSON.stringify({ error: "credenciais invalidas" }), { status: 401 });
  }
  const cookie = await createSessionCookie();
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Set-Cookie": cookie }
  });
};
const GET = async () => {
  return new Response(JSON.stringify({ error: "metodo nao permitido" }), { status: 405 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
