/**
 * Engraved-plate diagrams, authored as SVG in code. Each drawing is single-ink line work with
 * hatching for tone and lettered callouts on hairline leaders, styled by the design system's
 * .abs-diagram rules (classes .ln and .leader; text in italic serif).
 */
import type { DiagramId } from '$content/types.ts';

export type DrawingId = DiagramId | 'kilocada-facility' | 'cabinet-elevations';

export interface Drawing {
	viewBox: string;
	body: string;
	key: { letter: string; label: string }[];
	label: string;
}

const f = (n: number) => Number(n.toFixed(1));

/** Parallel hatching clipped to a closed path. */
function hatch(id: string, d: string, spacing = 6, angle = 45, weight = 0.45): string {
	const lines: string[] = [];
	for (let x = -800; x < 1600; x += spacing) lines.push(`M${x} -200 L${x + 1200} 1000`);
	return `<clipPath id="${id}"><path d="${d}"/></clipPath><g clip-path="url(#${id})"><path class="ln" stroke-width="${weight}" transform="rotate(${angle - 45} 300 200)" d="${lines.join(' ')}"/></g>`;
}

function leader(x1: number, y1: number, x2: number, y2: number, letter: string): string {
	const tx = x2 + (x2 >= x1 ? 4 : -12);
	const ty = y2 + (y2 >= y1 ? 14 : -4);
	return `<path class="leader" d="M${x1} ${y1} L${x2} ${y2}"/><text x="${tx}" y="${ty}">${letter}</text>`;
}

function ellipse(cx: number, cy: number, rx: number, ry: number, w = 1.2): string {
	return `<ellipse class="ln" stroke-width="${w}" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"/>`;
}

/** Fore wing outline with venation, origin at the base, pointing right. */
function foreWing(
	ox: number,
	oy: number,
	scale: number,
	flip = false
): { outline: string; veins: string } {
	const p = (x: number, y: number) => `${f(ox + x * scale)} ${f(oy + (flip ? -y : y) * scale)}`;
	const outline = `M${p(0, 0)} C${p(40, -26)} ${p(150, -38)} ${p(250, -30)} C${p(282, -26)} ${p(290, -6)} ${p(274, 4)} C${p(220, 30)} ${p(110, 44)} ${p(30, 30)} C${p(10, 26)} ${p(-2, 12)} ${p(0, 0)} Z`;
	const veins = [
		`M${p(2, -2)} C${p(60, -24)} ${p(160, -32)} ${p(240, -27)}`,
		`M${p(4, 2)} C${p(80, -8)} ${p(140, -12)} ${p(176, -12)}`,
		`M${p(176, -12)} C${p(205, -16)} ${p(232, -18)} ${p(262, -16)}`,
		`M${p(176, -12)} C${p(205, -4)} ${p(236, 0)} ${p(272, 2)}`,
		`M${p(6, 6)} C${p(90, 14)} ${p(150, 14)} ${p(212, 8)}`,
		`M${p(212, 8)} C${p(232, 6)} ${p(252, 8)} ${p(268, 8)}`,
		`M${p(212, 8)} C${p(226, 16)} ${p(236, 22)} ${p(244, 24)}`,
		`M${p(8, 12)} C${p(50, 24)} ${p(90, 30)} ${p(140, 30)}`,
		`M${p(10, 18)} C${p(26, 24)} ${p(40, 28)} ${p(60, 30)}`,
		`M${p(120, -30)} L${p(124, -12)} M${p(124, -12)} L${p(128, 8)} M${p(128, 8)} L${p(132, 32)}`,
		`M${p(222, -16)} L${p(226, -2)} M${p(244, -18)} L${p(248, 1)} M${p(232, 7)} L${p(236, 20)} M${p(256, 8)} L${p(258, 14)}`
	].join(' ');
	return { outline, veins };
}

