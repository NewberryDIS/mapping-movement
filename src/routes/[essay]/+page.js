// import { error } from '@sveltejs/kit';

// export async function load({ params }) {
// 	try {
// 		const essayData = await import(`../../content/essays/${params.essay}.md`);

// 		const essay = {
// 			content: essayData.default,
// 			meta: essayData.metadata
// 		};

// 		let minis;

// 		const paths = import.meta.glob('/src/content/minis/*.md', { eager: true });

// 		for (const path in paths) {
// 			const file = paths[path];

// 			if (
// 				file &&
// 				typeof file === 'object' &&
// 				'metadata' in file &&
// 				file.metadata.essayslug === params.essay
// 			) {
// 				minis.push(paths[path].metadata);
// 			}
// 		}

// 		minis = minis.sort((first, second) => (first.minino > second.minino ? 1 : -1));

// 		return { essay, minis };

// 	} catch (e) {
// 		throw error(404, `Could not find ${params.essay}`);
// 	}
// }
