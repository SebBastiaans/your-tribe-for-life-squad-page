<script>
    import kickVerified from '$lib/assets/kickVerified.svg';
    import profilePicture from '$lib/assets/profilePicture.jpg';

    let { data } = $props();
    const person = data.person;
    const squad = data.squad;
</script>

<h1>Squadpage {squad.name}</h1>
<img src="https://fdnd.directus.app/assets/{person.mugshot}" alt={person.name}>

<section>
    {#if person.avatar}
        <img src={person.avatar} alt="profile picture">
    {:else}
        <img src={profilePicture} alt="profile picture">
    {/if}

    {#if person.github_handle}
        <h2>{person.github_handle} <img src={kickVerified} alt="Verified"></h2>
    {:else if person.nickname}
        <h2>{person.nickname} <img src={kickVerified} alt="Verified"></h2>
    {:else}
        <h2>{person.name} <img src={kickVerified} alt="Verified"></h2>
    {/if}

    <img src="" alt="">
    
    <p>{person.fav_game || '-'}</p>
</section>

<div>
    <p>Just chatting</p>
    {#if person.fav_country}
        <p>{person.fav_country}</p>
    {:else if person.fav_kitchen}
        <p>{person.fav_kitchen}</p>
    {:else}
        <p>English</p>
    {/if}
</div>

<div>
    <button><span></span>Follow</button>
    <button><span></span>Subscribe</button>
</div>

<section>
    {#if person.github_handle}
        <h3>About {person.github_handle}<img src={kickVerified} alt="Verified"></h3>
    {:else if person.nickname}
        <h3>About {person.nickname}<img src={kickVerified} alt="Verified"></h3>
    {:else}
        <h3>About {person.name}<img src={kickVerified} alt="Verified"></h3>
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