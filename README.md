# brood

The website of the American Brood Society: a SvelteKit site with a typed content layer, a
Postgres-backed inquiry and moderation flow, and an owner-run media pipeline.

This README is for the owner and maintainers. It is not served by the site.

## Stack

- SvelteKit 2, Svelte 5, TypeScript (strict), `@sveltejs/adapter-netlify`
- Tailwind v4 with the American Brood Society design system (tokens, theme and components in
  `src/lib/abs/`, copied from the design-system artifact; it is authoritative)
- Postgres (Neon in production) through `postgres` (postgres.js); plain SQL migrations in `db/migrations/`
- Vitest and Playwright

## Layout

| Path                            | What                                                                                                                                                                                                                 |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content/`                      | All editorial content as typed data: breeds, the Stud Book, governance, notices, suppers, chapters, catalogue, testimonials. Author-only fields (`naming`, reference `origin`) are never rendered; tests enforce it. |
| `content/studbook.generated.ts` | The Stud Book and Foundation Register, generated deterministically by `npm run content:studbook` from the breed roster and `content/studbook.seed.ts`.                                                               |
| `src/lib/server/`               | The only place data is touched: inquiries, rate limiting, mail providers, moderation, Secretariat auth, flags. Routes import these modules, never the database (lint-enforced).                                      |
| `src/lib/abs/`                  | Design-system CSS and Svelte wrappers for its components.                                                                                                                                                            |
| `db/`                           | Migrations and the migration runner (shared with any future Python service).                                                                                                                                         |
| `media/`                        | Image manifest, house style, generation config, lockfile and ledger.                                                                                                                                                 |
| `tools/media/`                  | The owner-run media tooling (see below). Nothing in the site imports it.                                                                                                                                             |
| `docs/traceability.md`          | Phase 2 seams: reserved tables, modules, routes, flags.                                                                                                                                                              |

## Setup

```sh
npm install
cp .env.example .env        # then fill in DATABASE_URL, ADMIN_SECRET, mail settings
npm run db:migrate          # apply db/migrations to DATABASE_URL
npm run dev
```

Local Postgres for development and tests (Linux, via paru; macOS, via brew):

```sh
paru -S postgresql           # or: brew install postgresql@16
createuser --createdb --pwprompt brood   # password: brood (matches the test defaults)
createdb -O brood brood_dev
```

## Scripts

| Command                    | What it does                                                                                                                                                                                                                                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run build`            | Production build; prerenders every content page. Builds with zero generated images present.                                                                                                                                                                                                                                                       |
| `npm run check`            | `svelte-check`, failing on warnings                                                                                                                                                                                                                                                                                                               |
| `npm run lint`             | Prettier check and ESLint, zero warnings                                                                                                                                                                                                                                                                                                          |
| `npm test`                 | Unit suite: data integrity, naming rules, running references, media manifest, generator guardrails, server modules against a throwaway database, and assertions over the rendered site (builds first if no build exists). Needs Postgres at `TEST_DATABASE_URL` (default `postgres://brood:brood@localhost:5432/postgres`, a role with CREATEDB). |
| `npm run test:e2e`         | Playwright: an inquiry stored, notified via the mock provider, queued and moderated; honeypot; rate limit; membership writes nothing. Uses `E2E_DATABASE_URL` (default `.../brood_e2e`, recreated each run).                                                                                                                                      |
| `npm run check:voice`      | Fails on an exclamation mark, emoji, dash used as punctuation, or a banned term anywhere in site copy, markup, alt text or rendered pages.                                                                                                                                                                                                        |
| `npm run db:migrate`       | Apply pending migrations to `DATABASE_URL`.                                                                                                                                                                                                                                                                                                       |
| `npm run content:studbook` | Regenerate the Stud Book (seeded, deterministic).                                                                                                                                                                                                                                                                                                 |

After editing a media fragment in `media/fragments/`, recompose the manifest with
`node tools/media/compose.ts`.

## Media generation (owner only)

Every image on the site is listed in `media/manifest.yaml` with its full prompt, era, aspect, alt
text and where it is used. Until an image exists, its plate renders as a placeholder showing the alt
text, so the site never depends on the image API.

Generation is done **only** by the owner, from a local shell, by explicit instruction:

```sh
scripts/generate-media                              # dry run: status of every asset, nothing sent
scripts/generate-media --id plate-aiken-marker      # dry run for named assets, with estimated cost
scripts/generate-media --all-missing --max 10       # dry run for up to 10 missing assets
scripts/generate-media --id plate-aiken-marker --execute   # actually generate
```

- Default is a dry run. Nothing is sent without `--execute`.
- Assets are named with `--id`, or selected with `--all-missing` plus a mandatory `--max N`. There is
  no unbounded mode. `max_per_run` in `media/config.yaml` is a hard ceiling.
- One request per asset, one attempt. No retries, loops, variations or fallback model. Failures are
  written to `media/ledger.jsonl` and skipped.
- The model is pinned in `media/config.yaml` (`gpt-image-2.6-flare`, called through the Image API at
  `/v1/images/generations`), with size, quality and format. The Image API has no seed parameter, so
  determinism comes from `media/lock.json`: an asset whose prompt, model and parameters hash matches
  its lock entry, and whose file matches the recorded sha256, is never regenerated. Editing a prompt
  marks the asset stale in the dry run and does nothing else until it is regenerated by `--id`.
- Every call is appended to `media/ledger.jsonl`: timestamp, asset, model, parameters, prompt hash,
  result, cost (computed from the response's token usage), and any revised prompt the API reports.
- `OPENAI_API_KEY` must be set in the shell that runs the command, and only there. **Never set it
  on Netlify or in any deployed environment.** The CLI refuses to execute when `CI`, `NETLIFY` or
  other deploy variables are present.
- Generated files are written to `static/media/` and committed, so every build is reproducible from
  the repository alone.
- Nothing invokes the generator: no package script, build step, hook, CI job or page.
  `tests/unit/guardrails.test.ts` enforces this and that a dry run makes no network call.

## Deployment (Netlify)

`netlify.toml` builds with `npm run build` and publishes `build/`. Set these in the Netlify
environment: `DATABASE_URL` (Neon pooled URL), `ADMIN_SECRET`, `RATE_LIMIT_SECRET`, `MAIL_PROVIDER`
(`resend` or `none`), `MAIL_FROM`, `MAIL_TO`, `RESEND_API_KEY`, `PUBLIC_CORRESPONDENCE_ADDRESS`, and
the four `FLAG_*` variables (`off`). Run `npm run db:migrate` against the production database before
the first deploy. A scheduled function (`netlify/functions/purge-correspondence.mts`) deletes
correspondence daily under the retention periods stated in the correspondence policy.

The moderation queue is at `/secretariat` (not linked from the site).

## Licenses

EB Garamond and Courier Prime are under the SIL Open Font License (`static/fonts/`). Coastlines on
the chapters plate are from Natural Earth (public domain).
