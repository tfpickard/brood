import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'dark-harbor-constant',
	name: 'Dark Harbor Constant',
	group: 'companion',
	register: 'septendecim',
	varieties: ['standard'],
	recognized: 1921,
	hostTree: { common: 'Red spruce', botanical: 'Picea rubens' },
	brood: 'XII',
	phaseYear: 2023,
	purpose: 'Companion. Picks one spot next to you and keeps it all week.',
	lede: 'The Dark Harbor Constant picks one spot next to its owner and goes back to it every evening. That’s what we judge. We don’t care what it gets up to the rest of the day.',
	standard: {
		appearance: [
			'Medium size, level outline, wings lying flat and a little apart at rest. Deep gray-black thorax. Cool silver veins in the wing.',
			'Red eyes. We take blue too, and note it.',
			'Standard size only. There’s no miniature Constant.'
		],
		chorus: [
			'It sings once each evening, the moment you sit down in its spot, for a minute at most. Even pitch, no frills.',
			'An evening with no song while you’re there gets marked down. Singing twice in one evening gets marked down harder.'
		],
		temperament: [
			'Steady, quiet, a creature of habit. The first evening after it hatches it picks a spot beside you, usually on the porch, a window seat or the arm of a chair, and it comes back to that spot at the same hour every evening of its week.',
			'During the day it stays near you without settling anywhere. Guests, weather and boats going by don’t bother it.',
			'It comes to the snap, then goes straight back to its spot.'
		],
		exuvia: [
			'The shell is gray amber, in one piece, flat, with the wings sheathed close. Long, straight split down the back.',
			'Show it lying flat on slate. Never stand it up.'
		]
	},
	faults: [
		'Picking a second spot during the week.',
		'Getting to the spot more than fifteen minutes after the owner.',
		'Singing twice in one evening.',
		'Wing veins going bronze.'
	],
	disqualifications: [
		'Coming up early or late, even by a year.',
		'Not taking its spot two evenings running while the owner is home.',
		'Bonding with somebody else. It happens, and it still counts.'
	],
	history: [
		'Summer families on Islesboro have kept the Constant since the 1904 hatch, and we recognized it in 1921. It’s only shown when Brood XII hatches. That falls in the island season, which suits everybody.',
		'We haven’t touched the standard since 1921. There’s nothing left to fix.',
		'Constants stay at the island house, so you almost never see one on the mainland. Most families leave the chair where it was for a good while afterward. In 2006 the under-gardener happened to be in the room when the Lisles’ male hatched, and that was that. It’s in the stud book under his name, and Mrs. Lisle still brings it up.'
	],
	plate: {
		media: 'plate-dark-harbor-constant',
		caption: 'A Constant female at rest, and her shell laid flat, the way we show it. 1921.'
	},
	photos: [
		{
			media: 'photo-dark-harbor-constant-1',
			caption:
				'A Constant on the porch rail at evening, the year we recognized the breed. Islesboro, 1921.'
		},
		{
			media: 'photo-dark-harbor-constant-2',
			caption:
				'An owner and her Constant on the porch after supper. Same chair every night that week. Dark Harbor, 1989.'
		},
		{
			media: 'photo-dark-harbor-constant-3',
			caption:
				'Judging the Constant: the owners sit still and wait to see whose animal comes back. Islesboro, 2023.'
		}
	],
	diagram: 'chorus-apparatus',
	disclaimers: ['vigil-attendance', 'bereavement', 'resale'],
	naming: {
		seat: 'Dark Harbor',
		seatKind: 'harbor',
		seatFounded: 1789,
		typeNoun: 'Constant',
		violates: [],
		note: 'Canon seed name. The harbor and summer colony on Islesboro, settled long before 1900.'
	}
};
