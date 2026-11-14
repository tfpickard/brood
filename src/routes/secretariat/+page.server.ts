import { fail, redirect } from '@sveltejs/kit';
import { COOKIE_NAME, issueToken, secretMatches, SESSION_SECONDS } from '$lib/server/admin-auth.ts';
import { config, db } from '$lib/server/config.ts';
import { hit, SECRETARIAT_LIMIT } from '$lib/server/ratelimit.ts';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	if (locals.secretary) redirect(303, '/secretariat/correspondence');
	return { configured: Boolean(config.adminSecret && config.adminSecret.length >= 16) };
};

export const actions: Actions = {
	signin: async ({ request, cookies, getClientAddress }) => {
		const data = await request.formData();
		const secret = String(data.get('secret') ?? '');
		const { allowed } = await hit(db(), SECRETARIAT_LIMIT, getClientAddress(), config.rateLimitSecret);
		if (!allowed) return fail(429, { message: 'Refused. Too many attempts from this address. Try again later.' });
		if (!secretMatches(secret, config.adminSecret)) return fail(403, { message: 'Not recognized.' });
		cookies.set(COOKIE_NAME, issueToken(config.adminSecret as string), {
			path: '/secretariat',
			httpOnly: true,
			secure: true,
			sameSite: 'strict',
			maxAge: SESSION_SECONDS
		});
		redirect(303, '/secretariat/correspondence');
	},
	signout: async ({ cookies }) => {
		cookies.delete(COOKIE_NAME, { path: '/secretariat' });
		redirect(303, '/secretariat');
	}
};
