<script lang="ts">
	import { onMount } from 'svelte';
	import { isLoggedIn } from '../../stores/stores';
	import { Input, Button } from 'sveltestrap';
	export let username;
	export let password;
	onMount(() => {
		$isLoggedIn = false;
	});
	async function login() {
		if (username === 'admin' && password === 'Admin') {
			$isLoggedIn = true;
		} else {
			$isLoggedIn = false;
		}
	}
</script>

<body>
	<div class="login-container">
		<form>
			<div
				class="w-[500px] text-center h-[500px] p-[5rem] rounded-3xl shadow-slate-700 shadow-lg bg-gradient-to-b from-[royalblue] to-[green]"
			>
				<h3 class="text-3xl font-extrabold p-3">Log In</h3>
				<Input type="text" bind:value={username} placeholder="User Name" class=" border" /><br /><br
				/>
				<Input
					type="password"
					bind:value={password}
					placeholder="Password"
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
