<script>
    let {data} = $props();

    const persons = data.persons;
    // const avatar = data.avatar;
    const mugshot = data.mugshot;
</script>

<section>
{#each persons as person}
    <article>
        <img src="https://fdnd.directus.app/assets/{person.mugshot}">
        <p>{person.name}</p>
    </article>
{/each}
</section>