<script>
	import { onMount } from 'svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Spinner from '../components/Spinner.svelte';
	import { isLoggedIn } from '../../stores/stores';
	import Login from '../components/Login.svelte';
	let myVariable = 5;
	let loading = true;
	let searchTerm = '';
	let username = '';
	let password = '';
	export let data;
	let inventory = data.data;

	let ac = 'inventory';
	onMount(() => {
		// simulate a delay of 1.5 seconds
		setTimeout(() => {
			loading = false;
		}, 500);
	});
	/**
	 * @type {any[]}
	 */
	let filtered_inventory = [];
	$: {
		if (searchTerm) {
			filtered_inventory = inventory.filter((i) =>
				i.name?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
			);
		} else {
			filtered_inventory = inventory;
		}
	}
</script>

<svelte:head>
	<title>Inventory</title>
</svelte:head>

{#if loading === true}
	<Spinner />
{:else if $isLoggedIn === false}
	<Login {username} {password} />
{:else}
	<div class="flex h-screen">
		<div id="fixed">
			<Sidebar active_component={ac} />
		</div>
		<div class="flex-1 w-screen -ml-[-230px] p-5">
			<div class="mb-5">
				<h3 class="mb-3 text-5xl font-bold">Inventory</h3>
				<input
					type="text"
					bind:value={searchTerm}
					placeholder="Search items here"
					class="border-2 border-black text-sm text-black w-full rounded-md mr-3 py-2 px-2"
				/>
			</div>

			<div class="text-center">
				<table class="mx-auto w-full">
					<thead class="bg-black">
						<tr class="text-white">
							<th class="px-20 py-2">Name</th>
							<th class="px-20 py-2">Quantity</th>
							<th class="px-20 py-2">Price</th>
							<th class="px-20 py-2">Description</th>
						</tr>
					</thead>
					<tbody class="">
						{#each filtered_inventory as inv, index}
							<tr class="border-black border-b hover:bg-slate-200">
								<td class="py-2">{inv.name}</td>
								<td class="py-2">{inv.quantity}</td>
								<td class="py-2">{inv.price}</td>
								<td class="py-2">{inv.desc}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<div />
		</div>
	</div>
{/if}

<style>
</style>
