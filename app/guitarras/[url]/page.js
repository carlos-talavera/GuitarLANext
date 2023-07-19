import Link from "next/link";
import { obtenerGuitarra } from "@/data/obtenerGuitarras";
import styles from '@/components/guitarra.module.css';
import GuitarraByUrl from "@/components/guitarraByUrl";

// Metadatos dinámicos
export function generateMetadata({params}) {

    const nombreGuitarra = params.url.replace(params.url.charAt(0), params.url.charAt(0).toUpperCase());

    return {
        title: `Guitarra ${nombreGuitarra}`,
        description: `Guitarra ${nombreGuitarra}, venta de guitarras, guitarla, tienda de guitarras`
    }

}

async function Producto({params: { url }}) {

    const guitarra = await obtenerGuitarra(url);

    return (
        <>
        {guitarra.length === 0 ? (
            <>
                <p className="error">La guitarra no existe</p>
                <Link
                    href="/"
                    className="error-enlace"
                >Ir a Inicio</Link>
            </>
        ) : (
            <GuitarraByUrl
                guitarra={guitarra}
                styles={styles}
            />
        )}
        </>
    )
}

export default Producto