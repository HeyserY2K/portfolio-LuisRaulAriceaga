## Frontend UX Portfolio – Architecture and Quality

This project is a Next.js (App Router) portfolio with a modern glassmorphism UI and animated gradient background.

### Structure

- `app/`
  - `i18n/` – lightweight i18n provider
  - `lib/` – tiny utilities (`cn`)
  - `components/`
    - `ui/` – reusable primitives: `GlassPanel`, `GlassButton`, `Section`, `GradientBackground` (also exported via `ui/index.ts`)
    - `sections/` – page sections: `Hero`, `AboutSection`, `ProjectsGrid`, `BlogList`, `SocialLinks`, `StoreTeaser`
    - `Header`, `Footer`, `LanguageSwitcher`
  - `[locale]/` – localized layout and home route
  - `sections/*` – localized deep links (redirects or content)
  - `globals.css` – tokens (colors/glass), animations and base styling

### Quality & DX

- ESLint (Next + import + a11y + tailwindcss), Prettier
- Strict TS, path aliases (`@/app/*`, `@/components/*`, `@/data/*`, `@/types/*`)
- Transform-only animations with `prefers-reduced-motion` support
- Accessibility: focus-visible rings, sufficient contrast, semantic HTML

### UI Tokens

- Brand accents: purple, indigo, aqua, fuchsia, persian red
- Glass tokens: blur, border, highlight, shadow strengths, alpha

### Commands

- `npm run dev` – start dev server
- `npm run build` – prod build
- `npm run start` – start prod
- `npm run lint`, `npm run lint:fix`, `npm run format`

### Adding Content

Place your portrait at `public/portrait.jpg`. Update `data/*` and section components as needed.
