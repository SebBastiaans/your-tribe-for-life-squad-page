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

<main>
    <img class="mugshot" src="https://fdnd.directus.app/assets/{person.mugshot}" alt={person.name}>

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
            <li><button><img src={follow} alt="">Follow</button></li>
            <li><button><img src={subscribe} alt=""><span>Subscribe</span></button></li>
        </ul>
    </section>

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
</main>

<style>
    h1 {
        padding: 1rem;
    }

    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .mugshot {
            width: 100%;
            max-height: 40rem;
            object-fit: cover;
            max-width: 80rem;
        }

        section{
            margin-top: 1rem;
            width: calc(100% - var(--margin-inline) * 2);
            max-width: 80rem;
        }

        section:first-of-type {
            display: grid;
            grid-template-areas:
            'avatar name'
            'avatar game'
            'status status'
            'button button'
            ;
            grid-template-columns: auto 1fr;
            column-gap: 1rem;

            @media (width>1023px){
                grid-template-areas: 
                'avatar name   button'
                'avatar game   button'
                'avatar status button';

                grid-template-columns: auto 1fr auto;
            }

            .avatar {
                grid-area: avatar;
                align-self: center;

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
        

            ul:first-of-type{
                display: flex;
                column-gap: 1rem;
                grid-area: status;
                margin-top: 1rem;

                @media (width>1023px){
                    margin-top: 0;
                }

                li{
                    font-size: var(--paragraph-small);
                }

                li:first-of-type{
                    color: var(--primary-accent-color);
                }

                li:nth-of-type(2){
                    background-color: var(--secondary-background-color);
                    padding: .1rem .2rem;
                    border-radius: var(--radius-round);
                }
            }

            ul:nth-of-type(2){
                display: flex;
                gap: 1rem;
                grid-area: button;
                margin-top: 1rem;

                @media (width>1023px){
                    align-items: flex-start;
                    margin-top: 0;
                }

                li{
                    display: flex;
                }

                li:first-of-type{
                    width: 100%;
                }

                button{
                    appearance: none;
                    border: none;
                    border-radius: var(--radius-small);
                    display: flex;
                    align-items: center;
                    gap: .5rem;
                    cursor: pointer;
                    padding: 6px 12px;

                    @media (width>1023px){
                        padding: 8px 12px;
                    }
                }

                li:first-of-type button{
                    background-color: var(--primary-accent-color);
                    color: var(--primary-background-color);
                    width: 100%;
                    justify-content: center;
                }

                li:nth-of-type(2) button{
                    background-color: var(--secondary-background-color);

                    span{
                        display: none;

                        @media (width>1023px){
                            display: block;
                        }
                    }
                }
            }
        }

        section:nth-of-type(2){
            background-color: var(--secondary-background-color);
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
    }
</style>