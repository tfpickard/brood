import type { Group, GroupId } from './types.ts';

export const GROUPS: Group[] = [
	{
		id: 'sporting',
		name: 'Sporting',
		title: 'The Sporting Group',
		order: 1,
		description: [
			'These are the field breeds: the ones that point, flush birds, course and retrieve. They’re judged at the field trials during the week they hatch, and that’s the only chance they get. A bad day is a bad record.',
			'A Sporting animal is judged on what it does in the field that week. Its record goes in the stud book the evening the trial ends, and nobody changes it afterward, no matter who you know.'
		],
		notes: [
			'Field judging comes under Article XII of the Bylaws. Points are for game only. The Council ruled that nothing counts for pigeon, and the ruling gets read out at the start of every field trial.'
		]
	},
	{
		id: 'working',
		name: 'Working',
		title: 'The Working Group',
		order: 2,
		description: [
			'The Working breeds pull, do farm work, run relays and look after the grove. Most of them come large, and these days most are only shown large.',
			'A Working animal is judged in harness or at its post, doing a real job. Tricks it learned for the show ring don’t count.'
		]
	},
	{
		id: 'protection',
		name: 'Personal Protection',
		title: 'The Personal Protection Group',
		order: 3,
		description: [
			'The Protection breeds keep people off your property, hold a perimeter and stay close to whoever they’re looking after. We only place one after one of our officers has been through your house.',
			'If you handle a Protection breed, you wear hearing protection of a pattern we’ve approved. That’s a condition of placement, not a suggestion. Ask anybody who thought it was a suggestion.'
		]
	},
	{
		id: 'companion',
		name: 'Companion',
		title: 'The Companion Group',
		order: 4,
		description: [
			'The Companion breeds are kept for company. Their job is to be attached to you, and they’re judged on how well they do it and whether they keep it up.',
			'It takes at least ten generations of breeding to get a Companion’s temperament right, and we won’t register a Companion line with fewer. People try.'
		]
	}
];

export function groupById(id: GroupId): Group {
	const group = GROUPS.find((g) => g.id === id);
	if (!group) throw new Error(`Unknown group ${id}`);
	return group;
}
