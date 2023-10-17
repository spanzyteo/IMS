<script>
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();

	import Card from './Card.svelte';
	import { Button } from 'sveltestrap';

	export let closeDetail = true;
	export let itemDetail = {
		name: '',
		image: '',
		id: '',
		category: '',
		price: Number(''),
		quantity: '',
		unit: '',
		expiry: '',
		threshold: '',
		availability: 'In-stock'
	};

	function handleReturn() {
		closeDetail = false;
		dispatch('handleReturn', closeDetail);
	}
</script>

<svelte:head>
	<script
		type="module"
		src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
	></script>
	<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</svelte:head>

<Card>
	<div>
		<div class="mb-2 text-sm text-slate-400" on:click={handleReturn} on:keydown>
			<Button outline class="flex items-center gap-1 mr-2 text-xs text-gray-700"
				><ion-icon name="arrow-back-outline" /> Go Back</Button
			>
		</div>

		<div class=" flex mb-2 justify-between items-center">
			<div>
				<h2 class=" font-bold">{itemDetail.name}</h2>
			</div>

			<div class="flex items-center">
				<Button outline class=" flex gap-1 items-center mr-2 text-xs"
					><ion-icon name="pencil-outline" />Edit</Button
				>
				<Button outline class=" text-xs text-gray-700">Download</Button>
			</div>
		</div>

		<ul class="flex mb-1 border-slate-200 border-b gap-6">
			<li class="border-primary border-b-2 pb-1">Overview</li>
			<li>Purchases</li>
			<li>Adjustments</li>
			<li>History</li>
		</ul>
	</div>

	<div class="flex mt-4 justify-between">
		<div class="mx-4">
			<h2 class="text-base font-medium mb-2">Primary Details</h2>

			<div class="flex gap-5 items-center mb-2">
				<p class="text-slate-400 w-40 text-sm">Product Name</p>
				<p class="text-slate-900 text-sm">{itemDetail.name}</p>
			</div>

			<div class="flex gap-5 items-center mb-2">
				<p class="text-slate-400 w-40 text-sm">Product ID</p>
				<p class="text-slate-900 text-sm">{itemDetail.id}</p>
			</div>

			<div class="flex gap-5 items-center mb-2">
				<p class="text-slate-400 w-40 text-sm">Product Category</p>
				<p class="text-slate-900 text-sm">{itemDetail.category}</p>
			</div>

			<div class="flex gap-5 items-center mb-2">
				<p class="text-slate-400 w-40 text-sm">Expiry Date</p>
				<p class="text-slate-900 text-sm">{itemDetail.expiry}</p>
			</div>

			<div class="flex gap-5 items-center mb-2">
				<p class="text-slate-400 w-40 text-sm">Threshold Value</p>
				<p class="text-slate-900 text-sm">{itemDetail.threshold}</p>
			</div>

			<h2 class="text-base font-medium mb-2">Supplier Details</h2>

			<div class="flex gap-5 items-center mb-2">
				<p class="text-slate-400 w-40 text-sm">Supplier Name</p>
				<p class="text-slate-900 text-sm">Roland Martin</p>
			</div>

			<div class="flex gap-5 items-center mb-2">
				<p class="text-slate-400 w-40 text-sm">Contact Number</p>
				<p class="text-slate-900 text-sm">577393 924958</p>
			</div>
		</div>

		<div class="mx-5">
			<div
				class="flex items-center justify-center h-36 w-36 border-dashed border-slate-300 rounded-xl border-2 mb-10"
			>
				<img class="h-32 w-32" src={itemDetail.image} alt="Product" />
			</div>

			<div class="flex gap-5 items-center mb-2">
				<p class="text-slate-400 w-40 text-sm">Opening Stock</p>
				<p class="text-slate-900 text-sm">40</p>
			</div>

			<div class="flex gap-5 items-center mb-2">
				<p class="text-slate-400 w-40 text-sm">Remaining Stock</p>
				<p class="text-slate-900 text-sm">34</p>
			</div>

			<div class="flex gap-5 items-center mb-2">
				<p class="text-slate-400 w-40 text-sm">On the way</p>
				<p class="text-slate-900 text-sm">15</p>
			</div>

			<div class="flex gap-5 items-center mb-2">
				<p class="text-slate-400 w-40 text-sm">Threshold Value</p>
				<p class="text-slate-900 text-sm">12</p>
			</div>
		</div>
	</div>

	<div class=" w-3/4 mt-4">
		<div class="mx-4">
			<h2 class="text-base font-medium mb-2">Stock Locations</h2>

			<div class="flex gap-5 items-center mb-2 justify-between bg-slate-100 p-2">
				<p class="text-slate-900 w-40 text-sm mr-auto">Store Name</p>
				<p class="text-slate-900 text-sm mr-4">Stock in hand</p>
			</div>

			<div class="flex gap-5 items-center mb-2 justify-between p-2">
				<p class="text-slate-400 w-40 text-sm mr-auto">Dandy's Store</p>
				<p class="text-slate-900 text-sm mr-4 text-primary">15</p>
			</div>

			<div class="flex gap-5 items-center mb-2 justify-between p-2">
				<p class="text-slate-400 w-40 text-sm mr-auto">Dandy's Store</p>
				<p class="text-slate-900 text-sm mr-4 text-primary">19</p>
			</div>
		</div>
	</div>
</Card>
