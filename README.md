<div align="center">

# Frontend UX Portfolio

Modern, fully static, bilingual (EN/ES) portfolio built with Next.js App Router, focused on accessibility, performance, and maintainable content architecture.

</div>

---

## Table of Contents

1. Overview
2. Key Features
3. Tech Stack
4. Architecture & Directory Layout
5. Content Model & i18n Strategy
6. Styling System & UI Tokens
7. Accessibility & Performance Practices
8. Developer Workflow (Scripts & Quality Gates)
9. Deployment (GitHub Pages + Custom Domain)
10. Extending the Project
11. FAQ / Troubleshooting
12. License / Ownership

---

## 1. Overview

This repository powers a personal portfolio showcasing profile information, projects, blog teasers, social links, and a résumé. The site is exported as static HTML (no server runtime) and deployed to GitHub Pages behind a custom domain.

Guiding principles:

- Keep content shape explicit (TypeScript + JSON) over generated schemas.
- Centralize cross‑section data selection (single helper) to avoid duplication.
- Favor small, composable UI primitives (glassmorphism theme) with clear tokens.
- Provide a frictionless bilingual experience without heavy i18n frameworks.

---

## 2. Key Features

| Domain               | Highlights                                                                                                           |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Internationalization | Route‑level locale segment (`/[locale]`), lightweight message loader, separate résumé label namespace.               |
| Content access       | Single selector `getPortalData(locale)` encapsulates locale fallback.                                                |
| Résumé page          | Fully static, dynamic JSON import per locale, isolated domain types in `types/resume.ts`.                            |
| UI System            | Centralized glassmorphism with CSS variables, brand-compliant design tokens, and professional hover interactions.    |
| Accessibility        | Semantic headings, focus-visible styles, reduced-motion respect, color contrast mindful.                             |
| Performance          | Static export, no client data fetching for core content; minimal client JS in section components only where needed.  |
| Deployment           | GitHub Pages static export (`output: 'export'`), custom domain via `CNAME`, workflow cleans legacy config artifacts. |
| Maintainability      | Path aliases, strict TypeScript, centralized types, minimal coupling.                                                |

---

## 3. Tech Stack

| Layer      | Choice                         | Notes                                      |
| ---------- | ------------------------------ | ------------------------------------------ |
| Framework  | Next.js 15 (App Router)        | Static export mode (`output: 'export'`).   |
| Language   | TypeScript (strict)            | Domain models in `types/*`.                |
| UI         | React 19 + Tailwind CSS        | Utility‑first + tokens in `globals.css`.   |
| i18n       | Lightweight async JSON imports | No runtime heavy lib.                      |
| Deployment | GitHub Actions → GitHub Pages  | Workflow in `.github/workflows/pages.yml`. |
| Hosting    | Static (no server)             | Compatible with CDN caching.               |

---

## 4. Architecture & Directory Layout

```
app/
  [locale]/                 # Locale root (en, es) + localized layout
    layout.tsx              # Provides i18n context + chrome (Header/Footer)
    sections/...            # Localized section entry points
  components/
    ui/                     # Design primitives (glass + gradient + section wrapper)
    sections/               # Reusable domain sections
    Header.tsx, Footer.tsx, LanguageSwitcher.tsx
  i18n/                     # Client provider (I18nProvider)
  globals.css               # Design tokens, base, animations
data/
  portal.json               # Multi-locale portal bundle (about, projects, blog, social, store)
  resume-en.json / resume-es.json
i18n/
  resume/en.json / es.json  # UI labels specific to résumé domain
lib/
  portal.ts                 # getPortalData(locale) selector + fallback
public/                     # Static assets, SVGs, portrait, logos
types/
  portal.ts, resume.ts      # Domain model definitions
.github/workflows/pages.yml # Deployment pipeline (static export)
```

### Path Aliases

Configured in `tsconfig.json`:

```
@/app/*       -> ./app/*
@/components/*-> ./app/components/*
@/lib/*       -> ./lib/*
@/types/*     -> ./types/*
@/data/*      -> ./data/*
@/i18n/*      -> ./i18n/*
```

---

## 5. Content Model & i18n Strategy

| Source                      | Purpose                                                                                        | Locale Handling                                                      |
| --------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `data/portal.json`          | Primary site content (about summary, skills, projects, blog posts, social links, store teaser) | Stores an object keyed by locale; fallback logic in `getPortalData`. |
| `data/resume-<locale>.json` | Structured résumé data (experience, education, tech profile)                                   | Separate file per locale.                                            |
| `i18n/resume/<locale>.json` | Résumé UI labels (section headings like Experience, Education)                                 | Isolated namespace prevents mixing content vs labels.                |

Design rationale:

- Keep UI labels separate from narrative / structured content to enable future localization workflows.
- Provide a single point of fallback instead of sprinkling `?? bundle.en` logic.
- Avoid over-engineered schema generation; rely on curated TS interfaces.

Loading flow (résumé page):

1. Extract locale from route params (statically generated via `generateStaticParams`).
2. Dynamic import both résumé JSON and its label namespace via relative path (ensures bundler resolution).
3. Render static HTML (no client fetch round‑trip).

---

## 6. Styling System & UI Tokens

Centralized glassmorphism design system in `globals.css` with CSS variables for light/dark mode compatibility:

**Glass System Architecture:**

