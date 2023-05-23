<script>
</script>

<body>
	<div class="spinner-container">
		<div class="flex">
			<div class="spinner" />
			<p class="p-2 font-extrabold">Loading...</p>
		</div>
	</div>
</body>

<style>
	body {
		height: 100%;
	}
	.spinner-container {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.spinner {
		display: inline-block;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 4px solid lime;
		border-top-color: #fff;
		animation: spinner 0.8s ease-in-out infinite;
	}

	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}
</style>
