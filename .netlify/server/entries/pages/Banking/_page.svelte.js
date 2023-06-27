import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../chunks/index3.js";
/* empty css                                                     */import { S as Spinner } from "../../../chunks/Spinner.js";
import "chart.js/auto";
/* empty css                                                       */import { p as page } from "../../../chunks/stores.js";
import { i as isLoggedIn } from "../../../chunks/stores2.js";
import "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isLoggedIn;
  let $$unsubscribe_page;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  let cashFlow = data.response;
  let totalPaid = 0;
  let total = 0;
  let balance = 0;
  async function chartData() {
    for (let i = 0; i < cashFlow.length; i++) {
      totalPaid += parseInt(cashFlow[i].paid);
      total += parseInt(cashFlow[i].total);
      balance += parseInt(cashFlow[i].balance);
      if (balance <= 0) {
        balance = 0;
      }
    }
  }
  chartData();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1li337m_START -->${$$result.title = `<title>Banking</title>`, ""}<!-- HEAD_svelte-1li337m_END -->`, ""}

${`${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
