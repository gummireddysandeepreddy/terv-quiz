'use client'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import Link from "next/link"
import appData from "@/data/app-data.json"
import { useState } from "react"
import { AvatarWithFlag } from "@/components/avatar-with-flag"

export default function Discover() {
  const quizzes = appData.quizzes.slice(0, 3)
  const friends = appData.friends.slice(0, 3)
  const [activeTab, setActiveTab] = useState('Top');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredQuizzes = activeTab === 'Quiz' ? appData.quizzes : quizzes;
  const filteredFriends = activeTab === 'Friends' ? appData.friends : friends;
  const categories = [...new Set(appData.quizzes.map((quiz) => ({ category: quiz.category, icon: quiz.icon })))];
  return (
    <main className="p-4 pb-20 lg:p-8 lg:pb-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <ChevronLeft className="w-6 h-6 text-white" />
        </Link>
        <h1 className="text-white text-xl font-semibold">Discover</h1>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          className="bg-white/20 border-none text-white pl-10 placeholder:text-white/60"
          placeholder="Hi!"
        />
      </div>

      <div className="flex gap-4 mb-6 text-white/80">
        <button
          className={`pb-2 ${activeTab === 'Top' ? 'border-b-2 border-white text-white' : ''}`}
          onClick={() => handleTabClick('Top')}
        >
          Top
        </button>
        <button
          className={`pb-2 ${activeTab === 'Quiz' ? 'border-b-2 border-white text-white' : ''}`}
          onClick={() => handleTabClick('Quiz')}
        >
          Quiz
        </button>
        <button
          className={`pb-2 ${activeTab === 'Categories' ? 'border-b-2 border-white text-white' : ''}`}
          onClick={() => handleTabClick('Categories')}
        >
          Categories
        </button>
        <button
          className={`pb-2 ${activeTab === 'Friends' ? 'border-b-2 border-white text-white' : ''}`}
          onClick={() => handleTabClick('Friends')}
        >
          Friends
        </button>
      </div>

      <div className={`${activeTab === 'Top' ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''}`}>
        {activeTab === 'Quiz' && (
          <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white font-medium">Quiz</h2>
        </div>
        <div className="space-y-3">
          {filteredQuizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              title={quiz.title}
              subtitle={`${quiz.category} • ${quiz.questionCount} Questions`}
              icon={quiz.icon}
            />
          ))}
        </div>
          </section>
        )}

        {activeTab === 'Friends' && (
          <section>
        <h2 className="text-white font-medium mb-4">Friends</h2>
        <div className="space-y-4">
          {filteredFriends.map((friend) => (
            <FriendCard
              key={friend.id}
              name={friend.name}
              points={`${friend.points} points`}
              image={friend.image}
              flag={friend.flag}
            />
          ))}
        </div>
          </section>
        )}

        {activeTab === 'Categories' && (
          <section>
        <h2 className="text-white font-medium mb-4 space-y-4">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="text-white">
            <CategoryCard
              icon={category.icon}
              category={category.category}
            />
            </div>
          ))}
        </div>
          </section>
        )}

        {activeTab === 'Top' && (
          <>
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white font-medium">Quiz</h2>
            <Link href="#" className="text-white/80 text-sm" onClick={() => handleTabClick('Quiz')}>See all</Link>
          </div>
          <div className="space-y-3">
            {filteredQuizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            title={quiz.title}
            subtitle={`${quiz.category} • ${quiz.questionCount} Questions`}
            icon={quiz.icon}
          />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-white font-medium mb-4">Friends</h2>
          <div className="space-y-4">
            {filteredFriends.map((friend) => (
              <FriendCard
                key={friend.id}
                name={friend.name}
                points={`${friend.points} points`}
                image={friend.image}
                flag={friend.flag}
              />
            ))}
          </div>
        </section>
          </>
        )}
      </div>
    </main>
  )
}

function QuizCard({ title, subtitle, icon }: { title: string; subtitle: string; icon: string }) {
  return (
    <Card className="bg-white p-4 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </Card>
  )
}

function CategoryCard({ icon, category }: { icon: string; category: string }) {
  return (
    <Card className="bg-white p-4 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h3 className="font-medium">{category}</h3>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </Card>
  )
}

function FriendCard({ name, points, image, flag }: { name: string; points: string; image: string; flag: string }) {
  return (
    <div className="flex items-center gap-3">
      <AvatarWithFlag
        src={image}
        alt={name}
        fallback={name[0]}
        flag={flag}
      />
      <div>
        <h3 className="text-white font-medium">{name}</h3>
        <p className="text-white/60 text-sm">{points}</p>
      </div>
    </div>
  )
}

