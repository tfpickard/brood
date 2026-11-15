-- 0002_phase2_members.sql
-- RESERVED for Phase 2: registered members. Gated by FLAG_MEMBERS (off).
-- No Phase 1 code reads or writes these tables.

create table members (
	id uuid primary key default gen_random_uuid(),
	email text not null unique check (length(email) between 3 and 320),
	display_name text not null check (length(display_name) between 1 and 200),
	family_name text check (length(family_name) <= 200),
	seat text check (length(seat) <= 200),
	status text not null default 'pending' check (status in ('pending', 'active', 'suspended')),
	created_at timestamptz not null default now(),
	verified_at timestamptz
);

create table member_sessions (
	id uuid primary key default gen_random_uuid(),
	member_id uuid not null references members (id) on delete cascade,
	token_hash bytea not null unique,
	created_at timestamptz not null default now(),
	expires_at timestamptz not null
);

create index member_sessions_member_idx on member_sessions (member_id);
