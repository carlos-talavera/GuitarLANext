import { obtenerPosts } from "@/data/obtenerPosts";
import Post from "@/components/post";
import styles from "@/styles/grid.module.css"

export const metadata = {
    title: 'GuitarLA - Blog',
    description: 'Blog de música, consejos, venta de guitarras y más'
}

async function Blog() {

    const posts = await obtenerPosts();

    return (
        <main className="contenedor">
            <h1 className="heading">Blog</h1>

            <div className={styles.grid}>
                {posts?.map(post => (
                    <Post
                        key={post.id}
                        post={post.attributes}
                    />
                ))}
            </div>
        </main>
    )
}

export default Blog