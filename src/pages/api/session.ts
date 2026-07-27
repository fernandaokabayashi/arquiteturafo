import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../lib/auth';

export const GET: APIRoute = async ({ request }) => {
  const ok = await isAuthenticated(request);
  return new Response(JSON.stringify({ authenticated: ok }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
