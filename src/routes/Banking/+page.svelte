<script>
	import Sidebar from '../components/Sidebar.svelte';
	import Spinner from '../components/Spinner.svelte';
	import Piechart from '../components/Piechart.svelte';
	import Login from '../components/Login.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { Container, Button } from 'sveltestrap';
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '../../stores/stores';
	import { ensureLogin } from '$lib/authorise';
	let pip = '';
	let searchTerm = '';
	let filtered_debts = [];
	let shown = false;
	let bal;
	export let data;
	let cashFlow = data.response;

	let totalPaid = 0;

	let total = 0;
	let balance = 0;
	let loading = true;
	let ac = 'bills';

	async function chartData() {
		for (let i = 0; i < cashFlow.length; i++) {
			totalPaid += parseInt(cashFlow[i].paid);
			total += parseInt(cashFlow[i].total);
			balance += parseInt(cashFlow[i].balance);
			if (balance <= 0) {
				balance = 0;
			}
		}
	}
	chartData();
	onMount(() => {
		// @ts-ignore
		ensureLogin($page.data);
		if ($page.data.session.userId) {
			$isLoggedIn = true;
		} else {
			goto('/Login');
		}
		// simulate a delay of 1.5 seconds
		setTimeout(() => {
			loading = false;
		}, 500);
	});
	let newId = '';
	let newBalance = 0;
	let overLoad = false;
	let username = '';
	let password = '';
	/**
	 * @param {string} identity
	 */
	function setId(identity) {
		newId = identity;
	}
	async function updateBal() {
		if (overLoad === false) {
			let url = '/api/modify-data';
			await fetch(url, {
				method: 'PUT',
				body: JSON.stringify({
					newId: newId,
					// @ts-ignore
					newBalance: parseFloat(newBalance)
				}),
				headers: {
					'content-type': 'application/json'
				}
			});
		} else {
			throw new Error('Paid value is invalid in comparison to the balance');
		}
	}
	let message = '';
	$: {
		if (newBalance) {
			message = 'Amount to be paid is invalid in comparison to the balance';
		}
	}
	/**
	 * @param {any} identity
	 * @param {number} btnBalance
	 */
	async function handleClick(identity, btnBalance) {
		newBalance = btnBalance;
		setId(identity);
		updateBal();
	}
	$: {
		if (searchTerm) {
			filtered_debts = cashFlow.filter((i) =>
				i.customer_name?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
			);
		} else {
			filtered_debts = cashFlow;
		}
	}
</script>

<svelte:head>
	<title>Los Angis - Banking</title>
</svelte:head>

{#if loading === true}
	<Spinner />
{:else}
	<body>
		<div class="flex h-screen">
			<div id="fixed">
				<Sidebar active_component={ac} />
			</div>
			<div class="flex-1 w-screen -ml-[-230px] p-5">
				<div class="mb-5">
					<h1 class="mb-3 text-5xl font-bold">Banking</h1>
				</div>
				<div class="grid grid-cols-1">
					<div class="-mt-10 w-[20rem] sm:w-[20rem] md:w-[100%] lg:w-[100%]">
						<Piechart total={Number(total)} paid={Number(totalPaid)} bal={Number(balance)} />
					</div>
					<div class="py-10">
						<section class="text-center mx-auto">
							<ul>
								<li class="font-bold text-black text-left">
									Total Amount: &nbsp; {total.toLocaleString()}
								</li>
								<li class="font-bold text-black text-left">
									Debts/Balance: &nbsp; {balance.toLocaleString()}
								</li>
								<li class="font-bold text-black text-left">
									Total Amount Paid: &nbsp; {totalPaid.toLocaleString()}
								</li>
							</ul>
						</section>
					</div>
				</div>
				<!-- <Debtors people={cashFlow} /> -->
			</div>
		</div>
	</body>
{/if}
