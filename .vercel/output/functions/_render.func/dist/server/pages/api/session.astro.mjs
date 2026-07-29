import { i as isAuthenticated } from '../../chunks/auth_D-RsnHYi.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ request }) => {
  const ok = await isAuthenticated(request);
  return new Response(JSON.stringify({ authenticated: ok }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
