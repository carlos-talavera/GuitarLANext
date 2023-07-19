import Guitarra from "@/components/guitarra"
import { obtenerGuitarras } from "@/data/obtenerGuitarras"
import styles from '@/styles/grid.module.css'

export const metadata = {
    title: 'GuitarLA - Tienda Virtual',
    description: 'Tienda virtual, venta de guitarras, instrumentos, GuitarLA'
}

async function Tienda() {
    
    const guitarras = await obtenerGuitarras();

    return (
        <main className="contenedor">
            <h1 className="heading">Nuestra Colección</h1>

            <div className={styles.grid}>
                {guitarras?.map(guitarra => (
                    <Guitarra
                        key={guitarra.id}
                        guitarra={guitarra.attributes}
                    />
                ))}
            </div>
        </main>
    )
}

export default Tienda