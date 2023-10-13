// import { error } from '@sveltejs/kit';

// export async function load({ params }) {
// 	try {
// 		const essayData = await import(`../../content/essays/${params.essay}.md`);

// 		const essay = {
// 			content: essayData.default,
// 			meta: essayData.metadata
// 		};

// 		const miniData = await import(`../../content/minis/${params.mini}.md`);

// 		const mini = {
// 			content: miniData.default,
// 			meta: miniData.metadata
// 		};

// 		return { essay, mini };
// 	} catch (e) {
// 		throw error(404, `Could not find ${params.mini}`);
// 	}
// }
