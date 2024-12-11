'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Settings } from 'lucide-react'
import Link from "next/link"
import { useState } from 'react';
import { BarChartComponent } from "@/components/bar-chart"

const TABS = {
  BADGES: 'Badges',
  STATS: 'Stats',
  DETAILS: 'Details',
};
const badges = [
  "/profile/badges/badge1.svg",
  "/profile/badges/badge2.svg",
  "/profile/badges/badge3.svg",
  "/profile/badges/badge4.svg",
  "/profile/badges/badge5.svg",
  "/profile/badges/badge6.svg",
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState(TABS.BADGES);
  return (
    <main className="p-4 pb-20 lg:p-8 lg:pb-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/">
          <ChevronLeft className="w-6 h-6 text-white" />
        </Link>
        <Link href="/settings">
          <Settings className="w-6 h-6 text-white" />
        </Link>
      </div>

      <div className="text-center mb-8">
        <Avatar className="w-20 h-20 mx-auto mb-4">
          <AvatarImage src="/avatar/profile.svg" alt="Madelyn" />
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <div className="relative flex justify-center">
          <img src="/avatar/profile-flag.svg" alt="Flag" className="absolute bottom-0 w-6 h-6" />
        </div>
        <h1 className="text-white text-xl font-semibold">Madelyn Dias</h1>
      </div>

      <div>
        <Card className="bg-white/10 p-4 rounded-xl mb-6">
          <div className="grid grid-cols-3 gap-4 text-center text-white">
            <div>
              <img src="/profile/star.svg" alt="Quiz" className="w-8 h-8 mx-auto mb-2" />
              <p className="text-2xl font-semibold">890</p>
              <p className="text-sm opacity-80">Points</p>
            </div>
            <div>
              <img src="/profile/world.svg" alt="Quiz" className="w-8 h-8 mx-auto mb-2" />
              <p className="text-2xl font-semibold">#1,438</p>
              <p className="text-sm opacity-80">World Rank</p>
            </div>
            <div>
              <img src="/profile/local.svg" alt="Quiz" className="w-8 h-8 mx-auto mb-2" />
              <p className="text-2xl font-semibold">#56</p>
              <p className="text-sm opacity-80">Local Rank</p>
            </div>
          </div>
        </Card>

        <div className="flex justify-center mb-6">
          {Object.values(TABS).map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 mx-2 rounded-full ${activeTab === tab ? 'bg-purple-500 text-white' : 'bg-white/10 text-white'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div>
          {activeTab === TABS.BADGES && (
            <div className="grid grid-cols-3 gap-4">
              {badges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={badge} alt="Badge" className="w-16 h-16" />
                </div>
              ))}
            </div>
          )}

          {activeTab === TABS.STATS && (
            <div>
              <Card className="bg-white/10 p-4 rounded-xl mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-white font-medium">Monthly</h2>
                  <div className="w-12 h-12 rounded-full border-4 border-purple-500 flex items-center justify-center text-white">
                    <span>37</span>
                  </div>
                </div>
                <p className="text-white/80">You have played a total of 24 quizzes this month!</p>
              </Card>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card className="bg-white/10 p-4 rounded-xl">
                  <h3 className="text-white/80 text-sm mb-2">Quiz Created</h3>
                  <p className="text-white text-2xl font-semibold">5</p>
                </Card>
                <Card className="bg-white/10 p-4 rounded-xl">
                  <h3 className="text-white/80 text-sm mb-2">Quiz Won</h3>
                  <p className="text-white text-2xl font-semibold">21</p>
                </Card>
              </div>
              <BarChartComponent />
            </div>
          )}

          {activeTab === TABS.DETAILS && (
            <div>
              <Card className="bg-white/10 p-4 rounded-xl mb-6">
                <h3 className="text-white/80 text-sm mb-2">Name</h3>
                <p className="text-white text-lg font-semibold">Madelyn Dias</p>
              </Card>
              <Card className="bg-white/10 p-4 rounded-xl mb-6">
                <h3 className="text-white/80 text-sm mb-2">Email</h3>
                <p className="text-white text-lg font-semibold">m123@gmail.com</p>
              </Card>
              <Card className="bg-white/10 p-4 rounded-xl mb-6">
                <h3 className="text-white/80 text-sm mb-2">Country</h3>
                <p className="text-white text-lg font-semibold">India</p>
              </Card>
              <Card className="bg-white/10 p-4 rounded-xl mb-6">
                <h3 className="text-white/80 text-sm mb-2">City</h3>
                <p className="text-white text-lg font-semibold">Chennai</p>
              </Card>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
