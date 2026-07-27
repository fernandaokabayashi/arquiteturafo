/**
 * Cliente mínimo para a REST API do GitHub.
 * Lê/escreve arquivos no caminho `${GITHUB_PATH}/src/content/blog/` do repositório monorepo.
 *
 * Variáveis de ambiente esperadas:
 * - GITHUB_TOKEN  : Personal Access Token (fine-grained) com permissão Contents: Read & write
 * - GITHUB_OWNER  : usuário/org dona do repositório (ex: infra-construmoove)
 * - GITHUB_REPO   : nome do repositório monorepo (ex: alunas-pri-nunes-sites)
 * - GITHUB_BRANCH : branch alvo (default: main)
 * - GITHUB_PATH   : pasta da aluna dentro do monorepo (ex: jessica-abreu (slug da aluna))
 */

const API = 'https://api.github.com';

function env(name: string, required = true): string {
  const v = (import.meta.env[name] ?? process.env?.[name]) as string | undefined;
  if (required && !v) throw new Error(`env ausente: ${name}`);
  return v ?? '';
}

function cfg() {
  return {
    token: env('GITHUB_TOKEN'),
    owner: env('GITHUB_OWNER'),
    repo: env('GITHUB_REPO'),
    branch: env('GITHUB_BRANCH', false) || 'main',
    path: env('GITHUB_PATH'),
  };
}

function headers(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type': 'application/json',
  };
}

function blogPath(slug: string): string {
  const { path } = cfg();
  return `${path}/site/src/content/blog/${slug}.md`;
}

function blogDir(): string {
  const { path } = cfg();
  return `${path}/site/src/content/blog`;
}

function contactsPath(): string {
  const { path } = cfg();
  return `${path}/site/src/data/contacts.json`;
}

export async function getFile(filePath: string): Promise<{ content: string; sha: string } | null> {
  const { token, owner, repo, branch } = cfg();
  const url = `${API}/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`;
  const res = await fetch(url, { headers: headers(token) });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`getFile: ${res.status} ${await res.text()}`);
  const json = (await res.json()) as { content: string; encoding: string; sha: string };
  if (json.encoding !== 'base64') throw new Error(`encoding inesperado: ${json.encoding}`);
  const raw = atob(json.content.replace(/\n/g, ''));
  const bytes = Uint8Array.from(raw, (c) => c.charCodeAt(0));
  const decoded = new TextDecoder('utf-8').decode(bytes);
  return { content: decoded, sha: json.sha };
}

export async function saveFile(opts: {
  filePath: string;
  content: string;
  message: string;
  sha?: string;
}): Promise<{ sha: string }> {
  const { token, owner, repo, branch } = cfg();
  const url = `${API}/repos/${owner}/${repo}/contents/${opts.filePath}`;
  const encoded = btoa(unescape(encodeURIComponent(opts.content)));
  const body: Record<string, unknown> = {
    message: opts.message,
    content: encoded,
    branch,
  };
  if (opts.sha) body.sha = opts.sha;
  const res = await fetch(url, {
    method: 'PUT',
    headers: headers(token),
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`saveFile: ${res.status} ${await res.text()}`);
  const json = (await res.json()) as { content: { sha: string } };
  return { sha: json.content.sha };
}

export async function getContacts(): Promise<{ data: Record<string, string>; sha: string | null }> {
  const file = await getFile(contactsPath());
  if (!file) return { data: {}, sha: null };
  try {
    return { data: JSON.parse(file.content) as Record<string, string>, sha: file.sha };
  } catch {
    return { data: {}, sha: file.sha };
  }
}

export async function saveContacts(opts: {
  data: Record<string, string>;
  sha?: string;
}): Promise<{ sha: string }> {
  return saveFile({
    filePath: contactsPath(),
    content: JSON.stringify(opts.data, null, 2) + '\n',
    message: 'chore(contacts): atualizar canais de contato',
    sha: opts.sha,
  });
}

export async function listPosts(): Promise<Array<{ slug: string; sha: string; size: number }>> {
  const { token, owner, repo, branch } = cfg();
  const url = `${API}/repos/${owner}/${repo}/contents/${blogDir()}?ref=${branch}`;
  const res = await fetch(url, { headers: headers(token) });
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`listPosts: ${res.status} ${await res.text()}`);
  const arr = (await res.json()) as Array<{ name: string; sha: string; size: number; type: string }>;
  return arr
    .filter((it) => it.type === 'file' && it.name.endsWith('.md'))
    .map((it) => ({ slug: it.name.replace(/\.md$/, ''), sha: it.sha, size: it.size }));
}

export async function getPost(slug: string): Promise<{ content: string; sha: string } | null> {
  const { token, owner, repo, branch } = cfg();
  const url = `${API}/repos/${owner}/${repo}/contents/${blogPath(slug)}?ref=${branch}`;
  const res = await fetch(url, { headers: headers(token) });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`getPost: ${res.status} ${await res.text()}`);
  const json = (await res.json()) as { content: string; encoding: string; sha: string };
  if (json.encoding !== 'base64') throw new Error(`encoding inesperado: ${json.encoding}`);
  const content = atob(json.content.replace(/\n/g, ''));
  // decodificar UTF-8 corretamente
  const bytes = Uint8Array.from(content, (c) => c.charCodeAt(0));
  const decoded = new TextDecoder('utf-8').decode(bytes);
  return { content: decoded, sha: json.sha };
}

export async function savePost(opts: {
  slug: string;
  content: string;
  message: string;
  sha?: string;
}): Promise<{ sha: string }> {
  const { token, owner, repo, branch } = cfg();
  const url = `${API}/repos/${owner}/${repo}/contents/${blogPath(opts.slug)}`;
  const encoded = btoa(unescape(encodeURIComponent(opts.content)));
  const body: Record<string, unknown> = {
    message: opts.message,
    content: encoded,
    branch,
  };
  if (opts.sha) body.sha = opts.sha;
  const res = await fetch(url, {
    method: 'PUT',
    headers: headers(token),
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`savePost: ${res.status} ${await res.text()}`);
  const json = (await res.json()) as { content: { sha: string } };
  return { sha: json.content.sha };
}

export async function deletePost(opts: {
  slug: string;
  sha: string;
  message: string;
}): Promise<void> {
  const { token, owner, repo, branch } = cfg();
  const url = `${API}/repos/${owner}/${repo}/contents/${blogPath(opts.slug)}`;
  const res = await fetch(url, {
    method: 'DELETE',
    headers: headers(token),
    body: JSON.stringify({ message: opts.message, sha: opts.sha, branch }),
  });
  if (!res.ok) throw new Error(`deletePost: ${res.status} ${await res.text()}`);
}
