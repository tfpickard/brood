/**
 * Routes reserved for Phase 2. None exists in Phase 1; each is gated by its flag when built.
 * A test asserts that no Phase 1 route occupies any of these paths.
 */
export const RESERVED_ROUTES = {
	FLAG_MEMBERS: ['/members', '/members/sign-in', '/members/sign-out', '/members/account'],
	FLAG_REMARKS: ['/breeds/[breed]/remarks', '/stud-book/[regno]/remarks', '/secretariat/remarks'],
	FLAG_LISTS: ['/correspondence/lists', '/correspondence/lists/[slug]', '/correspondence/confirm'],
	FLAG_FOLLOWING: ['/members/following', '/members/following/[kind]/[id]']
} as const;
