// The Secretariat is never prerendered, never indexed and never linked from the site.
export const prerender = false;
export const load = ({ locals }) => ({ secretary: locals.secretary, section: 'The Secretariat' });
