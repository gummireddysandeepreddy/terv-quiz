"use client"

import { Home, Search, Trophy, User } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t lg:hidden">
      <div className="flex justify-around p-3">
        <Link href="/" className={`${pathname === "/" ? "text-[#6949FF]" : "text-gray-400"}`}>
          <Home className="w-6 h-6" />
        </Link>
        <Link href="/discover" className={`${pathname === "/discover" ? "text-[#6949FF]" : "text-gray-400"}`}>
          <Search className="w-6 h-6" />
        </Link>
        <Link href="/leaderboard" className={`${pathname === "/leaderboard" ? "text-[#6949FF]" : "text-gray-400"}`}>
          <Trophy className="w-6 h-6" />
        </Link>
        <Link href="/profile" className={`${pathname === "/profile" ? "text-[#6949FF]" : "text-gray-400"}`}>
          <User className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  )
}

