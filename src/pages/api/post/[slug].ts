import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../../lib/auth';
import { getPost, savePost, deletePost } from '../../../lib/store';

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
}

function buildMarkdown(meta: {
  title: string;
  description: string;
  pubDate: string;
  author?: string;
  tags?: string[];
  draft?: boolean;
  body: string;
}): string {
  const fm: string[] = ['---'];
  fm.push(`title: ${JSON.stringify(meta.title)}`);
  fm.push(`description: ${JSON.stringify(meta.description)}`);
  fm.push(`pubDate: ${meta.pubDate}`);
  if (meta.author) fm.push(`author: ${JSON.stringify(meta.author)}`);
  if (meta.tags && meta.tags.length) {
    fm.push('tags:');
    for (const t of meta.tags) fm.push(`  - ${JSON.stringify(t)}`);
  }
  fm.push(`draft: ${meta.draft ? 'true' : 'false'}`);
  fm.push('---');
  fm.push('');
  fm.push(meta.body || '');
  return fm.join('\n');
}

export const GET: APIRoute = async ({ request, params }) => {
  if (!(await isAuthenticated(request))) {
    return new Response(JSON.stringify({ error: 'nao autenticado' }), { status: 401 });
  }
  const slug = String(params.slug || '');
  try {
    const post = await getPost(slug);
    if (!post) return new Response(JSON.stringify({ error: 'nao encontrado' }), { status: 404 });
    return new Response(JSON.stringify(post), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
};

export const PUT: APIRoute = async ({ request, params }) => {
  if (!(await isAuthenticated(request))) {
    return new Response(JSON.stringify({ error: 'nao autenticado' }), { status: 401 });
  }
  let body: {
    title?: string;
    description?: string;
    pubDate?: string;
    author?: string;
    tags?: string[];
    draft?: boolean;
    body?: string;
    sha?: string;
    rename?: string;
  };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'json invalido' }), { status: 400 });
  }
  const currentSlug = String(params.slug || '');
  const desiredSlug = body.rename ? slugify(body.rename) : currentSlug;
  if (!body.title || !body.description || !body.pubDate) {
    return new Response(
      JSON.stringify({ error: 'title, description e pubDate obrigatorios' }),
      { status: 400 },
    );
  }
  const md = buildMarkdown({
    title: body.title,
    description: body.description,
    pubDate: body.pubDate,
    author: body.author,
    tags: body.tags,
    draft: body.draft,
    body: body.body || '',
  });
  try {
    if (desiredSlug !== currentSlug) {
      // criar novo + apagar antigo
      await savePost({
        slug: desiredSlug,
        content: md,
        message: `feat(blog): renomear "${currentSlug}" -> "${desiredSlug}"`,
      });
      if (body.sha) {
        await deletePost({
          slug: currentSlug,
          sha: body.sha,
          message: `chore(blog): remover slug antigo "${currentSlug}"`,
        });
      }
      return new Response(JSON.stringify({ ok: true, slug: desiredSlug }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const result = await savePost({
      slug: currentSlug,
      content: md,
      message: `feat(blog): atualizar "${currentSlug}"`,
      sha: body.sha,
    });
    return new Response(JSON.stringify({ ok: true, slug: currentSlug, sha: result.sha }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
};

export const POST: APIRoute = async ({ request, params }) => {
  // POST cria novo (slug vem como param, ou geramos do título)
  if (!(await isAuthenticated(request))) {
    return new Response(JSON.stringify({ error: 'nao autenticado' }), { status: 401 });
  }
  let body: {
    title?: string;
    description?: string;
    pubDate?: string;
    author?: string;
    tags?: string[];
    draft?: boolean;
    body?: string;
  };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'json invalido' }), { status: 400 });
  }
  const desiredSlug = slugify(String(params.slug || body.title || ''));
  if (!desiredSlug || !body.title || !body.description || !body.pubDate) {
    return new Response(
      JSON.stringify({ error: 'slug, title, description e pubDate obrigatorios' }),
      { status: 400 },
    );
  }
  const md = buildMarkdown({
    title: body.title,
    description: body.description,
    pubDate: body.pubDate,
    author: body.author,
    tags: body.tags,
    draft: body.draft,
    body: body.body || '',
  });
  try {
    const result = await savePost({
      slug: desiredSlug,
      content: md,
      message: `feat(blog): criar post "${desiredSlug}"`,
    });
    return new Response(JSON.stringify({ ok: true, slug: desiredSlug, sha: result.sha }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
};

export const DELETE: APIRoute = async ({ request, params }) => {
  if (!(await isAuthenticated(request))) {
    return new Response(JSON.stringify({ error: 'nao autenticado' }), { status: 401 });
  }
  const slug = String(params.slug || '');
  let body: { sha?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'json invalido' }), { status: 400 });
  }
  if (!body.sha) {
    return new Response(JSON.stringify({ error: 'sha obrigatorio' }), { status: 400 });
  }
  try {
    await deletePost({
      slug,
      sha: body.sha,
      message: `chore(blog): remover post "${slug}"`,
    });
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
};
