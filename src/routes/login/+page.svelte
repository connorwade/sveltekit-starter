<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="p-5">
	<form class="form-control">
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
			placeholder="password"
			class="input input-bordered"
			type="password"
			name="password"
			id="password"
		/>
		<button class="btn btn-primary my-4">Log in</button>
	</form>

	<a class="link" href="/signup">Sign up</a>
</main>
