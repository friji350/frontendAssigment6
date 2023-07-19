<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.post.titlePage;}</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<div class="text-column">
	<h1>About this app</h1>
	<p>
		Welcome to the Random Mini-Comics Hub, the ultimate destination for a daily burst of comic hilarity! Our website is dedicated to delivering random mini-comics to users who are seeking quick and entertaining doses of laughter. Prepare to be delighted by a diverse selection of bite-sized comic strips that cover a wide range of genres, themes, and art styles.
	</p>
</div>
