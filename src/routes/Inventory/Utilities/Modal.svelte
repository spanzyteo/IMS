<script>
	export let showModal = false;
	import Card from './Card.svelte';
</script>

{#if showModal}
	<div class="backdrop" on:click|self on:keydown>
		<div class="modals">
			<slot />
		</div>
	</div>
{/if}

<style>
	.backdrop {
		width: 100%;
		height: 100%;
		position: fixed;
		background: rgb(241, 242, 244, 0.5);
		z-index: 100;
	}

	.modals {
		padding: 10px;
		border-radius: 10px;
		max-width: 400px;
		margin: 10% auto;
		/* text-align: center; */
		/* background: white; */
		/* z-index: 1000; */
	}
</style>
