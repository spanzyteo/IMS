<script>
	import {
		Form,
		FormGroup,
		FormText,
		Input,
		Label,
		Modal,
		Button,
		ModalBackdrop,
		ModalBody,
		ModalFooter,
		ModalHeader
	} from 'sveltestrap';
	import { trpc } from '$lib/trpc/client';
	import { page } from '$app/stores';
	let greeting = 'press the button to load data';
	let loading = false;
	async function loadData() {
		loading = true;
		greeting = await trpc($page).greeting.query();
		loading = false;
	}
	let open = false;
	const toggle = () => (open = !open);
	let radioGroup;
	let openScrollable = false;
	const toggleScrollable = () => (openScrollable = !openScrollable);
</script>

<body>
	<button
		style="border-radius: 100%; width: 50px; font-size: 2rem; border: 1px solid black;"
		on:click={toggle}>+</button
	>
	<Modal isOpen={open} {toggle}>
		<ModalHeader isOpen={openScrollable} toggle={toggleScrollable} scrollable
			>Add New Item</ModalHeader
		>
		<ModalBody>
			<Form>
				<FormGroup>
					<Label for="item_name">Item Name:</Label>
					<Input type="text" name="Item_name" id="item_name" placeholder="Item Name" />
				</FormGroup>
				<FormGroup>
					<Label for="item_price">Price:</Label>
					<Input type="number" name="password" id="item_price" placeholder="Item Price" />
				</FormGroup>
				<FormGroup>
					<Label for="item_quan">Quantity</Label>
					<Input type="number" name="quantity" id="item_quan" placeholder="Quantity" />
				</FormGroup>
				<FormGroup>
					<Label for="desc">Description:</Label>
					<Input type="text" name="desc" id="desc" placeholder="Item Description" />
				</FormGroup>
			</Form>
		</ModalBody>
		<ModalFooter>
			<Button color="success" on:click={toggle}>Save</Button>
			<Button color="danger" on:click={toggle}>Cancel</Button>
		</ModalFooter>
	</Modal>
	<h6>Loading data in<br /><code>+page.svelte</code></h6>

	<a
		href="#load"
		role="button"
		class="secondary"
		aria-busy={loading}
		on:click|preventDefault={loadData}>Load</a
	>
	<p>{greeting}</p>
</body>

<style>
	button:hover {
		background-color: greenyellow;
	}
	button {
		background-color: green;
	}
</style>
