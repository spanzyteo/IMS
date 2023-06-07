<script>
	import { goto } from '$app/navigation';
	import { ensureLogin } from '$lib/authorise';
	import { Input, Button } from 'sveltestrap';
	import { deserialize } from '$app/forms';
	// import { isLoggedIn } from '../../stores/stores';

	let details = {
		email: '',
		password: ''
	};
	let fd = new FormData();
	async function login(e) {
		e.preventDefault();
		fd.append('user', JSON.stringify(details));
		let data = await fetch('?/login', { method: 'POST', body: fd });
		let res = await data.text();
		let fullres = deserialize(res);
		if (fullres.data.success) {
			alert('Login Successful, Redirecting...');
			await goto(`${fullres.data.url}`);
		}
		// if (data.ok) {
		// 	ensureLogin($page.data);
		// 	alert(`Logged In`);
		// 	await goto('/');
		// }
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>
<body>
	<div class="login-container">
		<form>
			<div
				class="w-[500px] text-center h-[500px] p-[5rem] rounded-3xl shadow-slate-700 shadow-lg bg-gradient-to-b from-[royalblue] to-[green]"
			>
				<h3 class="text-3xl font-extrabold p-3">Log In</h3>
				<Input
					type="email"
					name="email"
					bind:value={details.email}
					placeholder="E-Mail"
					class=" border"
				/><br /><br />
				<Input
					type="password"
					name="password"
					placeholder="Password"
					bind:value={details.password}
					class=" border-l-indigo-600"
				/><br /><br />
				<Button color="success" on:click={login}>Log In</Button>
			</div>
		</form>
	</div>
</body>

<style>
	.login-container {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
