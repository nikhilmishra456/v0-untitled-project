"use client"

import type React from "react"

import { useState } from "react"
import { SearchIcon, Filter, MapPin, X } from "lucide-react"
import SearchFilters from "@/components/search/search-filters"
import PlayerCard from "@/components/search/player-card"
import TeamCard from "@/components/search/team-card"
import SuggestedPlayers from "@/components/search/suggested-players"
import TrendingSearches from "@/components/search/trending-searches"
import RecentSearches from "@/components/search/recent-searches"

// Sample data types
export type Player = {
  id: string
  name: string
  avatar: string
  country: string
  countryFlag: string
  role: string
  skillLevel: "beginner" | "intermediate" | "advanced" | "professional"
  location: string
  teams?: string[]
  stats?: {
    matches: number
    runs: number
    wickets: number
    average: number
  }
  isVerified?: boolean
  isFavorite?: boolean
}

export type Team = {
  id: string
  name: string
  logo: string
  location: string
  members: number
  wins: number
  losses: number
  draws: number
  skillLevel: "beginner" | "intermediate" | "advanced" | "professional"
  isVerified?: boolean
  isFavorite?: boolean
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState<"players" | "teams">("players")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    role: "",
    skillLevel: "",
    location: "",
    sort: "relevance",
  })
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "Virat Kohli",
    "Mumbai Strikers",
    "Delhi Dragons",
    "spin bowlers",
  ])

  // Sample players data
  const players: Player[] = [
    {
      id: "1",
      name: "Virat Kohli",
      avatar: "/placeholder.svg?height=200&width=200",
      country: "India",
      countryFlag: "/placeholder.svg?height=30&width=30",
      role: "Batsman",
      skillLevel: "professional",
      location: "Delhi, India",
      teams: ["Royal Challengers Bangalore", "India"],
      stats: {
        matches: 350,
        runs: 12000,
        wickets: 4,
        average: 59.3,
      },
      isVerified: true,
      isFavorite: true,
    },
    {
      id: "2",
      name: "Rohit Sharma",
      avatar: "/placeholder.svg?height=200&width=200",
      country: "India",
      countryFlag: "/placeholder.svg?height=30&width=30",
      role: "Batsman",
      skillLevel: "professional",
      location: "Mumbai, India",
      teams: ["Mumbai Indians", "India"],
      stats: {
        matches: 320,
        runs: 10500,
        wickets: 2,
        average: 48.2,
      },
      isVerified: true,
    },
    {
      id: "3",
      name: "Joe Root",
      avatar: "/placeholder.svg?height=200&width=200",
      country: "England",
      countryFlag: "/placeholder.svg?height=30&width=30",
      role: "Batsman",
      skillLevel: "professional",
      location: "Sheffield, England",
      teams: ["England", "Yorkshire"],
      stats: {
        matches: 290,
        runs: 9800,
        wickets: 18,
        average: 50.1,
      },
      isVerified: true,
    },
    {
      id: "4",
      name: "Jasprit Bumrah",
      avatar: "/placeholder.svg?height=200&width=200",
      country: "India",
      countryFlag: "/placeholder.svg?height=30&width=30",
      role: "Bowler",
      skillLevel: "professional",
      location: "Ahmedabad, India",
      teams: ["Mumbai Indians", "India"],
      stats: {
        matches: 180,
        runs: 350,
        wickets: 280,
        average: 22.3,
      },
      isVerified: true,
    },
    {
      id: "5",
      name: "Rahul Sharma",
      avatar: "/placeholder.svg?height=200&width=200",
      country: "India",
      countryFlag: "/placeholder.svg?height=30&width=30",
      role: "All-rounder",
      skillLevel: "intermediate",
      location: "Pune, India",
      teams: ["Pune Strikers"],
      stats: {
        matches: 45,
        runs: 980,
        wickets: 35,
        average: 28.5,
      },
    },
    {
      id: "6",
      name: "Michael Johnson",
      avatar: "/placeholder.svg?height=200&width=200",
      country: "Australia",
      countryFlag: "/placeholder.svg?height=30&width=30",
      role: "Bowler",
      skillLevel: "advanced",
      location: "Sydney, Australia",
      teams: ["Sydney Sixers"],
      stats: {
        matches: 78,
        runs: 320,
        wickets: 112,
        average: 24.8,
      },
    },
  ]

  // Sample teams data
  const teams: Team[] = [
    {
      id: "1",
      name: "Mumbai Strikers",
      logo: "/placeholder.svg?height=200&width=200",
      location: "Mumbai, India",
      members: 15,
      wins: 45,
      losses: 12,
      draws: 8,
      skillLevel: "professional",
      isVerified: true,
      isFavorite: true,
    },
    {
      id: "2",
      name: "Delhi Dragons",
      logo: "/placeholder.svg?height=200&width=200",
      location: "Delhi, India",
      members: 14,
      wins: 38,
      losses: 18,
      draws: 4,
      skillLevel: "professional",
      isVerified: true,
    },
    {
      id: "3",
      name: "Bangalore Blasters",
      logo: "/placeholder.svg?height=200&width=200",
      location: "Bangalore, India",
      members: 16,
      wins: 42,
      losses: 15,
      draws: 3,
      skillLevel: "professional",
    },
    {
      id: "4",
      name: "Chennai Kings",
      logo: "/placeholder.svg?height=200&width=200",
      location: "Chennai, India",
      members: 15,
      wins: 48,
      losses: 10,
      draws: 2,
      skillLevel: "professional",
      isVerified: true,
    },
    {
      id: "5",
      name: "Pune Warriors",
      logo: "/placeholder.svg?height=200&width=200",
      location: "Pune, India",
      members: 13,
      wins: 25,
      losses: 22,
      draws: 3,
      skillLevel: "advanced",
    },
    {
      id: "6",
      name: "Kolkata Knights",
      logo: "/placeholder.svg?height=200&width=200",
      location: "Kolkata, India",
      members: 14,
      wins: 40,
      losses: 15,
      draws: 5,
      skillLevel: "professional",
      isVerified: true,
    },
  ]

  // Filter and search logic
  const filteredPlayers = players.filter((player) => {
    if (searchQuery && !player.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    if (filters.role && player.role !== filters.role) {
      return false
    }
    if (filters.skillLevel && player.skillLevel !== filters.skillLevel) {
      return false
    }
    if (filters.location && !player.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false
    }
    return true
  })

  const filteredTeams = teams.filter((team) => {
    if (searchQuery && !team.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    if (filters.skillLevel && team.skillLevel !== filters.skillLevel) {
      return false
    }
    if (filters.location && !team.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false
    }
    return true
  })

  // Sort logic
  const sortedPlayers = [...filteredPlayers].sort((a, b) => {
    switch (filters.sort) {
      case "name":
        return a.name.localeCompare(b.name)
      case "matches":
        return (b.stats?.matches || 0) - (a.stats?.matches || 0)
      case "runs":
        return (b.stats?.runs || 0) - (a.stats?.runs || 0)
      case "wickets":
        return (b.stats?.wickets || 0) - (a.stats?.wickets || 0)
      default:
        // Default sort by relevance (verified and favorites first)
        if (a.isVerified !== b.isVerified) return a.isVerified ? -1 : 1
        if (a.isFavorite !== b.isFavorite) return a.isFavorite ? -1 : 1
        return 0
    }
  })

  const sortedTeams = [...filteredTeams].sort((a, b) => {
    switch (filters.sort) {
      case "name":
        return a.name.localeCompare(b.name)
      case "members":
        return b.members - a.members
      case "wins":
        return b.wins - a.wins
      default:
        // Default sort by relevance (verified and favorites first)
        if (a.isVerified !== b.isVerified) return a.isVerified ? -1 : 1
        if (a.isFavorite !== b.isFavorite) return a.isFavorite ? -1 : 1
        return 0
    }
  })

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim() && !recentSearches.includes(searchQuery.trim())) {
      setRecentSearches([searchQuery.trim(), ...recentSearches.slice(0, 4)])
    }
  }

  // Clear search
  const clearSearch = () => {
    setSearchQuery("")
  }

  // Remove recent search
  const removeRecentSearch = (search: string) => {
    setRecentSearches(recentSearches.filter((item) => item !== search))
  }

  // Handle filter changes
  const handleFilterChange = (name: string, value: string) => {
    setFilters({ ...filters, [name]: value })
  }

  return (
    <div className="bg-gray-50 pb-16 pt-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Search</h1>
          <p className="text-gray-600">Find players and teams from around the cricket world</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for players, teams, or locations..."
                  className="w-full rounded-l-lg border border-gray-300 py-3 pl-12 pr-4 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="rounded-r-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="mb-6 flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab("players")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "players"
                    ? "border-b-2 border-green-600 text-green-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Players
              </button>
              <button
                onClick={() => setActiveTab("teams")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "teams"
                    ? "border-b-2 border-green-600 text-green-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Teams
              </button>
            </div>

            {/* Filters */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="mr-2 flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </button>
                {filters.role && (
                  <div className="flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                    Role: {filters.role}
                    <button
                      onClick={() => handleFilterChange("role", "")}
                      className="ml-1 text-green-600 hover:text-green-800"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
                {filters.skillLevel && (
                  <div className="ml-2 flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                    Skill: {filters.skillLevel}
                    <button
                      onClick={() => handleFilterChange("skillLevel", "")}
                      className="ml-1 text-green-600 hover:text-green-800"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
                {filters.location && (
                  <div className="ml-2 flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                    <MapPin className="mr-1 h-3 w-3" />
                    {filters.location}
                    <button
                      onClick={() => handleFilterChange("location", "")}
                      className="ml-1 text-green-600 hover:text-green-800"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
              <div>
                <select
                  value={filters.sort}
                  onChange={(e) => handleFilterChange("sort", e.target.value)}
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="relevance">Sort by: Relevance</option>
                  <option value="name">Sort by: Name</option>
                  {activeTab === "players" && (
                    <>
                      <option value="matches">Sort by: Matches</option>
                      <option value="runs">Sort by: Runs</option>
                      <option value="wickets">Sort by: Wickets</option>
                    </>
                  )}
                  {activeTab === "teams" && (
                    <>
                      <option value="members">Sort by: Members</option>
                      <option value="wins">Sort by: Wins</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <SearchFilters filters={filters} onFilterChange={handleFilterChange} activeTab={activeTab} />
            )}

            {/* Search Results */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                {activeTab === "players" ? `Players (${sortedPlayers.length})` : `Teams (${sortedTeams.length})`}
              </h2>

              {activeTab === "players" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {sortedPlayers.length > 0 ? (
                    sortedPlayers.map((player) => <PlayerCard key={player.id} player={player} />)
                  ) : (
                    <div className="col-span-2 rounded-lg border border-gray-200 bg-white p-6 text-center">
                      <p className="text-gray-500">No players found matching your search criteria.</p>
                      <button
                        onClick={() => {
                          setSearchQuery("")
                          setFilters({
                            role: "",
                            skillLevel: "",
                            location: "",
                            sort: "relevance",
                          })
                        }}
                        className="mt-2 text-sm font-medium text-green-600 hover:text-green-700"
                      >
                        Clear all filters
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "teams" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {sortedTeams.length > 0 ? (
                    sortedTeams.map((team) => <TeamCard key={team.id} team={team} />)
                  ) : (
                    <div className="col-span-2 rounded-lg border border-gray-200 bg-white p-6 text-center">
                      <p className="text-gray-500">No teams found matching your search criteria.</p>
                      <button
                        onClick={() => {
                          setSearchQuery("")
                          setFilters({
                            role: "",
                            skillLevel: "",
                            location: "",
                            sort: "relevance",
                          })
                        }}
                        className="mt-2 text-sm font-medium text-green-600 hover:text-green-700"
                      >
                        Clear all filters
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Pagination */}
              {(activeTab === "players" && sortedPlayers.length > 0) ||
              (activeTab === "teams" && sortedTeams.length > 0) ? (
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
              ) : null}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Suggested Players */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-bold text-gray-900">Suggested Players</h2>
              </div>
              <div className="p-6">
                <SuggestedPlayers />
              </div>
            </div>

            {/* Recent Searches */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900">Recent Searches</h2>
                  {recentSearches.length > 0 && (
                    <button
                      onClick={() => setRecentSearches([])}
                      className="text-xs font-medium text-gray-500 hover:text-gray-700"
                    >
                      Clear all
                    </button>
                  )}
                </div>
              </div>
              <div className="p-6">
                <RecentSearches searches={recentSearches} onRemove={removeRecentSearch} onSelect={setSearchQuery} />
              </div>
            </div>

            {/* Trending Searches */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-bold text-gray-900">Trending Searches</h2>
              </div>
              <div className="p-6">
                <TrendingSearches onSelect={setSearchQuery} />
              </div>
            </div>

            {/* Find Players Near You */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-bold text-gray-900">Find Players Near You</h2>
              </div>
              <div className="p-6">
                <div className="mb-4 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-gray-600">Discover cricket players and teams in your area</p>
                </div>
                <button className="w-full rounded-md bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700">
                  Enable Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
