<script>
	import { selectedImage } from './store.js';

	let dragging = false;

	function handleDragOver(event) {
		event.preventDefault();
		dragging = true;
	}

	function handleDragLeave() {
		dragging = false;
	}

	function handleDrop(event) {
		event.preventDefault();
		dragging = false;

		const file = event.dataTransfer.files[0];

		if (file) {
			const imageUrl = URL.createObjectURL(file);
			selectedImage.set(imageUrl);
		}
	}

	function handleFileChange(event) {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			selectedImage.set(imageUrl);
		}
	}
</script>

<div class="add flex flex-wrap gap-3 justify-center items-center mb-3">
	<div class="drop-zone flex items-center content-center gap-x-4">
		{#if $selectedImage}
			<div class="box h-24 w-24 rounded-xl border-2">
				<img class=" h-full w-full object-cover" src={$selectedImage} alt="Selected Product" />
			</div>
		{:else}
			<div
				class="box h-16 w-16 border-dashed border-gray-400 rounded-xl border-2 p-4"
				on:dragover={handleDragOver}
				on:dragleave={handleDragLeave}
				on:drop={handleDrop}
			/>
		{/if}

		<div class="text-center text-sm">
			<label for="imageInput" class="cursor-pointer text-xs">
				<p>Drag image here</p>
				<p>or</p>
				<p class="text-primary">Browse image</p>
				<input
					type="file"
					id="imageInput"
					accept="image/*"
					class="hidden"
					on:change={handleFileChange}
				/>
			</label>
		</div>
	</div>
</div>

<style>
	.drop-zone {
		border-radius: 10px;
		cursor: pointer;
	}
	.box {
		/* Add your styling for the box div here */
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	img {
		/* Ensure the image fits within the box while maintaining aspect ratio */
		max-width: 100%;
		max-height: 100%;
	}
</style>
