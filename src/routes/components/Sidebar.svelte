<script lang="js">
	export let active_component = '';
</script>

<svelte:head>
	<script
		type="module"
		src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
	></script>
	<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</svelte:head>

<div class="sidebar h-screen fixed w-[230px] px-3">
	<h1 class="font-bold text-7xl text-white text-center">IMS</h1>
	<!-- <a href="/"><img src="/logo.jpg" alt="Logo" /></a> -->
	<ul class="text-white mt-10">
		<a href="/"
			>{#if active_component === 'home'}<li
					id="active"
					class="bg-[#ECEFE3] text-black rounded-md px-3 py-2 mb-3"
				>
					<span class="icon mr-2"><ion-icon name="home-outline" /></span>
					<span class="text">Home</span>
				</li>
			{:else}
				<li class="hover:text-white px-3 py-2 mb-3">
					<span class="icon mr-2 mt-2"><ion-icon name="home-outline" /></span>
					<span class="text">Home</span>
				</li>
			{/if}</a
		>
		<a href="/Banking" class="text-gray-700"
			>{#if active_component === 'bills'}<li
					id="active"
					class="bg-[#ECEFE3] text-black rounded-md px-3 py-2 mb-3"
				>
					<span class="icon mr-2"><ion-icon name="cash-outline" /></span>
					<span class="text">Banking</span>
				</li>
			{:else}
				<li class=" hover:text-white px-3 py-2 mb-3">
					<span class="icon mr-2"><ion-icon name="cash-outline" /></span>
					<span class="text">Banking</span>
				</li>
			{/if}</a
		>
		<a href="/Inventory" class="text-gray-700">
			{#if active_component === 'inventory'}
				<li id="active" class=" bg-[#ECEFE3] text-black rounded-md px-3 py-2 mb-3">
					<span class="icon mr-2"><ion-icon name="clipboard-outline" /></span>
					<span class="text">Inventory</span>
				</li>
			{:else}
				<li class="hover:text-white px-3 py-2 mb-3">
					<span class="icon mr-2"><ion-icon name="clipboard-outline" /></span>
					<span class="text">Inventory</span>
				</li>
			{/if}</a
		>
		<a href="/invoices" class="text-gray-700">
			{#if active_component === 'invoices'}
				<li id="active" class=" bg-[#ECEFE3] text-black rounded-md px-3 py-2 mb-3">
					<span class="icon mr-2"><ion-icon name="receipt-outline" /></span>
					<span class="text">Invoices</span>
				</li>
			{:else}
				<li class="hover:text-white px-3 py-2 mb-3">
					<span class="icon mr-2"><ion-icon name="receipt-outline" /></span>
					<span class="text">Invoices</span>
				</li>
			{/if}
		</a>
		<!-- <li class="bg-[#ECEFE3] text-black rounded-md px-3 py-2 mb-3">
			<span class="text">Logout</span>
		</li> -->
	</ul>
</div>

<style>
	.sidebar {
		background-image: url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60');
	}
</style>
