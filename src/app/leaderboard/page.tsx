'use client'
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarWithFlag } from "@/components/avatar-with-flag";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from 'lucide-react';
import Link from "next/link";
import appData from "@/data/app-data.json";

export default function Leaderboard() {
  const [filter, setFilter] = useState("weekly");
  const leaderboardData = appData.leaderboard;

  const getFilteredData = () => {
    if (filter === "allTime") {
      return leaderboardData.map(user => ({
        ...user,
        points: user.points + 500
      }));
    }
    return leaderboardData;
  };

  const filteredData = getFilteredData();

  return (
    <main className="p-4 pb-20 lg:p-8 lg:pb-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <ChevronLeft className="w-6 h-6 text-white" />
        </Link>
        <h1 className="text-white text-xl font-semibold">Leaderboard</h1>
      </div>

      <div className="flex gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-full ${filter === "weekly" ? "bg-white/20 text-white" : "text-white/60"}`}
          onClick={() => setFilter("weekly")}
        >
          Weekly
        </button>
        <button
          className={`px-4 py-2 ${filter === "allTime" ? "bg-white/20 text-white" : "text-white/60"}`}
          onClick={() => setFilter("allTime")}
        >
          All Time
        </button>
      </div>

      <Card className="bg-orange-400 text-white p-4 rounded-xl mb-8">
        <div className="flex items-center gap-2">
          <img src="/four.svg" alt="Trophy" className="w-20 h-20 flex-2" />
          <p>You are doing better than 60% of other players!</p>
        </div>
      </Card>

      <div className="relative pt-16 mb-8 lg:mb-12">
        <div className="flex justify-center items-end gap-4 lg:gap-8">
          <div className="text-center">
            <Avatar className="w-16 h-16 mb-2">
              <AvatarImage src={filteredData[1].image} alt={filteredData[1].name} />
              <AvatarFallback>{filteredData[1].name[0]}</AvatarFallback>
            </Avatar>
            <div className="relative bottom-7 flex justify-end text-right">
              <div className="absolute overflow-hidden w-5 h-5">
              <img src={filteredData[1].flag} alt="" />
              </div>
            </div>
            <span className="flex-1">{filteredData[1].name}</span>
            <div className="bg-white/20 text-white h-20 w-16 rounded-t-lg flex items-center justify-center text-xl">
              2
            </div>
          </div>
            <div className="text-center">
            <div className="relative bottom-6 flex justify-center">
              <img src="/crown.png" alt="Flag" className="absolute w-12 h-12" style={{ zIndex: 1 }} />
            </div>
            <Avatar className="w-20 h-20 mb-2">
              <AvatarImage src={filteredData[0].image} alt={filteredData[0].name} />
              <AvatarFallback>{filteredData[0].name[0]}</AvatarFallback>
            </Avatar>
            <div className="relative bottom-7 flex justify-end text-right">
              <div className="absolute overflow-hidden w-6 h-6">
              <img src={filteredData[0].flag} alt="" />
              </div>
            </div>
            <span className="flex-1">{filteredData[0].name}</span>
            <div className="bg-white/20 text-white h-28 w-20 rounded-t-lg flex items-center justify-center text-2xl">
              1
            </div>
            </div>
          <div className="text-center">
            <Avatar className="w-16 h-16 mb-2">
              <AvatarImage src={filteredData[2].image} alt={filteredData[2].name} />
              <AvatarFallback>{filteredData[2].name[0]}</AvatarFallback>
            </Avatar>
            <div className="relative bottom-7 flex justify-end text-right">
              <div className="absolute overflow-hidden w-5 h-5">
              <img src={filteredData[2].flag} alt="" />
              </div>
            </div>
            <span className="flex-1">{filteredData[2].name}</span>
            <div className="bg-white/20 text-white h-16 w-16 rounded-t-lg flex items-center justify-center text-xl">
              3
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 lg:max-w-2xl lg:mx-auto">
        {filteredData.slice(3).map((user) => (
          <div key={user.id} className="flex items-center gap-3 text-black">
            <span className="w-6">{user.rank}</span>
            <AvatarWithFlag
              src={user.image}
              alt={user.name}
              fallback={user.name[0]}
              flag={user.flag}
            />
            <span className="flex-1">{user.name}</span>
            <span>{user.points} points</span>
          </div>
        ))}
      </div>
    </main>
  );
}
