import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.c8c5fdb6.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/singletons.b0dee27a.js","_app/immutable/chunks/index.f36d485b.js","_app/immutable/chunks/stores.06cf931e.js","_app/immutable/chunks/image.ab5b619d.js"];
export const stylesheets = ["_app/immutable/assets/0.becb25e6.css","_app/immutable/assets/image.6451e9b1.css"];
export const fonts = [];
