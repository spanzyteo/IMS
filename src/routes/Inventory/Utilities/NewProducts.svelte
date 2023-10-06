<script>
	import { createEventDispatcher } from 'svelte';

	let dispatch = createEventDispatcher();

	import Card from './Card.svelte';
	import addImages from './Images/add-image.png';
	import { Button, Form } from 'sveltestrap';

	let modal = true;

	function handleModal() {
		modal = !modal;

		dispatch('show', modal);
	}

	let name = '';
	let id = '';
	let category = '';
	let price = '';
	let quantity = '';
	let unit = '';
	let expiry = '';
	let threshold = '';
	let availability = 'In-stock';

	function handleSubmit() {
		const product = {
			name,
			id,
			category,
			price,
			quantity,
			unit,
			expiry,
			threshold,
			availability
		};

		dispatch('addProducts', product);

		// console.log(product);
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<Card>
		<div class="font-bold mb-2">New Product</div>

		<div class=" add flex flex-wrap gap-3 justify-center items-center mb-3">
			<img class="h-20" src={addImages} alt="Add Product" />
			<div class="text-center text-sm">
				<p>Drag image here</p>
				<p>or</p>
				<p class="text-[#257af0]">Browse image</p>
			</div>
		</div>

		<div class="inputs">
			<div class="w-full flex gap-2 items-center mb-3">
				<label class="w-32 text-sm" for="Product name">Product Name</label>
				<input
					type="text"
					bind:value={name}
					id="name"
					placeholder="Enter product name"
					class="border-2 border-slate-200 focus:border-slate-400 focus:outline-none text-sm text-black flex-grow rounded-md py-2 px-2"
				/>
			</div>

			<div class="w-full flex gap-2 items-center mb-3">
				<label class="w-32 text-sm" for="Product Id">Product ID</label>
				<input
					type="text"
					id="id"
					bind:value={id}
					placeholder="Enter product ID"
					class="border-2 border-slate-200 focus:border-slate-400 focus:outline-none text-sm text-black flex-grow rounded-md py-2 px-2"
				/>
			</div>

			<div class="w-full flex gap-2 items-center mb-3">
				<label class="w-32 text-sm" for="Category">Category</label>
				<input
					type="text"
					id="category"
					bind:value={category}
					placeholder="Select product category"
					class="border-2 border-slate-200 focus:border-slate-400 focus:outline-none text-sm text-black flex-grow rounded-md py-2 px-2"
				/>
			</div>

			<div class="w-full flex gap-2 items-center mb-3">
				<label class="w-32 text-sm" for="Price">Buying Price</label>
				<input
					type="text"
					id="price"
					bind:value={price}
					placeholder="Enter buying price"
					class="border-2 border-slate-200 focus:border-slate-400 focus:outline-none text-sm text-black flex-grow rounded-md py-2 px-2"
				/>
			</div>

			<div class="w-full flex gap-2 items-center mb-3">
				<label class="w-32 text-sm" for="Quantity">Quantity</label>
				<input
					type="text"
					id="quantity"
					bind:value={quantity}
					placeholder="Enter product quantity"
					class="border-2 border-slate-200 focus:border-slate-400 focus:outline-none text-sm text-black flex-grow rounded-md py-2 px-2"
				/>
			</div>

			<div class="w-full flex gap-2 items-center mb-3">
				<label class="w-32 text-sm" for="Unit">Unit</label>
				<input
					type="text"
					id="unit"
					bind:value={unit}
					placeholder="Enter product unit"
					class="border-2 border-slate-200 focus:border-slate-400 focus:outline-none text-sm text-black flex-grow rounded-md py-2 px-2"
				/>
			</div>

			<div class="w-full flex gap-2 items-center mb-3">
				<label class="w-32 text-sm" for="Expiry">Expiry Date</label>
				<input
					type="text"
					id="expiry"
					bind:value={expiry}
					placeholder="Enter expiry date"
					class="border-2 border-slate-200 focus:border-slate-400 focus:outline-none text-sm text-black flex-grow rounded-md py-2 px-2"
				/>
			</div>

			<div class="w-full flex gap-2 items-center mb-3">
				<label class="w-32 text-sm" for="threshold">Threshold Value</label>
				<input
					type="text"
					id="threshold"
					bind:value={threshold}
					placeholder="Enter threshold value"
					class="border-2 border-slate-200 focus:border-slate-400 focus:outline-none text-sm text-black flex-grow rounded-md py-2 px-2"
				/>
			</div>

			<div class="w-full flex gap-2 items-center mb-3">
				<label class="w-32 text-sm" for="availability">Availability</label>
				<select
					id="availability"
					bind:value={availability}
					class="border-2 border-slate-200 focus:border-slate-400 focus:outline-none text-sm text-black flex-grow rounded-md py-2 px-2"
				>
					<option value="In-stock"> In-stock</option>
					<option value="Out Of Stock"> Out of Stock</option>
				</select>
			</div>
		</div>

		<div class="flex justify-end my-2">
			<Button outline class="mr-2 text-sm" on:click={handleModal}>Discard</Button>
			<Button color="primary" class="mr-2 text-sm">Add Product</Button>
		</div>
	</Card>
</form>
