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

<div class="squad-layout">
  <section class="detail-page">
    {#if chosenPerson}
      <PersonDetail person={chosenPerson}/>
    {:else}
      <h3>Klik op een persoon</h3>
    {/if}
  </section>

  <section class="person-list">
    {#each persons as person}
      <button onclick={() => choosePerson(person.id)}>
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
</div>

<style>
.squad-layout {
  min-height: 100dvh;

  .detail-page {
    min-width: 0;

    h3{
      text-align: center;
      padding-top: 10rem;
    }

    @media (min-width: 700px) {
      grid-area: details;
      padding-bottom: 0;
    }
  }

  .person-list {
    display: flex;
    position: fixed;
    view-transition-name: person-list;
    inset: auto 0 0 0;
    gap: 1rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 0 1rem 1rem;
    background-color: var(--primary-background-color);
    border-top: 1px solid var(--secondary-background-color);
    padding-block-start: 1rem;

    > button {
      display: block;
      flex: 0 0 175px;
      padding: 0;
      border: 0;
      background-color: transparent;
      color: inherit;
      font: inherit;
      text-align: inherit;
      cursor: pointer;

      @media (min-width:700px) {
        width: 100%;
        min-width: 0;
        height: 100%;
        flex: none;
      }
    }

    article {
      position: relative;
      width: 100%;

      margin: 0;

      img {
        display: block;
        width: 100%;
        height: 7.125rem;
        object-fit: cover;
        border-radius: 12px;

        @media (min-width:700px) {
          height: 100%;
          border-radius: 10px;
        }
      }

      > p {
        display: flex;
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        align-items: center;
        gap: 0.3rem;
        width: fit-content;
        padding-block: 4px;
        padding-inline: 6px;
        background: black;
        border-radius: var(--radius-round);
        font-size: 14px;

        @media (min-width:700px) {
          top: 4px;
          left: 4px;
          padding: 2px 4px;
          font-size: 10px;
        }

        &::before {
          content: "";
          display: block;
          width: 8px;
          height: 8px;
          background-color: var(--primary-accent-color);
          border-radius: 50%;

          @media (min-width:700px) {
            width: 6px;
            height: 6px;
          }
        }
      }

      h2 {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        padding: 2px 4px;
        color: var(--primary-text-color);
        background: rgb(0 0 0 / 70%);
        /* border-radius: 0 0 12px 12px; */
        font-family: "inter";
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;

        @media (min-width:700px) {
          padding: 2px 4px;
          font-size: var(--paragraph-medium);
        }
      }

      @media (min-width:700px) {
        height: 100%;
      }
    }

    @media (min-width: 700px) {
      grid-area: cards;
      display: grid;
      position: sticky;
      top: 0;
      inset: auto;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));      
      grid-auto-rows: 125px;
      align-content: start;
      gap: 14px;
      height: 100dvh;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 18px;
      border-top: 0;
      border-right: 2px solid var(--secondary-background-color);
    }
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-areas: "cards details";
    grid-template-columns: 300px minmax(100px, 1fr);
  }

  /* @media (min-width:800px) {
    grid-template-columns: 400px minmax(50px, 1fr);
  } */
}
</style>
