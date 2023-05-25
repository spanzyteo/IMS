<script>
	import { Input, Button } from 'sveltestrap';
	// import { isLoggedIn } from '../../stores/stores';
	// import { goto } from '$app/navigation';
	let details = {
		email: '',
		password: ''
	};
	let fd = new FormData();
	async function login(e) {
		e.preventDefault();
		fd.append('user', JSON.stringify(details));
		let data = await fetch('?/login', { method: 'POST', body: fd });
		// alert(`${data.message}`);
		console.log(data);
		// console.log(`New Data: ${data}`);
	}
</script>

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
