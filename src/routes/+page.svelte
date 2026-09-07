<script>
    let { data } = $props();
    const persons = data.person;
</script>

{#each persons as person}
    <a href="/detail/{person.id}">{person.name}</a><br>
{/each}
