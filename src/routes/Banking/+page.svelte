<script>
	import Sidebar from '../components/Sidebar.svelte';
	import Spinner from '../components/Spinner.svelte';
	import Piechart from '../components/Piechart.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '../../stores/stores';
	import { ensureLogin } from '$lib/authorise';
	export let data;
	let pip = '';
	let searchTerm = '';
	let filtered_debts = [];
	let shown = false;
	let bal;
	let newId = '';
	let newBalance = 0;
	let overLoad = false;
	let username = '';
	let password = '';
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
	<title>Banking</title>
</svelte:head>

{#if loading === true}
	<Spinner />
{:else}
	<body>
		<div class="flex justify-evenly">
			<div>
				<Sidebar active_component={ac} />
			</div>
			<div class="mx-auto w-full">
				<div class="text-center mx-auto">
					<h1 class="pt-3 px-12 mb-6 ml-[10rem] font-comforta font-bold text-3xl text-center">
						Banking
					</h1>
				</div>
				<div class="text-center mx-auto">
					<Piechart total={Number(total)} paid={Number(totalPaid)} bal={Number(balance)} />
				</div>
				<section
					class="mt-[10rem] font-comforta w-full mx-auto px-auto font-bold text-lg text-left h-fit"
				>
					<div class="pt-3 px-12 mb-6 font-comforta ml-[10rem] font-bold text-lg text-center">
						<p>Aggregate: &nbsp; {total.toLocaleString()}</p>
						<p>Debts/Balance: &nbsp; {balance.toLocaleString()}</p>
						<p>Total Amount Paid: &nbsp; {totalPaid.toLocaleString()}</p>
					</div>
				</section>
				<!-- <Debtors people={cashFlow} /> -->
			</div>
		</div>
	</body>
{/if}
