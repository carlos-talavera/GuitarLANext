import { obtenerGuitarras } from '@/data/obtenerGuitarras'
import { obtenerPosts } from '@/data/obtenerPosts'
import { obtenerCurso } from '@/data/obtenerCurso'
import Guitarra from "@/components/guitarra"
import Post from "@/components/post"
import Curso from "@/components/curso"
import styles from '@/styles/grid.module.css'

export const metadata = {
  title: 'GuitarLA - Inicio',
  description: 'Venta de guitarras, instrumentos, GuitarLA, blog de música',
  openGraph: {
    title: 'GuitarLA - Inicio',
    description: 'Venta de guitarras, instrumentos, GuitarLA, blog de música',
    type: 'website',
    url: 'https://guitar-la-next-4n63.vercel.app',
    siteName: 'GuitarLA',
    images: [
      {
        url: 'https://charlie2code.com/wp-content/uploads/2023/07/GuitarLA_Next.png',
        width: 1310,
        height: 650
      }
    ]
  }
}

async function Home() {

  const [guitarras, posts, curso] = await Promise.all([obtenerGuitarras(), obtenerPosts(), obtenerCurso()]);
  return (
    <>
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

      <Curso
        curso={curso.attributes}
      />

      <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
            {posts?.map(post => (
              <Post
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
      </section>
    </>
  )
}

export default Home