function cicadaDorsal(cx: number, cy: number, s: number, wings = true): string {
	const P = (x: number, y: number) => `${f(cx + x * s)} ${f(cy + y * s)}`;
	const head = `M${P(-22, -60)} C${P(-20, -72)} ${P(20, -72)} ${P(22, -60)} L${P(26, -52)} L${P(-26, -52)} Z`;
	const pronotum = `M${P(-26, -52)} L${P(26, -52)} C${P(34, -40)} ${P(34, -26)} ${P(28, -20)} L${P(-28, -20)} C${P(-34, -26)} ${P(-34, -40)} ${P(-26, -52)} Z`;
	const meso = `M${P(-28, -20)} L${P(28, -20)} C${P(30, 0)} ${P(22, 14)} ${P(0, 18)} C${P(-22, 14)} ${P(-30, 0)} ${P(-28, -20)} Z`;
	const abdomen = `M${P(-18, 14)} C${P(-24, 40)} ${P(-18, 80)} ${P(0, 96)} C${P(18, 80)} ${P(24, 40)} ${P(18, 14)} Z`;
	const segs = [26, 38, 50, 62, 74, 84].map((y) => {
		const w = 20 - (y - 26) * 0.2;
		return `M${P(-w, y)} Q${P(0, y + 4)} ${P(w, y)}`;
	});
	let out = '';
	if (wings) {
		const l = foreWing(cx - 20 * s, cy - 14 * s, s * 0.62, false);
		const r = foreWing(cx + 20 * s, cy - 14 * s, s * 0.62, false);
		out += `<g transform="rotate(118 ${f(cx - 20 * s)} ${f(cy - 14 * s)})"><path class="ln" stroke-width="1.1" d="${l.outline}"/><path class="ln" stroke-width=".6" d="${l.veins}"/></g>`;
		out += `<g transform="rotate(62 ${f(cx + 20 * s)} ${f(cy - 14 * s)}) scale(1 -1) translate(0 ${f(-2 * (cy - 14 * s))})"><path class="ln" stroke-width="1.1" d="${r.outline}"/><path class="ln" stroke-width=".6" d="${r.veins}"/></g>`;
	}
	out += hatch(`hd${cx}${cy}`, head, 3.2, 20, 0.4);
	out += `<path class="ln" stroke-width="1.2" d="${head} ${pronotum} ${meso} ${abdomen}"/>`;
	out += hatch(`pr${cx}${cy}`, pronotum, 4, 70, 0.4);
	out += hatch(`ab${cx}${cy}`, abdomen, 5, 10, 0.35);
	out += `<path class="ln" stroke-width=".7" d="${segs.join(' ')} M${P(-12, -6)} L${P(0, 8)} L${P(12, -6)} M${P(0, -18)} L${P(0, 8)}"/>`;
	out +=
		ellipse(cx - 24 * s, cy - 60 * s, 7 * s, 9 * s) +
		ellipse(cx + 24 * s, cy - 60 * s, 7 * s, 9 * s);
	out += `<circle class="ln" stroke-width=".8" cx="${f(cx)}" cy="${f(cy - 64 * s)}" r="${f(1.6 * s)}"/><circle class="ln" stroke-width=".8" cx="${f(cx - 5 * s)}" cy="${f(cy - 60 * s)}" r="${f(1.4 * s)}"/><circle class="ln" stroke-width=".8" cx="${f(cx + 5 * s)}" cy="${f(cy - 60 * s)}" r="${f(1.4 * s)}"/>`;
	return out;
}

function wingPlate(shade: 'clear' | 'plain' | 'smoke' | 'flat'): string {
	const w = foreWing(60, 150, 1.85);
	let out = `<path class="ln" stroke-width="1.3" d="${w.outline}"/><path class="ln" stroke-width=".8" d="${w.veins}"/>`;
	if (shade === 'smoke')
		out += hatch('smoke', w.outline, 3.4, 30, 0.45) + hatch('smoke2', w.outline, 3.4, 120, 0.3);
	if (shade === 'plain') out += hatch('plain', w.outline, 9, 30, 0.3);
	if (shade === 'flat') {
		out += hatch('flat', w.outline, 7, 30, 0.3);
		out += `<path class="ln" stroke-width="1" d="M70 262 L560 262 M70 262 C200 258 420 256 560 260"/><path class="ln" stroke-width=".6" d="M70 268 L560 268"/>`;
	}
	out += `<g class="leader"><path d="M200 98 L188 40"/><path d="M362 108 L380 40"/><path d="M306 150 L330 236"/><path d="M522 104 L562 44"/><path d="M128 194 L92 238"/></g>`;
	out += `<text x="180" y="34">A</text><text x="378" y="34">B</text><text x="326" y="254">C</text><text x="562" y="38">D</text><text x="82" y="256">E</text>`;
	return out;
}

const WING_KEY = [
	{ letter: 'A.', label: 'Costal margin' },
	{ letter: 'B.', label: 'Radial sector' },
	{ letter: 'C.', label: 'Nodal line' },
	{ letter: 'D.', label: 'Apical cells' },
	{ letter: 'E.', label: 'Anal lobe' }
];

