import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { BottomNav } from "@/components/bottom-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Interactive quiz application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-7xl min-h-screen bg-[#6949FF] lg:flex">
          <div className="flex-1">
            {children}
          </div>
        </div>
        <BottomNav />
      </body>
    </html>
  )
}

