import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import PlayerStats from "@/components/player-stats"
import PerformanceCharts from "@/components/performance-charts"
import RecentForm from "@/components/recent-form"
import CareerMilestones from "@/components/career-milestones"
import RelatedPlayers from "@/components/related-players"

// This would typically come from an API or database
async function getPlayerData(id: string) {
  // Mock data for demonstration
  const players = {
    "virat-kohli": {
      id: "virat-kohli",
      name: "Virat Kohli",
      fullName: "Virat Kohli",
      country: "India",
      countryCode: "IND",
      dateOfBirth: "November 5, 1988",
      age: 36,
      role: "Batsman",
      battingStyle: "Right-handed",
      bowlingStyle: "Right-arm medium",
      avatar: "/placeholder.svg?height=300&width=300",
      countryFlag: "/placeholder.svg?height=30&width=30",
      iccRanking: {
        test: 2,
        odi: 1,
        t20: 3,
      },
      bio: "Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. He is widely regarded as one of the greatest batsmen in the history of cricket and the best of the current generation. Kohli plays for Delhi in domestic cricket and Royal Challengers Bangalore in the Indian Premier League as a right-handed batsman. Kohli holds numerous records in all formats of the game and is currently the highest run-scorer in T20I and IPL history.",
      careerSpan: "2008 - Present",
      teams: ["India", "Delhi", "Royal Challengers Bangalore"],
      stats: {
        test: {
          matches: 111,
          innings: 187,
          runs: 8676,
          highestScore: "254*",
          average: 49.29,
          strikeRate: 55.64,
          hundreds: 29,
          fifties: 29,
          fours: 966,
          sixes: 24,
        },
        odi: {
          matches: 284,
          innings: 275,
          runs: 13848,
          highestScore: "183",
          average: 58.69,
          strikeRate: 93.62,
          hundreds: 50,
          fifties: 72,
          fours: 1294,
          sixes: 156,
        },
        t20: {
          matches: 115,
          innings: 107,
          runs: 4008,
          highestScore: "122*",
          average: 52.73,
          strikeRate: 137.96,
          hundreds: 1,
          fifties: 37,
          fours: 356,
          sixes: 118,
        },
      },
      recentForm: [
        { match: "IND vs AUS", format: "Test", score: "121", date: "Mar 15, 2025" },
        { match: "IND vs ENG", format: "ODI", score: "89", date: "Mar 10, 2025" },
        { match: "IND vs SA", format: "T20", score: "76", date: "Mar 5, 2025" },
        { match: "IND vs NZ", format: "Test", score: "42", date: "Feb 25, 2025" },
        { match: "IND vs SL", format: "ODI", score: "113", date: "Feb 18, 2025" },
      ],
      milestones: [
        { achievement: "Fastest to 10,000 ODI runs", date: "October 24, 2018" },
        { achievement: "Most centuries in ODI run chases", date: "Ongoing" },
        { achievement: "First player to score 3,000 runs in T20Is", date: "September 2, 2021" },
        { achievement: "Most Player of the Match awards in T20Is", date: "Ongoing" },
        { achievement: "Fastest to 20,000 international runs", date: "July 14, 2019" },
      ],
      yearlyPerformance: {
        test: [
          { year: 2020, average: 19.33, runs: 116 },
          { year: 2021, average: 28.21, runs: 536 },
          { year: 2022, average: 26.5, runs: 265 },
          { year: 2023, average: 55.0, runs: 550 },
          { year: 2024, average: 47.66, runs: 430 },
        ],
        odi: [
          { year: 2020, average: 47.88, runs: 431 },
          { year: 2021, average: 57.25, runs: 689 },
          { year: 2022, average: 72.57, runs: 1054 },
          { year: 2023, average: 67.33, runs: 808 },
          { year: 2024, average: 63.5, runs: 635 },
        ],
        t20: [
          { year: 2020, average: 48.05, runs: 385 },
          { year: 2021, average: 74.33, runs: 446 },
          { year: 2022, average: 44.15, runs: 781 },
          { year: 2023, average: 55.75, runs: 557 },
          { year: 2024, average: 51.33, runs: 410 },
        ],
      },
    },
    "joe-root": {
      id: "joe-root",
      name: "Joe Root",
      fullName: "Joseph Edward Root",
      country: "England",
      countryCode: "ENG",
      dateOfBirth: "December 30, 1990",
      age: 34,
      role: "Batsman",
      battingStyle: "Right-handed",
      bowlingStyle: "Right-arm off break",
      avatar: "/placeholder.svg?height=300&width=300",
      countryFlag: "/placeholder.svg?height=30&width=30",
      iccRanking: {
        test: 1,
        odi: 5,
        t20: 15,
      },
      bio: "Joseph Edward Root is an English international cricketer who is the current captain of the England Test team. He also represents Yorkshire in domestic cricket. Root is often regarded as one of the 'Big Four' batsmen of his era, along with Steve Smith, Kane Williamson, and Virat Kohli. He was part of the England team that won the 2019 Cricket World Cup and was England's leading run-scorer in the tournament.",
      careerSpan: "2012 - Present",
      teams: ["England", "Yorkshire", "Trent Rockets"],
      stats: {
        test: {
          matches: 133,
          innings: 246,
          runs: 11416,
          highestScore: "254",
          average: 50.29,
          strikeRate: 56.14,
          hundreds: 30,
          fifties: 58,
          fours: 1234,
          sixes: 34,
        },
        odi: {
          matches: 158,
          innings: 151,
          runs: 6207,
          highestScore: "133*",
          average: 50.05,
          strikeRate: 86.84,
          hundreds: 16,
          fifties: 36,
          fours: 558,
          sixes: 41,
        },
        t20: {
          matches: 32,
          innings: 30,
          runs: 893,
          highestScore: "90*",
          average: 35.72,
          strikeRate: 126.48,
          hundreds: 0,
          fifties: 5,
          fours: 89,
          sixes: 19,
        },
      },
      recentForm: [
        { match: "ENG vs IND", format: "Test", score: "153", date: "Mar 18, 2025" },
        { match: "ENG vs AUS", format: "ODI", score: "72", date: "Mar 12, 2025" },
        { match: "ENG vs WI", format: "Test", score: "87", date: "Mar 2, 2025" },
        { match: "ENG vs SA", format: "Test", score: "176", date: "Feb 22, 2025" },
        { match: "ENG vs NZ", format: "ODI", score: "45", date: "Feb 15, 2025" },
      ],
      milestones: [
        { achievement: "Fastest England batsman to 10,000 Test runs", date: "June 5, 2022" },
        { achievement: "Most Test centuries by an England captain", date: "Ongoing" },
        { achievement: "England's highest run-scorer in all formats", date: "Ongoing" },
        { achievement: "Most Test runs in a calendar year by an England batsman", date: "December 31, 2021" },
        { achievement: "Longest streak of consecutive Tests by an England player", date: "Ongoing" },
      ],
      yearlyPerformance: {
        test: [
          { year: 2020, average: 42.18, runs: 464 },
          { year: 2021, average: 61.0, runs: 1708 },
          { year: 2022, average: 55.92, runs: 1098 },
          { year: 2023, average: 49.15, runs: 787 },
          { year: 2024, average: 53.33, runs: 640 },
        ],
        odi: [
          { year: 2020, average: 38.8, runs: 194 },
          { year: 2021, average: 42.66, runs: 256 },
          { year: 2022, average: 44.85, runs: 449 },
          { year: 2023, average: 51.37, runs: 565 },
          { year: 2024, average: 48.25, runs: 386 },
        ],
        t20: [
          { year: 2020, average: 0, runs: 0 },
          { year: 2021, average: 0, runs: 0 },
          { year: 2022, average: 0, runs: 0 },
          { year: 2023, average: 0, runs: 0 },
          { year: 2024, average: 0, runs: 0 },
        ],
      },
    },
  }

  return players[id as keyof typeof players] || null
}

