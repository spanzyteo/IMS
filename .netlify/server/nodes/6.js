import * as server from '../entries/pages/Signup/_page.server.ts.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/Signup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Signup/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.10f9ce11.js","_app/immutable/chunks/index.59c20f45.js","_app/immutable/chunks/navigation.667a0ae4.js","_app/immutable/chunks/singletons.5743a098.js","_app/immutable/chunks/index.f921ae3d.js","_app/immutable/chunks/stores.2d565e65.js","_app/immutable/chunks/stores.32631caf.js","_app/immutable/chunks/forms.ad03d527.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/authorise.52ff5040.js"];
export const stylesheets = ["_app/immutable/assets/6.9ebe4563.css"];
export const fonts = [];
