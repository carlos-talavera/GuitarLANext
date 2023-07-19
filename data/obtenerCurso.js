const url = process.env.API_URL;

export async function obtenerCurso() {

    const respuesta = await fetch(`${url}/curso/?populate=imagen`, { cache: "no-store" });
    const { data } = await respuesta.json();
    return data;

}