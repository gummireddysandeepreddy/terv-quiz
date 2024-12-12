import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { ChevronRight, Users } from 'lucide-react'
import Link from "next/link"
import appData from "@/data/app-data.json"

export default function Home() {
  const featuredQuiz = appData.quizzes[0]
  const liveQuizzes = appData.quizzes.slice(1, 4)

  return (
    <main className="p-4 pb-20 lg:p-8 lg:pb-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-white/80 text-sm">👋 GOOD MORNING</p>
          <h1 className="text-white text-xl font-semibold">Madelyn Dias</h1>
        </div>
        <Avatar className="w-10 h-10">
          <AvatarImage src="/avatar/profile.svg" alt="Madelyn" />
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <Card className="bg-pink-200 p-4 rounded-xl mb-6 lg:mb-0">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{featuredQuiz.title}</h3>
              <p className="text-sm text-gray-600">{featuredQuiz.duration}</p>
            </div>
            <Avatar className="w-20 h-20">
              <AvatarImage src="/percentage.png" alt="%" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            {/* <ChevronRight className="w-5 h-5" /> */}
          </div>
        </Card>

        <section className="bg-white/20 rounded-xl p-4 mb-6 lg:mb-0">
          <h2 className="text-white font-medium mb-2">FEATURED</h2>
          <p className="text-white/80 text-sm mb-4">Take part in challenges with friends or other players</p>
          <Link href="/discover" ><button className="bg-white text-[#6949FF] px-4 py-2 rounded-full flex items-center gap-2">
            <Users className="w-4 h-4" />
            Find Friends
          </button></Link>
        </section>
      </div>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white font-medium">Live Quizzes</h2>
          <Link href="/discover" className="text-white/80 text-sm">See all</Link>
        </div>
        <div className="space-y-3">
          {liveQuizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              title={quiz.title}
              subtitle={`${quiz.category} • ${quiz.questionCount} Questions`}
              icon={quiz.icon}
            />
          ))}
        </div>
      </section>
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

