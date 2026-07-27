# Site F.O Arquitetura

Site institucional entregue para **F.O Arquitetura**. Stack: **Astro 5 + Markdown + painel administrativo + Vercel**.

## Estrutura final

```
/             -> Home one-page
/blog         -> Listagem de posts
/blog/[slug]  -> Post individual
/admin        -> Painel administrativo
```

## Estrutura principal

```
src/
├── components/       -> Header e Footer
├── content/blog/     -> Posts em Markdown
├── content.config.ts -> Schema dos posts
├── data/contacts.json -> Contatos e imagens editaveis
├── layouts/          -> BaseLayout com SEO
├── pages/            -> Home, blog e painel
└── styles/global.css -> Tokens alinhados ao brandbook

public/
├── favicon.svg
├── logo-completo-transparent.svg
├── logo-completo.svg
├── logo-icone-transparent.svg
├── logo-icone.svg
```

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy

1. Subir o conteudo deste diretorio para o repositorio GitHub da aluna
2. Importar o repositorio no Vercel
3. Apontar o dominio `www.foarquitetura.com.br`
4. Conferir SSL automatico e deploy a cada push na branch `main`

## Painel administrativo

O painel fica em `/admin`. O WhatsApp real deve ser informado no painel em formato E.164; os CTAs principais usam esse valor quando estiver preenchido.

## Tokens do brandbook

| Token | Valor |
|-------|-------|
| `--primary` | `#1A1A1A` |
| `--secondary` | `#0ABAB5` |
| `--bg` | `#FAFAF7` |
| `--dark` | `#0F1419` |
| `--display` | `'Playfair Display', Georgia, serif` |
| `--body` | `'Inter', -apple-system, BlinkMacSystemFont, sans-serif` |

## Materiais de referencia

- Brandbook: `../02-Brandbook/brandbook.pdf`
- Logos finais: `../01-Logos/`
- Resumo da identidade: `../04-Identidade-Visual.md`
