export const metadata = {
  title: 'PESA YANGU',
  description: 'A financial management App',
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
