const url = process.env.API_URL;

export async function obtenerPosts() {

    const respuesta = await fetch(`${url}/posts?populate=imagen`, { cache: 'no-store' })
    const { data } = await respuesta.json()
    return data;

}

export async function obtenerPost(nombre) {

    const respuesta = await fetch(`${url}/posts?filters[url]=${nombre}&populate=imagen`)
    const { data } = await respuesta.json();
    return data;

}