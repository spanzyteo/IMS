<script lang="ts">
	import Spinner from './components/Spinner.svelte';
	import { onMount } from 'svelte';
	import Sidebar from './components/Sidebar.svelte';
	import Login from './components/Login.svelte';
	import { Button, Input } from 'sveltestrap';
	import { isLoggedIn } from '../stores/stores';
	import { page } from '$app/stores';
	import { ensureLogin } from '$lib/authorise';

	let loading = true;
	let ac = 'home';

	onMount(() => {
		ensureLogin($page.data);
		if ($page.data.length > 0) {
			$isLoggedIn = true;
		}

		setTimeout(() => {
			loading = false;
		}, 500);
	});
	let username = '';
	let password = '';

	async function logout() {
		$isLoggedIn = false;
	}
</script>

<svelte:head>
	<title>Los Angis - Home</title>
</svelte:head>

<body>
	{#if loading === true}
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
</style>
