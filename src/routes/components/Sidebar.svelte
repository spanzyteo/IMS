<script lang="ts">
	export let active_component = '';
</script>

<svelte:head>
	<script
		type="module"
		src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
	></script>
	<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</svelte:head>
<div
	class="sidebar h-[100vh] font-poppins"
	style="background-image: linear-gradient(royalblue, green);"
>
	<a href="/"><img src="/logo.jpg" alt="Logo" class="w-auto h-auto" /></a>
	<ul class="mx-auto mt-20">
		<a href="/"
			>{#if active_component === 'home'}<li
					id="active"
					class="pt-[1rem] font-bold hover:text-white cursor-pointer"
				>
					<span class="icon"><ion-icon name="home-outline" /></span>
					<span class="text">Home</span>
				</li>
			{:else}
				<li class="mt-[2rem] font-bold hover:text-white cursor-pointer">
					<span class="icon"><ion-icon name="home-outline" /></span>
					<span class="text">Home</span>
				</li>
			{/if}</a
		>
		<a href="/Banking"
			>{#if active_component === 'bills'}<li
					id="active"
					class="mt-[2rem] font-bold hover:text-white cursor-pointer"
				>
					<span class="icon"><ion-icon name="bar-chart-outline" /></span>
					<span class="text">Banking</span>
				</li>
			{:else}
				<li class="mt-[2rem] font-bold hover:text-white cursor-pointer">
					<span class="icon"><ion-icon name="bar-chart-outline" /></span>
					<span class="text">Banking</span>
				</li>
			{/if}</a
		>
		<a href="/Inventory">
			{#if active_component === 'inventory'}
				<li id="active" class="mt-[2rem] font-bold hover:text-white cursor-pointer">
					<span class="icon"><ion-icon name="clipboard-outline" /></span>
					<span class="text">Inventory</span>
				</li>
			{:else}
				<li class="mt-[2rem] font-bold hover:text-white cursor-pointer">
					<span class="icon"><ion-icon name="clipboard-outline" /></span>
					<span class="text">Inventory</span>
				</li>
			{/if}</a
		>
		<a href="/invoices">
			{#if active_component === 'invoices'}
				<li id="active" class="mt-[2rem] font-bold hover:text-white cursor-pointer">
					<span class="icon"><ion-icon name="receipt-outline" /></span>
					<span class="text">Invoices</span>
				</li>
			{:else}
				<li class="mt-[2rem] font-bold hover:text-white cursor-pointer">
					<span class="icon"><ion-icon name="receipt-outline" /></span>
					<span class="text">Invoices</span>
				</li>
			{/if}
		</a>
	</ul>
</div>

<style>
	#active {
		color: white;
	}
	.sidebar {
		position: fixed;
		height: 100vh;
		width: 70px;
		overflow: hidden;
	}
	.sidebar:hover {
		width: 300px;
		transition: 0.5s ease-in-out;
	}
	.sidebar ul {
		position: relative;
		height: 100vh;
	}
	.sidebar ul li {
		list-style: none;
		display: flex;
	}
	.sidebar ul li:hover {
		color: white;
	}
	.sidebar ul a {
		position: relative;
		display: flex;
		white-space: nowrap;
		text-decoration: none;
		height: fit;
	}
	.sidebar ul a:hover {
		color: white;
	}
	.sidebar ul a li .icon {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 70px;
		/* height: 60px; */
		font-size: 1.5em;
	}
	.sidebar ul a li .text {
		position: relative;
		height: 60px;
		align-items: center;
		display: flex;
		font-size: 1em;
		letter-spacing: 0.05em;
	}
</style>
