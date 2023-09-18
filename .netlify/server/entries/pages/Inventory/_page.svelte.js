import { c as create_ssr_component, s as subscribe, v as validate_component } from "../../../chunks/index.js";
/* empty css                                                     */import { S as Spinner } from "../../../chunks/Spinner.js";
import "../../../chunks/stores2.js";
/* empty css                                                       *//* empty css                                                   */import { p as page } from "../../../chunks/stores.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  data.data;
  new FormData();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1puoqu_START -->${$$result.title = `<title>Inventory</title>`, ""}<meta name="description" content="Best Inventory Management System For Small And Large Scale Businesses Worldwide"><meta name="keywords" content="Inventory"><!-- HEAD_svelte-1puoqu_END -->`, ""}

${`${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
