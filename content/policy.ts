/**
 * The correspondence policy. Written in the Society's voice and accurate in every particular about
 * what the site stores. The retention figures are passed in from src/lib/server/inquiries.ts so the
 * policy cannot drift from the code (tested).
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
		: 'reply to any letter received from the Provisioner, which is answered by the Secretary';
	return [
		{
			heading: 'What is kept',
			paragraphs: [
				'When an inquiry is made to the Provisioner, the Society keeps the name given, the correspondence address given, the particulars written, the Provisioner’s reference if one was given, the date and time at which the inquiry was received, and a note of its handling: whether it remains unanswered, has been answered or has been set aside as unsolicited, and whether the Secretary was notified of it.',
				'Nothing else is asked for and nothing else is kept with the inquiry.'
			]
		},
		{
			heading: 'Why it is kept',
			paragraphs: [
				'The inquiry is kept so that the Provisioner may reply to it. It is read by the officers of the Society who answer correspondence and is used for no other purpose. It is not sold, lent or given to any other person.',
				'Where the Society has engaged a provider of electronic mail, a copy of the inquiry is sent to the Secretary’s correspondence inbox when it is received, so that it may be answered. The Society’s providers of hosting, storage and electronic mail handle the inquiry on the Society’s behalf and for that purpose only.'
			]
		},
		{
			heading: 'The address from which an inquiry is sent',
			paragraphs: [
				`To limit the number of inquiries received from a single source, the Society keeps, for ${w(f.rateLimitHours)} hours, a one-way keyed digest of the network address from which an inquiry was sent. The address itself is not kept. The digest cannot be read back into the address and is deleted after ${w(f.rateLimitHours)} hours.`
			]
		},
		{
			heading: 'How long it is kept',
			paragraphs: [
				`An inquiry is deleted ${w(f.inquiryMonths)} months after it was received. An inquiry set aside as unsolicited is deleted ${w(f.setAsideDays)} days after it was set aside. Deletion is carried out each day for every inquiry whose period has ended. An officer may delete an inquiry sooner.`,
				'The copy sent to the Secretary’s inbox is deleted on the same request as the inquiry itself.'
			]
		},
		{
			heading: 'Removal on request',
			paragraphs: [
				`A person who has made an inquiry and wishes it removed may ${write}, giving the name and correspondence address used. The inquiry is then deleted from the Society’s correspondence ledger, and the copy in the Secretary’s inbox is deleted. No reason need be given.`
			]
		},
		{
			heading: 'Applications for membership',
			paragraphs: [
				'The application for membership is not kept. Nothing written on it is stored or sent to any person. The notice given in reply is composed when the form is submitted and is not recorded.'
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
