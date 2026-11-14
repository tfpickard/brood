-- 0003_phase2_remarks.sql
-- RESERVED for Phase 2: members' remarks on breed and Stud Book pages. Gated by FLAG_REMARKS (off).
-- Remarks enter the same moderation queue as inquiries (see src/lib/server/moderation).

create type moderation_status as enum ('pending', 'published', 'set_aside');

create table remarks (
	id uuid primary key default gen_random_uuid(),
	target_kind text not null check (target_kind in ('breed', 'individual')),
	target_id text not null check (length(target_id) <= 120),
	member_id uuid not null references members (id) on delete cascade,
	body text not null check (length(body) between 1 and 5000),
	status moderation_status not null default 'pending',
	created_at timestamptz not null default now(),
	status_changed_at timestamptz
);

create index remarks_target_idx on remarks (target_kind, target_id, status, created_at);
