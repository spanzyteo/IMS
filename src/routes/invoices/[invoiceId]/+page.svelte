<script>
	import { isLoggedIn } from '../../../stores/stores';
	import Invoice from '../../components/Invoice.svelte';
	import Login from '../../components/Login.svelte';
	import Spinner from '../../components/Spinner.svelte';
	import { onMount } from 'svelte';
	import { Icon } from 'sveltestrap';
	export let data;
	let invoiceDetails = data.invoice;
	let username = '';
	let password = '';
	let loading = true;
	onMount(() => {
		// simulate a delay of 1.5 seconds
		setTimeout(() => {
			loading = false;
		}, 1500);
	});
</script>

<svelte:head>
	<title
		>Invoice For {invoiceDetails?.customer_name
			? invoiceDetails.customer_name
			: 'Customer (Unknown)'}</title
	>
</svelte:head>
<html lang="en">
	<body class="h-full bg-white">
		{#if loading === true}
			<Spinner />
		{:else if $isLoggedIn === false}
			<Login {username} {password} />
		{:else}
			<Invoice details={invoiceDetails} />
		{/if}
	</body>
</html>
