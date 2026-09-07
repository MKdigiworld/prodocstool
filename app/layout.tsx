import type { Metadata } from 'next'

export const metadata: Metadata = {
      title: 'ProDocsTool - PDF Tools & Invoice Creator',
      description: 'Modern PDF manipulation tools with invoice generator',
}

export default function RootLayout({
      children,
}: {
      children: React.ReactNode
}) {
      return (
              <html lang="en">
                    <body>{children}</body>body>
              </html>html>
            )
}</html>
