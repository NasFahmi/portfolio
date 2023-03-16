import './globals.css'

export const metadata = {
  title: 'Nasrul Fahmi',
  description: 'Portfolio Nasrul Fahmi',
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
