import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.7cf2c133.js","_app/immutable/chunks/index.59c20f45.js"];
export const stylesheets = ["_app/immutable/assets/0.f414a064.css"];
export const fonts = [];