function summonsRing(): string {
	let out = `<rect class="ln" stroke-width="1.4" x="40" y="30" width="520" height="300"/><rect class="ln" stroke-width=".6" x="46" y="36" width="508" height="288"/>`;
	for (let i = 0; i < 6; i++) {
		const x = 110 + i * 76;
		out += `<circle class="ln" stroke-width="1" cx="${x}" cy="290" r="9"/><path class="ln" stroke-width=".5" d="M${x - 6} 284 L${x + 6} 296 M${x + 6} 284 L${x - 6} 296"/>`;
		out += `<rect class="ln" stroke-width=".9" x="${x - 7}" y="88" width="14" height="10"/>`;
		out += `<path class="ln" stroke-width=".5" stroke-dasharray="3 4" d="M${x} 98 L${x} 280"/>`;
	}
	out += `<circle class="ln" stroke-width="1.2" cx="300" cy="190" r="12"/><path class="ln" stroke-width=".7" d="M300 178 L300 202 M288 190 L312 190"/>`;
	for (const r of [60, 110, 160])
		out += `<path class="ln" stroke-width=".4" stroke-dasharray="2 5" d="M${300 - r} 190 A${r} ${r} 0 0 1 ${300 + r} 190"/>`;
	out += hatch('ringedge', 'M40 30 H560 V36 H46 V324 H554 V36 H560 V330 H40 Z', 3, 45, 0.4);
	out +=
		leader(110, 290, 80, 352, 'A') +
		leader(186, 93, 160, 14, 'B') +
		leader(300, 190, 360, 120, 'C') +
		leader(386, 190, 440, 230, 'D') +
		leader(550, 60, 580, 14, 'E');
	return out;
}

function chorus(): string {
	const body = `M80 200 C80 140 140 110 240 112 C360 114 460 130 520 170 C540 184 540 214 520 226 C460 262 360 280 240 282 C140 284 80 254 80 200 Z`;
	let out = hatch('cbody', body, 6, 15, 0.35);
	out += `<path class="ln" stroke-width="1.3" d="${body}"/>`;
	for (let i = 0; i < 7; i++)
		out += `<path class="ln" stroke-width=".7" d="M${f(260 + i * 34)} ${f(116 + i * 2.6)} C${f(254 + i * 34)} 180 ${f(254 + i * 34)} 220 ${f(260 + i * 34)} ${f(278 - i * 3)}"/>`;
	out += ellipse(200, 168, 42, 30, 1.2);
	for (let i = -3; i <= 3; i++)
		out += `<path class="ln" stroke-width=".7" d="M${200 + i * 9} 142 C${196 + i * 9} 158 ${196 + i * 9} 178 ${200 + i * 9} 194"/>`;
	out +=
		`<path class="ln" stroke-width="1.1" d="M150 214 C170 250 230 262 270 246 C240 236 200 226 150 214 Z"/>` +
		hatch('operc', 'M150 214 C170 250 230 262 270 246 C240 236 200 226 150 214 Z', 3, 60, 0.4);
	out += ellipse(160, 230, 14, 8, 0.8);
	out += `<path class="ln" stroke-width=".5" stroke-dasharray="3 3" d="M240 190 C320 186 420 190 500 200"/>`;
	out +=
		leader(200, 140, 170, 50, 'A') +
		leader(218, 168, 260, 60, 'B') +
		leader(220, 246, 230, 330, 'C') +
		leader(420, 192, 470, 300, 'D') +
		leader(160, 232, 90, 310, 'E');
	return out;
}

