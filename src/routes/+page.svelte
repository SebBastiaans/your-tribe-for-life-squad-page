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
    * {
        box-sizing: border-box;
    }
    
    section {
        display: flex;
        gap: 1em;
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

            p {
                position: absolute;
                background: rgb(0 0 0 / 70%);
                text-align: center;
                font-size: 20px;
                bottom: 0;
                right: 0;
                left: 0;
            }
        }
    }
</style>