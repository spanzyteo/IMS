import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../chunks/index3.js";
import "devalue";
import "trpc-sveltekit";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".login-card.svelte-q0xt9o{height:100vh;background-image:url('../../../assets/bg.png');background-size:cover;background-position:center;background-repeat:no-repeat}.login-container.svelte-q0xt9o{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);background:rgba(19, 19, 19, 0.65);border-radius:16px;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1);backdrop-filter:blur(6.8px);-webkit-backdrop-filter:blur(6.8px);border:1px solid rgba(19, 19, 19, 0.39)}input.svelte-q0xt9o:focus{background-color:transparent}input.svelte-q0xt9o:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset !important;background-color:red !important}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let details = { email: "", password: "" };
  new FormData();
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1bel8ov_START -->${$$result.title = `<title>Login</title>`, ""}<!-- HEAD_svelte-1bel8ov_END -->`, ""}
<body><div class="login-card svelte-q0xt9o"><div class="login-container w-2/4 svelte-q0xt9o"><div class="text-center p-[5rem] rounded-xl shadow-slate-700"><h3 class="text-3xl text-[rgb(87,242,135)] font-bold pb-3">Login Your Account</h3>
				<div class="form__group field mb-3"><input type="email" name="email" class="form__field mt-2 svelte-q0xt9o" placeholder="Enter Email Address"${add_attribute("value", details.email, 0)}>

					<label for="email" class="form__label"><img src="/assets/mail.svg" alt="email-icon" width="30" class="text-[#57F287] float-left mr-2 icon">${escape("")} Enter Email Address
					</label></div>
				<div class="form__group field"><input type="password" name="password" class="form__field mt-2 svelte-q0xt9o" placeholder="Enter Password"${add_attribute("value", details.password, 0)}>
					<label for="password" class="form__label"><img src="/assets/lock.svg" alt="passkey" width="30" class="float-left mr-2 icon">
						${escape("")}
						Enter Password</label>
					<br><br>
					<p class="font-bold text-xl text-black">Don&#39;t have an account? <a href="/Signup" class="text-blue-400">Signup</a></p></div>
				<button class="button w-[10rem] px-10 py-2 mt-5 border-[#57F287] font-bold">Log In</button></div></div></div>
</body>`;
});
export {
  Page as default
};
