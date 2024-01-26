/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  const { children } = props
  return (
    <Providers>
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </Providers>
  )
}
