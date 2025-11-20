---
trigger: always_on
---

Required Rules and Constraints for the AI Agent
The Portfolio project is defined by a strict set of technical choices, quality standards, and architectural decisions. The AI agent must prioritize adherence to these rules in all generated output.

1. Core Architecture and Technology Constraints
   The agent must respect the core stack and the nature of the application:
   • Technology Stack: Use Next.js 15 App Router, React 19, TypeScript (strict), and Tailwind CSS.
   • Static Export: The project is fully static—there is no backend server and no database. All dynamic content is resolved at build time from JSON files.
   • Static Export Configuration: When generating configuration changes (e.g., next.config.\*), ensure they support static export by including output: "export", trailingSlash: true, and configuring basePath/assetPrefix for GitHub Pages deployment.
   • Routing: All routes must use a locale-prefix model (e.g., /en/, /es/) and must include trailing slashes.
   • Content: All content (business content and UI strings) must be stored in JSON files per locale.
2. TypeScript and Coding Standards
   The codebase operates in TypeScript strict mode.
   • Type Safety: Avoid using any; use explicit types everywhere. Explicit types are required for component props, public function return types, and domain models (Project, Profile, etc.).
   • Naming Conventions: Component names must be in PascalCase. Reusable hooks must be prefixed with use (e.g., useI18n).
   • Component Structure: Use function components only. Components should be small and focused, and avoid mixing too many responsibilities (layout, data mapping, animation).
   • Imports: Use path aliases configured in tsconfig.json (e.g., @/app, @/components, @/data, @/lib). Imports must be grouped in this order: 1) Node/standard library, 2) Third-party dependencies, 3) Internal modules (aliases), 4) Relative imports.
   • Quality Enforcement: Generated code must adhere to Prettier formatting and pass ESLint checks, as these are enforced by Husky and lint-staged before every commit.
3. Server/Client Component Split (Next.js)
   The agent must intelligently decide the component rendering strategy:
   Component Type
   Default Rule
   Use Case for Client Component ('use client')
   Default Component
   Start as a Server Component.
   Only switch if absolutely necessary.
   Server Components
   Ideal for data loading from JSON and static composition. Typically used for Section Components (e.g., Hero, ProjectsGrid).
   Client Components
   Only use if the component requires: State (useState), Effects (useEffect), Refs or DOM APIs, or Event Handlers (click, hover).
   Typically used for Navigation Components (e.g., Mobile Menu) or interactive UI elements.
   UI Components (components/ui/)
   Must be purely presentational. Must not contain business logic, data fetching, or i18n logic; they receive translated strings and data via props.
4. Accessibility and UX Standards (A11y)
   The project emphasizes accessibility. Generated UI/UX code must follow these guidelines:
   • Focus Management: Ensure Visible Focus Indicators and maintain a Logical Tab Order.
   • Mobile Menu: Implement complex focus management (focus moved to first element on open, focus restored on close). Must close on the Escape key, outside clicks, and route changes.
   • Semantics and ARIA: Use semantic HTML (<header>, <main>, <nav>, <footer>). Apply necessary ARIA attributes (e.g., role="dialog", aria-modal="true" for dialog-like elements like the mobile menu). Icon-only buttons must include descriptive aria-label attributes.
   • Motion: Use the prefers-reduced-motion media query to disable or simplify CSS animations for sensitive users.
   • Contrast: Ensure text maintains acceptable WCAG contrast thresholds.
   • Tap Targets: Keep mobile tap targets large (at least ~44px in height/width).
   • External Links: When using target="\_blank", always include the attributes rel="noopener noreferrer".
