export async function load({ params }) {
    const personRes = await fetch(`https://fdnd.directus.app/items/person/${params.id}?fields=*`);
    const personData = await personRes.json();

    const squadRes = await fetch(`https://fdnd.directus.app/items/squad/23?fields=*`);
    const squadData = await squadRes.json();

    return {
        person: personData.data,
        squad: squadData.data
    };
}