import * as server from '../entries/pages/Signup/_page.server.ts.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/Signup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Signup/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.878a9be0.js","_app/immutable/chunks/index.c67bcef0.js","_app/immutable/chunks/navigation.d336f691.js","_app/immutable/chunks/singletons.69031d08.js","_app/immutable/chunks/index.d930aa68.js","_app/immutable/chunks/stores.f1b72631.js","_app/immutable/chunks/stores.882564df.js","_app/immutable/chunks/forms.b28ba33c.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/authorise.52ff5040.js"];
export const stylesheets = ["_app/immutable/assets/6.9ebe4563.css"];
export const fonts = [];
