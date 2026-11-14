import type { RunningReference } from './types.ts';

/**
 * Running references among the membership.
 *
 * The `origin` field is author-only. It records what actually happened so that every appearance
 * stays consistent with a real shared history. It is never rendered, and no two appearances
 * together should be enough to reconstruct it. Tests assert both properties.
 */
export const REFERENCES: RunningReference[] = [
	{
		id: 'spoon',
		label: 'The Spoon',
		origin:
			'In June 1936 Mrs. Cordelia Haverill left her Vigil room for perhaps four minutes to answer a telephone call from her sister about a dinner placement. Her Newport Vesper completed its molt in her absence and attached to the grapefruit spoon she had left on the arm of the chair. It sang to the spoon each evening of its week and to nothing else, and the Registrar entered the spoon as the attending party. At the supper of May 1937 the spoon, which Mr. Haverill had had mounted on a walnut base, was presented to her by the President. It has since been presented at each supper to the member whose year produced the most conspicuous instance of misplaced devotion, and Mrs. Haverill herself received it again on three later occasions.',
		marker: /\bthe Spoon\b/i,
		appearances: [
			{ route: '/supper-club/may-1937', where: 'presentation item' },
			{ route: '/supper-club/november-1988', where: 'presentation item' },
			{ route: '/supper-club/may-2026', where: 'presentation item' },
			{ route: '/cabinet', where: 'Haverill cabinet caption, displayed with the Spoon' },
			{ route: '/provisioner/presentation-spoon', where: 'catalogue item' },
			{ route: '/governance', where: 'list of trophies' }
		]
	},
	{
		id: 'ninth',
		label: 'The Ninth',
		origin:
			'In May 1965 a Kilocada Allegheny Drayer belonging to the Calloway family emerged on the ninth green of the Calloways’ private course at Aiken on the second morning of the club championship. The committee declined to suspend play. For six days the field putted around the animal, which did not move, and on the final day Mr. Ormsby holed the winning putt from beneath its left wing. The toast to the Ninth was first proposed at the supper of May 1966 and is now proposed at every supper; the Ninth Hole Salver was given for the Kilocada Working class the following year.',
		marker: /\bthe Ninth\b/i,
		appearances: [
			{ route: '/supper-club/may-1966', where: 'toast' },
			{ route: '/supper-club/may-1978', where: 'toast' },
			{ route: '/supper-club/may-2026', where: 'toast' },
			{ route: '/governance', where: 'the Ninth Hole Salver, list of trophies' },
			{ route: '/provisioner/kilocada-plinth-ninth-pattern', where: 'catalogue item' }
		]
	},
	{
		id: 'umbrella',
		label: 'Mr. Thorne’s Umbrella',
		origin:
			'At the June 1912 show Judge Augustin Thorne judged the Summons class in heavy rain under a black silk umbrella. To demonstrate the expected response he snapped his own fingers once. Every male in the ring came to him. He finished judging the class under the umbrella, which was by then entirely covered, and placed the animals in the correct order without any of them leaving it. Article XI.4 of the Bylaws was adopted the following spring. The Thorne Umbrella, a furled black silk umbrella in a glass case, is awarded for the Summons. At suppers the Secretary may raise an umbrella to end a discussion, and the minutes record whether it was raised.',
		marker: /\bumbrella\b/i,
		appearances: [
			{ route: '/governance/bylaws', where: 'Article XI.4' },
			{ route: '/governance', where: 'the Thorne Umbrella, list of trophies' },
			{ route: '/provisioner/ring-umbrella', where: 'catalogue item' },
			{ route: '/supper-club/november-1913', where: 'minute' },
			{ route: '/supper-club/november-1971', where: 'minute' }
		]
	},
	{
		id: 'shrib',
		label: 'Shrib',
		origin:
			'At the supper of November 1969 the dessert was a syllabub. Mrs. Eleanor Dunmore, asked by the President what it was, said “shrib,” and when corrected maintained for the remainder of the evening that it was shrib, that it had always been shrib, and that her mother had called it shrib. The members took it up at once. A shrib is a position held against all evidence with complete composure, and to declare a shrib is to close a subject. Mr. Dunmore registered the family’s line as the Northern Shrib Locust in a letter of 1971 written after dinner. The Council ruled in 1972 that the word rhymes with crib. It has not ruled on the meaning, because every member already knows it.',
		marker: /\bshrib\b/i,
		appearances: [
			{ route: '/breeds/northern-shrib-locust', where: 'breed name' },
			{ route: '/supper-club/november-1971', where: 'a shrib was declared by the Chair' },
			{ route: '/governance/bylaws', where: 'Council ruling on pronunciation' },
			{ route: '/from-the-membership', where: 'Dunmore testimonial' }
		]
	},
	{
		id: 'second-chair',
		label: 'The Second Chair',
		origin:
			'In 1947 Mr. Josiah Penhallow, a widower, attended the Vigil of his Aiken Marker with a second chair set beside his own. When asked by the Registrar for whom it was intended he said it was for no one. The newly molted animal crossed the room and sat on the second chair for the whole of its week. Since then a second chair is set, empty, at the head table at every supper, and members who have lost a spouse sometimes set one at the Vigil. The Provisioner supplies Vigil chairs in pairs by arrangement only.',
		marker: /\bsecond chair\b/i,
		appearances: [
			{ route: '/provisioner/vigil-chair-pair', where: 'catalogue item' },
			{ route: '/supper-club/november-1947', where: 'seating note' },
			{ route: '/supper-club/november-1988', where: 'seating note' },
			{ route: '/from-the-membership', where: 'Penhallow testimonial' },
			{ route: '/husbandry/the-vigil', where: 'Vigil protocol' }
		]
	},
	{
		id: 'thirteen',
		label: 'Thirteen o’clock',
		origin:
			'Mr. Hollis Lowell, Registrar from 1904 to 1939, opposed the recognition of the Tredecim Register in 1909 and lost. From that day he kept his watch on a thirteen-hour reckoning, entered times of emergence in the Stud Book by it, and never explained himself. The members found this delightful and adopted it for anything concerning the Tredecim Register and, later, for supper.',
		marker: /past thirteen|thirteen-hour/i,
		appearances: [
			{ route: '/stud-book/T-13-00004', where: 'remark' },
			{ route: '/supper-club/november-1913', where: 'dateline' },
			{ route: '/supper-club/may-1978', where: 'dateline' },
			{ route: '/provisioner/emergence-watch', where: 'catalogue item' }
		]
	},
	{
		id: 'pigeon',
		label: 'Pigeon',
		origin:
			'At the Field Trials of 1970 a team of Tidewater Beaters put up, by chorus, every pigeon in the adjoining county seat instead of the pheasant laid down for the trial. The pigeons came over the line for nearly an hour. The judge, Mrs. Ardsley, entered on the card “One point. Pigeon.” and the Council ruled the following month that no point shall be awarded for pigeon. Among the members “pigeon” is any success not intended.',
		marker: /\bpigeon\b/i,
		appearances: [
			{ route: '/groups/sporting', where: 'note on field judging' },
			{ route: '/governance/bylaws', where: 'Article XII' },
			{ route: '/supper-club/november-1971', where: 'minute' },
			{ route: '/supper-club/november-1988', where: 'minute' }
		]
	},
	{
		id: 'hat',
		label: 'Mrs. Ashby’s Hat',
		origin:
			'In June 1953 a Newport Vesper belonging to Mrs. Lavinia Ashby emerged in the brim of her hat, which she had set on a bench during a garden party at Bellevue Avenue. The Vigil took place in the hat. Rather than remove the animal she wore the hat for the whole of its week, to church, to the opera and to the Field Trials, where she was asked to leave the enclosure. The hat is now kept by the Society and passed at supper to whichever member must speak next; it is always returned. The Provisioner sells an emergence-day hat to the same pattern.',
		marker: /Ashby pattern|Ashby’s hat|the hat was passed/i,
		appearances: [
			{ route: '/supper-club/november-1953', where: 'minute' },
			{ route: '/supper-club/may-2026', where: 'minute' },
			{ route: '/provisioner/emergence-day-hat', where: 'catalogue item, Ashby pattern' }
		]
	},
	{
		id: 'two-days',
		label: 'Two days',
		origin:
			'The Newport Vesper line of Mr. Pelham Vail emerged in 1987 two days after the date of the brood. Mr. Vail petitioned the Council that the emergence be entered as on time, on the ground that the weather had been unseasonable. The petition was declined in 1988. Mr. Vail arrived at the next supper two days after the date on the card, by his own account deliberately, and stayed for dinner with the staff. Since then a member who is late is said to have arrived two days, and the Vail Cup is given for punctuality.',
		marker: /\bVail\b|arrived two days|two days late/i,
		appearances: [
			{ route: '/governance/notices/petition-concerning-an-emergence', where: 'notice' },
			{ route: '/supper-club/november-1988', where: 'minute' },
			{ route: '/supper-club/may-2026', where: 'minute' },
			{ route: '/governance', where: 'the Vail Cup, list of trophies' }
		]
	},
	{
		id: 'boxwood',
		label: 'Boxwood',
		origin:
			'At the supper of May 1978 a member read aloud from Margaret Pruitt’s letter of 1971, which places the founding of the Society at one of two houses whose hedges are cut to the same profile and identifies the hedges as privet. Mrs. Ardsley observed that the hedge at the Society’s rooms is boxwood. This was felt to settle the matter. “It is boxwood” is now the members’ reply to any outside account of the Society, and a sprig of boxwood is laid at every place at supper.',
		marker: /\bboxwood\b/i,
		appearances: [
			{ route: '/supper-club/may-1978', where: 'minute and menu' },
			{ route: '/supper-club/may-2026', where: 'menu note' },
			{ route: '/provisioner/boxwood-place-card-holder', where: 'catalogue item' },
			{ route: '/cabinet', where: 'caption' }
		]
	}
];
