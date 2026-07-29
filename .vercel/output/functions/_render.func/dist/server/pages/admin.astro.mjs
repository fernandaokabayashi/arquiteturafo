import { c as createComponent, r as renderTemplate, a as renderHead } from '../chunks/astro/server_B4O8Bntd.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="pt-BR"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex, nofollow"><link rel="icon" type="image/svg+xml" href="/favicon.svg?v=fo-arquitetura"><title>Painel \xB7 F.O Arquitetura</title>', `</head> <body> <!-- Toast container --> <div id="toast-stack" class="toast-stack" aria-live="polite"></div> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VIEW LOGIN \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div id="view-login" class="login-wrap"> <div class="login-card"> <div class="login-mark">FO</div> <h1 style="margin-bottom: 4px;">Painel</h1> <p class="muted" style="margin-bottom: 28px;">F.O Arquitetura</p> <div id="login-error" class="login-error hidden"></div> <form id="form-login"> <div class="field"> <label class="label" for="email">E-mail</label> <input class="input" id="email" type="email" autocomplete="username" required> </div> <div class="field"> <label class="label" for="password">Senha</label> <div class="input-with-action"> <input class="input" id="password" type="password" autocomplete="current-password" required style="padding-right: 80px;"> <button type="button" class="input-action" id="btn-toggle-password" aria-label="Mostrar senha">Mostrar</button> </div> </div> <button class="btn btn-block" type="submit" id="btn-login" style="margin-top: 8px;">Entrar</button> </form> </div> </div> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TOPBAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div id="topbar" class="topbar hidden"> <div class="topbar-brand"> <div class="mark">FO</div> <div> <h1>Painel</h1> <span class="topbar-sub">F.O Arquitetura</span> </div> </div> <div class="tabs"> <button class="tab active" data-tab="posts">Posts</button> <button class="tab" data-tab="contacts">Contatos</button> <button class="tab" data-tab="images">Imagens</button> </div> <div class="topbar-actions"> <button class="btn btn-secondary" id="btn-logout">Sair</button> </div> </div> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VIEW POSTS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div id="view-list" class="hidden"> <div class="container"> <div class="section-head"> <div> <h2>Posts do blog</h2> <p class="muted">Cada post novo \xE9 uma p\xE1gina indexada pelo Google.</p> </div> <button class="btn btn-primary-strong" id="btn-new">+ Novo post</button> </div> <div id="stats-row" class="stats-row hidden"> <div class="stat-card"> <div class="stat-card-label">Total de posts</div> <div class="stat-card-value" id="stat-total">0</div> </div> <div class="stat-card"> <div class="stat-card-label">Publicados</div> <div class="stat-card-value accent" id="stat-live">0</div> </div> <div class="stat-card"> <div class="stat-card-label">Rascunhos</div> <div class="stat-card-value" id="stat-draft">0</div> </div> </div> <div id="list-loading" class="loading-state"> <div class="spinner"></div> <span>Carregando posts...</span> </div> <div id="list-empty" class="empty-state hidden"> <div class="empty-state-icon">\u270E</div> <h3>Nenhum post ainda</h3> <p>Comece publicando seu primeiro conte\xFAdo t\xE9cnico.</p> <button class="btn btn-primary-strong" id="btn-new-empty">Criar primeiro post</button> </div> <div id="post-list-card" class="post-list-card hidden"> <div class="post-list-card-head"> <span>Todos os posts</span> <span class="count" id="post-list-count">\u2014</span> </div> <div id="post-list" class="post-list"></div> </div> </div> </div> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VIEW CONTATOS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div id="view-contacts" class="hidden"> <div class="container"> <div class="section-head"> <div> <h2>Canais de contato</h2> <p class="muted">Quando voc\xEA atualiza aqui, o site reflete em ~30 segundos.</p> </div> </div> <div class="card"> <div id="contacts-loading" class="loading-state"> <div class="spinner"></div> <span>Carregando contatos...</span> </div> <div id="contacts-form" class="hidden"> <div class="form-group"> <div class="form-group-title">WhatsApp</div> <p class="form-group-desc">\xC9 o canal principal: o bot\xE3o "Falar com especialista" do site abre direto na sua conversa.</p> <div class="row"> <div class="field"> <label class="label" for="c-whatsapp">N\xFAmero (apenas d\xEDgitos com DDI)</label> <input class="input" id="c-whatsapp" type="text" placeholder="5521999999999" inputmode="numeric"> <p class="field-hint">Brasil: 55 + DDD + n\xFAmero, sem espa\xE7os ou par\xEAnteses.</p> </div> <div class="field"> <label class="label" for="c-whatsapp-display">Como aparece no site</label> <input class="input" id="c-whatsapp-display" type="text" placeholder="(21) 99999-9999"> <p class="field-hint">Formatado, do jeito que o cliente vai ler.</p> </div> </div> <div class="field"> <label class="label" for="c-whatsapp-msg">Mensagem inicial pr\xE9-escrita</label> <input class="input" id="c-whatsapp-msg" type="text" placeholder="Ol\xE1! Gostaria de saber mais..."> <p class="field-hint">Fica pr\xE9-preenchida na primeira mensagem do cliente.</p> </div> <div class="wa-preview" id="wa-preview"> <div class="wa-preview-mark">W</div> <div class="wa-preview-text empty" id="wa-preview-text">Preencha o n\xFAmero para ver o preview do bot\xE3o.</div> </div> </div> <div class="form-group"> <div class="form-group-title">E-mail</div> <p class="form-group-desc">Aparece no rodap\xE9 do site para envio de documenta\xE7\xE3o.</p> <div class="field"> <label class="label" for="c-email">E-mail profissional</label> <input class="input" id="c-email" type="email" placeholder="contato@dominio.com.br"> </div> </div> <div class="form-group"> <div class="form-group-title">Redes sociais</div> <p class="form-group-desc">Aparecem como links no rodap\xE9 do site.</p> <div class="row"> <div class="field"> <label class="label" for="c-instagram">Instagram</label> <input class="input" id="c-instagram" type="text" placeholder="seu.usuario"> <p class="field-hint">Sem o @ \u2014 s\xF3 o nome de usu\xE1rio.</p> </div> <div class="field"> <label class="label" for="c-linkedin">LinkedIn (URL)</label> <input class="input" id="c-linkedin" type="url" placeholder="https://www.linkedin.com/in/..."> <p class="field-hint">Cole a URL completa do seu perfil.</p> </div> </div> </div> <div class="btn-group" style="padding-top: 8px;"> <button class="btn btn-primary-strong" id="btn-save-contacts">Salvar contatos</button> </div> </div> </div> </div> </div> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VIEW IMAGENS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div id="view-images" class="hidden"> <div class="container"> <div class="section-head"> <div> <h2>Imagens do site</h2> <p class="muted">Cole URLs de imagens p\xFAblicas (Google Drive aberto, Imgur, link direto).</p> </div> </div> <div class="card"> <div id="images-loading" class="loading-state"> <div class="spinner"></div> <span>Carregando imagens...</span> </div> <div id="images-form" class="hidden"> <div class="form-group"> <div class="form-group-title">Imagem do topo (Hero)</div> <p class="form-group-desc">Aparece como fundo da primeira dobra do site, atr\xE1s do t\xEDtulo e do bot\xE3o.</p> <div class="row"> <div class="field"> <label class="label" for="i-hero-desktop">Desktop \xB7 imagem horizontal</label> <div class="input-clear-wrap"> <input class="input" id="i-hero-desktop" type="url" placeholder="https://..."> <button type="button" class="btn-clear" data-clear="i-hero-desktop">Remover</button> </div> <p class="field-hint">Propor\xE7\xE3o recomendada: 16:9 ou 21:9 (paisagem), 1920\xD71080+.</p> </div> <div class="field"> <label class="label" for="i-hero-mobile">Mobile \xB7 imagem vertical</label> <div class="input-clear-wrap"> <input class="input" id="i-hero-mobile" type="url" placeholder="https://... (opcional)"> <button type="button" class="btn-clear" data-clear="i-hero-mobile">Remover</button> </div> <p class="field-hint">Propor\xE7\xE3o recomendada: 9:16 (vertical). Vazio = usa do desktop.</p> </div> </div> <div class="image-row"> <div> <div class="image-meta">Preview Desktop</div> <div class="image-preview image-preview-wide" id="i-hero-desktop-preview">Sem imagem definida</div> </div> <div> <div class="image-meta">Preview Mobile</div> <div class="image-preview image-preview-tall" id="i-hero-mobile-preview">Sem imagem definida</div> </div> </div> </div> <div class="form-group"> <div class="form-group-title">Foto profissional</div> <p class="form-group-desc">Aparece na se\xE7\xE3o "Quem atende voc\xEA" do site.</p> <div class="row"> <div class="field"> <label class="label" for="i-about-desktop">Desktop \xB7 imagem vertical</label> <div class="input-clear-wrap"> <input class="input" id="i-about-desktop" type="url" placeholder="https://..."> <button type="button" class="btn-clear" data-clear="i-about-desktop">Remover</button> </div> <p class="field-hint">Propor\xE7\xE3o recomendada: 4:5 (retrato).</p> </div> <div class="field"> <label class="label" for="i-about-mobile">Mobile \xB7 imagem vertical</label> <div class="input-clear-wrap"> <input class="input" id="i-about-mobile" type="url" placeholder="https://... (opcional)"> <button type="button" class="btn-clear" data-clear="i-about-mobile">Remover</button> </div> <p class="field-hint">Pode ser igual \xE0 desktop ou variante 3:4. Vazio = usa do desktop.</p> </div> </div> <div class="image-row"> <div> <div class="image-meta">Preview Desktop</div> <div class="image-preview image-preview-tall" id="i-about-desktop-preview">Sem imagem definida</div> </div> <div> <div class="image-meta">Preview Mobile</div> <div class="image-preview image-preview-tall" id="i-about-mobile-preview">Sem imagem definida</div> </div> </div> </div> <div class="btn-group" style="padding-top: 8px;"> <button class="btn btn-primary-strong" id="btn-save-images">Salvar imagens</button> </div> </div> </div> </div> </div> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VIEW EDITOR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div id="view-editor" class="hidden"> <div class="topbar"> <div class="topbar-brand"> <button class="btn btn-secondary" id="btn-back" style="padding: 8px 14px;">\u2190 Voltar</button> <div> <h1 id="editor-title">Novo post</h1> <span class="topbar-sub" id="editor-dirty">\u2014</span> </div> </div> <div class="topbar-actions"> <button class="btn btn-danger hidden" id="btn-delete">Apagar</button> <button class="btn btn-primary-strong" id="btn-save">Publicar <span style="font-size: 11px; opacity: 0.7; margin-left: 4px;">\u2318S</span></button> </div> </div> <div class="container"> <div class="card"> <div class="form-group"> <div class="form-group-title">Identifica\xE7\xE3o do post</div> <p class="form-group-desc">Esses campos aparecem no Google e nos compartilhamentos.</p> <div class="field"> <label class="label label-required" for="post-title">T\xEDtulo</label> <input class="input" id="post-title" type="text" placeholder="Ex: Como funciona a vistoria de entrega de chaves" maxlength="120"> <span class="field-counter" id="counter-title">0 / 120</span> </div> <div class="field"> <label class="label label-required" for="post-description">Descri\xE7\xE3o</label> <textarea class="textarea" id="post-description" rows="3" style="min-height: 90px; font-family: inherit; font-size: 15px;" placeholder="Resumo curto que aparece no Google e no compartilhamento."></textarea> <span class="field-counter" id="counter-description">0 / 160 (alvo SEO 150-160)</span> </div> <div class="row"> <div class="field"> <label class="label label-required" for="post-date">Data de publica\xE7\xE3o</label> <input class="input" id="post-date" type="date"> </div> <div class="field"> <label class="label" for="post-author">Autor</label> <input class="input" id="post-author" type="text"> </div> </div> <div class="field"> <label class="label" for="post-tags">Tags</label> <input class="input" id="post-tags" type="text" placeholder="avalia\xE7\xE3o, vistoria, NBR 14.653"> <p class="field-hint">Separe por v\xEDrgula. Ajuda a organizar os posts.</p> </div> </div> <div class="form-group"> <div class="form-group-title">Conte\xFAdo</div> <p class="form-group-desc">Use a barra ou os atalhos. Suporta Markdown.</p> <div class="editor-toolbar"> <button type="button" class="toolbar-btn" data-md="**" data-md-end="**" title="Negrito (Ctrl/Cmd+B)"> <strong>B</strong><span class="toolbar-btn-shortcut">\u2318B</span> </button> <button type="button" class="toolbar-btn" data-md="*" data-md-end="*" title="It\xE1lico (Ctrl/Cmd+I)"> <em>I</em><span class="toolbar-btn-shortcut">\u2318I</span> </button> <button type="button" class="toolbar-btn" data-md="## " data-md-end="">T\xEDtulo</button> <button type="button" class="toolbar-btn" data-md="### " data-md-end="">Subt\xEDtulo</button> <button type="button" class="toolbar-btn" data-md="- " data-md-end="">\u2022 Lista</button> <button type="button" class="toolbar-btn" data-md="[" data-md-end="](https://)" title="Link (Ctrl/Cmd+K)">Link<span class="toolbar-btn-shortcut">\u2318K</span></button> <button type="button" class="toolbar-btn" data-md="> " data-md-end="">" Cita\xE7\xE3o</button> </div> <textarea class="textarea" id="post-body" rows="18" placeholder="Escreva aqui o conte\xFAdo do post em Markdown..."></textarea> </div> <div class="form-group"> <label class="switch-field" for="post-draft"> <input type="checkbox" id="post-draft"> <span> <strong>Salvar como rascunho</strong> <span>Quando marcado, o post n\xE3o aparece publicamente. Volte aqui quando quiser publicar.</span> </span> </label> </div> <p class="muted" style="margin-top: 8px;">
Ap\xF3s publicar, o site \xE9 atualizado em ~30 segundos.
</p> </div> </div> </div> <script>
      const $ = (id) => document.getElementById(id);
      const state = {
        editing: null,
        sha: null,
        contactsSha: null,
        dirty: false,
      };

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Toast system \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      function toast(msg, kind = 'info', timeout = 4000) {
        const stack = $('toast-stack');
        const el = document.createElement('div');
        el.className = 'toast toast-' + kind;
        const icon = kind === 'success' ? '\u2713' : kind === 'error' ? '!' : 'i';
        el.innerHTML = \`<div class="toast-icon">\${icon}</div><div class="toast-body"></div><button class="toast-close" aria-label="Fechar">\xD7</button>\`;
        el.querySelector('.toast-body').textContent = msg;
        stack.appendChild(el);
        const dismiss = () => {
          el.classList.add('dismissing');
          setTimeout(() => el.remove(), 200);
        };
        el.querySelector('.toast-close').addEventListener('click', dismiss);
        if (timeout > 0) setTimeout(dismiss, timeout);
      }

      function show(view) {
        ['view-login', 'view-list', 'view-contacts', 'view-images', 'view-editor'].forEach((v) => {
          $(v).classList.toggle('hidden', v !== view);
        });
        $('topbar').classList.toggle('hidden', view === 'view-login' || view === 'view-editor');
        if (view === 'view-list' || view === 'view-contacts' || view === 'view-images') {
          const tabKey = view === 'view-list' ? 'posts' : view === 'view-contacts' ? 'contacts' : 'images';
          document.querySelectorAll('.tab').forEach((t) => {
            t.classList.toggle('active', t.dataset.tab === tabKey);
          });
        }
      }

      async function api(path, opts = {}) {
        const res = await fetch(path, {
          ...opts,
          headers: { 'Content-Type': 'application/json', ...(opts.headers || {}) },
          credentials: 'same-origin',
        });
        const text = await res.text();
        let json = null;
        try { json = JSON.parse(text); } catch { json = { raw: text }; }
        if (!res.ok) throw new Error(json.error || 'erro ' + res.status);
        return json;
      }

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Login \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      $('btn-toggle-password').addEventListener('click', () => {
        const pw = $('password');
        const btn = $('btn-toggle-password');
        if (pw.type === 'password') {
          pw.type = 'text';
          btn.textContent = 'Ocultar';
        } else {
          pw.type = 'password';
          btn.textContent = 'Mostrar';
        }
      });

      $('form-login').addEventListener('submit', async (ev) => {
        ev.preventDefault();
        $('login-error').classList.add('hidden');
        const email = $('email').value;
        const password = $('password').value;
        const btn = $('btn-login');
        btn.disabled = true;
        btn.textContent = 'Entrando...';
        try {
          await api('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) });
          await loadList();
        } catch (err) {
          $('login-error').textContent = err.message || 'Erro ao entrar';
          $('login-error').classList.remove('hidden');
        } finally {
          btn.disabled = false;
          btn.textContent = 'Entrar';
        }
      });

      $('btn-logout').addEventListener('click', async () => {
        await api('/api/logout', { method: 'POST' });
        show('view-login');
      });

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Tabs \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      document.querySelectorAll('.tab').forEach((t) => {
        t.addEventListener('click', () => {
          const tg = t.dataset.tab;
          if (tg === 'posts') loadList();
          else if (tg === 'contacts') loadContacts();
          else if (tg === 'images') loadImages();
        });
      });

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Posts list \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      async function loadList() {
        show('view-list');
        $('list-loading').classList.remove('hidden');
        $('list-empty').classList.add('hidden');
        $('stats-row').classList.add('hidden');
        $('post-list-card').classList.add('hidden');
        $('post-list').innerHTML = '';
        try {
          const { posts } = await api('/api/posts');
          $('list-loading').classList.add('hidden');
          const total = posts.length;
          const drafts = posts.filter((p) => p.draft).length;
          const live = total - drafts;
          $('stat-total').textContent = total;
          $('stat-live').textContent = live;
          $('stat-draft').textContent = drafts;
          if (!total) {
            $('list-empty').classList.remove('hidden');
            return;
          }
          $('stats-row').classList.remove('hidden');
          $('post-list-card').classList.remove('hidden');
          renderList(posts);
        } catch (err) {
          $('list-loading').classList.add('hidden');
          toast(err.message, 'error');
        }
      }

      function renderList(posts) {
        const sorted = posts
          .slice()
          .sort((a, b) => (b.pubDate || '').localeCompare(a.pubDate || ''));

        $('post-list-count').textContent = \`\${sorted.length} \${sorted.length === 1 ? 'post' : 'posts'}\`;

        const html = sorted
          .map((p) => {
            const dateLabel = p.pubDate
              ? new Date(p.pubDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
              : 'Sem data';
            const status = p.draft
              ? '<span class="badge badge-draft">Rascunho</span>'
              : '<span class="badge badge-live">Publicado</span>';
            const description = p.description
              ? \`<p class="description">\${escapeHtml(p.description)}</p>\`
              : '';
            const tags = p.tags && p.tags.length
              ? \`<span class="dot"></span><span>\${escapeHtml(p.tags.slice(0, 2).join(' \xB7 '))}</span>\`
              : '';
            return \`
              <div class="post-item">
                <div class="post-item-info">
                  <div class="post-item-row1">
                    \${status}
                    <h3 class="title">\${escapeHtml(p.title || p.slug)}</h3>
                  </div>
                  \${description}
                  <div class="post-item-meta">
                    <span>\${dateLabel}</span>
                    \${tags}
                  </div>
                </div>
                <div class="post-actions">
                  <button class="btn btn-secondary" data-edit="\${escapeAttr(p.slug)}">Editar</button>
                </div>
              </div>\`;
          })
          .join('');
        $('post-list').innerHTML = html;
        document.querySelectorAll('[data-edit]').forEach((btn) => {
          btn.addEventListener('click', () => editPost(btn.dataset.edit));
        });
      }

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Contatos \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      function updateWaPreview() {
        const num = $('c-whatsapp').value.trim();
        const display = $('c-whatsapp-display').value.trim();
        const msg = $('c-whatsapp-msg').value.trim();
        const el = $('wa-preview-text');
        if (!num) {
          el.classList.add('empty');
          el.innerHTML = 'Preencha o n\xFAmero para ver o preview do bot\xE3o.';
          return;
        }
        el.classList.remove('empty');
        const shown = display || num;
        const msgLine = msg ? \`<br/><span style="color: var(--gray-500); font-size: 12px;">"\${escapeHtml(msg.slice(0, 80))}\${msg.length > 80 ? '...' : ''}"</span>\` : '';
        el.innerHTML = \`Bot\xE3o "Falar com especialista" abrir\xE1 em <strong>\${escapeHtml(shown)}</strong>\${msgLine}\`;
      }

      async function loadContacts() {
        show('view-contacts');
        $('contacts-loading').classList.remove('hidden');
        $('contacts-form').classList.add('hidden');
        try {
          const { contacts, sha } = await api('/api/contacts');
          state.contactsSha = sha;
          $('c-whatsapp').value = contacts.whatsapp_e164 || '';
          $('c-whatsapp-display').value = contacts.whatsapp_display || '';
          $('c-whatsapp-msg').value = contacts.whatsapp_msg || '';
          $('c-email').value = contacts.email || '';
          $('c-instagram').value = contacts.instagram_handle || '';
          $('c-linkedin').value = contacts.linkedin_url || '';
          updateWaPreview();
          $('contacts-loading').classList.add('hidden');
          $('contacts-form').classList.remove('hidden');
        } catch (err) {
          $('contacts-loading').classList.add('hidden');
          toast(err.message, 'error');
        }
      }

      ['c-whatsapp', 'c-whatsapp-display', 'c-whatsapp-msg'].forEach((id) => {
        $(id).addEventListener('input', updateWaPreview);
      });

      $('btn-save-contacts').addEventListener('click', async () => {
        let cur;
        try { cur = await api('/api/contacts'); }
        catch (err) { toast(err.message, 'error'); return; }
        const next = {
          ...cur.contacts,
          whatsapp_e164: $('c-whatsapp').value,
          whatsapp_display: $('c-whatsapp-display').value,
          whatsapp_msg: $('c-whatsapp-msg').value,
          email: $('c-email').value,
          instagram_handle: $('c-instagram').value.replace(/^@/, ''),
          linkedin_url: $('c-linkedin').value,
        };
        const payload = { contacts: next, sha: cur.sha };
        const btn = $('btn-save-contacts');
        btn.disabled = true;
        btn.textContent = 'Salvando...';
        try {
          const result = await api('/api/contacts', { method: 'PUT', body: JSON.stringify(payload) });
          state.contactsSha = result.sha;
          toast('Contatos salvos. O site \xE9 atualizado em ~30s.', 'success');
        } catch (err) {
          toast(err.message, 'error');
        } finally {
          btn.disabled = false;
          btn.textContent = 'Salvar contatos';
        }
      });

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Imagens \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      const IMG_FIELDS = [
        { input: 'i-hero-desktop',  preview: 'i-hero-desktop-preview',  key: 'hero_image_url' },
        { input: 'i-hero-mobile',   preview: 'i-hero-mobile-preview',   key: 'hero_image_url_mobile' },
        { input: 'i-about-desktop', preview: 'i-about-desktop-preview', key: 'about_photo_url' },
        { input: 'i-about-mobile',  preview: 'i-about-mobile-preview',  key: 'about_photo_url_mobile' },
      ];

      async function loadImages() {
        show('view-images');
        $('images-loading').classList.remove('hidden');
        $('images-form').classList.add('hidden');
        try {
          const { contacts } = await api('/api/contacts');
          for (const f of IMG_FIELDS) {
            $(f.input).value = contacts[f.key] || '';
            updatePreview(f.input, f.preview);
            updateClearBtn(f.input);
          }
          $('images-loading').classList.add('hidden');
          $('images-form').classList.remove('hidden');
        } catch (err) {
          $('images-loading').classList.add('hidden');
          toast(err.message, 'error');
        }
      }

      function updatePreview(inputId, previewId) {
        const url = $(inputId).value.trim();
        const prev = $(previewId);
        if (url && /^https?:\\/\\//i.test(url)) {
          prev.innerHTML = \`<img src="\${escapeAttr(url)}" alt="" onerror="this.parentNode.innerHTML='Imagem n\xE3o carregou (URL inv\xE1lida ou privada)'" />\`;
        } else {
          prev.textContent = 'Sem imagem definida';
        }
      }

      function updateClearBtn(inputId) {
        const v = $(inputId).value.trim();
        const btn = document.querySelector(\`[data-clear="\${inputId}"]\`);
        if (btn) btn.disabled = !v;
      }

      IMG_FIELDS.forEach((f) => {
        $(f.input).addEventListener('input', () => {
          updatePreview(f.input, f.preview);
          updateClearBtn(f.input);
        });
        $(f.input).addEventListener('paste', () => setTimeout(() => {
          updatePreview(f.input, f.preview);
          updateClearBtn(f.input);
        }, 50));
      });

      document.querySelectorAll('[data-clear]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const input = $(btn.dataset.clear);
          input.value = '';
          input.dispatchEvent(new Event('input'));
        });
      });

      $('btn-save-images').addEventListener('click', async () => {
        let cur;
        try { cur = await api('/api/contacts'); }
        catch (err) { toast(err.message, 'error'); return; }
        const next = { ...cur.contacts };
        for (const f of IMG_FIELDS) next[f.key] = $(f.input).value.trim();
        const payload = { contacts: next, sha: cur.sha };
        const btn = $('btn-save-images');
        btn.disabled = true;
        btn.textContent = 'Salvando...';
        try {
          await api('/api/contacts', { method: 'PUT', body: JSON.stringify(payload) });
          toast('Imagens salvas. O site \xE9 atualizado em ~30s.', 'success');
        } catch (err) {
          toast(err.message, 'error');
        } finally {
          btn.disabled = false;
          btn.textContent = 'Salvar imagens';
        }
      });

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Editor \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      $('btn-new').addEventListener('click', () => newPost());
      $('btn-new-empty').addEventListener('click', () => newPost());
      $('btn-back').addEventListener('click', () => goBack());
      $('btn-save').addEventListener('click', () => savePost());
      $('btn-delete').addEventListener('click', () => deletePost());

      function goBack() {
        if (state.dirty && !confirm('Voc\xEA tem altera\xE7\xF5es n\xE3o salvas. Sair mesmo assim?')) return;
        state.dirty = false;
        loadList();
      }

      // dirty tracking
      ['post-title', 'post-description', 'post-date', 'post-author', 'post-tags', 'post-body', 'post-draft'].forEach((id) => {
        $(id).addEventListener('input', () => markDirty());
      });
      $('post-draft').addEventListener('change', () => markDirty());

      function markDirty() {
        if (!state.dirty) {
          state.dirty = true;
          $('editor-dirty').textContent = 'Altera\xE7\xF5es n\xE3o salvas';
          $('editor-dirty').style.color = 'var(--warn)';
        }
      }

      function markClean() {
        state.dirty = false;
        $('editor-dirty').textContent = state.editing ? 'Editando: ' + state.editing : 'Novo post';
        $('editor-dirty').style.color = '';
      }

      window.addEventListener('beforeunload', (ev) => {
        if (state.dirty) {
          ev.preventDefault();
          ev.returnValue = '';
        }
      });

      // contadores
      function updateCounter(inputId, counterId, min, max) {
        const len = $(inputId).value.length;
        const el = $(counterId);
        let cls = '';
        if (len > max) cls = 'over';
        else if (min && len >= min && len <= max) cls = 'in-range';
        else if (len > 0) cls = 'out-range';
        el.className = 'field-counter' + (cls ? ' ' + cls : '');
        if (counterId === 'counter-description') {
          el.textContent = \`\${len} / 160 (alvo SEO 150-160)\`;
        } else {
          el.textContent = \`\${len} / \${max}\`;
        }
      }
      $('post-title').addEventListener('input', () => updateCounter('post-title', 'counter-title', 30, 120));
      $('post-description').addEventListener('input', () => updateCounter('post-description', 'counter-description', 150, 160));

      // toolbar
      document.querySelectorAll('[data-md]').forEach((btn) => {
        btn.addEventListener('click', () => insertMd(btn.dataset.md, btn.dataset.mdEnd || ''));
      });

      function insertMd(prefix, suffix) {
        const ta = $('post-body');
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const before = ta.value.slice(0, start);
        const sel = ta.value.slice(start, end);
        const after = ta.value.slice(end);
        ta.value = before + prefix + sel + suffix + after;
        ta.focus();
        ta.selectionStart = start + prefix.length;
        ta.selectionEnd = end + prefix.length;
        markDirty();
      }

      // atalhos no body
      $('post-body').addEventListener('keydown', (ev) => {
        const cmd = ev.metaKey || ev.ctrlKey;
        if (!cmd) return;
        const k = ev.key.toLowerCase();
        if (k === 'b') { ev.preventDefault(); insertMd('**', '**'); }
        else if (k === 'i') { ev.preventDefault(); insertMd('*', '*'); }
        else if (k === 'k') { ev.preventDefault(); insertMd('[', '](https://)'); }
        else if (k === 's') { ev.preventDefault(); savePost(); }
      });
      // Cmd+S em qualquer lugar do editor
      ['post-title', 'post-description'].forEach((id) => {
        $(id).addEventListener('keydown', (ev) => {
          if ((ev.metaKey || ev.ctrlKey) && ev.key.toLowerCase() === 's') {
            ev.preventDefault();
            savePost();
          }
        });
      });

      function newPost() {
        state.editing = null;
        state.sha = null;
        $('editor-title').textContent = 'Novo post';
        $('post-title').value = '';
        $('post-description').value = '';
        $('post-date').value = new Date().toISOString().slice(0, 10);
        $('post-author').value = 'Fernanda';
        $('post-tags').value = '';
        $('post-body').value = '';
        $('post-draft').checked = false;
        $('btn-delete').classList.add('hidden');
        updateCounter('post-title', 'counter-title', 30, 120);
        updateCounter('post-description', 'counter-description', 150, 160);
        markClean();
        show('view-editor');
      }

      async function editPost(slug) {
        try {
          const { content, sha } = await api('/api/post/' + encodeURIComponent(slug));
          state.editing = slug;
          state.sha = sha;
          parseMdInto(content);
          $('editor-title').textContent = 'Editando post';
          $('btn-delete').classList.remove('hidden');
          updateCounter('post-title', 'counter-title', 30, 120);
          updateCounter('post-description', 'counter-description', 150, 160);
          markClean();
          show('view-editor');
        } catch (err) {
          toast(err.message, 'error');
        }
      }

      function parseMdInto(md) {
        const fmMatch = md.match(/^---\\n([\\s\\S]*?)\\n---\\n?([\\s\\S]*)$/);
        if (!fmMatch) {
          $('post-body').value = md;
          return;
        }
        const fm = fmMatch[1];
        const body = fmMatch[2];
        const get = (k) => {
          const re = new RegExp('^' + k + ':\\\\s*(.+)$', 'm');
          const m = fm.match(re);
          if (!m) return '';
          let v = m[1].trim();
          if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
            try { return JSON.parse(v); } catch { return v.slice(1, -1); }
          }
          return v;
        };
        $('post-title').value = get('title');
        $('post-description').value = get('description');
        $('post-date').value = get('pubDate').slice(0, 10);
        $('post-author').value = get('author') || '';
        const tagsBlock = fm.match(/tags:\\s*\\n((?:\\s+-\\s+.+\\n?)+)/);
        if (tagsBlock) {
          const tags = tagsBlock[1]
            .split('\\n')
            .map((l) => l.replace(/^\\s*-\\s+/, '').replace(/^"|"$/g, '').trim())
            .filter(Boolean);
          $('post-tags').value = tags.join(', ');
        } else {
          $('post-tags').value = '';
        }
        $('post-draft').checked = get('draft') === 'true';
        $('post-body').value = body.replace(/^\\n+/, '');
      }

      async function savePost() {
        const title = $('post-title').value.trim();
        const description = $('post-description').value.trim();
        const pubDate = $('post-date').value;
        // visual feedback de campos inv\xE1lidos
        $('post-title').classList.toggle('input-invalid', !title);
        $('post-description').classList.toggle('input-invalid', !description);
        $('post-date').classList.toggle('input-invalid', !pubDate);
        if (!title || !description || !pubDate) {
          toast('Preencha t\xEDtulo, descri\xE7\xE3o e data antes de publicar.', 'error');
          return;
        }
        const tagsRaw = $('post-tags').value.trim();
        const tags = tagsRaw ? tagsRaw.split(',').map((t) => t.trim()).filter(Boolean) : [];
        const payload = {
          title, description, pubDate,
          author: $('post-author').value.trim(),
          tags,
          draft: $('post-draft').checked,
          body: $('post-body').value,
        };
        const btn = $('btn-save');
        btn.disabled = true;
        btn.innerHTML = 'Publicando...';
        try {
          if (state.editing) {
            payload.sha = state.sha;
            await api('/api/post/' + encodeURIComponent(state.editing), {
              method: 'PUT', body: JSON.stringify(payload),
            });
            markClean();
            toast('Post atualizado. O site \xE9 atualizado em ~30s.', 'success');
          } else {
            await api('/api/post/' + encodeURIComponent(slugify(title)), {
              method: 'POST', body: JSON.stringify(payload),
            });
            markClean();
            toast('Post criado. Voltando para a lista...', 'success');
            setTimeout(() => loadList(), 1200);
          }
        } catch (err) {
          toast(err.message, 'error');
        } finally {
          btn.disabled = false;
          btn.innerHTML = 'Publicar <span style="font-size: 11px; opacity: 0.7; margin-left: 4px;">\u2318S</span>';
        }
      }

      async function deletePost() {
        if (!state.editing) return;
        if (!confirm('Apagar o post? Esta a\xE7\xE3o n\xE3o pode ser desfeita.')) return;
        try {
          await api('/api/post/' + encodeURIComponent(state.editing), {
            method: 'DELETE', body: JSON.stringify({ sha: state.sha }),
          });
          state.dirty = false;
          toast('Post removido.', 'success');
          loadList();
        } catch (err) {
          toast(err.message, 'error');
        }
      }

      function slugify(s) {
        return (s || '')
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036F]/g, '')
          .replace(/[^a-z0-9\\s-]/g, '')
          .trim()
          .replace(/\\s+/g, '-')
          .slice(0, 80);
      }

      function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
      }
      function escapeAttr(s) { return escapeHtml(s); }

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Bootstrap \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      (async () => {
        try {
          const { authenticated } = await api('/api/session');
          if (authenticated) await loadList();
          else show('view-login');
        } catch {
          show('view-login');
        }
      })();
    <\/script> </body> </html>`], ['<html lang="pt-BR"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex, nofollow"><link rel="icon" type="image/svg+xml" href="/favicon.svg?v=fo-arquitetura"><title>Painel \xB7 F.O Arquitetura</title>', `</head> <body> <!-- Toast container --> <div id="toast-stack" class="toast-stack" aria-live="polite"></div> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VIEW LOGIN \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div id="view-login" class="login-wrap"> <div class="login-card"> <div class="login-mark">FO</div> <h1 style="margin-bottom: 4px;">Painel</h1> <p class="muted" style="margin-bottom: 28px;">F.O Arquitetura</p> <div id="login-error" class="login-error hidden"></div> <form id="form-login"> <div class="field"> <label class="label" for="email">E-mail</label> <input class="input" id="email" type="email" autocomplete="username" required> </div> <div class="field"> <label class="label" for="password">Senha</label> <div class="input-with-action"> <input class="input" id="password" type="password" autocomplete="current-password" required style="padding-right: 80px;"> <button type="button" class="input-action" id="btn-toggle-password" aria-label="Mostrar senha">Mostrar</button> </div> </div> <button class="btn btn-block" type="submit" id="btn-login" style="margin-top: 8px;">Entrar</button> </form> </div> </div> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TOPBAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div id="topbar" class="topbar hidden"> <div class="topbar-brand"> <div class="mark">FO</div> <div> <h1>Painel</h1> <span class="topbar-sub">F.O Arquitetura</span> </div> </div> <div class="tabs"> <button class="tab active" data-tab="posts">Posts</button> <button class="tab" data-tab="contacts">Contatos</button> <button class="tab" data-tab="images">Imagens</button> </div> <div class="topbar-actions"> <button class="btn btn-secondary" id="btn-logout">Sair</button> </div> </div> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VIEW POSTS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div id="view-list" class="hidden"> <div class="container"> <div class="section-head"> <div> <h2>Posts do blog</h2> <p class="muted">Cada post novo \xE9 uma p\xE1gina indexada pelo Google.</p> </div> <button class="btn btn-primary-strong" id="btn-new">+ Novo post</button> </div> <div id="stats-row" class="stats-row hidden"> <div class="stat-card"> <div class="stat-card-label">Total de posts</div> <div class="stat-card-value" id="stat-total">0</div> </div> <div class="stat-card"> <div class="stat-card-label">Publicados</div> <div class="stat-card-value accent" id="stat-live">0</div> </div> <div class="stat-card"> <div class="stat-card-label">Rascunhos</div> <div class="stat-card-value" id="stat-draft">0</div> </div> </div> <div id="list-loading" class="loading-state"> <div class="spinner"></div> <span>Carregando posts...</span> </div> <div id="list-empty" class="empty-state hidden"> <div class="empty-state-icon">\u270E</div> <h3>Nenhum post ainda</h3> <p>Comece publicando seu primeiro conte\xFAdo t\xE9cnico.</p> <button class="btn btn-primary-strong" id="btn-new-empty">Criar primeiro post</button> </div> <div id="post-list-card" class="post-list-card hidden"> <div class="post-list-card-head"> <span>Todos os posts</span> <span class="count" id="post-list-count">\u2014</span> </div> <div id="post-list" class="post-list"></div> </div> </div> </div> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VIEW CONTATOS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div id="view-contacts" class="hidden"> <div class="container"> <div class="section-head"> <div> <h2>Canais de contato</h2> <p class="muted">Quando voc\xEA atualiza aqui, o site reflete em ~30 segundos.</p> </div> </div> <div class="card"> <div id="contacts-loading" class="loading-state"> <div class="spinner"></div> <span>Carregando contatos...</span> </div> <div id="contacts-form" class="hidden"> <div class="form-group"> <div class="form-group-title">WhatsApp</div> <p class="form-group-desc">\xC9 o canal principal: o bot\xE3o "Falar com especialista" do site abre direto na sua conversa.</p> <div class="row"> <div class="field"> <label class="label" for="c-whatsapp">N\xFAmero (apenas d\xEDgitos com DDI)</label> <input class="input" id="c-whatsapp" type="text" placeholder="5521999999999" inputmode="numeric"> <p class="field-hint">Brasil: 55 + DDD + n\xFAmero, sem espa\xE7os ou par\xEAnteses.</p> </div> <div class="field"> <label class="label" for="c-whatsapp-display">Como aparece no site</label> <input class="input" id="c-whatsapp-display" type="text" placeholder="(21) 99999-9999"> <p class="field-hint">Formatado, do jeito que o cliente vai ler.</p> </div> </div> <div class="field"> <label class="label" for="c-whatsapp-msg">Mensagem inicial pr\xE9-escrita</label> <input class="input" id="c-whatsapp-msg" type="text" placeholder="Ol\xE1! Gostaria de saber mais..."> <p class="field-hint">Fica pr\xE9-preenchida na primeira mensagem do cliente.</p> </div> <div class="wa-preview" id="wa-preview"> <div class="wa-preview-mark">W</div> <div class="wa-preview-text empty" id="wa-preview-text">Preencha o n\xFAmero para ver o preview do bot\xE3o.</div> </div> </div> <div class="form-group"> <div class="form-group-title">E-mail</div> <p class="form-group-desc">Aparece no rodap\xE9 do site para envio de documenta\xE7\xE3o.</p> <div class="field"> <label class="label" for="c-email">E-mail profissional</label> <input class="input" id="c-email" type="email" placeholder="contato@dominio.com.br"> </div> </div> <div class="form-group"> <div class="form-group-title">Redes sociais</div> <p class="form-group-desc">Aparecem como links no rodap\xE9 do site.</p> <div class="row"> <div class="field"> <label class="label" for="c-instagram">Instagram</label> <input class="input" id="c-instagram" type="text" placeholder="seu.usuario"> <p class="field-hint">Sem o @ \u2014 s\xF3 o nome de usu\xE1rio.</p> </div> <div class="field"> <label class="label" for="c-linkedin">LinkedIn (URL)</label> <input class="input" id="c-linkedin" type="url" placeholder="https://www.linkedin.com/in/..."> <p class="field-hint">Cole a URL completa do seu perfil.</p> </div> </div> </div> <div class="btn-group" style="padding-top: 8px;"> <button class="btn btn-primary-strong" id="btn-save-contacts">Salvar contatos</button> </div> </div> </div> </div> </div> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VIEW IMAGENS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div id="view-images" class="hidden"> <div class="container"> <div class="section-head"> <div> <h2>Imagens do site</h2> <p class="muted">Cole URLs de imagens p\xFAblicas (Google Drive aberto, Imgur, link direto).</p> </div> </div> <div class="card"> <div id="images-loading" class="loading-state"> <div class="spinner"></div> <span>Carregando imagens...</span> </div> <div id="images-form" class="hidden"> <div class="form-group"> <div class="form-group-title">Imagem do topo (Hero)</div> <p class="form-group-desc">Aparece como fundo da primeira dobra do site, atr\xE1s do t\xEDtulo e do bot\xE3o.</p> <div class="row"> <div class="field"> <label class="label" for="i-hero-desktop">Desktop \xB7 imagem horizontal</label> <div class="input-clear-wrap"> <input class="input" id="i-hero-desktop" type="url" placeholder="https://..."> <button type="button" class="btn-clear" data-clear="i-hero-desktop">Remover</button> </div> <p class="field-hint">Propor\xE7\xE3o recomendada: 16:9 ou 21:9 (paisagem), 1920\xD71080+.</p> </div> <div class="field"> <label class="label" for="i-hero-mobile">Mobile \xB7 imagem vertical</label> <div class="input-clear-wrap"> <input class="input" id="i-hero-mobile" type="url" placeholder="https://... (opcional)"> <button type="button" class="btn-clear" data-clear="i-hero-mobile">Remover</button> </div> <p class="field-hint">Propor\xE7\xE3o recomendada: 9:16 (vertical). Vazio = usa do desktop.</p> </div> </div> <div class="image-row"> <div> <div class="image-meta">Preview Desktop</div> <div class="image-preview image-preview-wide" id="i-hero-desktop-preview">Sem imagem definida</div> </div> <div> <div class="image-meta">Preview Mobile</div> <div class="image-preview image-preview-tall" id="i-hero-mobile-preview">Sem imagem definida</div> </div> </div> </div> <div class="form-group"> <div class="form-group-title">Foto profissional</div> <p class="form-group-desc">Aparece na se\xE7\xE3o "Quem atende voc\xEA" do site.</p> <div class="row"> <div class="field"> <label class="label" for="i-about-desktop">Desktop \xB7 imagem vertical</label> <div class="input-clear-wrap"> <input class="input" id="i-about-desktop" type="url" placeholder="https://..."> <button type="button" class="btn-clear" data-clear="i-about-desktop">Remover</button> </div> <p class="field-hint">Propor\xE7\xE3o recomendada: 4:5 (retrato).</p> </div> <div class="field"> <label class="label" for="i-about-mobile">Mobile \xB7 imagem vertical</label> <div class="input-clear-wrap"> <input class="input" id="i-about-mobile" type="url" placeholder="https://... (opcional)"> <button type="button" class="btn-clear" data-clear="i-about-mobile">Remover</button> </div> <p class="field-hint">Pode ser igual \xE0 desktop ou variante 3:4. Vazio = usa do desktop.</p> </div> </div> <div class="image-row"> <div> <div class="image-meta">Preview Desktop</div> <div class="image-preview image-preview-tall" id="i-about-desktop-preview">Sem imagem definida</div> </div> <div> <div class="image-meta">Preview Mobile</div> <div class="image-preview image-preview-tall" id="i-about-mobile-preview">Sem imagem definida</div> </div> </div> </div> <div class="btn-group" style="padding-top: 8px;"> <button class="btn btn-primary-strong" id="btn-save-images">Salvar imagens</button> </div> </div> </div> </div> </div> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VIEW EDITOR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div id="view-editor" class="hidden"> <div class="topbar"> <div class="topbar-brand"> <button class="btn btn-secondary" id="btn-back" style="padding: 8px 14px;">\u2190 Voltar</button> <div> <h1 id="editor-title">Novo post</h1> <span class="topbar-sub" id="editor-dirty">\u2014</span> </div> </div> <div class="topbar-actions"> <button class="btn btn-danger hidden" id="btn-delete">Apagar</button> <button class="btn btn-primary-strong" id="btn-save">Publicar <span style="font-size: 11px; opacity: 0.7; margin-left: 4px;">\u2318S</span></button> </div> </div> <div class="container"> <div class="card"> <div class="form-group"> <div class="form-group-title">Identifica\xE7\xE3o do post</div> <p class="form-group-desc">Esses campos aparecem no Google e nos compartilhamentos.</p> <div class="field"> <label class="label label-required" for="post-title">T\xEDtulo</label> <input class="input" id="post-title" type="text" placeholder="Ex: Como funciona a vistoria de entrega de chaves" maxlength="120"> <span class="field-counter" id="counter-title">0 / 120</span> </div> <div class="field"> <label class="label label-required" for="post-description">Descri\xE7\xE3o</label> <textarea class="textarea" id="post-description" rows="3" style="min-height: 90px; font-family: inherit; font-size: 15px;" placeholder="Resumo curto que aparece no Google e no compartilhamento."></textarea> <span class="field-counter" id="counter-description">0 / 160 (alvo SEO 150-160)</span> </div> <div class="row"> <div class="field"> <label class="label label-required" for="post-date">Data de publica\xE7\xE3o</label> <input class="input" id="post-date" type="date"> </div> <div class="field"> <label class="label" for="post-author">Autor</label> <input class="input" id="post-author" type="text"> </div> </div> <div class="field"> <label class="label" for="post-tags">Tags</label> <input class="input" id="post-tags" type="text" placeholder="avalia\xE7\xE3o, vistoria, NBR 14.653"> <p class="field-hint">Separe por v\xEDrgula. Ajuda a organizar os posts.</p> </div> </div> <div class="form-group"> <div class="form-group-title">Conte\xFAdo</div> <p class="form-group-desc">Use a barra ou os atalhos. Suporta Markdown.</p> <div class="editor-toolbar"> <button type="button" class="toolbar-btn" data-md="**" data-md-end="**" title="Negrito (Ctrl/Cmd+B)"> <strong>B</strong><span class="toolbar-btn-shortcut">\u2318B</span> </button> <button type="button" class="toolbar-btn" data-md="*" data-md-end="*" title="It\xE1lico (Ctrl/Cmd+I)"> <em>I</em><span class="toolbar-btn-shortcut">\u2318I</span> </button> <button type="button" class="toolbar-btn" data-md="## " data-md-end="">T\xEDtulo</button> <button type="button" class="toolbar-btn" data-md="### " data-md-end="">Subt\xEDtulo</button> <button type="button" class="toolbar-btn" data-md="- " data-md-end="">\u2022 Lista</button> <button type="button" class="toolbar-btn" data-md="[" data-md-end="](https://)" title="Link (Ctrl/Cmd+K)">Link<span class="toolbar-btn-shortcut">\u2318K</span></button> <button type="button" class="toolbar-btn" data-md="> " data-md-end="">" Cita\xE7\xE3o</button> </div> <textarea class="textarea" id="post-body" rows="18" placeholder="Escreva aqui o conte\xFAdo do post em Markdown..."></textarea> </div> <div class="form-group"> <label class="switch-field" for="post-draft"> <input type="checkbox" id="post-draft"> <span> <strong>Salvar como rascunho</strong> <span>Quando marcado, o post n\xE3o aparece publicamente. Volte aqui quando quiser publicar.</span> </span> </label> </div> <p class="muted" style="margin-top: 8px;">
Ap\xF3s publicar, o site \xE9 atualizado em ~30 segundos.
</p> </div> </div> </div> <script>
      const $ = (id) => document.getElementById(id);
      const state = {
        editing: null,
        sha: null,
        contactsSha: null,
        dirty: false,
      };

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Toast system \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      function toast(msg, kind = 'info', timeout = 4000) {
        const stack = $('toast-stack');
        const el = document.createElement('div');
        el.className = 'toast toast-' + kind;
        const icon = kind === 'success' ? '\u2713' : kind === 'error' ? '!' : 'i';
        el.innerHTML = \\\`<div class="toast-icon">\\\${icon}</div><div class="toast-body"></div><button class="toast-close" aria-label="Fechar">\xD7</button>\\\`;
        el.querySelector('.toast-body').textContent = msg;
        stack.appendChild(el);
        const dismiss = () => {
          el.classList.add('dismissing');
          setTimeout(() => el.remove(), 200);
        };
        el.querySelector('.toast-close').addEventListener('click', dismiss);
        if (timeout > 0) setTimeout(dismiss, timeout);
      }

      function show(view) {
        ['view-login', 'view-list', 'view-contacts', 'view-images', 'view-editor'].forEach((v) => {
          $(v).classList.toggle('hidden', v !== view);
        });
        $('topbar').classList.toggle('hidden', view === 'view-login' || view === 'view-editor');
        if (view === 'view-list' || view === 'view-contacts' || view === 'view-images') {
          const tabKey = view === 'view-list' ? 'posts' : view === 'view-contacts' ? 'contacts' : 'images';
          document.querySelectorAll('.tab').forEach((t) => {
            t.classList.toggle('active', t.dataset.tab === tabKey);
          });
        }
      }

      async function api(path, opts = {}) {
        const res = await fetch(path, {
          ...opts,
          headers: { 'Content-Type': 'application/json', ...(opts.headers || {}) },
          credentials: 'same-origin',
        });
        const text = await res.text();
        let json = null;
        try { json = JSON.parse(text); } catch { json = { raw: text }; }
        if (!res.ok) throw new Error(json.error || 'erro ' + res.status);
        return json;
      }

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Login \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      $('btn-toggle-password').addEventListener('click', () => {
        const pw = $('password');
        const btn = $('btn-toggle-password');
        if (pw.type === 'password') {
          pw.type = 'text';
          btn.textContent = 'Ocultar';
        } else {
          pw.type = 'password';
          btn.textContent = 'Mostrar';
        }
      });

      $('form-login').addEventListener('submit', async (ev) => {
        ev.preventDefault();
        $('login-error').classList.add('hidden');
        const email = $('email').value;
        const password = $('password').value;
        const btn = $('btn-login');
        btn.disabled = true;
        btn.textContent = 'Entrando...';
        try {
          await api('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) });
          await loadList();
        } catch (err) {
          $('login-error').textContent = err.message || 'Erro ao entrar';
          $('login-error').classList.remove('hidden');
        } finally {
          btn.disabled = false;
          btn.textContent = 'Entrar';
        }
      });

      $('btn-logout').addEventListener('click', async () => {
        await api('/api/logout', { method: 'POST' });
        show('view-login');
      });

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Tabs \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      document.querySelectorAll('.tab').forEach((t) => {
        t.addEventListener('click', () => {
          const tg = t.dataset.tab;
          if (tg === 'posts') loadList();
          else if (tg === 'contacts') loadContacts();
          else if (tg === 'images') loadImages();
        });
      });

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Posts list \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      async function loadList() {
        show('view-list');
        $('list-loading').classList.remove('hidden');
        $('list-empty').classList.add('hidden');
        $('stats-row').classList.add('hidden');
        $('post-list-card').classList.add('hidden');
        $('post-list').innerHTML = '';
        try {
          const { posts } = await api('/api/posts');
          $('list-loading').classList.add('hidden');
          const total = posts.length;
          const drafts = posts.filter((p) => p.draft).length;
          const live = total - drafts;
          $('stat-total').textContent = total;
          $('stat-live').textContent = live;
          $('stat-draft').textContent = drafts;
          if (!total) {
            $('list-empty').classList.remove('hidden');
            return;
          }
          $('stats-row').classList.remove('hidden');
          $('post-list-card').classList.remove('hidden');
          renderList(posts);
        } catch (err) {
          $('list-loading').classList.add('hidden');
          toast(err.message, 'error');
        }
      }

      function renderList(posts) {
        const sorted = posts
          .slice()
          .sort((a, b) => (b.pubDate || '').localeCompare(a.pubDate || ''));

        $('post-list-count').textContent = \\\`\\\${sorted.length} \\\${sorted.length === 1 ? 'post' : 'posts'}\\\`;

        const html = sorted
          .map((p) => {
            const dateLabel = p.pubDate
              ? new Date(p.pubDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
              : 'Sem data';
            const status = p.draft
              ? '<span class="badge badge-draft">Rascunho</span>'
              : '<span class="badge badge-live">Publicado</span>';
            const description = p.description
              ? \\\`<p class="description">\\\${escapeHtml(p.description)}</p>\\\`
              : '';
            const tags = p.tags && p.tags.length
              ? \\\`<span class="dot"></span><span>\\\${escapeHtml(p.tags.slice(0, 2).join(' \xB7 '))}</span>\\\`
              : '';
            return \\\`
              <div class="post-item">
                <div class="post-item-info">
                  <div class="post-item-row1">
                    \\\${status}
                    <h3 class="title">\\\${escapeHtml(p.title || p.slug)}</h3>
                  </div>
                  \\\${description}
                  <div class="post-item-meta">
                    <span>\\\${dateLabel}</span>
                    \\\${tags}
                  </div>
                </div>
                <div class="post-actions">
                  <button class="btn btn-secondary" data-edit="\\\${escapeAttr(p.slug)}">Editar</button>
                </div>
              </div>\\\`;
          })
          .join('');
        $('post-list').innerHTML = html;
        document.querySelectorAll('[data-edit]').forEach((btn) => {
          btn.addEventListener('click', () => editPost(btn.dataset.edit));
        });
      }

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Contatos \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      function updateWaPreview() {
        const num = $('c-whatsapp').value.trim();
        const display = $('c-whatsapp-display').value.trim();
        const msg = $('c-whatsapp-msg').value.trim();
        const el = $('wa-preview-text');
        if (!num) {
          el.classList.add('empty');
          el.innerHTML = 'Preencha o n\xFAmero para ver o preview do bot\xE3o.';
          return;
        }
        el.classList.remove('empty');
        const shown = display || num;
        const msgLine = msg ? \\\`<br/><span style="color: var(--gray-500); font-size: 12px;">"\\\${escapeHtml(msg.slice(0, 80))}\\\${msg.length > 80 ? '...' : ''}"</span>\\\` : '';
        el.innerHTML = \\\`Bot\xE3o "Falar com especialista" abrir\xE1 em <strong>\\\${escapeHtml(shown)}</strong>\\\${msgLine}\\\`;
      }

      async function loadContacts() {
        show('view-contacts');
        $('contacts-loading').classList.remove('hidden');
        $('contacts-form').classList.add('hidden');
        try {
          const { contacts, sha } = await api('/api/contacts');
          state.contactsSha = sha;
          $('c-whatsapp').value = contacts.whatsapp_e164 || '';
          $('c-whatsapp-display').value = contacts.whatsapp_display || '';
          $('c-whatsapp-msg').value = contacts.whatsapp_msg || '';
          $('c-email').value = contacts.email || '';
          $('c-instagram').value = contacts.instagram_handle || '';
          $('c-linkedin').value = contacts.linkedin_url || '';
          updateWaPreview();
          $('contacts-loading').classList.add('hidden');
          $('contacts-form').classList.remove('hidden');
        } catch (err) {
          $('contacts-loading').classList.add('hidden');
          toast(err.message, 'error');
        }
      }

      ['c-whatsapp', 'c-whatsapp-display', 'c-whatsapp-msg'].forEach((id) => {
        $(id).addEventListener('input', updateWaPreview);
      });

      $('btn-save-contacts').addEventListener('click', async () => {
        let cur;
        try { cur = await api('/api/contacts'); }
        catch (err) { toast(err.message, 'error'); return; }
        const next = {
          ...cur.contacts,
          whatsapp_e164: $('c-whatsapp').value,
          whatsapp_display: $('c-whatsapp-display').value,
          whatsapp_msg: $('c-whatsapp-msg').value,
          email: $('c-email').value,
          instagram_handle: $('c-instagram').value.replace(/^@/, ''),
          linkedin_url: $('c-linkedin').value,
        };
        const payload = { contacts: next, sha: cur.sha };
        const btn = $('btn-save-contacts');
        btn.disabled = true;
        btn.textContent = 'Salvando...';
        try {
          const result = await api('/api/contacts', { method: 'PUT', body: JSON.stringify(payload) });
          state.contactsSha = result.sha;
          toast('Contatos salvos. O site \xE9 atualizado em ~30s.', 'success');
        } catch (err) {
          toast(err.message, 'error');
        } finally {
          btn.disabled = false;
          btn.textContent = 'Salvar contatos';
        }
      });

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Imagens \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      const IMG_FIELDS = [
        { input: 'i-hero-desktop',  preview: 'i-hero-desktop-preview',  key: 'hero_image_url' },
        { input: 'i-hero-mobile',   preview: 'i-hero-mobile-preview',   key: 'hero_image_url_mobile' },
        { input: 'i-about-desktop', preview: 'i-about-desktop-preview', key: 'about_photo_url' },
        { input: 'i-about-mobile',  preview: 'i-about-mobile-preview',  key: 'about_photo_url_mobile' },
      ];

      async function loadImages() {
        show('view-images');
        $('images-loading').classList.remove('hidden');
        $('images-form').classList.add('hidden');
        try {
          const { contacts } = await api('/api/contacts');
          for (const f of IMG_FIELDS) {
            $(f.input).value = contacts[f.key] || '';
            updatePreview(f.input, f.preview);
            updateClearBtn(f.input);
          }
          $('images-loading').classList.add('hidden');
          $('images-form').classList.remove('hidden');
        } catch (err) {
          $('images-loading').classList.add('hidden');
          toast(err.message, 'error');
        }
      }

      function updatePreview(inputId, previewId) {
        const url = $(inputId).value.trim();
        const prev = $(previewId);
        if (url && /^https?:\\\\/\\\\//i.test(url)) {
          prev.innerHTML = \\\`<img src="\\\${escapeAttr(url)}" alt="" onerror="this.parentNode.innerHTML='Imagem n\xE3o carregou (URL inv\xE1lida ou privada)'" />\\\`;
        } else {
          prev.textContent = 'Sem imagem definida';
        }
      }

      function updateClearBtn(inputId) {
        const v = $(inputId).value.trim();
        const btn = document.querySelector(\\\`[data-clear="\\\${inputId}"]\\\`);
        if (btn) btn.disabled = !v;
      }

      IMG_FIELDS.forEach((f) => {
        $(f.input).addEventListener('input', () => {
          updatePreview(f.input, f.preview);
          updateClearBtn(f.input);
        });
        $(f.input).addEventListener('paste', () => setTimeout(() => {
          updatePreview(f.input, f.preview);
          updateClearBtn(f.input);
        }, 50));
      });

      document.querySelectorAll('[data-clear]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const input = $(btn.dataset.clear);
          input.value = '';
          input.dispatchEvent(new Event('input'));
        });
      });

      $('btn-save-images').addEventListener('click', async () => {
        let cur;
        try { cur = await api('/api/contacts'); }
        catch (err) { toast(err.message, 'error'); return; }
        const next = { ...cur.contacts };
        for (const f of IMG_FIELDS) next[f.key] = $(f.input).value.trim();
        const payload = { contacts: next, sha: cur.sha };
        const btn = $('btn-save-images');
        btn.disabled = true;
        btn.textContent = 'Salvando...';
        try {
          await api('/api/contacts', { method: 'PUT', body: JSON.stringify(payload) });
          toast('Imagens salvas. O site \xE9 atualizado em ~30s.', 'success');
        } catch (err) {
          toast(err.message, 'error');
        } finally {
          btn.disabled = false;
          btn.textContent = 'Salvar imagens';
        }
      });

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Editor \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      $('btn-new').addEventListener('click', () => newPost());
      $('btn-new-empty').addEventListener('click', () => newPost());
      $('btn-back').addEventListener('click', () => goBack());
      $('btn-save').addEventListener('click', () => savePost());
      $('btn-delete').addEventListener('click', () => deletePost());

      function goBack() {
        if (state.dirty && !confirm('Voc\xEA tem altera\xE7\xF5es n\xE3o salvas. Sair mesmo assim?')) return;
        state.dirty = false;
        loadList();
      }

      // dirty tracking
      ['post-title', 'post-description', 'post-date', 'post-author', 'post-tags', 'post-body', 'post-draft'].forEach((id) => {
        $(id).addEventListener('input', () => markDirty());
      });
      $('post-draft').addEventListener('change', () => markDirty());

      function markDirty() {
        if (!state.dirty) {
          state.dirty = true;
          $('editor-dirty').textContent = 'Altera\xE7\xF5es n\xE3o salvas';
          $('editor-dirty').style.color = 'var(--warn)';
        }
      }

      function markClean() {
        state.dirty = false;
        $('editor-dirty').textContent = state.editing ? 'Editando: ' + state.editing : 'Novo post';
        $('editor-dirty').style.color = '';
      }

      window.addEventListener('beforeunload', (ev) => {
        if (state.dirty) {
          ev.preventDefault();
          ev.returnValue = '';
        }
      });

      // contadores
      function updateCounter(inputId, counterId, min, max) {
        const len = $(inputId).value.length;
        const el = $(counterId);
        let cls = '';
        if (len > max) cls = 'over';
        else if (min && len >= min && len <= max) cls = 'in-range';
        else if (len > 0) cls = 'out-range';
        el.className = 'field-counter' + (cls ? ' ' + cls : '');
        if (counterId === 'counter-description') {
          el.textContent = \\\`\\\${len} / 160 (alvo SEO 150-160)\\\`;
        } else {
          el.textContent = \\\`\\\${len} / \\\${max}\\\`;
        }
      }
      $('post-title').addEventListener('input', () => updateCounter('post-title', 'counter-title', 30, 120));
      $('post-description').addEventListener('input', () => updateCounter('post-description', 'counter-description', 150, 160));

      // toolbar
      document.querySelectorAll('[data-md]').forEach((btn) => {
        btn.addEventListener('click', () => insertMd(btn.dataset.md, btn.dataset.mdEnd || ''));
      });

      function insertMd(prefix, suffix) {
        const ta = $('post-body');
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const before = ta.value.slice(0, start);
        const sel = ta.value.slice(start, end);
        const after = ta.value.slice(end);
        ta.value = before + prefix + sel + suffix + after;
        ta.focus();
        ta.selectionStart = start + prefix.length;
        ta.selectionEnd = end + prefix.length;
        markDirty();
      }

      // atalhos no body
      $('post-body').addEventListener('keydown', (ev) => {
        const cmd = ev.metaKey || ev.ctrlKey;
        if (!cmd) return;
        const k = ev.key.toLowerCase();
        if (k === 'b') { ev.preventDefault(); insertMd('**', '**'); }
        else if (k === 'i') { ev.preventDefault(); insertMd('*', '*'); }
        else if (k === 'k') { ev.preventDefault(); insertMd('[', '](https://)'); }
        else if (k === 's') { ev.preventDefault(); savePost(); }
      });
      // Cmd+S em qualquer lugar do editor
      ['post-title', 'post-description'].forEach((id) => {
        $(id).addEventListener('keydown', (ev) => {
          if ((ev.metaKey || ev.ctrlKey) && ev.key.toLowerCase() === 's') {
            ev.preventDefault();
            savePost();
          }
        });
      });

      function newPost() {
        state.editing = null;
        state.sha = null;
        $('editor-title').textContent = 'Novo post';
        $('post-title').value = '';
        $('post-description').value = '';
        $('post-date').value = new Date().toISOString().slice(0, 10);
        $('post-author').value = 'Fernanda';
        $('post-tags').value = '';
        $('post-body').value = '';
        $('post-draft').checked = false;
        $('btn-delete').classList.add('hidden');
        updateCounter('post-title', 'counter-title', 30, 120);
        updateCounter('post-description', 'counter-description', 150, 160);
        markClean();
        show('view-editor');
      }

      async function editPost(slug) {
        try {
          const { content, sha } = await api('/api/post/' + encodeURIComponent(slug));
          state.editing = slug;
          state.sha = sha;
          parseMdInto(content);
          $('editor-title').textContent = 'Editando post';
          $('btn-delete').classList.remove('hidden');
          updateCounter('post-title', 'counter-title', 30, 120);
          updateCounter('post-description', 'counter-description', 150, 160);
          markClean();
          show('view-editor');
        } catch (err) {
          toast(err.message, 'error');
        }
      }

      function parseMdInto(md) {
        const fmMatch = md.match(/^---\\\\n([\\\\s\\\\S]*?)\\\\n---\\\\n?([\\\\s\\\\S]*)$/);
        if (!fmMatch) {
          $('post-body').value = md;
          return;
        }
        const fm = fmMatch[1];
        const body = fmMatch[2];
        const get = (k) => {
          const re = new RegExp('^' + k + ':\\\\\\\\s*(.+)$', 'm');
          const m = fm.match(re);
          if (!m) return '';
          let v = m[1].trim();
          if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
            try { return JSON.parse(v); } catch { return v.slice(1, -1); }
          }
          return v;
        };
        $('post-title').value = get('title');
        $('post-description').value = get('description');
        $('post-date').value = get('pubDate').slice(0, 10);
        $('post-author').value = get('author') || '';
        const tagsBlock = fm.match(/tags:\\\\s*\\\\n((?:\\\\s+-\\\\s+.+\\\\n?)+)/);
        if (tagsBlock) {
          const tags = tagsBlock[1]
            .split('\\\\n')
            .map((l) => l.replace(/^\\\\s*-\\\\s+/, '').replace(/^"|"$/g, '').trim())
            .filter(Boolean);
          $('post-tags').value = tags.join(', ');
        } else {
          $('post-tags').value = '';
        }
        $('post-draft').checked = get('draft') === 'true';
        $('post-body').value = body.replace(/^\\\\n+/, '');
      }

      async function savePost() {
        const title = $('post-title').value.trim();
        const description = $('post-description').value.trim();
        const pubDate = $('post-date').value;
        // visual feedback de campos inv\xE1lidos
        $('post-title').classList.toggle('input-invalid', !title);
        $('post-description').classList.toggle('input-invalid', !description);
        $('post-date').classList.toggle('input-invalid', !pubDate);
        if (!title || !description || !pubDate) {
          toast('Preencha t\xEDtulo, descri\xE7\xE3o e data antes de publicar.', 'error');
          return;
        }
        const tagsRaw = $('post-tags').value.trim();
        const tags = tagsRaw ? tagsRaw.split(',').map((t) => t.trim()).filter(Boolean) : [];
        const payload = {
          title, description, pubDate,
          author: $('post-author').value.trim(),
          tags,
          draft: $('post-draft').checked,
          body: $('post-body').value,
        };
        const btn = $('btn-save');
        btn.disabled = true;
        btn.innerHTML = 'Publicando...';
        try {
          if (state.editing) {
            payload.sha = state.sha;
            await api('/api/post/' + encodeURIComponent(state.editing), {
              method: 'PUT', body: JSON.stringify(payload),
            });
            markClean();
            toast('Post atualizado. O site \xE9 atualizado em ~30s.', 'success');
          } else {
            await api('/api/post/' + encodeURIComponent(slugify(title)), {
              method: 'POST', body: JSON.stringify(payload),
            });
            markClean();
            toast('Post criado. Voltando para a lista...', 'success');
            setTimeout(() => loadList(), 1200);
          }
        } catch (err) {
          toast(err.message, 'error');
        } finally {
          btn.disabled = false;
          btn.innerHTML = 'Publicar <span style="font-size: 11px; opacity: 0.7; margin-left: 4px;">\u2318S</span>';
        }
      }

      async function deletePost() {
        if (!state.editing) return;
        if (!confirm('Apagar o post? Esta a\xE7\xE3o n\xE3o pode ser desfeita.')) return;
        try {
          await api('/api/post/' + encodeURIComponent(state.editing), {
            method: 'DELETE', body: JSON.stringify({ sha: state.sha }),
          });
          state.dirty = false;
          toast('Post removido.', 'success');
          loadList();
        } catch (err) {
          toast(err.message, 'error');
        }
      }

      function slugify(s) {
        return (s || '')
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036F]/g, '')
          .replace(/[^a-z0-9\\\\s-]/g, '')
          .trim()
          .replace(/\\\\s+/g, '-')
          .slice(0, 80);
      }

      function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
      }
      function escapeAttr(s) { return escapeHtml(s); }

      // \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Bootstrap \u2550\u2550\u2550\u2550\u2550\u2550\u2550
      (async () => {
        try {
          const { authenticated } = await api('/api/session');
          if (authenticated) await loadList();
          else show('view-login');
        } catch {
          show('view-login');
        }
      })();
    <\/script> </body> </html>`])), renderHead());
}, "F:/MENTORIA/SITE FO/arquiteturafo/src/pages/admin/index.astro", void 0);

const $$file = "F:/MENTORIA/SITE FO/arquiteturafo/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
