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

            div {
                display: flex;
                align-items: center;
                gap: .3em;
                width: fit-content;
                padding-inline: 6px;
                padding-block: 4px;
                border-radius: 99px;
                background: black;

                div:nth-of-type(1) {
                    background: #53FC18;
                    border-radius: 50%;
                    width: 8px;
                    height: 8px;
                    padding: 0;
                }

                span {
                    color: white;
                    font-size: 14px;
                }
            }
        }
    }
</style>