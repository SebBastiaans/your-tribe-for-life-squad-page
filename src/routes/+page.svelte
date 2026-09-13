<script>
    let {data} = $props();

    import shrek from '$lib/assets/Shrek.webp';

    const persons = data.persons;
</script>

<section>
    {#each persons as person}
        <a href={`/detail/${person.id}`}>
            <article>
            {#if person.mugshot}
                <img src="https://fdnd.directus.app/assets/{person.mugshot}" width="225" height="175" alt="Mugshot van {person.name}">
            {:else}
                <img src="{shrek}" width="225" height="175" alt="Mugshot van Shrek">
            {/if}
                <p>Live</p>
                <h2>{person.name}</h2>
            </article>
        </a>
    {/each}
</section>

<style>
    section {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        gap: 1em;
        /* margin: 1em; */
        overflow-x: auto;
        scroll-behavior: smooth;
        background-color: var(--secondary-text-color);
        padding: 1rem;

        a {
            display: block;
            /* width: 175px; */
            flex: 0 0 175px;
            color: inherit;
            text-decoration: none;
        }

        article {
            position: relative;
            width: 100%;
            flex: 0 0 175px;
            margin-block-start: 1rem;

            img {
                width: 100%;
                height: 100px;
                object-fit: cover;
                display: block;
                border-radius: 12px;
            }

            > p {
                display: flex;
                align-items: center;
                position: absolute;
                gap: .3em;
                width: fit-content;
                padding-inline: 6px;
                padding-block: 4px;
                border-radius: var(--radius-round);
                background: black;
                top: .5em;
                left: .5em;
                font-size: 14px;

                &:before {
                    content: '';
                    display: block;
                    width: 8px;
                    height: 8px;
                    background-color: var(--primary-accent-color);
                    border-radius: 50%;
                }

                /* span {
                    color: var(--primary-text-color);
                    font-family: 'inter';
                    font-size: 14px;
                } */
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
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>
