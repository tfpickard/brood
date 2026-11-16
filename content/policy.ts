/**
 * The privacy policy (route /privacy). Formal, in counsel's voice, and accurate in
 * every particular about what the site stores. The retention figures are passed in from
 * src/lib/server/inquiries.ts so the policy cannot drift from the code (tested).
 */
export interface PolicyFacts {
	address: string | null;
	inquiryMonths: number;
	setAsideDays: number;
	rateLimitHours: number;
}

const words: Record<number, string> = { 24: 'twenty-four', 30: 'thirty' };
const w = (n: number) => words[n] ?? String(n);

export function correspondencePolicy(f: PolicyFacts): { heading: string; paragraphs: string[] }[] {
	const write = f.address
		? `write to the Secretary at ${f.address}`
		: 'reply to any message received from the Society about the item asked about; the Secretary answers those replies';
	return [
		{
			heading: 'What is kept',
			paragraphs: [
				'When a person asks about an item of Equipment, the Society keeps the name given, the email address given, the question written, the item number if one was given, the date and time at which the message was received, and a note of how it was handled: whether it is still unanswered, has been answered or has been set aside as unsolicited, and whether the Secretary was notified of it.',
				'Nothing else is asked for, and nothing else is kept with the message.'
			]
		},
		{
			heading: 'Why it is kept',
			paragraphs: [
				'The message is kept so that it can be answered. It is read by the officers of the Society who answer correspondence and is used for no other purpose. It is not sold, lent or given to any other person.',
				'Where the Society has engaged a provider of electronic mail, a copy of the message is sent to the Secretary’s correspondence inbox when it is received, so that it can be answered. The Society’s providers of hosting, storage and electronic mail handle the message on the Society’s behalf and for that purpose only.'
			]
		},
		{
			heading: 'The network address a message is sent from',
			paragraphs: [
				`To limit the number of messages received from a single source, the Society keeps, for ${w(f.rateLimitHours)} hours, a one-way keyed digest of the network address from which a message was sent. The address itself is not kept. The digest cannot be turned back into the address, and it is deleted after ${w(f.rateLimitHours)} hours.`
			]
		},
		{
			heading: 'How long it is kept',
			paragraphs: [
				`A message is deleted ${w(f.inquiryMonths)} months after it was received. A message set aside as unsolicited is deleted ${w(f.setAsideDays)} days after it was set aside. Deletion is carried out every day for every message whose period has ended. An officer may delete a message sooner.`,
				'The copy sent to the Secretary’s inbox is deleted on the same request as the message itself.'
			]
		},
		{
			heading: 'Removal on request',
			paragraphs: [
				`A person who has sent a message and wants it removed may ${write}, giving the name and email address used. The message is then deleted from the Society’s correspondence ledger, and the copy in the Secretary’s inbox is deleted. No reason need be given.`
			]
		},
		{
			heading: 'Applications for membership',
			paragraphs: [
				'Applications for membership are not kept. Nothing written on the form is stored or sent to any person. The reply shown on the page is composed when the form is submitted and is not recorded.'
			]
		},
		{
			heading: 'Other records',
			paragraphs: [
				'The Society uses no cookies for visitors and keeps no record of visits. It uses no service for counting, measuring or following visitors. A single cookie is set for officers of the Society who sign in to answer correspondence; it is used for that purpose only and expires after twelve hours.'
			]
		}
	];
}
