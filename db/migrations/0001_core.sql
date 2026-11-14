-- 0001_core.sql
-- Phase 1: correspondence to the Provisioner and per-client rate limiting.
-- Plain SQL so that any service (SvelteKit today, a Python service later) can share the schema.

create type inquiry_status as enum ('new', 'answered', 'set_aside');

create table inquiries (
	id uuid primary key default gen_random_uuid(),
	received_at timestamptz not null default now(),
	name text not null check (length(name) between 1 and 200),
	email text not null check (length(email) between 3 and 320),
	message text not null check (length(message) between 1 and 5000),
	item_ref text check (item_ref is null or length(item_ref) <= 120),
	status inquiry_status not null default 'new',
	status_changed_at timestamptz,
	notified_at timestamptz,
	notify_result text check (notify_result in ('sent', 'not_configured', 'failed'))
);

create index inquiries_status_received_idx on inquiries (status, received_at desc);

-- key_hash = HMAC-SHA256(client address, RATE_LIMIT_SECRET). Raw addresses are never stored.
create table rate_limit_hits (
	bucket text not null,
	key_hash bytea not null,
	hit_at timestamptz not null default now()
);

create index rate_limit_hits_lookup_idx on rate_limit_hits (bucket, key_hash, hit_at);
