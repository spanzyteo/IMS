<script>
	import { createEventDispatcher } from 'svelte';
	import { details } from './store.js';

	let dispatch = createEventDispatcher();

	import Card from './Card.svelte';
	import { Button, Form } from 'sveltestrap';
	import NewProducts from './NewProducts.svelte';
	import Modal from './Modal.svelte';

	let productDetails = $details;
	$: productDetails = $details;

	// Handles Modal
	let showModal = false;
	function handleModal() {
		showModal = !showModal;
		dispatch('handleModal', showModal);
	}

	// Function to display the details of an item when clicked
	let productDetail = {};

	function handleDisplayItem(productId) {
		const selectedProduct = productDetails.find((detail) => detail.id === productId);

		productDetail = selectedProduct;

		dispatch('handleDisplayItem', productDetail);
	}

	// Filtering List of products
	export let filterTerm = '';

	$: filteredProducts = $details.filter((product) => {
		const filteredName = product.name.toLowerCase().includes(filterTerm.toLowerCase());
		const filteredCategory = product.category.toLowerCase().includes(filterTerm.toLowerCase());

		return filteredName || filteredCategory;
	});

	// Pagination
	let currentPage = 1;
	const itemsPerPage = 10;

	$: totalPages = Math.ceil(productDetails.length / itemsPerPage);

	$: visibleProducts = filteredProducts.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	// Function to handle previous page
	function previousPage() {
		if (currentPage > 1) {
			currentPage -= 1;
		}
	}

	// Function to handle next page
	function nextPage() {
		if (currentPage < totalPages) {
			currentPage += 1;
		}
	}

	// let serialNumber = 1;
	let i;
	function addSerialNumber() {
		for (let i = 1; i <= productDetails.length; i++) {
			console.log(i);
		}
		console.log(productDetails.length);
	}
	// addSerialNumber();
</script>

<Card>
	<h3 class="mb-2 text-lg font-bold">Overall Inventory</h3>

	<div class="  flex items-center">
		<div class="categories flex self-center justify-start w-fit pr-12 border-r-2">
			<div class="flex flex-col w-fit">
				<div class="text-left mb-1">
					<h2 class="categories-heading text-base text-left font-bold text-[#257af0] mb-1">
						Categories
					</h2>
				</div>

				<div class="flex gap-x-4">
					<div>
						<h2 class="categories-number text-sm font-bold mb-1">14</h2>
						<h2 class="categories-time text-sm text-[#7b8392]" style="white-space: nowrap;">
							Last 7 days
						</h2>
					</div>
				</div>
			</div>
		</div>

		<div class="categories flex self-center justify-center w-full px-4 border-r-2">
			<div class="flex flex-col w-fit">
				<div class="text-left mb-1">
					<h2 class="categories-heading text-base text-left font-bold text-[#e7a85d] mb-1">
						Total Products
					</h2>
				</div>

				<div class="flex gap-x-4">
					<div>
						<h2 class="categories-number text-sm font-bold mb-1">868</h2>
						<h2 class="categories-time text-sm text-[#7b8392]" style="white-space: nowrap;">
							Last 7 days
						</h2>
					</div>

					<div class="text-right">
						<h2 class="categories-amount text-sm font-bold mb-1">#25,000</h2>
						<h2 class="categories-time text-sm text-[#7b8392]" style="white-space: nowrap;">
							Revenue
						</h2>
					</div>
				</div>
			</div>
		</div>

		<div class="categories flex self-center justify-center w-full px-4 border-r-2">
			<div class="flex flex-col w-fit">
				<div class="text-left mb-1">
					<h2 class="categories-heading text-base text-left font-bold text-[#9574c5] mb-1">
						Top Selling
					</h2>
				</div>

				<div class="flex gap-x-4">
					<div>
						<h2 class="categories-number text-sm font-bold mb-1">5</h2>
						<h2 class="categories-time text-sm text-[#7b8392]" style="white-space: nowrap;">
							Last 7 days
						</h2>
					</div>

					<div class="text-right">
						<h2 class="categories-amount text-sm font-bold mb-1">#2,500</h2>
						<h2 class="categories-time text-sm text-[#7b8392]" style="white-space: nowrap;">
							Cost
						</h2>
					</div>
				</div>
			</div>
		</div>

		<div class="categories flex self-center justify-center w-full px-4">
			<div class="flex flex-col w-fit">
				<div class="text-left mb-1">
					<h2 class="categories-heading text-base text-left font-bold text-[#f4736a] mb-1">
						Low Stocks
					</h2>
				</div>

				<div class="flex gap-x-4">
					<div>
						<h2 class="categories-number text-sm font-bold mb-1">12</h2>
						<h2 class="categories-time text-sm text-[#7b8392]" style="white-space: nowrap;">
							Ordered
						</h2>
					</div>

					<div class="text-right">
						<h2 class="categories-amount text-sm font-bold mb-1">2</h2>
						<h2 class="categories-time text-sm text-[#7b8392]" style="white-space: nowrap;">
							Not in Stock
						</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
</Card>

<Card>
	<div class="">
		<div class="table-header flex mb-1 justify-between items-center">
			<div>
				<h2 class=" font-bold">Products</h2>
			</div>

			<div>
				<Button color="primary" class="mr-2 text-xs" on:click={handleModal}>Add Product</Button>
				<Button outline class="mr-2 text-xs content-center">
					<div class="flex items-center gap-1">
						<ion-icon name="filter-outline" />
						Filters
					</div>
				</Button>
				<Button outline class="mr-2 text-xs text-gray-700">Download All</Button>
			</div>
		</div>

		<table class="mx-auto w-full">
			<thead class="">
				<tr class="text-gray-500 text-sm border-b border-slate-200 text-left">
					<th class="px-2 py-2">S/N</th>
					<th class="px-2 py-2">Products</th>
					<th class="px-2 py-2">Buying Price</th>
					<th class="px-2 py-2">Quantity</th>
					<th class="px-2 py-2">Threshold Value</th>
					<th class="px-2 py-2">Expiry Date</th>
					<th class="px-2 py-2">Availability</th>
				</tr>
			</thead>

			<tbody class="">
				{#each visibleProducts as product, index}
					<tr
						class="border-slate-200 text-sm border-b hover:bg-slate-200 text-left"
						id="item-list"
						on:click={() => handleDisplayItem(product.id)}
					>
						<td class="py-2">{index + 1}</td>
						<td class="py-2">{product.name}</td>
						<td class="py-2">#{product.price}</td>
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
		<div class="flex justify-between items-center mt-2">
			<Button
				outline
				class="mr-2 text-xs text-gray-700"
				on:click={previousPage}
				disabled={currentPage === 1}>Previous</Button
			>
			<p>Page {currentPage} of {totalPages}</p>
			<Button
				outline
				class="mr-2 text-xs text-gray-700"
				on:click={nextPage}
				disabled={currentPage === totalPages}>Next</Button
			>
		</div>
	</div>
</Card>

<style>
</style>