- **CSS Classes**: `.glass-surface`, `.glass-interactive`, `.glass-panel`, `.glass-button` with variants
- **Brand Colors**: Original purple palette (`#8D69BB`) with professional hover effects
- **Adaptive Tokens**: CSS variables for backgrounds, borders, shadows, and gradients that adjust for dark mode
- **Professional Interactions**: Apple-inspired subtle borders and big tech hover animations

**Brand Palette (RGB Variables):**

- Primary: `--accent-primary-rgb: 141 105 187` (Brand purple)
- Secondary: `--accent-secondary-rgb: 99 102 241` (Indigo)
- Contrast: `--accent-contrast-rgb: 204 44 44` (Persian red)

**Glass Components:**
| Component | Responsibility | Features |
| --------- | ------------- | -------- |
| `GlassPanel` | Content containers | Centralized `.glass-panel` class, subtle hover borders |
| `GlassButton` | Interactive elements | Primary/secondary variants, professional shadows on hover |
| `Section` | Layout wrapper | Semantic structure + responsive spacing |
| `GradientBackground` | Animated backdrop | Pure CSS radial gradients, motion-safe |
| `MobileMenu` | Navigation overlay | Portal-based positioning, brand-compatible hover states |

---

## 7. Accessibility & Performance Practices

| Area       | Practice                                                          |
| ---------- | ----------------------------------------------------------------- |
| Motion     | Animation gated by `prefers-reduced-motion`.                      |
| Semantics  | Proper heading hierarchy per section; landmark roles via layout.  |
| Focus      | Visible outlines (`focus-visible`) on interactive elements.       |
| Color      | Contrast mindful; avoid text embedded inside noisy gradients.     |
| Payload    | Static generation, no client fetching for résumé/portal data.     |
| JS Surface | Only hydrate where interactivity exists (language switcher, nav). |

---

## 8. Developer Workflow (Scripts & Quality Gates)

Scripts (see `package.json`):
| Script | Description |
| ------ | ----------- |
| `dev` | Run Next dev server. |
| `build` | Static export build (`next build` with `output: 'export'`). |
| `start` | Start production server (not usually needed for Pages). |
| `lint` / `lint:fix` | Run ESLint (import/order, a11y, tailwindcss plugins). |
| `format` | Prettier formatting. |

Quality gates recommended pre‑PR:

1. `npm run lint` (should pass with only allowed warnings).
2. `npm run build` (confirms types + static export succeed).
3. Manual smoke test (open `out/index.html` locally if needed).

---

## 9. Deployment (GitHub Pages + Custom Domain)

Workflow: `.github/workflows/pages.yml`
Key points:

- Uses `actions/configure-pages@v5` + static site upload.
- Cleans any auto-generated `next.config.js` to force `next.config.ts` usage.
- Custom domain: `CNAME` file (`heysery2k.com`).
- Environment variable `NEXT_PUBLIC_BASE_PATH` left empty for root domain hosting.

Local reproduction of export:

```
npm ci
npm run build
# Output in ./out (ready for any static host)
```

---

## 10. Extending the Project

| Goal                             | Approach                                                                                                                |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Add new locale                   | Duplicate label JSON + extend portal.json + add locale to `locales` array in `[locale]/layout.tsx`.                     |
| Add section (Testimonials, etc.) | Create component under `app/components/sections/`, map data in `portal.json`, add route or include in home composition. |
| Add CMS later                    | Replace JSON loaders with a build-time fetch script writing to `data/` (retain same shape).                             |
| Add dark/light themes            | Extend CSS variables with theme scopes and toggle via a provider.                                                       |
| Analytics                        | Inject script in root layout; keep out of client component sections for minimal hydration.                              |

---

## 11. FAQ / Troubleshooting

| Issue                              | Resolution                                                                     |
| ---------------------------------- | ------------------------------------------------------------------------------ |
| Build error about `next.config.js` | Workflow now removes auto-generated file; ensure only `next.config.ts` exists. |
| Missing translations               | Fallback returns English via `getPortalData` if locale key not present.        |
| Assets 404 after deploy            | Confirm custom domain DNS + ensure base path is empty with CNAME.              |
| Résumé labels not updating         | Edit `i18n/resume/<locale>.json`; rebuild (no runtime fetch).                  |

---

## 12. License / Ownership

Content (text, résumé data, images) © Owner. Source code structure may be reused with attribution (add license if you want explicit terms — currently unspecified).

---

## Appendix A – Quick Directory Glance

```
data/portal.json            # Multi-locale content bundle
data/resume-en.json         # English résumé data
data/resume-es.json         # Spanish résumé data
i18n/resume/en.json         # Résumé UI labels (EN)
i18n/resume/es.json         # Résumé UI labels (ES)
lib/portal.ts               # getPortalData(locale)
types/resume.ts             # Résumé domain model
types/portal.ts             # Portal content types
app/[locale]/sections/...   # Locale-specific routes
```

---

## Contributing (Personal Project Note)

Currently a personal codebase; PRs not enabled. If you fork:

1. Adjust `CNAME` / remove if not using custom domain.
2. Update `brand` colors & tokens in `globals.css`.
3. Regenerate static export.

---

Feel free to open an issue (or personal note) for architectural suggestions, performance improvements, or feature ideas.

— End of Documentation —
