import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

// Sample player data
const players = [
  {
    id: "virat-kohli",
    name: "Virat Kohli",
    country: "India",
    countryFlag: "/placeholder.svg?height=30&width=30",
    role: "Batsman",
    avatar: "/placeholder.svg?height=200&width=200",
    testRanking: 2,
    odiRanking: 1,
    t20Ranking: 3,
  },
  {
    id: "joe-root",
    name: "Joe Root",
    country: "England",
    countryFlag: "/placeholder.svg?height=30&width=30",
    role: "Batsman",
    avatar: "/placeholder.svg?height=200&width=200",
    testRanking: 1,
    odiRanking: 5,
    t20Ranking: 15,
  },
  {
    id: "steve-smith",
    name: "Steve Smith",
    country: "Australia",
    countryFlag: "/placeholder.svg?height=30&width=30",
    role: "Batsman",
    avatar: "/placeholder.svg?height=200&width=200",
    testRanking: 3,
    odiRanking: 6,
    t20Ranking: 20,
  },
  {
    id: "kane-williamson",
    name: "Kane Williamson",
    country: "New Zealand",
    countryFlag: "/placeholder.svg?height=30&width=30",
    role: "Batsman",
    avatar: "/placeholder.svg?height=200&width=200",
    testRanking: 4,
    odiRanking: 7,
    t20Ranking: 8,
  },
  {
    id: "babar-azam",
    name: "Babar Azam",
    country: "Pakistan",
    countryFlag: "/placeholder.svg?height=30&width=30",
    role: "Batsman",
    avatar: "/placeholder.svg?height=200&width=200",
    testRanking: 5,
    odiRanking: 2,
    t20Ranking: 1,
  },
  {
    id: "pat-cummins",
    name: "Pat Cummins",
    country: "Australia",
    countryFlag: "/placeholder.svg?height=30&width=30",
    role: "Bowler",
    avatar: "/placeholder.svg?height=200&width=200",
    testRanking: 1,
    odiRanking: 3,
    t20Ranking: 7,
  },
  {
    id: "jasprit-bumrah",
    name: "Jasprit Bumrah",
    country: "India",
    countryFlag: "/placeholder.svg?height=30&width=30",
    role: "Bowler",
    avatar: "/placeholder.svg?height=200&width=200",
    testRanking: 2,
    odiRanking: 1,
    t20Ranking: 2,
  },
  {
    id: "ben-stokes",
    name: "Ben Stokes",
    country: "England",
    countryFlag: "/placeholder.svg?height=30&width=30",
    role: "All-rounder",
    avatar: "/placeholder.svg?height=200&width=200",
    testRanking: 2,
    odiRanking: 4,
    t20Ranking: 10,
  },
]

export default function PlayersPage() {
  return (
    <div className="bg-gray-50 pb-16 pt-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">Cricket Players</h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Explore detailed profiles and statistics of cricket players from around the world
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 rounded-lg bg-white p-4 shadow-md md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search players..."
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select className="rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500">
                <option value="">All Countries</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="england">England</option>
                <option value="pakistan">Pakistan</option>
                <option value="new-zealand">New Zealand</option>
              </select>
              <select className="rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500">
                <option value="">All Roles</option>
                <option value="batsman">Batsman</option>
                <option value="bowler">Bowler</option>
                <option value="all-rounder">All-rounder</option>
                <option value="wicket-keeper">Wicket-keeper</option>
              </select>
              <select className="rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500">
                <option value="">Sort By</option>
                <option value="ranking">ICC Ranking</option>
                <option value="name">Name</option>
                <option value="country">Country</option>
              </select>
            </div>
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {players.map((player) => (
            <Link
              key={player.id}
              href={`/players/${player.id}`}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={player.avatar || "/placeholder.svg"}
                  alt={player.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center">
                    <Image
                      src={player.countryFlag || "/placeholder.svg"}
                      alt={player.country}
                      width={24}
                      height={24}
                      className="mr-2 h-6 w-6 rounded-full"
                    />
                    <span className="text-sm font-medium text-white">{player.country}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-green-600">{player.name}</h3>
                <div className="mb-3 flex items-center">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    {player.role}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-md bg-gray-50 p-2">
                    <p className="text-xs text-gray-500">Test</p>
                    <p className="font-semibold text-gray-900">#{player.testRanking}</p>
                  </div>
                  <div className="rounded-md bg-gray-50 p-2">
                    <p className="text-xs text-gray-500">ODI</p>
                    <p className="font-semibold text-gray-900">#{player.odiRanking}</p>
                  </div>
                  <div className="rounded-md bg-gray-50 p-2">
                    <p className="text-xs text-gray-500">T20</p>
                    <p className="font-semibold text-gray-900">#{player.t20Ranking}</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100 bg-gray-50 p-3 text-center text-sm font-medium text-green-600 transition-colors group-hover:text-green-700">
                View Full Profile
              </div>
            </Link>
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
            <span className="px-2 text-gray-500">...</span>
            <button className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
              10
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
