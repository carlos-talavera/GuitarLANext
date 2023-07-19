import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "@/utils/helpers";
import styles from '@/styles/blog.module.css';

function Post({ post }) {

    const { contenido, imagen, titulo, url, publishedAt } = post;

    return (
        <article className={styles.guitarra}>
            <Image
                src={imagen.data.attributes.formats.medium.url}
                width={600}
                height={400}
                alt={`Imagen Post ${titulo}`}
            />

            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link
                    href={`/blog/${url}`}
                    className={styles.enlace}
                >Leer Post</Link>
            </div>
        </article>
    )
}

export default Post