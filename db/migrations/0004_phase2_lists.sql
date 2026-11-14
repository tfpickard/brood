-- 0004_phase2_lists.sql
-- RESERVED for Phase 2: mailing lists with confirmed subscription. Gated by FLAG_LISTS (off).

create table mailing_lists (
	id uuid primary key default gen_random_uuid(),
	slug text not null unique check (length(slug) <= 80),
	title text not null check (length(title) <= 200)
);

create table subscriptions (
	id uuid primary key default gen_random_uuid(),
	list_id uuid not null references mailing_lists (id) on delete cascade,
	email text not null check (length(email) between 3 and 320),
	confirm_token_hash bytea,
	created_at timestamptz not null default now(),
	confirmed_at timestamptz,
	unsubscribed_at timestamptz,
	unique (list_id, email)
);
