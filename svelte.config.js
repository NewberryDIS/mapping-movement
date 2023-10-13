import adapter from '@sveltejs/adapter-static';
import path from 'path';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

const dev = process.env.NODE_ENV === 'development';

const mdsvexOptions = {
	extensions: ['.md']
};

const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	onwarn: (warning, handler) => {
		if (warning.code.startsWith('a11y-')) {
			return;
		}
		handler(warning);
	},
	kit: {
		adapter: adapter({trailingSlash: 'always'}),
		alias: {
			$comps: path.resolve('./src/lib/components'),
			$cont: path.resolve('./src/content'),
			$lib: path.resolve('./src/lib'),
			$src: path.resolve('./src')
		},
		// paths: {
		// 	base: dev ? '' : '/mapmov'
		// },
		
	},
};

export default config;
