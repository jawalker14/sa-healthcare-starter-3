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