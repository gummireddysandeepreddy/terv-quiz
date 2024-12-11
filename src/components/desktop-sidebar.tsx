"use client"

import { Home, Search, Trophy, User } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

export function DesktopSidebar() {
  const pathname = usePathname()

  return (
    <nav className="hidden lg:flex flex-col h-screen p-4 fixed">
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold">Quiz App</h1>
      </div>
      <div className="space-y-4">
        <Link href="/" className={`flex items-center space-x-3 ${pathname === "/" ? "text-white" : "text-white/60"}`}>
          <Home className="w-6 h-6" />
          <span>Home</span>
        </Link>
        <Link href="/discover" className={`flex items-center space-x-3 ${pathname === "/discover" ? "text-white" : "text-white/60"}`}>
          <Search className="w-6 h-6" />
          <span>Discover</span>
        </Link>
        <Link href="/leaderboard" className={`flex items-center space-x-3 ${pathname === "/leaderboard" ? "text-white" : "text-white/60"}`}>
          <Trophy className="w-6 h-6" />
          <span>Leaderboard</span>
        </Link>
        <Link href="/profile" className={`flex items-center space-x-3 ${pathname === "/profile" ? "text-white" : "text-white/60"}`}>
          <User className="w-6 h-6" />
          <span>Profile</span>
        </Link>
      </div>
    </nav>
  )
}
