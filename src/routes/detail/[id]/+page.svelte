<script>
    let { data } = $props();
    const person = data.person;
</script>

<h2>{person.name}</h2>
<img src="https://fdnd.directus.app/assets/{person.mugshot}" alt={person.name}>
<section>
    <h3>About</h3>
    <p>{person.bio}</p>
    <ul>
        Random facts
        <li>Favourite movie <span>{person.fav_movie}</span></li>
        <li>Favourite song <span>{person.fav_song}</span></li>
        <li>Favourite season <span>{person.fav_season}</span></li>
        <li>Favourite coffee <span>{person.fav_coffee}</span></li>
        <li>Favourite kitchen <span>{person.fav_kitchen}</span></li>
        <li>Favourite fruit <span>{person.fav_fruit}</span></li>
    </ul>
</section>