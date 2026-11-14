declare module 'virtual:media' {
	const media: Record<
		string,
		{ alt: string; era: string; ratio: string; src: string | null; width: number; height: number }
	>;
	export default media;
}
