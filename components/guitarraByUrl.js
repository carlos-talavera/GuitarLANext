'use client'

import { useState } from "react";
import Image from "next/image";
import { useCarritoContext } from "@/context/carritoContext";
import { useRouter } from "next/navigation";

function GuitarraByUrl({guitarra, styles}) {

  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;
  const [cantidad, setCantidad] = useState(0);
  const { agregarCarrito } = useCarritoContext();
  const router = useRouter();

  const handleSubmit = e => {

    e.preventDefault();

    if (cantidad < 1) {

        alert("Cantidad no válida");
        return;

    }

    // Construir un objeto

    const guitarraSeleccionada = {
        id: guitarra[0].id,
        imagen: imagen.data.attributes.url,
        nombre,
        precio,
        cantidad
    }

    // Agregar guitarra seleccionada al carrito
    agregarCarrito(guitarraSeleccionada);

    // Redirigir al carrito
    router.push('/carrito');

  }

  return (
      <div className={styles.guitarra}>
          <Image
              src={imagen.data.attributes.formats.medium.url}
              width={600}
              height={400}
              alt={`Imagen guitarra ${nombre}`}
          />

          <div className={styles.contenido}>
              <h3>{nombre}</h3>
              <p className={styles.descripcion}>{descripcion}</p>
              <p className={styles.precio}>${precio}</p>

              <form
                className={styles.formulario}
                onSubmit={handleSubmit}
              >
                  <label
                      htmlFor="cantidad"
                  >Cantidad: </label>
                  <select
                      id="cantidad"
                      onChange={e => setCantidad(Number(e.target.value))}
                  >
                      <option value="0">--Seleccione--</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                  </select>

                  <input
                      type="submit"
                      value="Agregar al Carrito"
                  />
              </form>
          </div>
      </div>
  )
}

export default GuitarraByUrl