# mybld

Marketing/portfolio site for a construction company. A single Vite + React SPA that embeds the Sanity Studio CMS at a sub-route — there is no backend server; the site reads content directly from Sanity's hosted API at runtime, and content editors manage it through the embedded Studio.

## Getting started

```bash
npm install
npm run dev
```

This starts the Vite dev server, serving both the public site (`/`) and the embedded Sanity Studio (`/sanity`) together.

Other scripts:

- `npm run build` — type-check (`tsc -b`) then build with Vite; output goes to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint over the whole project

## Sanity Studio access

The Studio is reachable at `/sanity` both locally and in production (e.g. `https://yourdomain/sanity`). To get edit access, you need to be added as a member of the Sanity project:

- Project ID: `ot86yj05`
- Dataset: `production`

This project ID/dataset pair is duplicated in three places and must stay in sync if it ever changes: `sanity.config.ts`, `sanity.cli.ts`, and `src/sanity.client.ts`.

## Adding a new Sanity-backed section

Content model is singleton-heavy — most schema types in `src/schemaTypes/` (hero, howWeWork, servicesSection, aboutUs, contactUs, navigation, footer, announcementBanner, projectsPage) represent a single document per site section, each with a hardcoded `_id` matching its `_type`. `project` is the one real collection type.

To add a new section:

1. Add the schema type in `src/schemaTypes/`.
2. Register it in `src/schemaTypes/index.ts`.
3. Add its singleton entry to `structure.ts` (so it shows up in the Studio's editing UI).
4. Add a GROQ query + `useXData()` hook in `src/hooks/useSanityData.ts`.
5. Run `npm run typegen` to regenerate types.

## Type generation

```bash
npm run typegen
```

Regenerates `src/sanity.types.ts` from the live Sanity schema (`sanity schema extract && sanity typegen generate`). Run this after adding or changing a field in any `src/schemaTypes/*.ts` file. Requires being logged in to the Sanity CLI.

## Multi-language support

The site defaults to Bulgarian and also supports English and Russian.

- **State:** `LanguageProvider` / `useLanguage()` (`src/context/LanguageContext.tsx`) hold the active locale. It's scoped to the public `Layout` in `src/App.tsx` only, so the embedded Sanity Studio (`/sanity`) is unaffected — the Studio's own editor language is a separate concern.
- **Persistence:** the chosen locale is saved to `localStorage` under the key `mybld-locale`. First-time visitors see Bulgarian; nothing is written until they actively pick a language, so returning visitors get their previous choice automatically.
- **Switcher:** `src/components/LanguageSwitcher.tsx`, rendered inside `src/components/Navigation.tsx`.
- **Sanity content model:** translations are stored as flat sibling fields next to the original Bulgarian field, e.g. `title`, `titleEn`, `titleRu`. In the Studio, these are grouped into BG / EN / RU tabs via Sanity's `groups`/`group` field-grouping feature — no i18n plugin is used. Because GROQ queries already fetch whole documents, no query changes are needed when adding translation fields.
- **Frontend consumption:** `getLocalizedField(doc, baseField, locale)` (`src/lib/i18n.ts`) reads the right field for the current locale and falls back to the Bulgarian value if a translation is missing or blank, so the site never shows blank text while translations are being filled in. It's generic, so it also works for non-string values like the Portable Text `fullDescription` field on `project`.
- **Status:** this pattern is applied across all schemas/components — hero, navigation, footer, announcement banner, how-we-work, services, about us, contact us, projects, featured projects, and the projects page. When adding a brand new translatable field to any schema, follow the same convention: add `fieldEn`/`fieldRu` siblings (grouped into BG/EN/RU Studio tabs where the schema already uses `groups`), include them in the relevant GROQ query if it isn't a full-document wildcard fetch, and read them in the component via `getLocalizedField`.

## Build & deploy

`npm run build` outputs to `dist/`. `.github/workflows/deploycPanel.yml` deploys to cPanel hosting via FTP on every push to `main`.
