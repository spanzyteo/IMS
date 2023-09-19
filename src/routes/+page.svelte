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
		if (res.data.success) {
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

<!-- <body>
	{#if loading === true}
		<Spinner />
	{:else}
		<div class="flex">
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
</body> -->

<body>
	{#if loading === true}
		<Spinner />
	{:else}
		<div class="flex h-screen">
			<div id="fixed">
				<Sidebar active_component={ac} />
			</div>
			<div class="flex-1 w-screen -ml-[-230px] p-5">
				<div
					class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-10 text-white"
				>
					<div
						class="w-[18rem] sm:w-[18rem] md:w-[100%] border col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 rounded-xl p-3 shadow-md text-center text-black"
					>
						<h1 class="mb-3 text-5xl font-bold">Welcome to Logis Anis</h1>
						<p class="mb-3">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
							exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. In deleniti
							eaque aut repudiandae et a id nisi.
						</p>
						<a href="/">
							<button class="bg-black rounded-[20px] px-3 py-2 text-sm text-white"
								>Get Started</button
							>
						</a>
					</div>
					<div
						class="w-[18rem] sm:w-[18rem] md:w-[100%] bg-[#212121] button2 border rounded-xl p-3 shadow-md"
					>
						<div
							class="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between mb-3 items-center"
						>
							<div class="flex items-center">
								<img class="mr-2" src="/Icons/cash-outline.svg" alt="logo" width="30" />
								<h1 class="font-bold">BANKING</h1>
							</div>
							<div>
								<a href="/Banking">
									<button class=" font-bold bg-white rounded-[20px] px-3 py-2 text-sm text-black"
										>Launch</button
									>
								</a>
							</div>
						</div>
						<h1 class="text-3xl font-extrabold mb-3">#<span class="text-7xl">2</span></h1>
						<h2 class="text-sm mb-3">
							Los Angis: The Leading tool for software management. <br /> Increase in your revenue by
							the end of this month is forecasted
						</h2>
					</div>
					<div
						class="bg-[#212121] w-[18rem] sm:w-[18rem] md:w-[100%] button2 border rounded-xl p-3 shadow-md"
					>
						<div
							class="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between mb-3 items-center"
						>
							<div class="flex items-center">
								<img class="mr-2" src="/Icons/receipt-outline.svg" alt="logo" width="30" />
								<h1 class="font-bold">INVOICES</h1>
							</div>
							<div>
								<a href="/invoices">
									<button class="bg-white font-bold rounded-[20px] px-3 py-2 text-sm text-black"
										>Launch</button
									>
								</a>
							</div>
						</div>
						<h1 class="text-3xl font-extrabold mb-3">#<span class="text-7xl">3</span></h1>
						<h2 class="text-sm mb-3">
							Los Angis: The Leading tool for software management. <br /> Increase in your revenue by
							the end of this month is forecasted
						</h2>
					</div>

					<div
						class="bg-[#212121] w-[18rem] sm:w-[18rem] md:w-[100%] border button2 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 rounded-xl p-3 shadow-md"
					>
						<div class="flex justify-between mb-3 items-center">
							<div class="flex items-center">
								<img class="mr-2" src="/Icons/clipboard-outline.svg" alt="logo" width="30" />
								<h1 class="font-bold">INVENTORY</h1>
							</div>
							<div>
								<a href="/Inventory">
									<button class="bg-white font-bold rounded-[20px] px-3 py-2 text-sm text-black"
										>Launch</button
									>
								</a>
							</div>
						</div>
						<h1 class="text-3xl font-extrabold mb-3">#<span class="text-7xl">4</span></h1>
						<h2 class="text-sm mb-3">
							Los Angis: The Leading tool for software management. <br /> Increase in your revenue by
							the end of this month is forecasted
						</h2>
					</div>
					<div class="">
						<button
							class="text-center list-none mb-10 bg-black hover:bg-transparent font-bold rounded-[20px] px-4 py-2 text-sm text-white"
							on:click={logout}>Logout</button
						>
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
	body {
		background-image: url('../assets/bg.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		height: 100%;
		width: 100%;
	}
</style>
