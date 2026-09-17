<script>
  import kickVerified from '$lib/assets/kickVerified.svg'
  import profilePicture from '$lib/assets/profilePicture.webp'
  import follow from '$lib/assets/follow.svg'
  import subscribe from '$lib/assets/subscribe.svg'
  import furkan from '$lib/assets/furkan.webp'

  let { person } = $props()
</script>

<div class="person-detail" style="view-transition-name: person-card-{person.id}">
  {#if person.mugshot}
    <picture>
      <source
        type="image/avif"
        srcset={`https://fdnd.directus.app/assets/${person.mugshot}?width=640&format=avif 640w, https://fdnd.directus.app/assets/${person.mugshot}?width=1440&format=avif 1440w`}
        sizes="100vw"
      >
      <source
        type="image/webp"
        srcset={`https://fdnd.directus.app/assets/${person.mugshot}?width=640&format=webp 640w, https://fdnd.directus.app/assets/${person.mugshot}?width=1440&format=webp 1440w`}
        sizes="100vw"
      >
      <img class="mugshot" src={`https://fdnd.directus.app/assets/${person.mugshot}?width=1440`} width="1440" height="720" alt={`Mugshot van ${person.name}`} />
    </picture>
  {:else}
    <img class="mugshot" src={profilePicture} width="1440" height="720" alt="Standaard profielfoto" />
  {/if}

  <section aria-label="About {person.name}">
    {#if person.avatar}
      <a class="avatar" href={person.profilecard}>
        <img src={person.avatar} width="48" height="48" loading="lazy" alt="Profielfoto van {person.name}" />
      </a>
    {:else}
      <a class="avatar" href={person.profilecard}>
        <img src={furkan} width="48" height="48" loading="lazy" alt="Standaard profielfoto" />
      </a>
    {/if}

    {#if person.github_handle}
      <a class="username" href={person.profilecard}>
        <h2>
          {person.github_handle}
          <img src={kickVerified} alt="Verified" />
        </h2>
      </a>
    {:else if person.nickname}
      <a class="username" href={person.profilecard}>
        <h2>
          {person.nickname}
          <img src={kickVerified} alt="Verified" />
        </h2>
      </a>
    {:else}
      <a class="username" href={person.profilecard}>
        <h2>
          {person.name}
          <img src={kickVerified} alt="Verified" />
        </h2>
      </a>
    {/if}

    <p>{person.fav_game || '-'}</p>

    <ul>
      <li>Just chatting</li>

      {#if person.fav_country}
        <li>{person.fav_country}</li>
      {:else if person.fav_kitchen}
        <li>{person.fav_kitchen}</li>
      {:else}
        <li>English</li>
      {/if}
    </ul>

    <ul>
      <li>
        <a href={person.website}>
          <img src={follow} alt="" />
          Follow
        </a>
      </li>

      <li>
        <a href={person.website} aria-label="Subscribe">
          <img src={subscribe} alt="" />
          <span>Subscribe</span>
        </a>
      </li>
    </ul>
  </section>

  <section aria-label="Description by {person.name}">
    {#if person.github_handle}
      <h3>
        About {person.github_handle}
        <img src={kickVerified} alt="Verified" />
      </h3>
    {:else if person.nickname}
      <h3>
        About {person.nickname}
        <img src={kickVerified} alt="Verified" />
      </h3>
    {:else}
      <h3>
        About {person.name}
        <img src={kickVerified} alt="Verified" />
      </h3>
    {/if}

    <p><strong>{person.id}</strong> followers</p>

    <p>{@html person.bio}</p>

    <details>
      <summary>Random facts</summary>

      <ul>
        <li>Favourite movie <span>{person.fav_movie || '-'}</span></li>
        <li>Favourite song <span>{person.fav_song || '-'}</span></li>
        <li>Favourite season <span>{person.fav_season || '-'}</span></li>
        <li>Favourite coffee <span>{person.fav_coffee || '-'}</span></li>
        <li>Favourite kitchen <span>{person.fav_kitchen || '-'}</span></li>
        <li>Favourite fruit <span>{person.fav_fruit || '-'}</span></li>
      </ul>
    </details>
  </section>
</div>

<style>
  .person-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10rem;

    @media (min-width:700px) {
      padding-bottom: 1rem;
    }

    picture {
      display: block;
      width: 100%;
    }

    .mugshot {
      display: block;
      width: 100%;
      height: auto;
      max-width: 70rem;
      max-height: 35rem;
      margin-inline: auto;
      aspect-ratio: 2 / 1;
      object-fit: cover;
    }

    section {
      width: calc(100% - var(--margin-inline) * 2);
      max-width: 80rem;
      margin-top: 1rem;
    }

    section:first-of-type {
      display: grid;
      grid-template-areas:
        "avatar name"
        "avatar game"
        "status status"
        "button button";
      grid-template-columns: auto 1fr;
      column-gap: 1rem;

      @media (width > 1023px) {
        grid-template-areas:
          "avatar name button"
          "avatar game button"
          "avatar status button";
        grid-template-columns: auto 1fr auto;
      }

      .avatar {
        grid-area: avatar;
        align-self: center;

        img {
          width: 3rem;
          height: auto;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: var(--radius-round);
          outline: 3px solid var(--primary-accent-color);
        }

        &:hover{
          scale: .95;
          transition: .1s ease;
        }
      }

      .username {
        grid-area: name;

        h2 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        img {
          width: 1.25rem;
        }
      }

      p {
        grid-area: game;
        font-size: var(--paragraph-small);
      }

      ul:first-of-type {
        display: flex;
        grid-area: status;
        column-gap: 1rem;
        margin-top: 1rem;

        @media (width > 1023px) {
          margin-top: 0;
        }

        li {
          font-size: var(--paragraph-small);
        }

        li:first-of-type {
          color: var(--primary-accent-color);
        }

        li:nth-of-type(2) {
          padding: 0.1rem 0.2rem;
          background-color: var(--secondary-background-color);
          border-radius: var(--radius-round);
        }
      }

      ul:nth-of-type(2) {
        display: flex;
        grid-area: button;
        gap: 1rem;
        margin-top: 1rem;

        @media (width > 1023px) {
          align-items: flex-start;
          margin-top: 0;
        }

        li {
          display: flex;
        }

        li:first-of-type {
          width: 100%;
        }

        a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 6px 12px;
          border: none;
          border-radius: var(--radius-small);
          cursor: pointer;

          @media (width > 1023px) {
            padding: 8px 12px;
          }

          &:hover{
            scale: .95;
            transition: .1s ease;
            text-decoration: none;
          }
        }

        li:first-of-type a {
          width: 100%;
          justify-content: center;
          color: var(--primary-background-color);
          background-color: var(--primary-accent-color);
        }

        li:nth-of-type(2) a {
          background-color: var(--secondary-background-color);

          span {
            display: none;

            @media (width > 1023px) {
              display: block;
            }
          }
        }
      }
    }

    section:nth-of-type(2) {
      display: grid;
      grid-template-areas:
        "about follower"
        "info info"
        "detail detail";
      grid-template-columns: auto 1fr;
      column-gap: 1rem;
      padding: 1rem;
      background-color: var(--secondary-background-color);
      border-radius: var(--radius-small);

      h3 {
        display: flex;
        grid-area: about;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: var(--paragraph-medium);

        img {
          width: 1.25rem;
        }
      }

      p:first-of-type {
        grid-area: follower;
        color: var(--secondary-text-color);

        strong {
          color: var(--primary-accent-color);
        }
      }

      p:nth-of-type(2) {
        grid-area: info;
        overflow: hidden;
        contain: layout paint;
      }

      details {
        grid-area: detail;

        summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;

          &::after {
            width: 0.5rem;
            height: 0.5rem;
            content: "";
            border-right: 2px solid currentColor;
            border-bottom: 2px solid currentColor;
            transform: rotate(45deg);
            transition: transform 0.2s ease;
          }
        }
      }

      details[open] summary::after {
        transform: rotate(-135deg);
      }
    }
  }
</style>