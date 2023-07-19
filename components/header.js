/* Desde Next.js 13, con el uso de app en lugar de pages, todos los componentes se cargan en el
servidor, por lo que si se quieren cargar en el cliente, debe especificarse desde dónde usando
'use client'. En este caso next/navigation solo funciona para rutas en el cliente, así que
se tiene que especificar que este será un componente del lado del cliente para que
funcione */
'use client'

import Image from 'next/image'
import Link from 'next/link'
/* next/router se convirtió en next/navigation
El hook useRouter contiene funciones para navegar entre páginas, pero no contiene información
sobre la página actual. Para conocer la ubicación actual y usarla para agregar la clase de
página activa, debe usarse el hook usePathname
*/
import { usePathname } from 'next/navigation'
import Logo from '@/public/img/logo.svg'
import Carrito from '@/public/img/carrito.png'

import styles from './header.module.css' // Los estilos modulares se colocan en la misma carpeta que el componente

function Header() {
  
  const pathname = usePathname();

  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            {/* Ya no hay necesidad de colocar etiquetas <a> dentro de <Link> */}
            <Link
                href="/"
            ><Image
                src={Logo.src}
                width="300"
                height="40"
                alt="Imagen Logotipo"
            />
            </Link>

            <nav className={styles.navegacion}>
                <Link
                    href="/"
                    className={pathname === '/' ? styles.active : ''}
                >Inicio</Link>
                <Link
                    href="/nosotros"
                    className={pathname === '/nosotros' ? styles.active : ''}
                >Nosotros</Link>
                <Link
                    href="/tienda"
                    className={pathname === '/tienda' ? styles.active : ''}
                >Tienda</Link>
                <Link
                    href="/blog"
                    className={pathname === '/blog' ? styles.active : ''}
                >Blog</Link>
                <Link
                    href="/carrito"
                    className={pathname === '/blog' ? styles.active : ''}
                >
                    <Image
                        src={Carrito.src}
                        width="30"
                        height="25"
                        alt="Imagen Carrito"
                    />
                </Link>
            </nav>
        </div>
    </header>
  )
}

export default Header