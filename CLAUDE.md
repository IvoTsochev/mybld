# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A marketing/portfolio site for a construction company ("mybld") built as a single Vite + React app that embeds the Sanity Studio CMS at a sub-route, rather than running Studio as a separate app. There is no backend server — the React site reads content directly from Sanity's hosted API at runtime, and content editors use the embedded Studio to manage it.

## Commands

- `npm run dev` — start Vite dev server (site + embedded Studio)
- `npm run build` — type-check (`tsc -b`) then build with Vite; output goes to `dist/`
- `npm run lint` — run ESLint over the whole project
- `npm run preview` — preview the production build locally
- `npm run typegen` — regenerate `src/sanity.types.ts` from the live Sanity schema (`sanity schema extract` + `sanity typegen generate`); run this after adding/changing a field in any `src/schemaTypes/*.ts` file
- No test runner is configured in this repo.

## Architecture

**Two apps, one codebase.** `src/App.tsx` mounts `react-router-dom` routes:
- `/sanity/*` → `src/pages/SanityStudio.tsx`, which renders the Sanity `<Studio>` component using the config from `sanity.config.ts` (imported directly from the site build — no separate Studio deployment).
- All other routes (`/`, `/projects`, `/projects/:id`) → the public site, wrapped in a shared `Layout` (announcement banner + `Navigation` + `Footer`).

**Content model is singleton-heavy.** Most schema types in `src/schemaTypes/` (hero, howWeWork, servicesSection, aboutUs, contactUs, navigation, footer, announcementBanner, projectsPage) represent a single document per site section, each with a hardcoded `_id` matching its `_type` (e.g. the hero document's `_id` is always `"hero"`). `structure.ts` defines the Studio's editing UI around this: each singleton section is a direct link to `S.document().schemaType(type).documentId(type)` rather than a document list. `project` is the one real collection type (multiple documents, listed via `S.documentTypeListItem('project')`).

**Data fetching pattern.** `src/sanity.client.ts` creates the Sanity client (hardcoded `projectId`/`dataset`, CDN enabled). `src/hooks/useSanityData.ts` centralizes all content queries as one `useXData()` hook per section, each a thin `@tanstack/react-query` wrapper around a GROQ query built with `defineQuery`. When adding a new Sanity-backed section: add the schema type in `src/schemaTypes/`, register it in `src/schemaTypes/index.ts`, add its singleton entry to `structure.ts`, add a query + hook in `useSanityData.ts`, then run `npm run typegen` to get types in `src/sanity.types.ts`.

**Sanity project config** (`projectId: 'ot86yj05'`, `dataset: 'production'`) is duplicated in three places that must stay in sync: `sanity.config.ts`, `sanity.cli.ts`, and `src/sanity.client.ts`.

**Styling** uses Tailwind CSS v4 via the `@tailwindcss/vite` plugin (no separate Tailwind config file — v4 uses CSS-based config, see `src/index.css`). `styled-components` is also a dependency but Tailwind is the primary styling approach.

**React Compiler** is enabled via `babel-plugin-react-compiler` (wired through `@rolldown/plugin-babel` in `vite.config.ts`), so avoid manual `useMemo`/`useCallback` micro-optimizations — the compiler handles this automatically.

## Deployment

`.github/workflows/deploycPanel.yml` deploys to cPanel hosting via FTP on every push to `main`: it runs `npm ci && npm run build`, then uploads a `./build/` directory. Note Vite's actual build output directory is `dist/` (see `.gitignore` and `eslint.config.js`'s `globalIgnores(['dist'])`) — check this mismatch before assuming the deploy step is correctly picking up build output.