function microcadaScale(): string {
	let out = '';
	const ring = `M150 230 C150 160 210 130 260 130 C310 130 370 160 370 230 C370 300 310 330 260 330 C210 330 150 300 150 230 Z M180 230 C180 182 220 160 260 160 C300 160 340 182 340 230 C340 278 300 300 260 300 C220 300 180 278 180 230 Z`;
	out +=
		`<path class="ln" stroke-width="1.3" fill-rule="evenodd" d="${ring}"/>` +
		hatch(
			'ringband',
			'M150 230 C150 160 210 130 260 130 C310 130 370 160 370 230 L340 230 C340 182 300 160 260 160 C220 160 180 182 180 230 Z',
			3.5,
			40,
			0.4
		);
	out +=
		`<rect class="ln" stroke-width="1.2" x="220" y="96" width="80" height="40"/>` +
		hatch('bezel', 'M220 96 H300 V136 H220 Z', 3, 20, 0.4);
	out += `<path class="ln" stroke-width="1" d="M256 96 L256 70 L268 70 L268 96 M248 70 L276 70"/>`;
	out += `<g transform="translate(262 62)"><path class="ln" stroke-width=".9" d="M-6 0 C-6 -4 6 -4 6 0 C6 6 2 12 0 13 C-2 12 -6 6 -6 0 Z"/><path class="ln" stroke-width=".6" d="M-5 -1 C-14 -8 -20 -12 -24 -10 M5 -1 C14 -8 20 -12 24 -10"/></g>`;
	out += `<g transform="translate(480 120)">${cicadaDorsal(0, 0, 0.9, false)}</g>`;
	out += `<path class="ln" stroke-width="1.2" d="M60 370 L260 370 M60 364 L60 376 M160 366 L160 374 M260 364 L260 376"/>`;
	out +=
		leader(262, 58, 320, 30, 'A') +
		leader(260, 116, 380, 80, 'B') +
		leader(170, 260, 90, 300, 'C') +
		leader(480, 200, 540, 300, 'D') +
		leader(160, 370, 160, 340, 'E');
	return out;
}

function kilocadaPerch(): string {
	let out = '';
	out +=
		`<path class="ln" stroke-width="1.4" d="M60 360 L540 360"/>` +
		hatch('ground', 'M60 360 H540 V384 H60 Z', 6, 45, 0.4);
	out +=
		`<rect class="ln" stroke-width="1.2" x="250" y="320" width="100" height="40"/>` +
		hatch('footing', 'M250 320 H350 V360 H250 Z', 4, 135, 0.4);
	out += `<path class="ln" stroke-width="1.4" d="M282 320 L282 90 M318 320 L318 90 M270 90 L330 90 M270 96 L330 96 M282 120 L318 150 M318 150 L282 180 M282 180 L318 210 M318 210 L282 240 M282 240 L318 270 M318 270 L282 300"/>`;
	out += `<path class="ln" stroke-width="1.2" d="M300 90 L300 40 M240 40 L360 40 M240 46 L360 46 M150 360 L282 200 M450 360 L318 200"/>`;
	out += `<g transform="translate(300 160) rotate(-90) scale(1.2)">${cicadaDorsal(0, 0, 1, false)
		.replace(/id="(\w+)"/g, 'id="k$1"')
		.replace(/url\(#(\w+)\)/g, 'url(#k$1)')}</g>`;
	out += `<path class="ln" stroke-width="1" d="M80 330 L80 130 M74 330 L86 330 M74 130 L86 130"/><text x="60" y="120">2 m</text>`;
	out +=
		leader(300, 42, 380, 18, 'A') +
		leader(318, 150, 420, 130, 'B') +
		leader(200, 300, 150, 260, 'C') +
		leader(300, 340, 380, 400, 'D') +
		leader(150, 160, 120, 90, 'E');
	return out;
}

function teamHarness(): string {
	let out = '';
	for (let row = 0; row < 12; row++)
		for (let col = 0; col < 25; col++) {
			const x = 40 + col * 14;
			const y = 60 + row * 18;
			out += `<path class="ln" stroke-width=".7" d="M${x} ${y} l3 -3 l3 3 l-3 6 z"/>`;
		}
	out += `<path class="ln" stroke-width=".5" d="${Array.from({ length: 12 }, (_, r) => `M40 ${66 + r * 18} L376 ${66 + r * 18}`).join(' ')}"/>`;
	out += `<path class="ln" stroke-width="1" d="${Array.from({ length: 12 }, (_, r) => `M376 ${66 + r * 18} L430 ${160 + (r - 6) * 4}`).join(' ')}"/>`;
	out +=
		`<path class="ln" stroke-width="1.4" d="M430 130 L430 190 M430 160 L470 160"/><rect class="ln" stroke-width="1.3" x="470" y="130" width="90" height="60"/>` +
		hatch('load', 'M470 130 H560 V190 H470 Z', 5, 45, 0.4);
	out += `<text x="40" y="300">Detail: 300 of the 600 in harness</text>`;
	out +=
		leader(47, 60, 30, 30, 'A') +
		leader(200, 66, 220, 30, 'B') +
		leader(400, 150, 420, 90, 'C') +
		leader(450, 160, 450, 230, 'D') +
		leader(515, 190, 540, 240, 'E');
	return out;
}

