import { ArrowLeft, Calendar, MapPin, Clock, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample challenge history data
const challengeHistory = [
  {
    id: "1",
    opponent: {
      name: "Mumbai Strikers",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "April 15, 2025",
    time: "10:00 AM",
    venue: "Central Cricket Ground, Mumbai",
    format: "T20",
    status: "completed", // completed, cancelled, rejected
    result: "won", // won, lost, draw
    score: "Your Team: 186/5, Mumbai Strikers: 183/8",
    sentByYou: false,
  },
  {
    id: "2",
    opponent: {
      name: "Rohit Sharma",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "April 5, 2025",
    time: "2:00 PM",
    venue: "City Sports Club, Delhi",
    format: "ODI",
    status: "cancelled",
    result: null,
    score: null,
    sentByYou: true,
  },
  {
    id: "3",
    opponent: {
      name: "Chennai Kings",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "March 25, 2025",
    time: "11:30 AM",
    venue: "National Stadium, Chennai",
    format: "T10",
    status: "rejected",
    result: null,
    score: null,
    sentByYou: true,
  },
  {
    id: "4",
    opponent: {
      name: "Delhi Dragons",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "March 18, 2025",
    time: "9:00 AM",
    venue: "Local Cricket Ground, Delhi",
    format: "T20",
    status: "completed",
    result: "lost",
    score: "Your Team: 145/8, Delhi Dragons: 148/4",
    sentByYou: false,
  },
  {
    id: "5",
    opponent: {
      name: "Bangalore Blasters",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "March 10, 2025",
    time: "3:30 PM",
    venue: "City Stadium, Bangalore",
    format: "ODI",
    status: "completed",
    result: "draw",
    score: "Your Team: 275/9, Bangalore Blasters: 275/7",
    sentByYou: true,
  },
]

export default function ChallengeHistoryPage() {
  return (
    <div className="bg-gray-50 pb-16 pt-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/challenge"
            className="mb-4 inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Challenges
          </Link>
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Challenge History</h1>
          <p className="text-gray-600">View your past challenges and their outcomes</p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </button>
            <select className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500">
              <option value="all">All Statuses</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
              <option value="rejected">Rejected</option>
            </select>
            <select className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500">
              <option value="all">All Results</option>
              <option value="won">Won</option>
              <option value="lost">Lost</option>
              <option value="draw">Draw</option>
            </select>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search challenges..."
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Challenge History List */}
        <div className="space-y-4">
          {challengeHistory.map((challenge) => (
            <div
              key={challenge.id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-col p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={challenge.opponent.avatar || "/placeholder.svg"}
                      alt={challenge.opponent.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-medium text-gray-900">{challenge.opponent.name}</h4>
                      <span
                        className={`ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          challenge.status === "completed"
                            ? challenge.result === "won"
                              ? "bg-green-100 text-green-800"
                              : challenge.result === "lost"
                                ? "bg-red-100 text-red-800"
                                : "bg-blue-100 text-blue-800"
                            : challenge.status === "cancelled"
                              ? "bg-gray-100 text-gray-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {challenge.status === "completed"
                          ? challenge.result?.charAt(0).toUpperCase() + challenge.result?.slice(1)
                          : challenge.status.charAt(0).toUpperCase() + challenge.status.slice(1)}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {challenge.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {challenge.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {challenge.venue}
                      </div>
                    </div>
                    {challenge.score && <p className="mt-1 text-sm font-medium text-gray-700">{challenge.score}</p>}
                  </div>
                </div>
                <div className="mt-4 flex items-center sm:mt-0">
                  <span className="mr-4 text-sm text-gray-500">{challenge.sentByYou ? "Sent by you" : "Received"}</span>
                  {challenge.status === "completed" && (
                    <Link
                      href={`/matches/${challenge.id}`}
                      className="rounded-md bg-green-600 px-3 py-1 text-sm font-medium text-white hover:bg-green-700"
                    >
                      Match Details
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center">
          <nav className="flex items-center space-x-2">
            <button className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700">
              1
            </button>
            <button className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
              2
            </button>
            <button className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
              3
            </button>
            <button className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
