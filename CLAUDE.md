# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # start production server
npm run lint     # ESLint (flat config, no --fix by default)
```

No test runner is configured.

## Stack

- **Next.js 16** with App Router and React Compiler (`reactCompiler: true` in next.config.ts)
- **React 19**
- **Tailwind CSS 4** — uses `@import "tailwindcss"` syntax (not `@tailwind` directives from v3); theme defined with `@theme inline` block inside `globals.css`
- **TypeScript** strict mode; path alias `@/*` → `src/*`
- **graphql-request 7** for data fetching against a WordPress WPGraphQL endpoint
- **embla-carousel-react** for carousel components

## Environment

Requires `.env.local` with:

```
GRAPHQL_URL=https://avenir.kangoo.digital/graphql
```

Falls back to `http://localhost:10003/graphql` if unset.

## Architecture

### WordPress as Headless CMS

All content (blog posts, categories) is sourced from a WordPress site via WPGraphQL. Pages are server-rendered or statically generated — there are no API routes; data fetching happens directly in Server Components.

### Data Layer

The GraphQL client lives in `src/lib/grapqhl/` (intentional typo in directory name — don't rename it). `client.ts` exports a singleton `GraphQLClient` pointed at `GRAPHQL_URL`. All queries are defined as `gql` template literals in `queries.ts` alongside their TypeScript response types (`PostPreview`, `PostFull`, `Category`, etc.) and called via `client.request<T>(QUERY, variables)`.

Available queries: `GET_POSTS_LIST`, `GET_POST_BY_SLUG`, `GET_ALL_CATEGORIES`, `GET_CATEGORY_BY_SLUG`, `GET_POSTS_BY_CATEGORY`.

### Routing

All routes live under `src/app/` using the App Router. Route segments use Portuguese names (`areas-de-atuacao`, `serviços`, `sobre`, `contato`, etc.). Most non-blog pages are stubs exporting `<></>` — fill `page.tsx` to add content.

### Server vs. Client Components

Default to Server Components. Use `'use client'` only for interactivity. Currently only `Header.tsx` is a client component (mobile menu toggle, dropdown state). All page-level data fetching uses `async`/`await` directly in Server Components; `Promise.all()` is used when fetching multiple resources in parallel.

Blog post pages use `generateStaticParams()` to pre-render the 100 most recent posts at build time (SSG).

### Styling

Fonts are loaded via `next/font/google`: **Archivo** (`--font-archivo`, used for headings/buttons) and **Darker Grotesque** (`--font-body`, used for body text). Both are applied as CSS variables on `<html>` in the root layout.

WordPress post body HTML is rendered inside a `<div className="wp-content">` and styled via the `.wp-content` ruleset in `globals.css`.

### Component Structure

```
src/components/
├── Header.tsx            # Client component — sticky nav, mobile menu, dropdowns
├── Footer.tsx            # Empty placeholder
├── Metrics.tsx           # Stats section
├── sections/
│   ├── home/             # Hero, Challenges, Service, About
│   └── sobre/            # About page sections
└── blog/
    └── PostCard.tsx      # Blog post card
```
