# Copilot Instructions for Rahma Project

## Project Overview

This is a React + TypeScript + Vite web application for **Rahma Association** (جمعية الرحمة) - an Islamic charitable organization. The site is content-heavy with multiple pages for initiatives, scholars, donations, and transparency.

**Tech Stack:** React 18, TypeScript, React Router v7, Tailwind CSS, Vite, Supabase, Lucide React icons

## Architecture Patterns

### Single Data Source

- **Location:** [src/data/siteData.ts](src/data/siteData.ts)
- All static content (initiatives, stats, contact info, scholar data) is exported as constants
- Content updates only require editing this file—no database calls needed
- Data exports include: `associationInfo`, `contactInfo`, `socialLinks`, `donationInfo`, `stats`, `initiatives`, `scholars`, `news`, `lessons`, `testimonials`, `faqItems`

### Page Structure

- Each page is a separate component in [src/pages/](src/pages/)
- Pages are imported and routed in [src/App.tsx](src/App.tsx)
- Pages import data from `siteData.ts` directly
- All pages share the same layout: Header → Main Content → Footer (from [src/App.tsx](src/App.tsx#L20-L22))

### Component Reuse

- **Header** ([src/components/Header.tsx](src/components/Header.tsx)): Navigation with dropdown menus, mobile-responsive hamburger, uses ref-based click-outside handling
- **Footer** ([src/components/Footer.tsx](src/components/Footer.tsx)): Consistent footer across all pages
- **ScrollToTop** ([src/components/ScrollToTop.tsx](src/components/ScrollToTop.tsx)): Scrolls to top on route change

## Styling & Theming

- **Tailwind CSS** for all styling (no CSS-in-JS)
- Color scheme uses emerald as primary (e.g., `emerald-50` gradient background in App)
- Icons from **Lucide React** library
- Responsive design must support mobile (Header has hamburger menu pattern)

## Important Conventions

1. **Content is immutable in pages**—always edit [src/data/siteData.ts](src/data/siteData.ts) first
2. **Routing uses React Router v7**—use `<Link>` and `useLocation()` for navigation
3. **Accessibility**: Use semantic HTML; form elements should have proper labels
4. **Internationalization**: Site uses Arabic text; preserve RTL text carefully when adding content
5. **Icons**: Use Lucide React imports (e.g., `Menu`, `ChevronDown`, `Heart`) for UI elements

## Key Workflows

### Running the Project

```bash
npm run dev        # Start Vite dev server (http://localhost:5173)
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint check (eslint.config.js)
npm run typecheck  # TypeScript validation
```

### Adding New Pages

1. Create component in [src/pages/NewPage.tsx](src/pages/)
2. Import in [src/App.tsx](src/App.tsx#L1-L18)
3. Add route in the `<Routes>` block ([src/App.tsx](src/App.tsx#L28-L42))
4. Add navigation link in [src/components/Header.tsx](src/components/Header.tsx#L42-L45) (mainNavLinks or moreLinks)

### Adding New Content

1. Add data object to [src/data/siteData.ts](src/data/siteData.ts)
2. Import and destructure in page components
3. Map over arrays with TypeScript typing maintained

## External Dependencies

- **Supabase** (@supabase/supabase-js): Initialized but check if used in any page component
- **React Router DOM**: v7.12.0—use latest patterns (no useHistory, use useLocation)
- **Lucide Icons**: Browse available icons at lucide.dev

## Quality Standards

- **ESLint**: Must pass linting before commits
- **TypeScript**: Use strict mode; no `any` types unless unavoidable
- **Component Design**: Keep pages under 300 lines; extract sub-components for reuse
