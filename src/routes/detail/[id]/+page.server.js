export async function load({ params }) {
    const res = await fetch(`https://fdnd.directus.app/items/person/${params.id}?fields=*`);
    const data = await res.json();

    return {
        person: data.data
    };
}
