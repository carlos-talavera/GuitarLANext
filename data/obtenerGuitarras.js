const url = process.env.API_URL;

export async function obtenerGuitarras() {

    const respuesta = await fetch(`${url}/guitarras/?populate=imagen`, { cache: "no-store" });
    const { data } = await respuesta.json();
    return data;

}

export async function obtenerGuitarra(nombre) {

    const respuesta = await fetch(`${url}/guitarras?populate=imagen&filters[url]=${nombre}`, { cache: "force-cache" });
    const { data } = await respuesta.json();
    return data;

}