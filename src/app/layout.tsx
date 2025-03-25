import { Nunito_Sans } from 'next/font/google';
import './globals.scss';

const NunitoSans = Nunito_Sans({
  subsets: ['cyrillic', 'latin']
})

export const metadata = {
  title: 'Proxy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={NunitoSans.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
