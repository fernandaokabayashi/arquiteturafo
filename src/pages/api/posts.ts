import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../lib/auth';
import { listPosts } from '../../lib/store';

export const GET: APIRoute = async ({ request }) => {
  if (!(await isAuthenticated(request))) {
    return new Response(JSON.stringify({ error: 'nao autenticado' }), { status: 401 });
  }
  try {
    const posts = await listPosts();
    return new Response(JSON.stringify({ posts }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
};
