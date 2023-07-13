<script>
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '../../stores/stores';
	import { page } from '$app/stores';
	import { deserialize } from '$app/forms';
	import { ensureLogin } from '$lib/authorise';
	import { onMount } from 'svelte';
	let details = {
		name: '',
		email: '',
		password: '',
		business: ''
	};

	onMount(async () => {
		if ($page.data.message != 'No User Logged In') {
			let mes = $page.data.message;
			alert(mes);
			await goto($page.data.url);
		}
	});
	let c_password = '';
	let fd = new FormData();
	async function login() {
		if (c_password.match(details.password)) {
			fd.append('user', JSON.stringify(details));
			let data = await fetch('?/signup', { method: 'POST', body: fd });
			let res = deserialize(await data.text());
			console.log(res);
			ensureLogin(res.data);
			if (res.data.message === 'Registration Successful. Redirecting...') {
				console.log(res.data.message);
				alert(res.data.message);
				await goto(`${res.data.url}`);
			} else {
				alert(res.data.message);
			}
		} else {
			alert('Passwords do not match');
		}
		// console.log(`New Data: ${data}`);
	}
</script>

<svelte:head>
	<title>Signup</title>
</svelte:head>
<body class="paage">
	<div class="login-container w-2/4">
		<div class="text-center p-[5rem] rounded-xl shadow-slate-700">
			<h3 class="text-3xl text-[rgb(87,242,135)] font-bold p-3">Create Account</h3>
			<div class="form__group field mb-3">
				<input
					type="text"
					name="text"
					bind:value={details.name}
					class="form__field"
					placeholder="Enter Username"
					required
				/>
				<label for="text" class="form__label">
					<img
						src="./assets/user.svg"
						alt="email-icon"
						width="30"
						class="text-[#57F287] float-left mr-2 icon"
					/>{''}
					Enter Username</label
				>
			</div>
			<div class="form__group field mb-3">
				<input
					type="text"
					name="business_name"
					bind:value={details.business}
					class="form__field"
					placeholder="business_name"
					required
				/>
				<label for="password" class="form__label">
					<img
						src="./assets/user.svg"
						alt="email-icon"
						width="30"
						class="text-[#57F287] float-left mr-2 icon"
					/>{''}
					Business Name</label
				>
			</div>
			<div class="form__group field mb-3">
				<input
					type="email"
					name="email"
					bind:value={details.email}
					class="form__field"
					placeholder="Enter Email Address"
					required
				/>
				<label for="email" class="form__label">
					<img
						src="./assets/mail.svg"
						alt="email-icon"
						width="30"
						class="text-[#57F287] float-left mr-2 icon"
					/>{''}
					Enter Email Address</label
				>
			</div>
			<div class="form__group field mb-3">
				<input
					type="password"
					name="password"
					bind:value={details.password}
					class="form__field"
					placeholder="Create password"
					required
				/>
				<label for="password" class="form__label">
					<img
						src="./assets/lock.svg"
						alt="email-icon"
						width="30"
						class="text-[#57F287] float-left mr-2 icon"
					/>{''}
					Create Password</label
				>
			</div>
			<div class="form__group field mb-3">
				<input
					type="password"
					name="c_password"
					bind:value={c_password}
					class="form__field"
					placeholder="Create password"
					required
				/>
				<label for="c_password" class="form__label">
					<img
						src="./assets/lock.svg"
						alt="email-icon"
						width="30"
						class="text-[#57F287] float-left mr-2 icon"
					/>{''}
					Confirm Password</label
				>
			</div>

			<button class="button px-10 py-2 mt-5 border-[#57F287] font-bold" on:click={login}>
				Create Account</button
			><br /><br />
			<p class="font-bold text-xl text-black">
				Already have an account? <a href="/Login" class="text-blue-400">Login</a>
			</p>
		</div>
	</div>
</body>

<style>
	.paage {
		height: 100vh;
		background-image: url('../../../assets/bg.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.login-container {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: rgba(19, 19, 19, 0.65);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(6.8px);
		-webkit-backdrop-filter: blur(6.8px);
		border: 1px solid rgba(19, 19, 19, 0.39);
	}
</style>
