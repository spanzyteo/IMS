<script lang="ts">
	import { isLoggedIn } from '../../stores/stores';
	import Login from '../components/Login.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Spinner from '../components/Spinner.svelte';
	import { onMount } from 'svelte';
	import { Button, Icon } from 'sveltestrap';
	import { ensureLogin } from '$lib/authorise';
	import { page } from '$app/stores';
	import Invoice from '../components/Invoice.svelte';
	//@ts-ignore
	let ac = 'invoices';
	export let data;
	let invoices = data.invoice;
	let searchterm = '';
	let filtered_invoices;
	let loading = true;
	let username = '';
	let password = '';
	let d = new Date();
	let date = d.toDateString();
	console.log(date);
	onMount(() => {
		ensureLogin($page.data);

		if ($page.data.session.userId) {
			$isLoggedIn = true;
		} else {
			$isLoggedIn = false;
		}
		// simulate a delay of 1.5 seconds
		setTimeout(() => {
			loading = false;
		}, 1500);
	});
	$: {
		if (searchterm) {
			filtered_invoices = invoices.filter((invoice) =>
				invoice.customer_name?.toLocaleLowerCase().includes(searchterm.toLocaleLowerCase())
			);
		} else {
			filtered_invoices = invoices;
		}
	}
</script>

<svelte:head>
	<title>Invoices</title>
</svelte:head>

<html lang="en">
	<body>
		{#if loading === true}
			<Spinner />
		{:else}
			<div class="flex h-screen">
				<div id="fixed">
					<Sidebar active_component={ac} />
				</div>
				<div class="flex-1 w-screen -ml-[-230px] p-5">
					<div class="text-center py-6">
						<div class="flex items-center justify-center">
							<input
								type="text"
								bind:value={searchterm}
								class="border-2 border-black text-sm text-black w-2/4 rounded-md mr-3 py-2 px-2"
								placeholder="Search for customers"
							/>

							<div>
								<a href="/invoices/create-invoice"
									><Button class="text-sm font-bold text-white bg-black py-2 px-4">Create</Button>
								</a>
							</div>
						</div>
					</div>

					<ul class="mt-[2rem] px-10">
						{#each filtered_invoices as invoice}
							<a href="/invoices/{invoice.id}" class="p-[20px] text-black">
								<div
									class="border border-solid-2 mb-[2rem] mt-[3rem] w-full h-fit p-10 shadow-slate-700 shadow-lg bg-gradient-to-r from-[royalblue] to-[green] rounded hover:bg-gradient-to-l"
								>
									<div class="flex justify-between">
										<div class="flex">
											<h3 class="font-bold text-2xl">
												{invoice.customer_name}
											</h3>
											{#if invoice.date}<p class="px-3">{invoice.date}</p>{/if}
											<br />
											<br />
										</div>
										<div>Click to show more details</div>
									</div>
									<p>There are {invoice.items?.length} items in this invoice:</p>
								</div>
							</a>
						{/each}
					</ul>
				</div>
			</div>
			<footer />
		{/if}
	</body>
</html>
