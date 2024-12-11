import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { BottomNav } from "@/components/bottom-nav"
import { DesktopSidebar } from "@/components/desktop-sidebar"

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
          <div className="lg:w-64 lg:flex-shrink-0 lg:bg-[#5B3DF5]">
            <DesktopSidebar />
          </div>
          <div className="flex-1">
            {children}
          </div>
        </div>
        <BottomNav />
      </body>
    </html>
  )
}

