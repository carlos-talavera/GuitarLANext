'use client'

import { useCarritoContext } from '@/context/carritoContext'
import Image from 'next/image';
import styles from './carrito.module.css'

function CarritoComponent() {

    const { carrito, eliminarProducto, actualizarCantidad } = useCarritoContext();

    const calcularTotal = () => {

        return carrito?.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);

    }

    return(
        <main className="contenedor">
            <h1 className="heading">Carrito</h1>

            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h2>Artículos</h2>

                    {carrito.length === 0 ? 'Carrito Vacío' : (
                        carrito.map(producto => (
                            <div
                                key={producto.id}
                                className={styles.producto}
                            >
                                <div>
                                    <Image
                                        width={250}
                                        height={480}
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                    />
                                </div>
                                <div>
                                    <p className={styles.nombre}>{producto.nombre}</p>
                                    <div className={styles.cantidad}>
                                        <p>Cantidad: </p>
                                        <select
                                            className={styles.select}
                                            onChange={e => actualizarCantidad({
                                                id: producto.id,
                                                cantidad: e.target.value
                                            })}
                                            value={producto.cantidad}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                    <p className={styles.precio}>$<span>{producto.precio}</span></p>
                                    <p className={styles.subtotal}>Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>
                                </div>

                                <button
                                    type="button"
                                    className={styles.eliminar}
                                    onClick={() => eliminarProducto(producto.id)}
                                >X</button>
                            </div>
                        ))
                    )}
                </div>

                <aside className={styles.resumen}>
                    <h3>Resumen del Pedido</h3>
                    <p>Total a pagar: ${calcularTotal()}</p>
                </aside>
            </div>
        </main>
    )

}

export default CarritoComponent