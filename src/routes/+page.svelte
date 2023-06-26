<script lang="ts">
	import Spinner from './components/Spinner.svelte';
	import { onMount } from 'svelte';
	import Sidebar from './components/Sidebar.svelte';
	import Login from './components/Login.svelte';
	import { Button, Input } from 'sveltestrap';
	import { isLoggedIn } from '../stores/stores';
	import { page } from '$app/stores';
	import { deserialize } from '$app/forms';
	import { ensureLogin } from '$lib/authorise';
	import { goto } from '$app/navigation';

	let loading = true;
	let ac = 'home';

	onMount(() => {
		ensureLogin($page.data);
		if ($page.data.session.userId) {
			$isLoggedIn = true;
		}

		setTimeout(() => {
			loading = false;
		}, 500);
	});
	let username = '';
	let password = '';

	let fi = new FormData();
	async function logout(e) {
		e.preventDefault();
		let data = await fetch('?/logout', { method: 'POST', body: fi });
		let res = deserialize(await data.text());
		// console.log(res);
		if (res.type === 'success') {
			ensureLogin(null);
			alert('Logout Successfull');
			await goto(`/Login`);
		}
		// window.location.reload();
	}
</script>

<svelte:head>
	<title>Los Angis - Home</title>
	<meta
		name="description"
		content="Best Inventory Management System For Small And Large Scale Businesses Worldwide"
	/>
	<meta name="keywords" content="Inventory Management System Home Page" />
	<meta name="author" content="E-Hub Digital Services" />
</svelte:head>

<body>
	{#if loading === true}
		<Spinner />
	{:else}
		<div class="flex overflow-hidden justify-between">
			<div id="fixed">
				<Sidebar active_component={ac} />
			</div>
			<div class=" mx-auto bg-no-repeat bg-center h-screen items-center">
				<div class="text-center mt-[10rem] mx-auto w-full md:ml-[10rem] lg:ml-[10rem]">
					<ul class="flex">
						<li class="px-12">
							<div class="py-6">
								<a href="/">
									<img
										src="/Icons/home-outline.svg"
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
										src="/Icons/cash-outline.svg"
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
										src="/Icons/receipt-outline.svg"
										alt="logo"
										class="w-[200px] border-slate-500 border-2 text-center p-3 hover:bg-sky-500 rounded-2xl"
									/>
									<p class="font-semibold text-lg">Invoices</p>
								</a>
							</div>
						</li>
						<li>
							<div class="py-6">
								<a href="/Inventory">
									<img
										src="/Icons/clipboard-outline.svg"
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
	/* body {
		background-image: url('../assets/bg.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		height: 100%;
		width: 100%;
	} */
</style>
