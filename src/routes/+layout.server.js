export async function load() {
    const squadRes = await fetch(`https://fdnd.directus.app/items/squad/23?fields=*`);
    const squadData = await squadRes.json();

    return { squad: squadData.data };
}
