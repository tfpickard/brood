-- 0005_phase2_following.sql
-- RESERVED for Phase 2: following a line, a breed or an emergence. Gated by FLAG_FOLLOWING (off).

create table follows (
	id uuid primary key default gen_random_uuid(),
	member_id uuid not null references members (id) on delete cascade,
	target_kind text not null check (target_kind in ('line', 'breed', 'emergence')),
	target_id text not null check (length(target_id) <= 120),
	created_at timestamptz not null default now(),
	unique (member_id, target_kind, target_id)
);
