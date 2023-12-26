import './globals.css'
import type { Metadata } from 'next'
import StyledComponentsRegistry from "@/lib/AntdRegistry"

export const metadata: Metadata = {
  title: 'next-antd-template',
  description: 'This template is for making my fullstack web projects using my preferred stack: Typescript + Next.js + Ant Design + TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
