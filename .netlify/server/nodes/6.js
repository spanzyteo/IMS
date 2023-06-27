import * as server from '../entries/pages/Signup/_page.server.ts.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/Signup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Signup/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.d7c72e9a.js","_app/immutable/chunks/index.8b941a8b.js","_app/immutable/chunks/navigation.6e68b0c1.js","_app/immutable/chunks/singletons.0502b1ed.js","_app/immutable/chunks/index.e586407d.js","_app/immutable/chunks/stores.fde2b7b3.js","_app/immutable/chunks/forms.090fd4ce.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/authorise.e3ae3c01.js","_app/immutable/chunks/index.8d4c3149.js","_app/immutable/chunks/control.f2d6eca3.js"];
export const stylesheets = ["_app/immutable/assets/6.2d909377.css"];
export const fonts = [];
