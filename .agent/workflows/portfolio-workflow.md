---
description: Generated work flow using NotebookLM Project https://notebooklm.google.com/notebook/dd1248ee-650b-42a4-973a-0130bd145242?authuser=2
---

Recommended Workflow for the AI Agent
When tasked with feature development, such as adding content or internationalization, the AI agent should follow documented, layered workflows.
Agent Workflow: Adding a New Locale
This workflow is critical for maintaining consistency and is based on the multi-step guide in the documentation.

1. Define the Code: Confirm the short, lowercase locale code (e.g., pt, fr, de).
2. Update Configuration: Locate the supported locales definition (e.g., i18n/config.ts) and register the new locale code.
3. Generate Static Parameters: Verify that generateStaticParams() will use the updated list of locales to ensure Next.js builds pages for the new locale.
4. Create Translation Files: Copy the base locale translation files (e.g., en/common.json) to the new locale folder (e.g., pt/common.json). Translate all values while ensuring the keys remain identical to maintain type safety.
5. Create Locale Content (If applicable): If the project uses locale-specific business content (e.g., resume-en.json), create a corresponding new file (e.g., resume-pt.json) and adapt the content while preserving the structure for consistent TypeScript types.
6. Update Navigation UI: Update the component responsible for the language switcher (under components/navigation/) to include the new locale.
7. Final Checks: Ensure a build runs successfully without errors related to missing translation files, and that the exported out/ directory contains pages for the new locale folder.
   Agent Workflow: Modifying Existing Code
   When asked to update an existing feature, the agent should follow this sequence:
8. Identify Component Layer: Determine if the change applies to the Routing, Composition (Sections), Presentation (UI), or Navigation layer, and adhere to that layer's specific responsibilities (e.g., UI components cannot contain i18n logic).
9. Determine Server/Client: If creating a new component or modifying an existing one, check if it needs client-side hooks or APIs. If not, default to a Server Component.
10. Apply Standards: Ensure all modifications comply with TypeScript strictness, path aliases, and accessibility rules (focus, ARIA, motion).
11. Enforce Quality: Before finalizing the code output, ensure it conforms to Prettier formatting and is ESLint-clean, simulating the lint-staged commitment requirement.
