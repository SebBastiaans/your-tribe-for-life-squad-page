<script>
  import PersonDetail from "$lib/PersonDetail.svelte"
  import shrek from "$lib/assets/Shrek.webp"

  let { data } = $props()

  const persons = data.persons

  let chosenPerson = $state(null)

  async function choosePerson(id) {
    const response = await fetch(
      `https://fdnd.directus.app/items/person/${id}?fields=*`,
    )

    const result = await response.json()

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        chosenPerson = result.data
      })
    } else {
      chosenPerson = result.data
    }
  }
</script>

<svelte:head>
  <title>Squadpage 2G</title>
</svelte:head>

<main>
  {#if chosenPerson}
    <PersonDetail person={chosenPerson} />
  {:else}
    <p>Nog niet op een persoon geklikt</p>
  {/if}
</main>

<section class="person-list">
  {#each persons as person}
    <button
      on:click={() => choosePerson(person.id)}
      style={chosenPerson?.id === person.id ? '' : `view-transition-name: person-card-${person.id}`}
    >
      <article>
        {#if person.mugshot}
          <img
            src={`https://fdnd.directus.app/assets/${person.mugshot}`}
            alt={`Mugshot van ${person.name}`}
          />
        {:else}
          <img src={shrek} alt="Mugshot van Shrek" />
        {/if}

        <p>Live</p>
        <h2>{person.name}</h2>
      </article>
    </button>
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
    background-color: var(--primary-background-color);
    padding: 1rem;
    border-top: 1px solid var(--secondary-background-color);

    > button {
      display: block;
      /* width: 175px; */
      border: none;
      background-color: transparent;
      flex: 0 0 175px;
      text-align: inherit;
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
        height: 8.125rem;
        object-fit: cover;
        display: block;
        border-radius: 12px;
      }

      > p {
        display: flex;
        align-items: center;
        position: absolute;
        gap: 0.3em;
        width: fit-content;
        padding-inline: 6px;
        padding-block: 4px;
        border-radius: var(--radius-round);
        background: black;
        top: 0.5em;
        left: 0.5em;
        font-size: 14px;

        &:before {
          content: "";
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
        font-family: "inter";
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
