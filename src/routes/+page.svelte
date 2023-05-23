<script>
	import Spinner from './components/Spinner.svelte';
	import { onMount } from 'svelte';
	import Sidebar from './components/Sidebar.svelte';
	import { Button, Input } from 'sveltestrap';
	import { isLoggedIn } from '../stores/stores';
	let loading = true;
	let ac = 'home';
	onMount(() => {
		// simulate a delay of 1.5 seconds
		setTimeout(() => {
			loading = false;
		}, 500);
	});
	let username = '';
	let password = '';
	async function login() {
		if (username.toLocaleLowerCase() === 'admin' && password === 'Admin') {
			$isLoggedIn = true;
		} else {
			alert('Incorrect Login Credentials');
			$isLoggedIn = false;
		}
	}
	async function logout() {
		$isLoggedIn = false;
	}
</script>

<svelte:head>
	<title>Los Angis - Home</title>
</svelte:head>

<body>
	{#if $isLoggedIn === false}
		<body>
			<div class="spinner-container">
				<form>
					<div
						class="w-[500px] text-center h-[500px] p-[5rem] rounded-3xl shadow-slate-700 shadow-lg bg-gradient-to-b from-[royalblue] to-[green]"
					>
						<h3 class="text-3xl font-extrabold p-3">Log In</h3>
						<Input type="text" bind:value={username} placeholder="User Name" class=" border" /><br
						/><br />
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
	{:else if loading === true}
		<Spinner />
	{:else}
		<div class="flex overflow-hidden justify-between">
			<div id="fixed">
				<Sidebar active_component={ac} />
			</div>
			<div class="mx-auto md:ml-[300px] lg:ml-[300px] 2xl:ml-[300px] text-center">
				<div class="text-center mt-[10rem] mx-auto w-full md:ml-[10rem] lg:ml-[10rem]">
					<ul class="flex">
						<li class="px-12">
							<div class="py-6">
								<a href="/">
									<img
										src="/home.png"
										alt="logo"
										class="w-[200px] border-slate-500 border-2 p-3 rounded-2xl hover:bg-sky-500"
									/>
									<p class="font-semibold text-lg">Home</p>
								</a>
							</div>
						</li>
						<li>
							<div class="py-6">
								<a href="/Banking">
									<img
										src="/bank.png"
										alt="logo"
										class="w-[200px] h-full p-3 border-slate-500 border-2 rounded-2xl hover:bg-sky-500"
									/>
									<p class="font-semibold text-lg">Banking</p>
								</a>
							</div>
						</li>
					</ul>
					<ul class="flex">
						<li class="px-12">
							<div class="py-6">
								<a href="/invoices">
									<img
										src="/invoice.png"
										alt="logo"
										class="w-[200px] border-slate-500 border-2 text-center p-3 hover:bg-sky-500 rounded-2xl"
									/>
									<p class="font-semibold text-lg">Invoices</p>
								</a>
							</div>
						</li>
						<li>
							<div class="py-6">
								<a href="/">
									<img
										src="/inventory.png"
										alt="logo"
										class="w-[200px] p-3 text-center border-slate-500 border-2 rounded-2xl hover:bg-sky-500"
									/>
									<p class="font-semibold text-lg">Inventory</p>
								</a>
							</div>
						</li>
					</ul>
					<div class="p-6">
						<Button color="danger" class="text-center list-none" on:click={logout}>Logout</Button>
					</div>
				</div>
			</div>
		</div>
	{/if}
</body>

<style>
	@media print {
		#fixed {
			display: none;
		}
	}
	.spinner-container {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
