<script>
    let {data} = $props();

    const persons = data.persons;
    const mugshot = data.mugshot;
</script>

<section>
{#each persons as person}
    <article>
        <img src="https://fdnd.directus.app/assets/{person.mugshot}" width="175px" height="125px">
        <div>
            <div></div>
            <span>Live</span>
        </div>
        <p>{person.name}</p>
    </article>
{/each}
</section>

<style>
    section {
        article {
            img {
                max-width: 100%;
                height: auto;
            }
        }
    }
</style>