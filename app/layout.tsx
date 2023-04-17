import { SiteHeader } from './components/site-header'
import './globals.css'
import './prism.css'

export const metadata = {
  title: 'August Bright',
  description: 'The brightst place on the web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overscroll-none min-h-screen flex flex-col">
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
