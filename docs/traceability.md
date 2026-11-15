# Phase 2 traceability

Phase 1 ships the content site, the media pipeline, the Provisioner with working inquiries, and the
moderation queue. The four Phase 2 features below are **not built**. Each has its tables reserved by
a migration that already runs, a feature flag that is off, reserved routes that no Phase 1 page
occupies, and a named server module where its logic will live. The tests in
`tests/unit/static.test.ts` hold these seams in place.

All data access goes through `src/lib/server/`. Pages and `+page.server.ts` files import service
modules only, never `src/lib/server/db` (lint-enforced). Any service module can therefore be moved
behind a Python (FastAPI) endpoint without touching pages: the page's server load or action calls
the HTTP endpoint instead of the module, with the same inputs and outputs. The SQL migrations in
`db/migrations/` are plain SQL and shared by both stacks.

| Feature                                                     | Migration reserving its tables                                 | Server module (where the logic will live)                                                                                                                                                   | Reserved routes                                                                    | Flag (off)       | What a Python service would take over                                                                                                                                         |
| ----------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Member accounts** (registered members, sign-in, sessions) | `0002_phase2_members.sql`: `members`, `member_sessions`        | `src/lib/server/members.ts` (account creation, email verification, session issue and revocation); `src/hooks.server.ts` gains a session lookup beside the Secretariat check                 | `/members`, `/members/sign-in`, `/members/sign-out`, `/members/account`            | `FLAG_MEMBERS`   | Account and session endpoints (`POST /members`, `POST /sessions`, `DELETE /sessions/{id}`), password-less email verification, session validation called by the SvelteKit hook |
| **Comments ("remarks") on breed and Stud Book pages**       | `0003_phase2_remarks.sql`: `remarks`, `moderation_status` enum | `src/lib/server/remarks.ts` (create, list published, moderate); registers a second `ModerationSource` in `src/lib/server/moderation/index.ts`, so the existing Secretariat queue handles it | `/breeds/[breed]/remarks`, `/stud-book/[regno]/remarks`, `/secretariat/remarks`    | `FLAG_REMARKS`   | Remark submission and listing endpoints, the moderation actions behind the `ModerationSource` interface, spam screening                                                       |
| **Mailing lists** (confirmed subscription, unsubscribe)     | `0004_phase2_lists.sql`: `mailing_lists`, `subscriptions`      | `src/lib/server/lists.ts` (subscribe, confirm by token, unsubscribe); sends through the existing `MailProvider` in `src/lib/server/mail/`                                                   | `/correspondence/lists`, `/correspondence/lists/[slug]`, `/correspondence/confirm` | `FLAG_LISTS`     | Subscription endpoints, confirmation tokens, list sends through the same provider contract (`MAIL_PROVIDER`, `MAIL_FROM`), bounce handling                                    |
| **Engagement: following a line, a breed or an emergence**   | `0005_phase2_following.sql`: `follows`                         | `src/lib/server/following.ts` (follow, unfollow, list a member's follows); emergence notices reuse `lists.ts`                                                                               | `/members/following`, `/members/following/[kind]/[id]`                             | `FLAG_FOLLOWING` | Follow endpoints and the scheduled notice of an emergence to followers of a line or brood                                                                                     |

## Flags

`src/lib/server/flags.ts` reads `FLAG_MEMBERS`, `FLAG_REMARKS`, `FLAG_LISTS` and `FLAG_FOLLOWING`.
A flag is on only when its variable is exactly `on`; `.env.example` sets all four `off`. A Phase 2
route's server load should begin by returning 404 when its flag is off.

## Reserved routes

`src/lib/routes.ts` lists the reserved paths by flag. None of them exists in `src/routes` in Phase 1.

## Constraints that carry into Phase 2

- No visitor action may cause an image to be generated. Remarks, accounts and every other
  visitor-supplied content stay away from the media tooling, which the site does not import
  (`tests/unit/guardrails.test.ts`).
- The Society does not solicit and accepts no gifts from the public: no donation, giving, pledge or
  bequest feature is reserved, and none may be added (`tests/unit/rendered.test.ts`).
- The correspondence policy (`content/policy.ts`) must be extended, in the Society's voice and
  accurately, before any Phase 2 feature stores anything new.
