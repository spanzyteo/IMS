import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/index.js";
import "../../../../chunks/stores2.js";
/* empty css                                                          *//* empty css                                                        *//* empty css                                                      */import { S as Spinner } from "../../../../chunks/Spinner.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let invoiceDetails = data.invoice;
  data.name;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1y1vuug_START -->${$$result.title = `<title>Invoice For ${escape(invoiceDetails?.customer_name ? invoiceDetails.customer_name : "Customer (Unknown)")}</title>`, ""}<!-- HEAD_svelte-1y1vuug_END -->`, ""}
<html lang="en"><body class="h-full bg-white">${`${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}</body></html>`;
});
export {
  Page as default
};
