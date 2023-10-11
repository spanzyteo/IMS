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

	let showModal = false;

	function handleModal() {
		showModal = !showModal;
		dispatch('handleModal', showModal);
	}

	let productDetail = {};

	// @ts-ignore
	function handleDisplayItem(productId) {
		// ProductDetailsContent = !ProductDetailsContent;
		const selectedProduct = productDetails.find((detail) => detail.id === productId);

		productDetail = selectedProduct;

		dispatch('handleDisplayItem', productDetail);
		// console.log(productDetail);
	}
</script>

<!-- <NewProducts on:handleSubmit={addProducts} /> -->

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
				<Button color="primary" class="mr-2 text-sm" on:click={handleModal}>Add Product</Button>
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
				{#each productDetails as product}
					<tr
						class="border-slate-200 border-b hover:bg-slate-200"
						on:click={() => handleDisplayItem(product.id)}
					>
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
	</div>
</Card>
