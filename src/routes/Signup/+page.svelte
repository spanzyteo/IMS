<script>
	import { goto } from '$app/navigation';
	import { Input, Button } from 'sveltestrap';
	import { isLoggedIn } from '../../stores/stores';
	let details = {
		name: '',
		email: '',
		password: ''
	};
	let fd = new FormData();
	async function login() {
		fd.append('user', JSON.stringify(details));
		let data = await fetch('?/signup', { method: 'POST', body: fd });
		if (data.ok) {
			$isLoggedIn = true;
			await goto('/');
		} else {
			alert('Registration Failed');
		}
		// console.log(`New Data: ${data}`);
	}
</script>

<body>
	<div class="login-container">
		<div
			class="w-[500px] text-center h-[500px] p-[5rem] rounded-3xl shadow-slate-700 shadow-lg bg-gradient-to-b from-[royalblue] to-[green]"
		>
			<h3 class="text-3xl font-extrabold p-3">Sign Up</h3>
			<Input
				type="text"
				name="text"
				bind:value={details.name}
				placeholder="User Name"
				class=" border"
			/><br /><br />
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
