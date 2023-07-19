import Image from "next/image"
import imagenNosotros from '@/public/img/nosotros.jpg'
import styles from './nosotros.module.css'

export const metadata = {
  title: 'GuitarLA - Nosotros',
  description: 'Sobre nosotros, venta de guitarras y más'
}

function Nosotros() {
  return (
    <main className="contenedor">
      <h1 className="heading">Nosotros</h1>

      <div className={styles.contenido}>
        <Image
          src={imagenNosotros.src}
          alt="Imagen Nosotros"
          width="1000"
          height="800"
        />

        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate expedita debitis tempore porro rem sunt excepturi quidem ut iure, quia est molestias ea consequatur officia similique. Fugit laboriosam quae ea.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, fugiat odit? Repudiandae exercitationem tempore iure sit commodi sequi laborum amet ea assumenda id eligendi quod magnam minus, pariatur atque alias?</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros