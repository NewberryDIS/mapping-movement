import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.c0eef2b2.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.1e6adb8d.js","_app/immutable/chunks/singletons.5070c782.js","_app/immutable/chunks/image.a8a041f2.js","_app/immutable/chunks/stores.5e7561e6.js","_app/immutable/chunks/control.f5b05b5f.js"];
export const stylesheets = ["_app/immutable/assets/0.a938f27a.css","_app/immutable/assets/image.6451e9b1.css"];
export const fonts = [];
