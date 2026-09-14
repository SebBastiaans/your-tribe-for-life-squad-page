export async function load(){
    
    const res = await fetch("https://fdnd.directus.app/items/person?fields=*&filter[squads][squad_id][cohort][_eq]=2627");
    const data = await res.json();

    const squadRes = await fetch(`https://fdnd.directus.app/items/squad/23?fields=*`);
    const squadData = await squadRes.json();

    return { persons: data.data, squad: squadData.data };
}
