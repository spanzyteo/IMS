<script>
	import { onMount } from 'svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Spinner from '../components/Spinner.svelte';
	let myVariable = 5;
	let loading = true;
	let searchTerm = '';
	export let data;
	let inventory = data.data;
	if (myVariable <= 0) {
		console.log('myVariable is less than or equal to 0');
	} else {
		console.log('myVariable is greater than 0');
	}
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
{:else}
	<div class="flex">
		<Sidebar active_component={ac} />
		<div class="mx-auto">
			<section style="background-color: white;" class="h-fit fixed p-0 w-[1000px]">
				<h3 class="text-3xl ml-auto font-extrabold text-center p-2">
					Inventory <br />
					<br />
					<input
						type="text"
						bind:value={searchTerm}
						placeholder="Search..."
						class="w-[500px] rounded-full text-center border-[2px] text-2xl border-slate-500 bg-white"
					/>
				</h3>

				<br />
			</section>
			<div class="mt-[11rem] text-center ml-[5rem]">
				<table>
					<thead style="border-top: 2px solid black;">
						<tr>
							<th>Name</th>
							<th>Quantity</th>
							<th>Price</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{#each filtered_inventory as inv, index}
							<tr>
								<td>
									{inv.name}
								</td>
								<td>
									{inv.quantity}
								</td>
								<td>{inv.price}</td>
								<td>{inv.desc}</td>
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
	tr,
	td,
	thead {
		padding: 20px;
	}
	td,
	th {
		padding: 20px;
		border-right: 2px solid;
		border-left: 2px solid;
		border-bottom: 2px solid;
		width: 200px;
	}
	table {
		border-collapse: collapse;
	}
</style>
