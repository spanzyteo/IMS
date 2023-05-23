<script>
	// @ts-nocheck
	// @ts-ignore
	import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { Button, Container, Form, Icon } from 'sveltestrap';
	import { v4 as uuidv4 } from 'uuid';
	import Spinner from '../../components/Spinner.svelte';
	import invoices from '$lib/invoices.json';
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';

	//@ts-ignore
	// export let form;
	onMount(() => {
		displayed = true;
		// @ts-ignore
		updateTotal();
		setTimeout(() => {
			loading = false;
		}, 500);
	});
	let d = new Date();
	let date = d.toDateString();
	console.log(date);
	let newId = uuidv4().slice(0, 8);
	let loading = true;
	let displayed = true;
	// @ts-ignore
	let visual;
	let name = 'Mr. Joshua';
	/**
	 * @type {any}
	 */
	let total;
	/**
	 * @type {{ customer_name: String; id: String; items: [{ name: String, quantity: number; price: number; }]; }}
	 */
	// @ts-ignore
	let details = {
		customer_name: '',
		id: `${newId}`,
		date: `${date}`,
		items: [{ name: 'Item', quantity: 0, price: 0 }],
		paid: 0,
		balance: 0,
		total: 0
	};
	let updateTotal = () => {
		if (details) {
			total = details.items.reduce((acc, item) => {
				return acc + item.quantity * item.price;
			}, 0);
			details.total = total;
			console.log(details.total);
			details.balance = Number(total) - details.paid;
			if (details.balance <= 0) {
				details.balance = 0;
				console.log(`Balance is: ${details.balance}`);
			} else {
				details.balance = Number(total) - details.paid;
				console.log(`Balance is: ${details.balance}`);
			}
		}
	};
	async function cancel() {
		let verifyCancellation = confirm(
			'Are you sure you want to cancel?. This will delete this invoice as well'
		);
		if (verifyCancellation === true) {
			await goto('/invoices');
		}
	}
	// invoiceDetails.map((items) => total = items.quantity * items.price)
	/**
	 * @type {() => void}
	 */
	async function addItem() {
		console.log('Adding new item...');
		let newItem = { name: 'New Item', quantity: 0, price: 0 };
		details.items.push(newItem);
		// @ts-ignore
		details = details;
		setTimeout(() => {
			console.log('New Item Added Successfully');
		}, 500);
	}
	/**
	 * @param {number} index
	 */
	function removeItem(index) {
		console.log('Deleting Item');
		details.items.splice(index, 1);
		// @ts-ignore
		details = details;
		setTimeout(() => {
			console.log('Item Deleted Successfully');
		}, 500);
	}

	let fd = new FormData();
	async function saveandredirect() {
		fd.append('invoice', JSON.stringify(details));
		let data = await fetch('?/saveSimple', { method: 'POST', body: fd });
		alert(`${data.message}`);
		console.log(data);
		// console.log(`New Data: ${data}`);
	}
</script>

<svelte:head>
	<title>Create Invoice</title>
</svelte:head>

