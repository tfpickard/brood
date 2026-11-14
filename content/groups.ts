import type { Group, GroupId } from './types.ts';

export const GROUPS: Group[] = [
	{
		id: 'sporting',
		name: 'Sporting',
		title: 'The Sporting Group',
		order: 1,
		description: [
			'The Sporting Group comprises the breeds kept for work in the field: standing to game, putting up birds, coursing and bearing to hand. Each is judged at a sanctioned field trial held in the week of emergence and on no other occasion.',
			'A Sporting animal is assessed on the work it performs in that week. Its record is entered in the Stud Book on the evening of the last day of the trial and is not afterwards amended.'
		],
		notes: [
			'The judging of field work is governed by Article XII of the Bylaws. Points are awarded for game only. The Council has ruled that no point shall be awarded for pigeon, and the ruling has been read at the opening of every field trial since.'
		]
	},
	{
		id: 'working',
		name: 'Working',
		title: 'The Working Group',
		order: 2,
		description: [
			'The Working Group comprises the breeds kept for draught, husbandry, relay and the keeping of the host grove. The Kilocada variety predominates in this Group, and most Working breeds are now shown in that variety only.',
			'A Working animal is judged in harness or at its station. The Society does not recognize work performed for exhibition alone.'
		]
	},
	{
		id: 'protection',
		name: 'Personal Protection',
		title: 'The Personal Protection Group',
		order: 3,
		description: [
			'The Personal Protection Group comprises the breeds kept for the deterrence of intruders, the holding of a perimeter and close attendance on a principal. Animals of this Group are placed only after an inspection of the home by an officer of the Society.',
			'Handlers of Protection breeds wear hearing protection of an approved pattern. The Society regards this as a condition of placement and not as a recommendation.'
		]
	},
	{
		id: 'companion',
		name: 'Companion',
		title: 'The Companion Group',
		order: 4,
		description: [
			'The Companion Group comprises the breeds kept for the company of their owners. Their work is attachment, and they are judged on the quality and constancy of it.',
			'The temperament of the Companion breeds is the product of not fewer than ten generations of selection. The Society does not register a Companion line of fewer.'
		]
	}
];

export function groupById(id: GroupId): Group {
	const group = GROUPS.find((g) => g.id === id);
	if (!group) throw new Error(`Unknown group ${id}`);
	return group;
}
