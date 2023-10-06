<script>
	import Card from './Utilities/Card.svelte';
	import Modal from './Utilities/Modal.svelte';
	import NewProducts from './Utilities/NewProducts.svelte';
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

	let details = [];

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

	let showModal = false;

	function handleModal() {
		showModal = !showModal;
	}

	function modal() {
		showModal = !showModal;
	}

	function addProducts(e) {
		const product = e.detail;

		details = [product, ...details];
		showModal = !showModal;
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

<Modal {showModal} on:click={handleModal}>
	<NewProducts on:show={modal} on:addProducts={addProducts} />
</Modal>

{#if loading === true}
	<Spinner />
{:else}
	<div class="flex h-screen">
		<div id="fixed">
			<Sidebar active_component={ac} />
		</div>

		<div class="flex-1 w-screen -ml-[-230px] p-5 bg-slate-200">
			<div class="mb-5">
				<input
					type="text"
					bind:value={searchTerm}
					placeholder="Search products, supplier, order"
					class="border-2 border-black text-sm text-black w-full rounded-md mr-3 py-2 px-2"
				/>
			</div>

			<Card>
				<h3 class="mb-4 text-xl font-bold">Overall Inventory</h3>

				<div class="flex justify-around">
					<div class="categories pr-6 border-r-2">
						<h2 class="categories-heading text-lg font-bold text-[#257af0] mb-2">Categories</h2>
						<h2 class="categories-number text-base font-bold mb-1">14</h2>
						<h2 class="categories-time text-sm text-[#7b8392]" style="white-space: nowrap;">
							Last 7 days
						</h2>
					</div>

					<div class="categories px-6 border-r-2">
						<h2 class="categories-heading text-lg font-bold text-[#e7a85d] mb-2">Total Products</h2>

						<div class="flex gap-x-14">
							<div>
								<h2 class="categories-number text-base font-bold mb-1">868</h2>
								<h2 class="categories-time text-sm text-[#7b8392]" style="white-space: nowrap;">
									Last 7 days
								</h2>
							</div>

							<div>
								<h2
									class="categories-amount text-base font-bold text-right mb-1"
									style="white-space: nowrap;"
								>
									#25,000
								</h2>
								<h2
									class="categories-time text-sm text-right text-[#7b8392]"
									style="white-space: nowrap;"
								>
									Revenue
								</h2>
							</div>
						</div>
					</div>

					<div class="categories px-6 border-r-2">
						<h2 class="categories-heading text-lg font-bold text-[#9574c5] mb-2">Top Selling</h2>

						<div class="flex gap-x-14">
							<div class="w-full">
								<h2 class="categories-number text-base font-bold mb-1">5</h2>
								<h2 class="categories-time text-sm text-[#7b8392]" style="white-space: nowrap;">
									Last 7 days
								</h2>
							</div>

							<div>
								<h2 class="categories-amount text-base font-bold text-right mb-1">#2,500</h2>
								<h2
									class="categories-time text-sm text-right text-[#7b8392]"
									style="white-space: nowrap;"
								>
									Cost
								</h2>
							</div>
						</div>
					</div>

					<div class="categories px-6 border-r-0">
						<h2 class="categories-heading text-lg font-bold text-[#f4736a] mb-2">Low Stocks</h2>

						<div class="flex gap-x-14">
							<div>
								<h2 class="categories-number text-base font-bold mb-1">12</h2>
								<h2 class="categories-time text-sm text-[#7b8392]" style="white-space: nowrap;">
									Ordered
								</h2>
							</div>

							<div>
								<h2 class="categories-amount text-base text-right font-bold mb-1">2</h2>
								<h2
									class="categories-time text-sm text-right text-[#7b8392]"
									style="white-space: nowrap;"
								>
									Not in Stock
								</h2>
							</div>
						</div>
					</div>
				</div>
			</Card>

			<Card>
				<div class="text-center">
					<div class="table-header flex mb-3 justify-between items-center">
						<div>
							<h2 class=" font-bold">Products</h2>
						</div>

						<div>
							<Button color="primary" class="mr-2 text-sm" on:click={handleModal}
								>Add Product</Button
							>
							<Button outline class="mr-2 text-sm">Filters</Button>
							<Button outline class="mr-2 text-sm text-gray-700">Download All</Button>
						</div>
					</div>
					<table class="mx-auto w-full">
						<thead class="">
							<tr class="text-gray-500 border-b border-slate-200">
								<th class="px-2 py-2">Products</th>
								<th class="px-2 py-2">Buying Price</th>
								<th class="px-2 py-2">Quantity</th>
								<th class="px-2 py-2">Threshold Value</th>
								<th class="px-2 py-2">Expiry Date</th>
								<th class="px-2 py-2">Availability</th>
							</tr>
						</thead>

						<tbody class="">
							{#each details as product}
								<tr class="border-slate-200 border-b hover:bg-slate-200">
									<td class="py-2">{product.name}</td>
									<td class="py-2">{product.price}</td>
									<td class="py-2">{product.quantity}</td>
									<td class="py-2">{product.threshold}</td>
									<td class="py-2">{product.expiry}</td>

									{#if product.availability === 'In-stock'}
										<td class="py-2 text-success font-medium">{product.availability}</td>
									{:else}
										<td class="py-2 text-danger font-medium">{product.availability}</td>
									{/if}
								</tr>
							{/each}

							<tr class="border-slate-200 border-b hover:bg-slate-200">
								<td class="py-2">Maggi</td>
								<td class="py-2">#430</td>
								<td class="py-2">43 Packets</td>
								<td class="py-2">12 Packets</td>
								<td class="py-2">11/12/23</td>
								<td class="py-2 font-medium text-success">In-stock</td>
							</tr>

							<tr class="border-slate-200 border-b hover:bg-slate-200">
								<td class="py-2">Red Bull</td>
								<td class="py-2">#700</td>
								<td class="py-2">25 Cartons</td>
								<td class="py-2">9 Cartons</td>
								<td class="py-2">17/4/24</td>
								<td class="py-2 font-medium text-danger">Out Of Stock</td>
							</tr>
						</tbody>

						<!-- <tbody class="">
							{#each filtered_inventory as inv, index}
								<tr class="border-black border-b hover:bg-slate-200">
									<td class="py-2">{inv.name}</td>
									<td class="py-2">{inv.quantity}</td>
									<td class="py-2">{inv.price}</td>
									<td class="py-2">{inv.desc}</td>
								</tr>
							{/each}
						</tbody> -->
					</table>
				</div>
			</Card>
		</div>
	</div>
{/if}

<style>
</style>
