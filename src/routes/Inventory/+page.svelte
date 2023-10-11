<script>
	import { createEventDispatcher } from 'svelte';
	import { details } from './Utilities/store.js';

	let dispatch = createEventDispatcher();

	import Card from './Utilities/Card.svelte';
	import ProductList from './Utilities/ProductList.svelte';
	import Modal from './Utilities/Modal.svelte';
	import NewProducts from './Utilities/NewProducts.svelte';
	import ProductDetails from './Utilities/ProductDetails.svelte';
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
	import AddImage from './Utilities/AddImage.svelte';
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
	let closeDetail = false;

	let ProductDetailsContent = closeDetail;

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

		details.update((totalProducts) => [product, ...totalProducts]);

		showModal = !showModal;

		dispatch('addProducts', details);
		console.log('Updated details:', $details);
	}

	let itemDetail = {};

	function handleDisplayItem(e) {
		const itemDetails = e.detail;
		itemDetail = itemDetails;

		ProductDetailsContent = !ProductDetailsContent;
	}
	console.log(ProductDetailsContent);

	function handleReturn() {
		ProductDetailsContent = false;
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
	<NewProducts on:show={modal} on:handleSubmit={addProducts} />
</Modal>

{#if loading === true}
	<Spinner />
{:else}
	<div class="flex h-screen">
		<div id="fixed">
			<Sidebar active_component={ac} />
		</div>

		<div class="w-screen min-h-screen -ml-[-230px] p-5 bg-slate-200">
			<div class="mb-5">
				<input
					type="text"
					bind:value={searchTerm}
					placeholder="Search products, supplier, order"
					class="border-2 border-black text-sm text-black w-full rounded-md mr-3 py-2 px-2"
				/>
			</div>
			{#if ProductDetailsContent === false}
				<ProductList on:handleModal={handleModal} on:handleDisplayItem={handleDisplayItem} />
			{:else}
				<ProductDetails {itemDetail} on:handleReturn={handleReturn} />
			{/if}
		</div>
	</div>
{/if}

<style>
</style>
