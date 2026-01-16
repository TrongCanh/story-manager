You are designing a frontend for a professional story-management web app.

GENERAL RULES:

- Always follow this document strictly.
- Never invent new UI styles outside these rules.
- UI must be clean, modern, minimal, and scalable.
- Avoid flashy colors, gradients, or visual noise.
- Think like a professional SaaS product, not a demo.

TECH STACK:

- ReactJS
- TailwindCSS
- No backend, mock data only
- State is local (useState / Context)
- Dark / Night theme supported
- Multi-language: EN / VI

DESIGN PRINCIPLES:

1. Layout-first, component-second
2. Desktop-first (tablet & mobile responsive later)
3. Use grid-based layouts
4. Always leave white space
5. Typography > color > animation
6. Every screen must have a clear hierarchy

TAILWIND RULES:

- Use neutral colors only (gray, slate, zinc)
- Primary accent: ONE color only
- Border radius: rounded-xl or rounded-2xl
- Shadow: soft, minimal
- No inline styles
- No arbitrary values unless necessary

THEME RULES:

- light: gray-50 background
- dark: gray-900 background
- night: zinc-950 background
- Theme controlled by class on <html>

COMPONENT RULES:

- Pages compose Sections
- Sections compose Components
- Components must be reusable
- No page-specific styling inside components

DATA RULES:

- All entities are time-based
- Relations are versioned by time
- UI must always display "effective time"

UX RULES:

- No modals by default → prefer side panels
- Forms are progressive, not overwhelming
- Always show context (breadcrumbs / headers)

LANGUAGE:

- All labels must support i18n
- No hard-coded text

If any request violates this document, you must reject it.
