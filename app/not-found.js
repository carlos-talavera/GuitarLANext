import Link from "next/link"
import RootLayout from "./layout"

function Pagina404() {
  return (
    <RootLayout>
      <p className="error">Página No Encontrada</p>

      <Link
        href="/"
        className="error-enlace"
      >Ir a Inicio</Link>
    </RootLayout>
  )
}

export default Pagina404