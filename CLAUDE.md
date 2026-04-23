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
- **Tailwind CSS 4** — uses `@import "tailwindcss"` syntax (not `@tailwind` directives from v3)
- **TypeScript** strict mode; path alias `@/*` → `src/*`
- **graphql-request** for data fetching against a WordPress WPGraphQL endpoint

## Architecture

### Routing

All routes live under `src/app/` using the App Router. Route segments use Portuguese names (`areas-de-atuacao`, `serviços`, etc.). Most pages are stubs; real content is added to `page.tsx` inside each directory.

### Data Layer

The GraphQL client is in `src/lib/grapqhl/` (note the typo in the directory name). `client.ts` exports a pre-configured `GraphQLClient` instance pointing to a local WordPress WPGraphQL endpoint. The endpoint is hardcoded — it should be moved to an environment variable (`NEXT_PUBLIC_GRAPHQL_URL` or a server-only `GRAPHQL_URL`). Queries are defined with `gql` tagged template literals in `queries.ts` and called via `client.request(QUERY)` in Server Components or route handlers.
