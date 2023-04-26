import { Inter } from 'next/font/google'

//? Componentes
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'First - Next App',
  description: 'First App with NextJS, im so surprised'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
