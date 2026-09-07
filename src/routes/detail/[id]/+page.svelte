<script>
    import kickVerified from '$lib/assets/kickVerified.svg';
    import profilePicture from '$lib/assets/profilePicture.jpg';
    import follow from '$lib/assets/follow.svg';
    import subscribe from '$lib/assets/subscribe.svg';

    let { data } = $props();
    const person = data.person;
    const squad = data.squad;
</script>

<h1>Squadpage {squad.name}</h1>
<img class='mugshot' src="https://fdnd.directus.app/assets/{person.mugshot}" alt={person.name}>

<section>
    {#if person.avatar}
        <a class="avatar" href="{person.website}"><img class='avatar' src={person.avatar} alt="profile picture"></a>
    {:else}
        <a class="avatar" href="{person.website}"><img class="avatar" src={profilePicture} alt="profile picture"></a>
    {/if}

    {#if person.github_handle}
        <a class="username" href="{person.website}"><h2>{person.github_handle} <img src={kickVerified} alt="Verified"></h2></a>
    {:else if person.nickname}
        <a class="username" href="{person.website}"><h2>{person.nickname} <img src={kickVerified} alt="Verified"></h2></a>
    {:else}
       <a class="username" href="{person.website}"><h2>{person.name} <img src={kickVerified} alt="Verified"></h2></a>
    {/if}
    
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
    <button><img src={follow} alt="">Follow</button>
    <button><img src={subscribe} alt=""><span>Subscribe</span></button>
</div>

<section>
    {#if person.github_handle}
        <h3>About {person.github_handle} <img src={kickVerified} alt="Verified"></h3>
    {:else if person.nickname}
        <h3>About {person.nickname} <img src={kickVerified} alt="Verified"></h3>
    {:else}
        <h3>About {person.name} <img src={kickVerified} alt="Verified"></h3>
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

<style>
    h1 {
        padding: 1rem;
    }

    .mugshot {
        width: 100vw;
        max-height: 30rem;
        object-fit: cover;
    }

    section, div{
        margin-top: 1rem;
    }

    section:first-of-type {
        display: grid;
        grid-template-areas: 
        'avatar name'
        'avatar game'
        ;
        grid-template-columns: auto 1fr;
        column-gap: 1rem;
        margin-inline: var(--margin-inline);

        .avatar {
            grid-area: avatar;

            img {
                width: 3rem;
                aspect-ratio: 1/1;
                border-radius: var(--radius-round);
                outline: var(--primary-accent-color) 3px solid;
            }
        }

        .username {
            grid-area: name;
        }

        p{
            grid-area: game;
            font-size: var(--paragraph-small);
        }
    }

    div:first-of-type{
        margin-inline: var(--margin-inline);
        display: flex;
        column-gap: 1rem;
        
        p{
            font-size: var(--paragraph-small);
        }

        p:first-of-type{
            color: var(--primary-accent-color);
        }

        p:nth-of-type(2){
            background-color: var(--secondary-background-color);
            padding: .1rem .2rem;
            border-radius: var(--radius-round);
        }
    }

    div:nth-of-type(2){
        margin-inline: var(--margin-inline);
        display: flex;
        gap: 1rem;

        button{
            appearance: none;
            border: none;
            border-radius: var(--radius-small);
            display: flex;
            align-items: center;
            gap: .5rem;
            cursor: pointer;
        }

        button:first-of-type{
            background-color: var(--primary-accent-color);
            color: var(--primary-background-color);
            width: 100%;
            justify-content: center;
        }

        button:nth-of-type(2){
            background-color: var(--secondary-background-color);
            padding: .3rem;

            span{
                display: none;
            }
        }
    }

    section:nth-of-type(2){
        background-color: var(--secondary-background-color);
        margin-inline: var(--margin-inline);
        border-radius: var(--radius-small);
        padding: 1rem;
        display: grid;
        grid-template-areas: 
        'about  follower'
        'info   info'
        'detail detail'
        ;
        grid-template-columns: auto 1fr;
        column-gap: 1rem;

        h3{
            font-size: var(--paragraph-medium);
            grid-area: about;
            display: flex;
            align-items: center;
            gap: .5rem;
            margin-bottom: .5rem;
        }

        p:first-of-type{
            color: var(--secondary-text-color);
            grid-area: follower;

            strong{
                color: var(--primary-accent-color);
            }
        }

        p:nth-of-type(2){
            grid-area: info;
        }

        details{
            grid-area: detail;

            summary{
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: space-between;

                &:after{
                    content: '';
                    width: .5rem;
                    height: .5rem;
                    border-right: 2px solid currentColor;
                    border-bottom: 2px solid currentColor;
                    transform: rotate(45deg);
                    transition: transform .2s ease;
                }
            }
        }

        details[open] summary::after{
            transform: rotate(-135deg);
        }
    }
</style>