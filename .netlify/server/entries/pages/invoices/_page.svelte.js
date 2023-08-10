import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../chunks/index3.js";
import { i as isLoggedIn } from "../../../chunks/stores2.js";
/* empty css                                                       *//* empty css                                                   *//* empty css                                                     */import { S as Spinner } from "../../../chunks/Spinner.js";
import { p as page } from "../../../chunks/stores.js";
/* empty css                                                     */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isLoggedIn;
  let $$unsubscribe_page;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  data.invoice;
  let d = /* @__PURE__ */ new Date();
  let date = d.toDateString();
  console.log(date);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-aq2ziw_START -->${$$result.title = `<title>Invoices</title>`, ""}<!-- HEAD_svelte-aq2ziw_END -->`, ""}

<html lang="en"><body>${`${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}</body></html>`;
});
export {
  Page as default
};
