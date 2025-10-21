# SA Healthcare Starter

This is a Next.js starter template designed for South African healthcare practices, ensuring compliance with HPCSA and POPIA regulations. The project is structured to facilitate easy content management using MDX and includes a settings configuration for practice details.

## Features

- Built with the latest stable version of Next.js, TypeScript, and Tailwind CSS.
- Supports MDX for content pages and blog posts.
- Configurable settings through a JSON file.
- Shared components for consistent layout and functionality.
- Serverless contact form with consent management.
- Health check route for uptime monitoring.

## Project Structure

```
sa-healthcare-starter
├── app
│   ├── api
│   │   └── contact
│   │       └── route.ts
│   ├── health
│   │   └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ConsentNotice.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── MapLink.tsx
│   ├── SEO
│   │   ├── Head.tsx
│   │   └── index.ts
│   ├── Schema
│   │   ├── Article.tsx
│   │   ├── FAQ.tsx
│   │   ├── LocalBusiness.tsx
│   │   ├── Organization.tsx
│   │   └── index.ts
│   ├── SkipToContent.tsx
│   └── WhatsAppCTA.tsx
├── content
│   ├── data
│   │   └── settings.json
│   ├── pages
│   │   ├── index.mdx
│   │   └── about.mdx
│   ├── posts
│   │   └── welcome.mdx
│   └── partials
│       └── compliance.mdx
├── lib
│   ├── config.ts
│   ├── mdx-components.tsx
│   └── types.ts
├── public
│   └── robots.txt
├── .env.example
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-repo/sa-healthcare-starter.git
   cd sa-healthcare-starter
   ```

2. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

### Running the Development Server

To start the development server, run:

```
npm run dev
```

or

```
yarn dev
```

Visit `http://localhost:3000` in your browser to see the application.

### Building for Production

To build the application for production, run:

```
npm run build
```

or

```
yarn build
```

### Editing Content

Content can be edited in the `/content/pages` and `/content/posts` directories using MDX format. Update the `settings.json` file in `/content/data` to configure practice details.

### Health Check

The health check route can be accessed at `/health` to verify the application is running. It returns a JSON response:

```json
{ "ok": true }
```

## Compliance

This project adheres to HPCSA and POPIA regulations. Ensure that all content and data handling practices comply with these standards.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Design system and style guide

This starter includes a minimal, premium UI tailored for healthcare with accessible defaults.

### Theme tokens

- Font: Montserrat (loaded via next/font). Tailwind alias: `font-sans` maps to `var(--font-montserrat)`.
- Colors: Navy/Slate/White palette
   - Navy scale: `navy-50` … `navy-950`
   - Neutral: Tailwind `slate` and `white`
- Radius: rounded-2xl (16px), rounded-3xl (20px)
- Shadows:
   - `shadow-softer`: 0 6px 20px -10px rgba(2, 6, 23, 0.12)
   - `shadow-soft`: 0 10px 30px -12px rgba(2, 6, 23, 0.18)
- Spacing additions: `py-18` (4.5rem), `py-22` (5.5rem), `py-30` (7.5rem)

See `tailwind.config.ts` for extend settings.

### Accessibility

- Focus rings use `:focus-visible` with `ring-navy-400` and `ring-offset-white`.
- A visible “Skip to content” link is provided and only appears on focus.
- Motion is gentle by default and respects `prefers-reduced-motion`.
- Contrast aims to meet WCAG AA: navy on white and slate on white both pass; avoid low-contrast combinations like `slate-400` on white for body text.

### Components

Reusable UI in `components/ui`:

- `Hero`: headline section with optional kicker, subtitle, CTA, and media.
- `Section`: consistent max-width and vertical rhythm for content blocks.
- `Card`: rounded-2xl, soft shadow, focus ring, subtle hover.
- `CTA`: accessible buttons/links with `primary | secondary | ghost` variants.

Import from `@/components/ui`:

```tsx
import { Hero, Section, Card, CTA } from '@/components/ui';
```

Example:

```tsx
<Hero
   kicker="Trusted, Compassionate Care"
   title="Modern healthcare with a human touch"
   subtitle="Quality care, clear communication, and accessible services for every patient."
   cta={<>
      <CTA>Book an appointment</CTA>
      <CTA variant="secondary" as="a" href="#services">Explore services</CTA>
   </>}
/>

<Section id="services" title="Our Services" description="Evidence-based care across key specialties.">
   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card title="General Practice" subtitle="Comprehensive primary care.">Routine check-ups…</Card>
   </div>
</Section>
```

### WhatsApp CTA configuration

If you use the floating WhatsApp CTA, set your number in international format via environment variable:

- Preferred: NEXT_PUBLIC_WHATSAPP_NUMBER (exposed to the client)
- Fallback: WHATSAPP_NUMBER (used at build on server)

Example .env.local:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=15551234567
```

Only digits are required; plus signs and spaces will be stripped.

### Usage notes

- Use `text-slate-700` for body copy on white; `text-slate-900` for headings.
- Use `text-navy-800` for emphasized links or CTAs; ensure background/foreground contrast passes AA.
- Prefer `shadow-softer` for cards and `shadow-soft` for hero/media or modals.
- Spacing: prefer `py-18`/`py-22` between sections for balanced rhythm.