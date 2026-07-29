import { i as isAuthenticated } from '../../chunks/auth_D-RsnHYi.mjs';
import { l as listPosts } from '../../chunks/store_ezP81ter.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ request }) => {
  if (!await isAuthenticated(request)) {
    return new Response(JSON.stringify({ error: "nao autenticado" }), { status: 401 });
  }
  try {
    const posts = await listPosts();
    return new Response(JSON.stringify({ posts }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
