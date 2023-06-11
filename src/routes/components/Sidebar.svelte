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

<!-- New sidebar starts here -->
<!-- <div class="sidebar">
	<div class="top">
		<div class="logo">
			<ion-icon name="logo-angular" />
			<span>Los Angis</span>
		</div>
		<ion-icon name="apps" id="btn" />
	</div>
	<div class="user">
		<img src="" alt="profile" />
		<div>
			<p class="bold">John Doe</p>
			<p>Admin</p>
		</div>
	</div>
	<ul>
		<li>
			<a href="/">
				<ion-icon name="grid" />
				<span class="nav-item">Dashboard</span>
			</a>
			<span class="tooltip">Dashboard</span>
		</li>
		<li>
			<a href="/">
				<ion-icon name="grid" />
				<span class="nav-item">Banking</span>
			</a>
			<span class="tooltip">Banking</span>
		</li>
		<li>
			<a href="/">
				<ion-icon name="grid" />
				<span class="nav-item">Inventory</span>
			</a>
			<span class="tooltip">Inventory</span>
		</li>
		<li>
			<a href="/">
				<ion-icon name="grid" />
				<span class="nav-item">Invoices</span>
			</a>
			<span class="tooltip">Invoices</span>
		</li>
	</ul>
</div> -->

<!-- New sidebar ends here -->

<div class="sidebar h-[100vh] bg-black">
	<a href="/"><img src="/logo.jpg" alt="Logo" /></a>
	<ul class="mx-auto mt-10">
		<a href="/"
			>{#if active_component === 'home'}<li
					id="active"
					class="pt-[1rem] font-bold hover:text-[#57F287] cursor-pointer"
				>
					<span class="icon"><ion-icon name="home-outline" /></span>
					<span class="text">Home</span>
				</li>
			{:else}
				<li class="mt-[2rem] font-bold hover:text-[#57F287] cursor-pointer">
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
					<span class="icon"><ion-icon name="cash-outline" /></span>
					<span class="text">Banking</span>
				</li>
			{:else}
				<li class="mt-[2rem] font-bold hover:text-white cursor-pointer">
					<span class="icon"><ion-icon name="cash-outline" /></span>
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
		color: #57f287;
	}
	.sidebar {
		position: fixed;
		height: 100vh;
		width: 250px;
		overflow: hidden;
		transition: 0.5s;
	}
	/* .sidebar:hover {
		width: 300px;
		transition: 0.5s ease-in-out;
	} */
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
