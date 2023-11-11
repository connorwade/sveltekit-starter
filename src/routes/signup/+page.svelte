<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="p-5">
	<form class="form-control" method="POST">
		<label for="email" class="label"><span class="label-text">Email</span></label>
		<input
			placeholder="email@example.com"
			class="input input-bordered"
			type="email"
			name="email"
			id="email"
		/>
		<label for="password" class="label"><span class="label-text">Password</span></label>
		<input
			placeholder="Password"
			class="input input-bordered"
			type="password"
			name="password"
			id="password"
		/>
		<button class="btn btn-primary my-4">Sign Up</button>
	</form>

	<a class="link" href="/login">Log In</a>
</main>