function perimeter(): string {
	let out =
		`<rect class="ln" stroke-width="1.3" x="230" y="150" width="140" height="90"/>` +
		hatch('house', 'M230 150 H370 V240 H230 Z', 4, 45, 0.45);
	out += `<path class="ln" stroke-width=".8" stroke-dasharray="6 4" d="M60 40 H540 V350 H60 Z"/>`;
	const n = 40;
	for (let i = 0; i < n; i++) {
		const t = i / n;
		const per = 2 * (480 + 310);
		let d = t * per;
		let x = 60;
		let y = 40;
		if (d < 480) x = 60 + d;
		else if ((d -= 480) < 310) {
			x = 540;
			y = 40 + d;
		} else if ((d -= 310) < 480) {
			x = 540 - d;
			y = 350;
		} else {
			d -= 480;
			y = 350 - d;
		}
		out += `<circle class="ln" stroke-width=".9" cx="${f(x)}" cy="${f(y)}" r="4"/>`;
	}
	out += `<path class="ln" stroke-width=".4" stroke-dasharray="2 4" d="M300 195 L60 40 M300 195 L540 40 M300 195 L540 350 M300 195 L60 350"/>`;
	out +=
		leader(300, 195, 330, 120, 'A') +
		leader(60, 40, 30, 16, 'B') +
		leader(300, 40, 300, 16, 'C') +
		leader(540, 195, 575, 195, 'D') +
		leader(180, 350, 160, 380, 'E');
	return out;
}

function exuviaMount(): string {
	let out =
		`<path class="ln" stroke-width="1.4" d="M80 330 L520 330 M80 336 L520 336"/>` +
		hatch('shelf', 'M80 330 H520 V346 H80 Z', 4, 45, 0.4);
	out += `<path class="ln" stroke-width="1.2" d="M300 330 L300 250 M290 330 L310 330"/>`;
	const shell = `M260 250 C254 200 270 140 300 128 C330 140 346 200 340 250 C330 270 270 270 260 250 Z`;
	out += hatch('shell', shell, 4, 80, 0.35) + `<path class="ln" stroke-width="1.3" d="${shell}"/>`;
	out += `<path class="ln" stroke-width="1.1" d="M300 132 L300 200"/>`;
	out += `<path class="ln" stroke-width="1" d="M268 236 C250 248 238 262 240 280 M332 236 C350 248 362 262 360 280 M266 200 C246 206 232 214 226 226 M334 200 C354 206 368 214 374 226 M270 168 C254 166 244 160 238 150 M330 168 C346 166 356 160 362 150"/>`;
	out += `<path class="ln" stroke-width=".8" d="M120 60 L120 330 M480 60 L480 330 M120 60 L480 60"/>`;
	out +=
		leader(300, 150, 400, 100, 'A') +
		leader(300, 300, 380, 300, 'B') +
		leader(240, 280, 160, 290, 'C') +
		leader(200, 336, 160, 380, 'D') +
		leader(120, 120, 80, 100, 'E');
	return out;
}

function facility(): string {
	let out = `<rect class="ln" stroke-width="1.5" x="30" y="40" width="540" height="320"/><rect class="ln" stroke-width=".6" x="36" y="46" width="528" height="308"/>`;
	out +=
		`<rect class="ln" stroke-width="1.2" x="60" y="70" width="300" height="260"/>` +
		hatch('grove', 'M60 70 H360 V330 H60 Z', 14, 45, 0.25);
	for (let i = 0; i < 9; i++)
		out += ellipse(100 + (i % 3) * 110, 110 + Math.floor(i / 3) * 80, 22, 22, 0.9);
	out += `<rect class="ln" stroke-width="1.2" x="390" y="70" width="150" height="120"/>`;
	for (let r = 0; r < 4; r++)
		out += `<rect class="ln" stroke-width=".8" x="405" y="${85 + r * 25}" width="120" height="14"/>`;
	out +=
		`<rect class="ln" stroke-width="1.2" x="390" y="210" width="150" height="120"/>` +
		hatch('o2', 'M390 210 H540 V330 H390 Z', 5, 135, 0.4);
	out += `<path class="ln" stroke-width=".7" stroke-dasharray="8 3 2 3" d="M50 60 H550 M50 340 H550 M50 60 V340"/>`;
	for (let i = 0; i < 6; i++)
		out += `<circle class="ln" stroke-width=".8" cx="${80 + i * 52}" cy="60" r="4"/>`;
	out +=
		leader(210, 200, 210, 380, 'A') +
		leader(465, 120, 590, 120, 'B') +
		leader(465, 270, 590, 270, 'C') +
		leader(132, 60, 132, 20, 'D') +
		leader(50, 200, 14, 200, 'E');
	return out;
}

