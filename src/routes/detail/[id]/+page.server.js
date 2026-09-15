import DOMPurify from 'isomorphic-dompurify';

export async function load({ params }) {
    const personRes = await fetch(`https://fdnd.directus.app/items/person/${params.id}?fields=*`);
    const personData = await personRes.json();
    const person = personData.data;

    if (person.bio) {
        person.bio = DOMPurify.sanitize(person.bio, {
            FORBID_ATTR: ['style', 'class', 'id'],
            FORBID_TAGS: ['style', 'script']
        });
    }

    return {
        person
    };
}