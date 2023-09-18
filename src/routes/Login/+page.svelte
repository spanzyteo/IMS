<script lang="ts">
	import { goto } from '$app/navigation';
	import { ensureLogin } from '$lib/authorise';
	import { deserialize, enhance } from '$app/forms';
	import { page } from '$app/stores';
	// import { isLoggedIn } from '../../stores/stores';
	import { onMount } from 'svelte';
	import { trpc } from '$lib/trpc/client';
	import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
	import { auth } from '$lib/firebase';

	let details = {
		email: '',
		password: ''
	};
	let user;

	onMount(async () => {
		onAuthStateChanged(auth, (newUser) => {
			user = newUser;
		});
	});

	let fi = new FormData();
	//Login Function
	async function login(e) {
		e.preventDefault();
		fi.append('info', JSON.stringify(details));
		let data = await fetch('?/signup', { method: 'POST', body: fd });
		let res = deserialize(await data.text());
		console.log(res);
		ensureLogin(res.data);
		if (res.data.success) {
			console.log(res.data.message);
			alert('Login Successful Redirecting...');
			setTimeout(async () => {
				await goto(`${res.data.url}`);
			}, 2000);
		} else {
			alert(res.data.message);
		}
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>
<body>
	<div class="login-card">
		<div class="login-container w-2/4">
			<div class="text-center p-[5rem] rounded-xl shadow-slate-700">
				<h3 class="text-3xl text-[rgb(87,242,135)] font-bold pb-3">Login Your Account</h3>
				<div class="form__group field mb-3">
					<input
						type="email"
						name="email"
						bind:value={details.email}
						class="form__field mt-2"
						placeholder="Enter Email Address"
					/>

					<label for="email" class="form__label"
						><img
							src="/assets/mail.svg"
							alt="email-icon"
							width="30"
							class="text-[#57F287] float-left mr-2 icon"
						/>{''} Enter Email Address
					</label>
				</div>
				<div class="form__group field">
					<input
						type="password"
						name="password"
						bind:value={details.password}
						class="form__field mt-2"
						placeholder="Enter Password"
					/>
					<label for="password" class="form__label">
						<img src="/assets/lock.svg" alt="passkey" width="30" class="float-left mr-2 icon" />
						{''}
						Enter Password</label
					>
					<br /><br />
					<p class="font-bold text-xl text-black">
						Don't have an account? <a href="/Signup" class="text-blue-400">Signup</a>
					</p>
				</div>
				<button class="button w-[10rem] px-10 py-2 mt-5 border-[#57F287] font-bold" on:click={login}
					>Log In</button
				>
			</div>
		</div>
	</div>
</body>

<style>
	.login-card {
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
	/* Set the background color for focused input fields */
	input:focus {
		background-color: transparent;
	}

	/* Set the background color for autofilled input fields */
	input:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 30px white inset !important;
		background-color: red !important;
	}
</style>
