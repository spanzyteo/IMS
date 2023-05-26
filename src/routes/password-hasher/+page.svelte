<script>
	import { Input } from 'sveltestrap';
	import { enhance } from '$app/forms';
	export let form;
</script>

<body>
	<form action="?/hashit" method="post" use:enhance>
		<Input type="text" name="pass" placeholder="input password to hash" />
	</form>
	<p>{form?.hashed}</p>
	<p>{form?.compared.toLocaleString()}</p>
</body>
