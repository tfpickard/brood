import type { Disclaimer, DisclaimerId } from './types.ts';

/** Legal notices. Collected on /legal and repeated in context. */
export const DISCLAIMERS: Disclaimer[] = [
	{
		id: 'hearing',
		label: 'Notice to Handlers',
		body: [
			'Handlers and attendants of the breeds of the Personal Protection Group shall wear hearing protection of a pattern approved by the Society at all times within forty yards of the animal during the week of emergence. The Society accepts no liability for loss of hearing sustained by any person within that distance, whether or not a member.'
		]
	},
	{
		id: 'oxygen',
		label: 'Oxygen-Enriched Atmospheres',
		body: [
			'Kilocada rearing environments are held at fifty-five per cent oxygen saturation. Materials that are inert in ordinary air burn readily in such an atmosphere. Entry is restricted to persons inducted under the procedures of the facility.',
			'The Society accepts no liability for injury or loss arising from entry by any other person, or from the operation or failure of any system of suppression.'
		]
	},
	{
		id: 'county-notification',
		label: 'Notification of Neighboring Counties',
		body: [
			'The owner of a Kilocada shall give written notice of the expected emergence to the clerk of each county adjoining the county in which the grove lies, not fewer than ninety days before the expected date. The Society does not give such notice on an owner’s behalf and accepts no liability for any consequence of its omission.'
		]
	},
	{
		id: 'vigil-attendance',
		label: 'Attendance at the Vigil',
		body: [
			'The owner attends the Vigil alone. An animal that attaches to a person other than its owner is entered in the Stud Book under the name of that person. The Society accepts no liability for the attachment of any animal to any person, and does not reverse an entry so made.'
		]
	},
	{
		id: 'bereavement',
		label: 'Bereavement',
		body: [
			'The adult lives for approximately one week after the Vigil. The Society does not extend that period, does not recommend any practice intended to extend it, and accepts no liability for distress arising from its conclusion.',
			'Members are referred to the end-of-week protocol published under Husbandry.'
		]
	},
	{
		id: 'resale',
		label: 'Resale of Exuviae',
		body: [
			'An exuvia is transferred with its certificate of registration or not at all. The Society records transfers of title and the price where it is disclosed. It does not value exuviae, does not act as agent in any sale, and accepts no liability for the description of any exuvia offered for sale by any person.'
		]
	},
	{
		id: 'home-inspection',
		label: 'Inspection of the Home',
		body: [
			'Animals of the Personal Protection Group are placed only after the home has been inspected by an officer of the Society. The inspection concerns the suitability of the premises and not the suitability of the household. Its findings are not disclosed.'
		]
	},
	{
		id: 'magnification',
		label: 'Microcada Cabinets',
		body: [
			'The exuvia of a Microcada cannot be appreciated by the unaided eye. Cabinets for Microcada exuviae are fitted with integral magnification by opticians certified by the Society. The Society accepts no liability for any optical instrument not so certified.'
		]
	}
];

export function disclaimerById(id: DisclaimerId): Disclaimer {
	const d = DISCLAIMERS.find((x) => x.id === id);
	if (!d) throw new Error(`Unknown disclaimer ${id}`);
	return d;
}
