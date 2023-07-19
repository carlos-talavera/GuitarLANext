import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "@/utils/helpers";
import { obtenerPost } from "@/data/obtenerPosts";
import styles from '@/styles/blog.module.css';

// Metadatos dinámicos
export function generateMetadata({ params }) {

    const nombrePost = params.url.replace(params.url.charAt(0), params.url.charAt(0).toUpperCase());

    return {
        title: `GuitarLA - ${nombrePost}`,
        description: `${nombrePost}, venta de guitarras, guitarla, tienda de guitarras`
    }

}

async function Post({ params: { url } }) {

    const post = await obtenerPost(url);

    const { contenido = '', imagen = '', titulo = '', publishedAt = '' } = post?.[0]?.attributes ?? [];

    return (
        <>
            {post.length === 0 ? (
                <>
                    <p className="error">El post no existe</p>
                    <Link
                        href="/"
                        className="error-enlace"
                    >Ir a Inicio</Link>
                </>
            ) : (
                <div className={`${styles.post} ${styles['mt-3']}`}>
                    <Image
                        src={imagen?.data?.attributes?.url}
                        width={1800}
                        height={400}
                        alt={`Imagen post ${titulo}`}
                    />

                    <div className={styles.contenido}>
                        <h3>{titulo}</h3>
                        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                        <p>{contenido}</p>
                    </div>
                </div>)}
        </>
    )
}

export default Post