/* Esta página funciona como el Document que se usaba anteriormente
Ya no se utiliza la etiqueta <Head> y los datos que vayan ahí se colocan usando
el objeto metadata o los imports para los archivos CSS
*/
import './globals.css'
import 'normalize.css/normalize.css' // Instalar normalize.css como módulo de npm
import { Outfit } from 'next/font/google' // Cargar fuentes de Google usando las optimizaciones de Next

import Header from '@/components/header'
import { CarritoProvider } from '@/context/carritoContext'
import Footer from '@/components/footer'

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'GuitarLA',
  description: 'GuitarLA - Venta de guitarras y blog de música',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        <CarritoProvider>
          {children}
        </CarritoProvider>
        <Footer />
      </body>
    </html>
  )
}