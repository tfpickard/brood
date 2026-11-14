import type { Handle } from '@sveltejs/kit';
import { COOKIE_NAME, verifyToken } from '$lib/server/admin-auth.ts';
import { config } from '$lib/server/config.ts';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.secretary = verifyToken(event.cookies.get(COOKIE_NAME), config.adminSecret);
	const response = await resolve(event);
	if (event.url.pathname.startsWith('/secretariat')) {
		response.headers.set('X-Robots-Tag', 'noindex, nofollow');
		response.headers.set('Cache-Control', 'no-store');
	}
	return response;
};
