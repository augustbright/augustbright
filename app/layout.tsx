import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
