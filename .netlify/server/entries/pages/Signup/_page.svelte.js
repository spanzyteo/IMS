import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../chunks/index3.js";
import "../../../chunks/stores2.js";
import "devalue";
import "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".paage.svelte-xmezsc{height:100vh;background-image:url('../../assets/bg.png');background-size:cover;background-position:center;background-repeat:no-repeat}.login-container.svelte-xmezsc{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);background:rgba(19, 19, 19, 0.65);border-radius:16px;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1);backdrop-filter:blur(6.8px);-webkit-backdrop-filter:blur(6.8px);border:1px solid rgba(19, 19, 19, 0.39)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let details = {
    name: "",
    email: "",
    password: "",
    business: ""
  };
  let c_password = "";
  new FormData();
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-15pn850_START -->${$$result.title = `<title>Signup</title>`, ""}<!-- HEAD_svelte-15pn850_END -->`, ""}
<body class="paage svelte-xmezsc"><div class="login-container w-2/4 svelte-xmezsc"><div class="text-center p-[5rem] rounded-xl shadow-slate-700"><h3 class="text-3xl text-[rgb(87,242,135)] font-bold p-3">Create Account</h3>
			<div class="form__group field mb-3"><input type="text" name="text" class="form__field" placeholder="Enter Username" required${add_attribute("value", details.name, 0)}>
				<label for="text" class="form__label"><img src="./assets/user.svg" alt="email-icon" width="30" class="text-[#57F287] float-left mr-2 icon">${escape("")}
					Enter Username</label></div>
			<div class="form__group field mb-3"><input type="text" name="business_name" class="form__field" placeholder="business_name" required${add_attribute("value", details.business, 0)}>
				<label for="password" class="form__label"><img src="./assets/user.svg" alt="email-icon" width="30" class="text-[#57F287] float-left mr-2 icon">${escape("")}
					Business Name</label></div>
			<div class="form__group field mb-3"><input type="email" name="email" class="form__field" placeholder="Enter Email Address" required${add_attribute("value", details.email, 0)}>
				<label for="email" class="form__label"><img src="./assets/mail.svg" alt="email-icon" width="30" class="text-[#57F287] float-left mr-2 icon">${escape("")}
					Enter Email Address</label></div>
			<div class="form__group field mb-3"><input type="password" name="password" class="form__field" placeholder="Create password" required${add_attribute("value", details.password, 0)}>
				<label for="password" class="form__label"><img src="./assets/lock.svg" alt="email-icon" width="30" class="text-[#57F287] float-left mr-2 icon">${escape("")}
					Create Password</label></div>
			<div class="form__group field mb-3"><input type="password" name="c_password" class="form__field" placeholder="Create password" required${add_attribute("value", c_password, 0)}>
				<label for="c_password" class="form__label"><img src="./assets/lock.svg" alt="email-icon" width="30" class="text-[#57F287] float-left mr-2 icon">${escape("")}
					Confirm Password</label></div>

			<button class="button px-10 py-2 mt-5 border-[#57F287] font-bold">Create Account</button><br><br>
			<p class="font-bold text-xl text-black">Already have an account? <a href="/Login" class="text-blue-400">Login</a></p></div></div>
</body>`;
});
export {
  Page as default
};