export default async function PlayerProfile({ params }: { params: { id: string } }) {
  const player = await getPlayerData(params.id)

  if (!player) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold">Player not found</h1>
        <p className="mb-6">The player you are looking for does not exist or has been removed.</p>
        <Link
          href="/players"
          className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Players
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 pb-16 pt-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/players" className="hover:text-green-600">
              Players
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{player.name}</span>
          </div>
        </div>

        {/* Player Header */}
        <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-md">
          <div className="relative h-40 bg-gradient-to-r from-green-700 to-green-500 sm:h-60">
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="relative -mt-20 px-6 pb-6 sm:-mt-24 sm:flex sm:items-end sm:space-x-6 sm:pb-8">
            <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg sm:h-44 sm:w-44">
              <Image
                src={player.avatar || "/placeholder.svg"}
                alt={player.name}
                width={176}
                height={176}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 flex-1 sm:mt-0">
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{player.name}</h1>
                  <div className="mt-1 flex items-center">
                    <Image
                      src={player.countryFlag || "/placeholder.svg"}
                      alt={player.country}
                      width={24}
                      height={24}
                      className="mr-2 h-6 w-6 rounded-full"
                    />
                    <span className="text-lg text-gray-700">{player.country}</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 sm:mt-0">
                  <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                    {player.role}
                  </div>
                  <div className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                    {player.battingStyle}
                  </div>
                  {player.bowlingStyle && (
                    <div className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                      {player.bowlingStyle}
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-lg bg-gray-50 p-3 text-center">
                  <p className="text-xs font-medium uppercase text-gray-500">Age</p>
                  <p className="text-lg font-semibold text-gray-900">{player.age}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3 text-center">
                  <p className="text-xs font-medium uppercase text-gray-500">Career</p>
                  <p className="text-lg font-semibold text-gray-900">{player.careerSpan}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3 text-center">
                  <p className="text-xs font-medium uppercase text-gray-500">Test Rank</p>
                  <p className="text-lg font-semibold text-gray-900">#{player.iccRanking.test}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3 text-center">
                  <p className="text-xs font-medium uppercase text-gray-500">ODI Rank</p>
                  <p className="text-lg font-semibold text-gray-900">#{player.iccRanking.odi}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Stats */}
          <div className="lg:col-span-2">
            {/* Career Statistics */}
            <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-md">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-xl font-bold text-gray-900">Career Statistics</h2>
              </div>
              <div className="p-6">
                <PlayerStats stats={player.stats} />
              </div>
            </div>

            {/* Performance Charts */}
            <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-md">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-xl font-bold text-gray-900">Performance Trends</h2>
              </div>
              <div className="p-6">
                <PerformanceCharts yearlyPerformance={player.yearlyPerformance} />
              </div>
            </div>

            {/* Recent Form */}
            <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-md">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-xl font-bold text-gray-900">Recent Form</h2>
              </div>
              <div className="p-6">
                <RecentForm recentForm={player.recentForm} />
              </div>
            </div>
          </div>

          {/* Right Column - Bio and Milestones */}
          <div>
            {/* Biography */}
            <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-md">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-xl font-bold text-gray-900">Biography</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">{player.bio}</p>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Personal Information</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <span className="font-medium">Full Name:</span> {player.fullName}
                      </li>
                      <li>
                        <span className="font-medium">Born:</span> {player.dateOfBirth}
                      </li>
                      <li>
                        <span className="font-medium">Teams:</span> {player.teams.join(", ")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Milestones */}
            <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-md">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-xl font-bold text-gray-900">Career Milestones</h2>
              </div>
              <div className="p-6">
                <CareerMilestones milestones={player.milestones} />
              </div>
            </div>

            {/* Related Players */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-xl font-bold text-gray-900">Similar Players</h2>
              </div>
              <div className="p-6">
                <RelatedPlayers currentPlayerId={player.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
