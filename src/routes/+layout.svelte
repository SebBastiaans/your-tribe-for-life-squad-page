<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { data, children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<h1>Squadpage {data.squad?.name || ''}</h1>

{@render children()}

<style>
	h1 {
		padding: 1rem;
	}
</style>
