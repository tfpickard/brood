/**
 * Addresses the site used before the copy rewrite, and where each one lives now. The server hook
 * answers an old address with a permanent redirect, so existing links keep working.
 */
const EXACT = new Map<string, string>([
	['/provisioner/exuvia-cabinet-pattern-17', '/equipment/shell-cabinet-pattern-17'],
	['/provisioner/exuvia-cabinet-pattern-13', '/equipment/shell-cabinet-pattern-13'],
	['/provisioner/microcada-cabinet-octagonal', '/equipment/miniature-cabinet-octagonal'],
	['/provisioner/microcada-cabinet-standing-lens', '/equipment/miniature-cabinet-standing-lens'],
	['/provisioner/exuvia-travelling-case', '/equipment/shell-traveling-case'],
	['/provisioner/kilocada-plinth-ninth-pattern', '/equipment/large-plinth-ninth-pattern'],
	['/provisioner/kilocada-plinth-gallery', '/equipment/large-plinth-gallery'],
	['/provisioner/reinforced-perch-kilocada', '/equipment/reinforced-perch-large'],
	['/provisioner/vigil-perch-stand', '/equipment/hatching-perch-stand'],
	['/provisioner/vigil-chair-pair', '/equipment/hatching-chairs-pair'],
	['/provisioner/vigil-chair', '/equipment/hatching-chair'],
	['/provisioner/vigil-lamp', '/equipment/hatching-lamp'],
	['/provisioner/summons-glove', '/equipment/snap-glove'],
	['/provisioner/emergence-watch', '/equipment/hatch-day-watch'],
	['/provisioner/emergence-day-hat', '/equipment/hatch-day-hat'],
	['/provisioner/emergence-day-coat', '/equipment/hatch-day-coat'],
	['/husbandry/the-vigil', '/care/when-it-hatches'],
	['/husbandry/kilocada', '/care/large-ones'],
	['/cabinet', '/shells'],
	['/stud-book/foundation-register', '/stud-book/founding-stock'],
	['/correspondence-policy', '/privacy'],
	['/charitable-standing', '/charity'],
	[
		'/governance/notices/petition-concerning-an-emergence',
		'/governance/notices/petition-about-a-late-hatch'
	],
	[
		'/governance/notices/recognition-of-the-tredecim-register',
		'/governance/notices/opening-the-13-year-book'
	]
]);

/** Old section prefixes; anything under them keeps its remaining path. */
const PREFIXES: [string, string][] = [
	['/provisioner', '/equipment'],
	['/husbandry', '/care']
];

/** The current address for an old one, or null when the address is not an old one. */
export function movedTo(pathname: string): string | null {
	const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
	const exact = EXACT.get(path);
	if (exact) return exact;
	for (const [from, to] of PREFIXES) {
		if (path === from) return to;
		if (path.startsWith(from + '/')) return to + path.slice(from.length);
	}
	return null;
}