function cabinets(): string {
	let out =
		`<path class="ln" stroke-width="1.4" d="M20 360 L580 360"/>` +
		hatch('floor', 'M20 360 H580 V376 H20 Z', 6, 45, 0.4);
	out += `<rect class="ln" stroke-width="1.3" x="60" y="80" width="120" height="280"/><rect class="ln" stroke-width=".6" x="70" y="90" width="100" height="250"/>`;
	for (const y of [150, 220, 290])
		out += `<path class="ln" stroke-width="1" d="M70 ${y} H170"/><path class="ln" stroke-width=".8" d="M120 ${y} L120 ${y - 16} M114 ${y - 16} C112 ${y - 34} 128 ${y - 34} 126 ${y - 16} Z"/>`;
	out += `<path class="ln" stroke-width="1.1" d="M50 80 H190 M50 74 H190"/>`;
	out +=
		`<rect class="ln" stroke-width="1.3" x="250" y="250" width="90" height="70"/><path class="ln" stroke-width="1.2" d="M250 250 L295 210 L340 250 M260 320 L260 360 M330 320 L330 360"/>` +
		ellipse(295, 232, 16, 10, 1.1);
	out += hatch('lens', 'M279 232 A16 10 0 1 0 311 232 A16 10 0 1 0 279 232 Z', 2.5, 30, 0.35);
	const big = `M430 360 C420 300 430 200 490 150 C550 200 560 300 550 360 Z`;
	out +=
		hatch('kilo', big, 6, 80, 0.35) +
		`<path class="ln" stroke-width="1.4" d="${big}"/><path class="ln" stroke-width="1" d="M490 156 L490 260 M440 300 C420 320 410 340 412 360 M540 300 C560 320 570 340 568 360"/>`;
	out +=
		leader(120, 135, 40, 40, 'A') +
		leader(295, 232, 300, 160, 'B') +
		leader(260, 340, 220, 400, 'C') +
		leader(490, 200, 560, 120, 'D') +
		leader(560, 340, 590, 400, 'E');
	return out;
}

