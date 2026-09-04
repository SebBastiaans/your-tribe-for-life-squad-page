export async function load() {
    const res = await fetch("https://fdnd.directus.app/items/person/?filter[squads][squad_id][name]=2G&sort=name");
    const data = await res.json();
    console.log(data);


    return { persons: data.data };
}