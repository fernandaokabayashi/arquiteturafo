const __vite_import_meta_env__$1 = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://www.foarquitetura.com.br", "SSR": true};
const API = "https://api.github.com";
function env(name, required = true) {
  const v = Object.assign(__vite_import_meta_env__$1, { Path: process.env.Path })[name] ?? process.env?.[name];
  if (required && !v) throw new Error(`env ausente: ${name}`);
  return v ?? "";
}
function cfg() {
  return {
    token: env("GITHUB_TOKEN"),
    owner: env("GITHUB_OWNER"),
    repo: env("GITHUB_REPO"),
    branch: env("GITHUB_BRANCH", false) || "main",
    path: env("GITHUB_PATH")
  };
}
function headers(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json"
  };
}
function blogPath(slug) {
  const { path } = cfg();
  return `${path}/site/src/content/blog/${slug}.md`;
}
function blogDir() {
  const { path } = cfg();
  return `${path}/site/src/content/blog`;
}
function contactsPath() {
  const { path } = cfg();
  return `${path}/site/src/data/contacts.json`;
}
async function getFile(filePath) {
  const { token, owner, repo, branch } = cfg();
  const url = `${API}/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`;
  const res = await fetch(url, { headers: headers(token) });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`getFile: ${res.status} ${await res.text()}`);
  const json = await res.json();
  if (json.encoding !== "base64") throw new Error(`encoding inesperado: ${json.encoding}`);
  const raw = atob(json.content.replace(/\n/g, ""));
  const bytes = Uint8Array.from(raw, (c) => c.charCodeAt(0));
  const decoded = new TextDecoder("utf-8").decode(bytes);
  return { content: decoded, sha: json.sha };
}
async function saveFile(opts) {
  const { token, owner, repo, branch } = cfg();
  const url = `${API}/repos/${owner}/${repo}/contents/${opts.filePath}`;
  const encoded = btoa(unescape(encodeURIComponent(opts.content)));
  const body = {
    message: opts.message,
    content: encoded,
    branch
  };
  if (opts.sha) body.sha = opts.sha;
  const res = await fetch(url, {
    method: "PUT",
    headers: headers(token),
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(`saveFile: ${res.status} ${await res.text()}`);
  const json = await res.json();
  return { sha: json.content.sha };
}
async function getContacts$1() {
  const file = await getFile(contactsPath());
  if (!file) return { data: {}, sha: null };
  try {
    return { data: JSON.parse(file.content), sha: file.sha };
  } catch {
    return { data: {}, sha: file.sha };
  }
}
async function saveContacts$1(opts) {
  return saveFile({
    filePath: contactsPath(),
    content: JSON.stringify(opts.data, null, 2) + "\n",
    message: "chore(contacts): atualizar canais de contato",
    sha: opts.sha
  });
}
async function listPosts$1() {
  const { token, owner, repo, branch } = cfg();
  const url = `${API}/repos/${owner}/${repo}/contents/${blogDir()}?ref=${branch}`;
  const res = await fetch(url, { headers: headers(token) });
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`listPosts: ${res.status} ${await res.text()}`);
  const arr = await res.json();
  return arr.filter((it) => it.type === "file" && it.name.endsWith(".md")).map((it) => ({ slug: it.name.replace(/\.md$/, ""), sha: it.sha, size: it.size }));
}
async function getPost$1(slug) {
  const { token, owner, repo, branch } = cfg();
  const url = `${API}/repos/${owner}/${repo}/contents/${blogPath(slug)}?ref=${branch}`;
  const res = await fetch(url, { headers: headers(token) });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`getPost: ${res.status} ${await res.text()}`);
  const json = await res.json();
  if (json.encoding !== "base64") throw new Error(`encoding inesperado: ${json.encoding}`);
  const content = atob(json.content.replace(/\n/g, ""));
  const bytes = Uint8Array.from(content, (c) => c.charCodeAt(0));
  const decoded = new TextDecoder("utf-8").decode(bytes);
  return { content: decoded, sha: json.sha };
}
async function savePost$1(opts) {
  const { token, owner, repo, branch } = cfg();
  const url = `${API}/repos/${owner}/${repo}/contents/${blogPath(opts.slug)}`;
  const encoded = btoa(unescape(encodeURIComponent(opts.content)));
  const body = {
    message: opts.message,
    content: encoded,
    branch
  };
  if (opts.sha) body.sha = opts.sha;
  const res = await fetch(url, {
    method: "PUT",
    headers: headers(token),
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(`savePost: ${res.status} ${await res.text()}`);
  const json = await res.json();
  return { sha: json.content.sha };
}
async function deletePost$1(opts) {
  const { token, owner, repo, branch } = cfg();
  const url = `${API}/repos/${owner}/${repo}/contents/${blogPath(opts.slug)}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: headers(token),
    body: JSON.stringify({ message: opts.message, sha: opts.sha, branch })
  });
  if (!res.ok) throw new Error(`deletePost: ${res.status} ${await res.text()}`);
}

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://www.foarquitetura.com.br", "SSR": true};
const isDev = Object.assign(__vite_import_meta_env__, { NODE: process.env.NODE, NODE_ENV: process.env.NODE_ENV, Path: process.env.Path })?.DEV === true || process.env?.NODE_ENV === "development";
async function fsHelpers() {
  const fs = await import('node:fs/promises');
  const path = await import('node:path');
  const root = process.cwd();
  return {
    fs,
    blogDir: path.join(root, "src", "content", "blog"),
    contactsFile: path.join(root, "src", "data", "contacts.json"),
    blogPath: (slug) => path.join(root, "src", "content", "blog", `${slug}.md`),
    fakeSha: (s) => Buffer.from(s).toString("hex").slice(0, 40).padEnd(40, "0")
  };
}
function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = m[1];
  const get = (k) => {
    const re = new RegExp("^" + k + ":\\s*(.+)$", "m");
    const r = fm.match(re);
    if (!r) return void 0;
    let v = r[1].trim();
    if (v.startsWith('"') && v.endsWith('"') || v.startsWith("'") && v.endsWith("'")) {
      try {
        return JSON.parse(v);
      } catch {
        return v.slice(1, -1);
      }
    }
    return v;
  };
  const tagsBlock = fm.match(/tags:\s*\n((?:\s+-\s+.+\n?)+)/);
  const tags = tagsBlock ? tagsBlock[1].split("\n").map((l) => l.replace(/^\s*-\s+/, "").replace(/^"|"$/g, "").trim()).filter(Boolean) : void 0;
  return {
    title: get("title"),
    description: get("description"),
    pubDate: typeof get("pubDate") === "string" ? get("pubDate").slice(0, 10) : void 0,
    draft: get("draft") === "true",
    author: get("author"),
    tags
  };
}
async function listPosts() {
  if (isDev) {
    const { fs, blogDir } = await fsHelpers();
    try {
      const files = await fs.readdir(blogDir);
      const out = [];
      for (const f of files) {
        if (!f.endsWith(".md")) continue;
        const filePath = `${blogDir}/${f}`;
        const stat = await fs.stat(filePath);
        const content = await fs.readFile(filePath, "utf-8");
        const meta = parseFrontmatter(content);
        out.push({
          slug: f.replace(/\.md$/, ""),
          sha: `dev-${stat.mtimeMs}`,
          size: stat.size,
          ...meta
        });
      }
      return out;
    } catch {
      return [];
    }
  }
  const basicList = await listPosts$1();
  const enriched = await Promise.all(
    basicList.map(async (p) => {
      try {
        const file = await getPost$1(p.slug);
        if (!file) return p;
        return { ...p, ...parseFrontmatter(file.content) };
      } catch {
        return p;
      }
    })
  );
  return enriched;
}
async function getPost(slug) {
  if (isDev) {
    const { fs, blogPath, fakeSha } = await fsHelpers();
    try {
      const content = await fs.readFile(blogPath(slug), "utf-8");
      return { content, sha: fakeSha(slug + content.length) };
    } catch {
      return null;
    }
  }
  return getPost$1(slug);
}
async function savePost(opts) {
  if (isDev) {
    const { fs, blogPath, fakeSha } = await fsHelpers();
    await fs.mkdir(blogPath(opts.slug).replace(/\/[^/]+$/, ""), { recursive: true });
    await fs.writeFile(blogPath(opts.slug), opts.content, "utf-8");
    return { sha: fakeSha(opts.slug + opts.content.length) };
  }
  return savePost$1(opts);
}
async function deletePost(opts) {
  if (isDev) {
    const { fs, blogPath } = await fsHelpers();
    try {
      await fs.unlink(blogPath(opts.slug));
    } catch {
    }
    return;
  }
  await deletePost$1(opts);
}
async function getContacts() {
  if (isDev) {
    const { fs, contactsFile, fakeSha } = await fsHelpers();
    try {
      const raw = await fs.readFile(contactsFile, "utf-8");
      return { data: JSON.parse(raw), sha: fakeSha(raw) };
    } catch {
      return { data: {}, sha: null };
    }
  }
  return getContacts$1();
}
async function saveContacts(opts) {
  if (isDev) {
    const { fs, contactsFile, fakeSha } = await fsHelpers();
    const json = JSON.stringify(opts.data, null, 2) + "\n";
    await fs.writeFile(contactsFile, json, "utf-8");
    return { sha: fakeSha(json) };
  }
  return saveContacts$1(opts);
}

export { getPost as a, savePost as b, deletePost as d, getContacts as g, listPosts as l, saveContacts as s };