<html lang="en">
	{#if loading === false}
		<div>
			{#if displayed === true}
				<nav
					class="w-full fixed text-center bg-slate-600 text-white h-fit mt-0 pt-0 mb-14 font-extrabold"
				>
					<ul class="p-3 flex justify-evenly">
						<a href="/" class="p-3 hover:text-gray-300"><li>Home</li></a>
						<a href="/Banking" class="p-3 hover:text-gray-300"><li>Banking</li></a>
						<a href="/invoices" class="p-3 hover:text-gray-300"><li>Invoices</li></a>
						<a href="/" class="p-3 hover:text-gray-300"><li>Inventory</li></a>
					</ul>
				</nav>
				<br /><br />
			{/if}
		</div>
		<Container>
			<div class=" w-full mt-[50px]">
				<div class="invoice w-full">
					<h1 class="font-extrabold text-2xl">Los Angis Global Resources</h1>
					<p style="margin-bottom: 2rem;" class="add">47 Bedwell Street</p>
					<form on:submit|preventDefault>
						<table style="border: 2px solid;" class="items-center self-center px-0 w-fit m-0">
							<thead>
								<tr>
									<th style="border-right: 2px solid;"
										><div class="flex justify-evenly">
											<div class="flex">
												<p class="flex-wrap mr-4">Customer Name:</p>
												<b
													><input
														type="text"
														name="name"
														class="w-fit"
														bind:value={details.customer_name}
													/></b
												>
											</div>
										</div>
									</th>
								</tr>
								<tr>
									<th style="border-right: 2px solid;"
										><div class="flex">
											<div class="flex justify-evenly">
												<p class="flex-wrap">ID:&nbsp;&nbsp;&nbsp;</p>
												<b>{details.id}</b>
												<input type="hidden" name="id" bind:value={details.id} />
											</div>
										</div>
									</th>
								</tr>
								<tr>
									<th style="border-right: 2px solid;" class="font-normal">
										Date: {date}
										<input name="date" type="hidden" bind:value={date} />
									</th>
								</tr>
								<tr style="border: 2px solid;">
									<th style="border-right: 2px solid;">Description</th>
									<th style="border-right: 2px solid;">Quantity</th>
									<th style="border-right: 2px solid;">Price (NGN)</th>
									<th style="border-right: 2px solid;">Amount (NGN)</th>
									<th style="border-right: 2px solid;">Remove Item</th>
									<th>Balance (NGN)</th>
									{#if displayed === true}<th><Icon name="trash" /></th>{/if}
								</tr>
							</thead>
							<tbody>
								{#each details.items as item, index}
									<tr>
										<td style="border-right: 2px solid; border-left: 2px solid;"
											><input
												type="text"
												class="w-full"
												name="items[name][]"
												bind:value={item.name}
												style="border: none;"
											/></td
										>
										<td style="border-right: 2px solid"
											><input
												type="number"
												style="border: none"
												class="w-full"
												name="items[quantity][]"
												bind:value={item.quantity}
												on:input={updateTotal}
											/></td
										>
										<td style="border-right: 2px solid"
											><input
												type="number"
												style="border: none"
												class="w-full"
												name="items[price][]"
												bind:value={item.price}
												on:input={updateTotal}
											/></td
										>
										<td style="border-right: 2px solid;">{item.quantity * item.price}</td>
										{#if displayed === true}<td>
												<Button
													color="danger"
													class="w-fit"
													on:click={() => {
														removeItem(index);
													}}>Del</Button
												>
											</td>{/if}
									</tr>
								{/each}
								<tr class="mt-[10rem]">
									<td colspan="3" style="text-align: right;">Total:</td>
									<input type="text" hidden name="total" value={total} />
									<td>&#8358;{total}</td>
									<td class="flex">
										Paid: &#8358;<input
											class="w-fit h-fit"
											type="number"
											name="paid"
											style="border-right: 2px solid;"
											bind:value={details.paid}
											on:input={updateTotal}
										/></td
									>
									<td>Bal: &#8358; {details.balance} </td>
									<input type="number" hidden value={details.balance} name="bal" />
								</tr>
							</tbody>
						</table>
						<div class="mt-8 mb-8">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<button class="btn btn-success" on:click={saveandredirect}>Save</button>
						</div>
					</form>
					{#if displayed === true}
						<Button color="success" outline on:click={addItem}>Add Item</Button>
						<Button color="danger" on:click={cancel}>Cancel</Button>
					{/if}
					<div class="mt-[4rem]" />
				</div>
			</div>
		</Container>
	{:else}
		<Spinner />
	{/if}
</html>

<style>
	@media print {
		h1,
		.add {
			text-align: center;
			margin-left: 50px; /* reduce the margin */
			font-size: 20pt; /* adjust the font size */
			page-break-inside: avoid;
			margin-top: 0px;
		}
		table {
			font-size: 20pt;
			margin: 0px;
			padding: 0px;
		}
		@page {
			font-size: 20pt;
			text-align: center;
			size: A4;
			background-color: #f5f5f5;
			margin: 1cm 0.5cm;
		}
	}
	html {
		margin: 0;
		padding: 0;
	}
	table {
		/* width: calc(100% - 1cm); */
		/* margin-left: 0.1cm; */
		/* margin-right: 0.25cm; */
		border-collapse: collapse;
	}

	th,
	td {
		padding: 8px;
		text-align: left;
		border-bottom: 1px solid #ddd;
		font-size: large;
	}

	th {
		background-color: #f2f2f2;
	}
	input:focus {
		border: none;
	}
	input {
		padding: 5px;
		height: 30px;
		font-size: medium;
	}
</style>
