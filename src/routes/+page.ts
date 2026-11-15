import { NEXT_EMERGENCE } from '$content/site.ts';
import { countdownSentence } from '$lib/format.ts';

export const load = () => ({
	section: 'The Society',
	countdown: countdownSentence(new Date(NEXT_EMERGENCE.instant))
});
