<script>
	import { onMount } from 'svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Spinner from '../components/Spinner.svelte';
	import { isLoggedIn } from '../../stores/stores';
	import { Button, Form } from 'sveltestrap';
	import Login from '../components/Login.svelte';
	import { ensureLogin } from '$lib/authorise';
	import { page } from '$app/stores';
	import { deserialize } from '$app/forms';
	import { goto } from '$app/navigation';
	let myVariable = 5;
	let loading = true;
	let searchTerm = '';
	let username = '';
	let password = '';
	export let data;
	let inventory = data.data;

	let ac = 'inventory';
	onMount(() => {
		ensureLogin($page.data);
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
	let details = [
		{
			name: '',
			quantity: 0,
			price: 0,
			desc: ''
		}
	];
	let fd = new FormData();
	async function addInv() {
		fd.append('inv', JSON.stringify(details));
		let data = await fetch('?/addItem', { method: 'POST', body: fd });
		let res = deserialize(await data.text());
		if (res.type === 'success') {
			alert(`${res.data.message}`);
			await goto(`${res.data.url}`);
		} else {
			alert(`${res.data.message}`);
		}
	}
</script>

<svelte:head>
	<title>Inventory</title>
	<meta
		name="description"
		content="Best Inventory Management System For Small And Large Scale Businesses Worldwide"
	/>
	<meta name="keywords" content="Inventory" />
</svelte:head>

{#if loading === true}
	<Spinner />
{:else}
	<div class="flex">
		<Sidebar active_component={ac} />
		<div class="mx-auto px-auto text-center">
			<nav class="m-auto mb-6 max-w-screen-lg text-center bg-white">
				<h3 class="text-3xl ml-auto font-extrabold text-center p-2">Inventory</h3>
				<input
					type="text"
					bind:value={searchTerm}
					placeholder="Search..."
					class="w-[500px] rounded-lg mb-6 text-center border-[2px] text-2xl border-slate-500 bg-white"
				/>
			</nav>

			<div class="text-center m-auto p-auto">
				<table class="mx-auto">
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
			<div class="bg-black w-full">
				<Button color="success" outline class="mx-auto bottom-4 fixed font-bold">Add Item</Button>
			</div>
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