export const DRAWINGS: Record<DrawingId, Drawing> = {
	'dorsal-anatomy': {
		viewBox: '0 0 600 400',
		label: 'Dorsal aspect of the adult, wings spread',
		body:
			cicadaDorsal(300, 210, 1.7) +
			leader(259, 108, 200, 40, 'A') +
			leader(300, 103, 330, 30, 'B') +
			leader(345, 140, 430, 110, 'C') +
			leader(300, 200, 400, 250, 'D') +
			leader(300, 320, 360, 380, 'E') +
			leader(150, 190, 70, 150, 'F'),
		key: [
			{ letter: 'A.', label: 'Compound eye' },
			{ letter: 'B.', label: 'Ocelli' },
			{ letter: 'C.', label: 'Pronotum' },
			{ letter: 'D.', label: 'Mesonotum, with the cruciform elevation' },
			{ letter: 'E.', label: 'Abdominal tergites' },
			{ letter: 'F.', label: 'Fore wing' }
		]
	},
	'wing-venation': {
		viewBox: '0 0 600 270',
		label: 'Fore wing, dorsal aspect',
		body: wingPlate('plain'),
		key: WING_KEY
	},
	'clear-wing-venation': {
		viewBox: '0 0 600 270',
		label: 'Fore wing of the Clear-Winged type',
		body: wingPlate('clear'),
		key: WING_KEY
	},
	'smoke-wing-venation': {
		viewBox: '0 0 600 270',
		label: 'Fore wing of the Smoke-Winged type, showing the smoke',
		body: wingPlate('smoke'),
		key: WING_KEY
	},
	'flat-wing-venation': {
		viewBox: '0 0 600 290',
		label: 'Fore wing of the Flat-Winged type, with the set in elevation below',
		body: wingPlate('flat'),
		key: WING_KEY
	},
	'chorus-apparatus': {
		viewBox: '0 0 600 340',
		label: 'The chorus apparatus, lateral aspect, wings removed',
		body: chorus(),
		key: [
			{ letter: 'A.', label: 'Tymbal' },
			{ letter: 'B.', label: 'Tymbal ribs' },
			{ letter: 'C.', label: 'Operculum' },
			{ letter: 'D.', label: 'Abdominal chamber' },
			{ letter: 'E.', label: 'Tympanum' }
		]
	},
	'microcada-scale': {
		viewBox: '0 0 600 400',
		label: 'The Microcada on the signet ring, with the Standard for comparison',
		body: microcadaScale(),
		key: [
			{ letter: 'A.', label: 'The animal at rest' },
			{ letter: 'B.', label: 'Bezel and soldered perch' },
			{ letter: 'C.', label: 'Shank of the ring' },
			{ letter: 'D.', label: 'Standard variety, same scale' },
			{ letter: 'E.', label: 'Scale of one centimeter' }
		]
	},
	'kilocada-perch': {
		viewBox: '0 0 600 400',
		label: 'The reinforced perch for the Kilocada, elevation',
		body: kilocadaPerch(),
		key: [
			{ letter: 'A.', label: 'Crown bar' },
			{ letter: 'B.', label: 'Lattice mast, welded' },
			{ letter: 'C.', label: 'Raking stays' },
			{ letter: 'D.', label: 'Footing, reinforced concrete' },
			{ letter: 'E.', label: 'The animal at the molt' }
		]
	},
	'summons-ring': {
		viewBox: '0 0 600 400',
		label: 'The ring for the Summons, plan',
		body: summonsRing(),
		key: [
			{ letter: 'A.', label: 'Owner’s station' },
			{ letter: 'B.', label: 'Release stand' },
			{ letter: 'C.', label: 'Judge’s position' },
			{ letter: 'D.', label: 'Arcs at ten, twenty and thirty yards' },
			{ letter: 'E.', label: 'Ring rope, double' }
		]
	},
	'team-harness': {
		viewBox: '0 0 600 320',
		label: 'The team in harness, plan',
		body: teamHarness(),
		key: [
			{ letter: 'A.', label: 'Animal in collar' },
			{ letter: 'B.', label: 'Rank trace' },
			{ letter: 'C.', label: 'Gathering traces' },
			{ letter: 'D.', label: 'Master swingletree' },
			{ letter: 'E.', label: 'Load' }
		]
	},
	'perimeter-deployment': {
		viewBox: '0 0 600 400',
		label: 'The perimeter held, plan',
		body: perimeter(),
		key: [
			{ letter: 'A.', label: 'The principal residence' },
			{ letter: 'B.', label: 'Corner station' },
			{ letter: 'C.', label: 'Station on the line' },
			{ letter: 'D.', label: 'Boundary of the holding' },
			{ letter: 'E.', label: 'Interval of the line' }
		]
	},
	'exuvia-mount': {
		viewBox: '0 0 600 400',
		label: 'The exuvia mounted for the cabinet, elevation',
		body: exuviaMount(),
		key: [
			{ letter: 'A.', label: 'Dorsal split' },
			{ letter: 'B.', label: 'Single ivory pin' },
			{ letter: 'C.', label: 'Foreleg as found' },
			{ letter: 'D.', label: 'Shelf' },
			{ letter: 'E.', label: 'Cabinet glazing' }
		]
	},
	'kilocada-facility': {
		viewBox: '0 0 600 400',
		label: 'A Kilocada rearing facility, plan',
		body: facility(),
		key: [
			{ letter: 'A.', label: 'Grove enclosure, held at fifty-five per cent oxygen' },
			{ letter: 'B.', label: 'Compute hall' },
			{ letter: 'C.', label: 'Oxygen plant and suppression stores' },
			{ letter: 'D.', label: 'Suppression nozzles, at intervals' },
			{ letter: 'E.', label: 'Interlocked envelope' }
		]
	},
	'cabinet-elevations': {
		viewBox: '0 0 600 410',
		label: 'Cabinets of the three varieties, elevation',
		body: cabinets(),
		key: [
			{ letter: 'A.', label: 'Standard cabinet, three shelves' },
			{ letter: 'B.', label: 'Integral lens, certified' },
			{ letter: 'C.', label: 'Microcada cabinet on its stand' },
			{ letter: 'D.', label: 'Kilocada exuvia, freestanding' },
			{ letter: 'E.', label: 'Floor line' }
		]
	}
};
