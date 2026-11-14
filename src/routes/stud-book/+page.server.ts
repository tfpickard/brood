import { BREEDS } from '$content/breeds/index.ts';
import { STUD_BOOK } from '$content/studbook.generated.ts';
import { breedName, registerRows } from '$lib/server/studbook.ts';
import type { PageServerLoad } from './$types';

// Searched, filtered and sorted on the server from URL parameters, so it reads with scripts off.
export const prerender = false;

const PAGE_SIZE = 60;
const SORTS = ['regNo', 'name', 'breed', 'year', 'standing'] as const;
type Sort = (typeof SORTS)[number];

export const load: PageServerLoad = ({ url }) => {
	const q = (url.searchParams.get('q') ?? '').trim().slice(0, 80);
	const breed = url.searchParams.get('breed') ?? '';
	const variety = url.searchParams.get('variety') ?? '';
	const eye = url.searchParams.get('eye') ?? '';
	const standing = url.searchParams.get('standing') ?? '';
	const sortParam = url.searchParams.get('sort') ?? 'regNo';
	const sort: Sort = (SORTS as readonly string[]).includes(sortParam) ? (sortParam as Sort) : 'regNo';
	const dir = url.searchParams.get('dir') === 'desc' ? 'desc' : 'asc';
	const pageNo = Math.max(1, Number(url.searchParams.get('page')) || 1);

	const needle = q.toLowerCase();
	let rows = STUD_BOOK.filter((r) => {
		if (breed && r.breed !== breed) return false;
		if (variety && r.variety !== variety) return false;
		if (eye && r.eyes !== eye) return false;
		if (standing && r.standing !== standing) return false;
		if (!needle) return true;
		return (
			r.name.toLowerCase().includes(needle) ||
			r.regNo.toLowerCase().includes(needle) ||
			breedName(r.breed).toLowerCase().includes(needle) ||
			r.owner.toLowerCase().includes(needle)
		);
	});

	const key = (r: (typeof rows)[number]): string | number =>
		sort === 'name'
			? r.name
			: sort === 'breed'
				? breedName(r.breed)
				: sort === 'year'
					? r.broodYear
					: sort === 'standing'
						? r.standing
						: r.regNo;
	rows = [...rows].sort((a, b) => {
		const x = key(a);
		const y = key(b);
		const c = x < y ? -1 : x > y ? 1 : 0;
		return dir === 'desc' ? -c : c;
	});
	// The Registers are never mixed: Septendecim entries first, Tredecim after.
	rows = [...rows.filter((r) => r.regNo.startsWith('S-')), ...rows.filter((r) => r.regNo.startsWith('T-'))];

	const pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
	const current = Math.min(pageNo, pages);
	return {
		section: 'The Stud Book',
		total: rows.length,
		rows: registerRows(rows.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE)),
		page: current,
		pages,
		params: { q, breed, variety, eye, standing, sort, dir },
		breeds: BREEDS.map((b) => ({ slug: b.slug, name: b.name }))
	};
};
