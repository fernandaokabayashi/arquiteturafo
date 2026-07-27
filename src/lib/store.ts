/**
 * Store unificado para posts + contatos.
 *
 * Em DEV (astro dev local) → lê/escreve no filesystem direto, sem GitHub.
 * Em PROD (Vercel)         → lê/escreve via GitHub Contents API (commit gera rebuild).
 *
 * Permite testar /admin localmente sem precisar de GITHUB_TOKEN válido,
 * e funciona transparente em produção.
 */

import {
  listPosts as ghListPosts,
  getPost as ghGetPost,
  savePost as ghSavePost,
  deletePost as ghDeletePost,
  getContacts as ghGetContacts,
  saveContacts as ghSaveContacts,
} from './github';

const isDev = (import.meta.env?.DEV === true) || process.env?.NODE_ENV === 'development';

// helpers de filesystem (carregados só em dev)
async function fsHelpers() {
  const fs = await import('node:fs/promises');
  const path = await import('node:path');
  const root = process.cwd();
  return {
    fs,
    blogDir: path.join(root, 'src', 'content', 'blog'),
    contactsFile: path.join(root, 'src', 'data', 'contacts.json'),
    blogPath: (slug: string) => path.join(root, 'src', 'content', 'blog', `${slug}.md`),
    fakeSha: (s: string) => Buffer.from(s).toString('hex').slice(0, 40).padEnd(40, '0'),
  };
}

export interface PostMeta {
  slug: string;
  sha: string;
  size: number;
  title?: string;
  description?: string;
  pubDate?: string;
  draft?: boolean;
  author?: string;
  tags?: string[];
}

function parseFrontmatter(md: string): Partial<PostMeta> {
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = m[1];
  const get = (k: string) => {
    const re = new RegExp('^' + k + ':\\s*(.+)$', 'm');
    const r = fm.match(re);
    if (!r) return undefined;
    let v = r[1].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      try { return JSON.parse(v); } catch { return v.slice(1, -1); }
    }
    return v;
  };
  const tagsBlock = fm.match(/tags:\s*\n((?:\s+-\s+.+\n?)+)/);
  const tags = tagsBlock
    ? tagsBlock[1]
        .split('\n')
        .map((l) => l.replace(/^\s*-\s+/, '').replace(/^"|"$/g, '').trim())
        .filter(Boolean)
    : undefined;
  return {
    title: get('title') as string | undefined,
    description: get('description') as string | undefined,
    pubDate: typeof get('pubDate') === 'string' ? (get('pubDate') as string).slice(0, 10) : undefined,
    draft: get('draft') === 'true',
    author: get('author') as string | undefined,
    tags,
  };
}

export async function listPosts(): Promise<PostMeta[]> {
  if (isDev) {
    const { fs, blogDir } = await fsHelpers();
    try {
      const files = await fs.readdir(blogDir);
      const out: PostMeta[] = [];
      for (const f of files) {
        if (!f.endsWith('.md')) continue;
        const filePath = `${blogDir}/${f}`;
        const stat = await fs.stat(filePath);
        const content = await fs.readFile(filePath, 'utf-8');
        const meta = parseFrontmatter(content);
        out.push({
          slug: f.replace(/\.md$/, ''),
          sha: `dev-${stat.mtimeMs}`,
          size: stat.size,
          ...meta,
        });
      }
      return out;
    } catch {
      return [];
    }
  }
  // produção: GitHub Contents API + parse de cada arquivo
  const basicList = await ghListPosts();
  const enriched = await Promise.all(
    basicList.map(async (p) => {
      try {
        const file = await ghGetPost(p.slug);
        if (!file) return p;
        return { ...p, ...parseFrontmatter(file.content) };
      } catch {
        return p;
      }
    }),
  );
  return enriched;
}

export async function getPost(slug: string): Promise<{ content: string; sha: string } | null> {
  if (isDev) {
    const { fs, blogPath, fakeSha } = await fsHelpers();
    try {
      const content = await fs.readFile(blogPath(slug), 'utf-8');
      return { content, sha: fakeSha(slug + content.length) };
    } catch {
      return null;
    }
  }
  return ghGetPost(slug);
}

export async function savePost(opts: {
  slug: string;
  content: string;
  message: string;
  sha?: string;
}): Promise<{ sha: string }> {
  if (isDev) {
    const { fs, blogPath, fakeSha } = await fsHelpers();
    await fs.mkdir(blogPath(opts.slug).replace(/\/[^/]+$/, ''), { recursive: true });
    await fs.writeFile(blogPath(opts.slug), opts.content, 'utf-8');
    return { sha: fakeSha(opts.slug + opts.content.length) };
  }
  return ghSavePost(opts);
}

export async function deletePost(opts: {
  slug: string;
  sha: string;
  message: string;
}): Promise<void> {
  if (isDev) {
    const { fs, blogPath } = await fsHelpers();
    try {
      await fs.unlink(blogPath(opts.slug));
    } catch {
      // ignora se não existe
    }
    return;
  }
  await ghDeletePost(opts);
}

export async function getContacts(): Promise<{ data: Record<string, string>; sha: string | null }> {
  if (isDev) {
    const { fs, contactsFile, fakeSha } = await fsHelpers();
    try {
      const raw = await fs.readFile(contactsFile, 'utf-8');
      return { data: JSON.parse(raw) as Record<string, string>, sha: fakeSha(raw) };
    } catch {
      return { data: {}, sha: null };
    }
  }
  return ghGetContacts();
}

export async function saveContacts(opts: {
  data: Record<string, string>;
  sha?: string;
}): Promise<{ sha: string }> {
  if (isDev) {
    const { fs, contactsFile, fakeSha } = await fsHelpers();
    const json = JSON.stringify(opts.data, null, 2) + '\n';
    await fs.writeFile(contactsFile, json, 'utf-8');
    return { sha: fakeSha(json) };
  }
  return ghSaveContacts(opts);
}
