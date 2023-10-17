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
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
