<script lang="ts">
	//@ts-nocheck
	import { onMount } from 'svelte';
	import { Button, Container, Icon } from 'sveltestrap';
	let invdet;
	export let name;
	export let details;
	export let address;
	onMount(() => {
		displayed = true;
		updateTotal();
		// console.log(details);
	});
	let displayed = true;
	let visual;
	/**
	 * @type {any}
	 */
	let total;
	/**
	 * @type {{ customer_name: String; id: String; items: [{ name: String, quantity: number; price: number; }]; }}
	 */
	let updateTotal = () => {
		invdet = { details };
		// console.log(invdet);
		if (invdet) {
			let invoiceDetails = invdet.details.items;
			total = invoiceDetails.reduce((acc, item) => {
				return acc + item.quantity * item.price;
			}, 0);
		}
		// invoiceDetails.map((items) => total = items.quantity * items.price)
	};
	/**
	 * @type {() => void}
	 */
	function print() {
		displayed = false;
		setTimeout(() => {
			window.print();
			displayed = true;
		}, 2000);
	}
</script>

<html lang="en">
	{#if displayed === true}
		<nav class="w-full fixed text-center bg-slate-600 text-white h-fit mb-14 font-extrabold">
			<ul class="p-3 flex justify-evenly">
				<a href="/" class="p-3 hover:text-gray-300"><li>Home</li></a>
				<a href="/Banking" class="p-3 hover:text-gray-300"><li>Banking</li></a>
				<a href="/invoices" class="p-3 hover:text-gray-300"><li>Invoices</li></a>
				<a href="/Inventory" class="p-3 hover:text-gray-300"><li>Inventory</li></a>
			</ul>
		</nav>
	{/if}
	<br />
	<br /><br />
	<Container>
		<div class="invoice container w-full mt-14">
			<div class="invoice w-full">
				<div class="flex mb-14">
					<img src="/logo.jpg" alt="logo" width="200px" height="200px" />
					<div class="p-[3rem]">
						<h1 class="font-extrabold text-2xl">{name}</h1>
						{#if address}
							<p style="margin-bottom: 2rem;" class="add">47 Bedwell Street</p>
						{/if}
					</div>
				</div>
				<table style="border: 2px solid;" class="items-center self-center px-0 w-fit m-0">
					<thead>
						<tr>
							<th style="border-right: 2px solid;"
								><div>
									<div class="flex">
										<p class="flex-wrap mr-4">Customer Name:</p>
										<b> <p>{details.customer_name}</p></b>
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
									</div>
								</div>
							</th>
						</tr>
						<tr>
							<th style="border-right: 2px solid;"
								><div class="flex">
									<div class="flex justify-evenly">
										<p class="flex-wrap">Date Created:&nbsp;&nbsp;&nbsp;</p>
										<b>{details.date}</b>
									</div>
								</div>
							</th>
						</tr>
						<tr>
							<th style="border-right: 2px solid;"
								><div class="flex">
									<div class="flex justify-evenly">
										<p class="flex-wrap">Last Updated:&nbsp;&nbsp;&nbsp;</p>
										<b>{details.lastUpdatedAt}</b>
									</div>
								</div>
							</th>
						</tr>
						<tr style="border: 2px solid;">
							<th style="border-right: 2px solid;">Description</th>
							<th style="border-right: 2px solid;">Quantity</th>
							<th style="border-right: 2px solid;">Price (NGN)</th>
							<th style="border-right: 2px solid;">Amount (NGN)</th>
						</tr>
					</thead>
					<tbody>
						{#each details.items as item, index}
							<tr>
								<td style="border-right: 2px solid; border-left: 2px solid;"
									><input type="text" disabled bind:value={item.name} style="border: none;" /></td
								>
								<td style="border-right: 2px solid"
									><input
										type="number"
										style="border: none"
										disabled
										bind:value={item.quantity}
										on:input={updateTotal}
									/></td
								>
								<td style="border-right: 2px solid"
									><input
										type="number"
										style="border: none"
										disabled
										bind:value={item.price}
										on:input={updateTotal}
									/></td
								>
								<td style="border-right: 2px solid;">{item.quantity * item.price}</td>
							</tr>
						{/each}
						<tr class="mt-[10rem]">
							<td colspan="3" style="text-align: right;">Total:</td>
							<td
								>&#8358;{#if details.total}{details.total}{:else}{total}{/if}</td
							>
							{#if details.paid}
								<td class="flex"> Paid: &#8358;{details.paid}</td>
							{:else}
								<td><b>Paid: &#8358;{details.paid}</b></td>
							{/if}
							{#if details.balance}<td>Bal: &#8358; {details.balance} </td>{:else}<td
									><b>Bal: &#8358; {details.balance}</b></td
								>{/if}
						</tr>
					</tbody>
				</table>
				<div class="mt-[4rem]">
					{#if displayed === true}
						<Button
							style="background-color: green;"
							color="success"
							on:click={print}
							on:keypress={print}>Print</Button
						>
					{:else}
						<Button color="success" on:click={print} hidden>Print</Button>
					{/if}
				</div>
			</div>
		</div>
	</Container>
</html>

<style>
	@media print {
		h1,
		.add {
			text-align: center;
			margin-left: 50px; /* reduce the margin */
			font-size: 20pt; /* adjust the font size */
			page-break-inside: avoid;
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
			orientation: landscape;
			background-color: #f5f5f5;
			margin: 1cm 0.5cm;
			margin-top: 0%;
		}
	}
	html {
		margin: 0;
		padding: 0;
		background-color: white;
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
