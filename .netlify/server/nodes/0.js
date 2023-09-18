import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.991d009c.js","_app/immutable/chunks/index.c67bcef0.js"];
export const stylesheets = ["_app/immutable/assets/0.0552c544.css"];
export const fonts = [];
