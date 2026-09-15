export async function load({ params }) {
    const personRes = await fetch(`https://fdnd.directus.app/items/person/${params.id}?fields=*`);
    const personData = await personRes.json();

    return {
        person: personData.data
    };
}