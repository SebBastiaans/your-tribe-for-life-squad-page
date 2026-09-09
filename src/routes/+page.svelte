<script>
    let {data} = $props();

    import shrek from '$lib/assets/Shrek.webp';

    const persons = data.persons;
</script>

<section>
{#each persons as person}
    <article>
    {#if person.mugshot}
        <img src="https://fdnd.directus.app/assets/{person.mugshot}" width="175" height="125" alt="Mugshot van {person.name}">
    {:else}
        <img src="{shrek}" width="175" height="125" alt="Mugshot van Shrek">
    {/if}
        <div>
            <div></div>
            <span>Live</span>
        </div>
        <h2>{person.name}</h2>
    </article>
{/each}
</section>

<style>
    * {
        box-sizing: border-box;
    }
    
    section {
        display: flex;
        gap: 1em;
        margin: 1em;
        overflow-x: auto;
        scroll-behavior: smooth;

        article {
            position: relative;
            width: fit-content;
            flex: 0 0 175px;

            img {
                max-width: 100%;
                height: auto;
                display: block;
                border-radius: 12px;
            }

            > div {
                display: flex;
                align-items: center;
                position: absolute;
                gap: .3em;
                width: fit-content;
                padding-inline: 6px;
                padding-block: 4px;
                border-radius: 99px;
                background: black;
                top: .5em;
                left: .5em;

                div:nth-of-type(1) {
                    background: var(--primary-accent-color);
                    border-radius: 50%;
                    width: 8px;
                    height: 8px;
                    padding: 0;
                }

                span {
                    color: var(--primary-text-color);
                    font-family: 'inter';
                    font-size: 14px;
                }
            }

            h2 {
                position: absolute;
                background: rgb(0 0 0 / 70%);
                color: var(--primary-text-color);
                font-family: 'inter';
                font-weight: 500;
                text-align: center;
                font-size: 20px;
                bottom: 0;
                right: 0;
                left: 0;
                border-radius: 0 0 12px 12px;
            }
        }
    }
</style>