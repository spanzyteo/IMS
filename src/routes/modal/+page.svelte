<script>
	import { app } from '$lib/firebase';
	import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
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
	export let data;
	// let students = data.res;
	// console.log('Data: ', data.res);
	async function loadData() {
		loading = true;
		greeting = await trpc($page).greeting.query();
		loading = false;
	}
	let open = false;
	const toggle = () => (open = !open);
	let radioGroup;
	let openScrollable = false;
	let skills = [
		{
			skill: 'Web Development',
			color: 'red',
			text: 'black'
		},
		{
			skill: 'Mobile Dev',
			color: 'green',
			text: 'white'
		},
		{
			skill: 'Fashion Designer',
			color: 'orange',
			text: 'white'
		},
		{
			skill: 'UI/UX Designer',
			color: 'purple',
			text: 'black'
		},
		{
			skill: 'Web Dev',
			color: 'blue',
			text: 'white'
		},
		{
			skill: 'Web Dev',
			color: 'yellow',
			text: 'black'
		},
		{
			skill: 'Web Dev',
			color: 'pink',
			text: 'black'
		},
		{
			skill: 'Web Dev',
			color: 'brown',
			text: 'black'
		},
		{
			skill: 'Web Dev',
			color: 'black',
			text: 'white'
		}
	];
	const toggleScrollable = () => (openScrollable = !openScrollable);
	const auth = getAuth(app);
	const signIn = () => {
		signInWithPopup(auth, new GoogleAuthProvider());
	};
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
	<h6>
		Loading data in<br /><code style="background-color: gray; padding: 10px;">+page.svelte</code>
	</h6>

	<a
		href="#load"
		role="button"
		class="secondary"
		aria-busy={loading}
		on:click|preventDefault={loadData}>Load</a
	>
	<p>{greeting}</p>

	<h3>Students</h3>
	<div class="gr">
		{#each skills as skill}
			<Button
				style="background-color: {skill.color}; color: {skill.text}; padding: 15px; border-radius: 10px; gap: 2rem; border: 1px solid black;"
				>{skill.skill}</Button
			>
		{/each}
	</div>
	<button on:click={signIn}>Sign In With Google</button>
</body>

<style>
	button:hover {
		background-color: greenyellow;
	}
	button {
		background-color: green;
	}
	.gr {
		display: flex;
		justify-content: space-evenly;
	}
</style>
