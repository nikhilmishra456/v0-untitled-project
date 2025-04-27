import Image from "next/image"
import Link from "next/link"

// Sample match data
const recentMatches = [
  {
    id: 1,
    type: "T20",
    status: "Completed",
    team1: {
      name: "India",
      logo: "/placeholder.svg?height=40&width=40",
      score: "186/5",
      overs: "20.0",
    },
    team2: {
      name: "Australia",
      logo: "/placeholder.svg?height=40&width=40",
      score: "183/8",
      overs: "20.0",
    },
    result: "India won by 3 runs",
    venue: "Melbourne Cricket Ground",
    date: "Apr 22, 2025",
  },
  {
    id: 2,
    type: "ODI",
    status: "Completed",
    team1: {
      name: "England",
      logo: "/placeholder.svg?height=40&width=40",
      score: "312/7",
      overs: "50.0",
    },
    team2: {
      name: "South Africa",
      logo: "/placeholder.svg?height=40&width=40",
      score: "289/10",
      overs: "48.2",
    },
    result: "England won by 23 runs",
    venue: "Lord's Cricket Ground",
    date: "Apr 20, 2025",
  },
  {
    id: 3,
    type: "Test",
    status: "Day 3",
    team1: {
      name: "New Zealand",
      logo: "/placeholder.svg?height=40&width=40",
      score: "342/10 & 156/3",
      overs: "90.0 & 45.0",
    },
    team2: {
      name: "Pakistan",
      logo: "/placeholder.svg?height=40&width=40",
      score: "287/10",
      overs: "85.3",
    },
    result: "New Zealand lead by 211 runs",
    venue: "Basin Reserve, Wellington",
    date: "Apr 18-22, 2025",
  },
]

export default function RecentMatches() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {recentMatches.map((match) => (
        <Link
          key={match.id}
          href="#"
          className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
        >
          <div className="border-b border-gray-100 bg-gray-50 px-4 py-2">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                {match.type}
              </span>
              <span className="text-xs text-gray-500">{match.date}</span>
            </div>
          </div>
          <div className="p-4">
            <div className="mb-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 h-12 w-12 overflow-hidden rounded-full border border-gray-200 bg-white p-1">
                  <Image
                    src={match.team1.logo || "/placeholder.svg"}
                    alt={match.team1.name}
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="font-medium">{match.team1.name}</span>
                <span className="text-sm font-semibold">{match.team1.score}</span>
                <span className="text-xs text-gray-500">{match.team1.overs} overs</span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-800">
                VS
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 h-12 w-12 overflow-hidden rounded-full border border-gray-200 bg-white p-1">
                  <Image
                    src={match.team2.logo || "/placeholder.svg"}
                    alt={match.team2.name}
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="font-medium">{match.team2.name}</span>
                <span className="text-sm font-semibold">{match.team2.score}</span>
                <span className="text-xs text-gray-500">{match.team2.overs} overs</span>
              </div>
            </div>
            <div className="mt-3 text-center">
              <div className="mb-1 text-sm font-medium text-gray-900">{match.result}</div>
              <div className="text-xs text-gray-500">{match.venue}</div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-center text-sm font-medium text-green-600 transition-colors group-hover:text-green-700">
            View Match Details
          </div>
        </Link>
      ))}
    </div>
  )
}
