import { B as BROWSER, w as writable } from "./index.js";
const browser = BROWSER;
let isLoggedIn = writable(false);
isLoggedIn.subscribe((val) => browser);
export {
  isLoggedIn as i
};
