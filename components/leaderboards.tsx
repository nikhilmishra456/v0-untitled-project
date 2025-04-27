"use client"

import { useState } from "react"
import Image from "next/image"
import { Trophy } from "lucide-react"

// Sample data for team rankings
const teamRankings = {
  test: [
    { rank: 1, name: "India", logo: "/placeholder.svg?height=30&width=30", points: 124, rating: 121 },
    { rank: 2, name: "Australia", logo: "/placeholder.svg?height=30&width=30", points: 118, rating: 116 },
    { rank: 3, name: "England", logo: "/placeholder.svg?height=30&width=30", points: 111, rating: 109 },
    { rank: 4, name: "New Zealand", logo: "/placeholder.svg?height=30&width=30", points: 104, rating: 102 },
    { rank: 5, name: "South Africa", logo: "/placeholder.svg?height=30&width=30", points: 98, rating: 96 },
  ],
  odi: [
    { rank: 1, name: "Australia", logo: "/placeholder.svg?height=30&width=30", points: 128, rating: 125 },
    { rank: 2, name: "India", logo: "/placeholder.svg?height=30&width=30", points: 121, rating: 119 },
    { rank: 3, name: "South Africa", logo: "/placeholder.svg?height=30&width=30", points: 115, rating: 113 },
    { rank: 4, name: "England", logo: "/placeholder.svg?height=30&width=30", points: 109, rating: 107 },
    { rank: 5, name: "New Zealand", logo: "/placeholder.svg?height=30&width=30", points: 102, rating: 100 },
  ],
  t20: [
    { rank: 1, name: "England", logo: "/placeholder.svg?height=30&width=30", points: 126, rating: 123 },
    { rank: 2, name: "India", logo: "/placeholder.svg?height=30&width=30", points: 120, rating: 118 },
    { rank: 3, name: "Pakistan", logo: "/placeholder.svg?height=30&width=30", points: 114, rating: 112 },
    { rank: 4, name: "Australia", logo: "/placeholder.svg?height=30&width=30", points: 108, rating: 106 },
    { rank: 5, name: "South Africa", logo: "/placeholder.svg?height=30&width=30", points: 101, rating: 99 },
  ],
}

// Sample data for player rankings
const playerRankings = {
  batsmen: [
    {
      rank: 1,
      name: "Joe Root",
      country: "England",
      countryLogo: "/placeholder.svg?height=30&width=30",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 891,
    },
    {
      rank: 2,
      name: "Virat Kohli",
      country: "India",
      countryLogo: "/placeholder.svg?height=30&width=30",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 886,
    },
    {
      rank: 3,
      name: "Steve Smith",
      country: "Australia",
      countryLogo: "/placeholder.svg?height=30&width=30",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 881,
    },
    {
      rank: 4,
      name: "Kane Williamson",
      country: "New Zealand",
      countryLogo: "/placeholder.svg?height=30&width=30",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 879,
    },
    {
      rank: 5,
      name: "Babar Azam",
      country: "Pakistan",
      countryLogo: "/placeholder.svg?height=30&width=30",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 862,
    },
  ],
  bowlers: [
    {
      rank: 1,
      name: "Pat Cummins",
      country: "Australia",
      countryLogo: "/placeholder.svg?height=30&width=30",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 901,
    },
    {
      rank: 2,
      name: "Jasprit Bumrah",
      country: "India",
      countryLogo: "/placeholder.svg?height=30&width=30",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 894,
    },
    {
      rank: 3,
      name: "Kagiso Rabada",
      country: "South Africa",
      countryLogo: "/placeholder.svg?height=30&width=30",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 885,
    },
    {
      rank: 4,
      name: "James Anderson",
      country: "England",
      countryLogo: "/placeholder.svg?height=30&width=30",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 876,
    },
    {
      rank: 5,
      name: "Shaheen Afridi",
      country: "Pakistan",
      countryLogo: "/placeholder.svg?height=30&width=30",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 865,
    },
  ],
  allrounders: [
    {
      rank: 1,
      name: "Ravindra Jadeja",
      country: "India",
      countryLogo: "/placeholder.svg?height=30&width=30",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 452,
    },
    {
      rank: 2,
      name: "Ben Stokes",
      country: "England",
      countryLogo: "/placeholder.svg?height=30&width=30",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 446,
    },
    {
      rank: 3,
      name: "Shakib Al Hasan",
      country: "Bangladesh",
      countryLogo: "/placeholder.svg?height=30&width=30",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 438,
    },
    {
      rank: 4,
      name: "Jason Holder",
      country: "West Indies",
      countryLogo: "/placeholder.svg?height=30&width=30",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 425,
    },
    {
      rank: 5,
      name: "Mitchell Starc",
      country: "Australia",
      countryLogo: "/placeholder.svg?height=30&width=30",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 412,
    },
  ],
}

export default function Leaderboards() {
  const [activeTab, setActiveTab] = useState("teams")
  const [teamFormat, setTeamFormat] = useState("test")
  const [playerType, setPlayerType] = useState("batsmen")

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("teams")}
          className={`flex-1 px-4 py-3 text-center font-medium ${
            activeTab === "teams" ? "border-b-2 border-green-600 text-green-600" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Team Rankings
        </button>
        <button
          onClick={() => setActiveTab("players")}
          className={`flex-1 px-4 py-3 text-center font-medium ${
            activeTab === "players" ? "border-b-2 border-green-600 text-green-600" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Player Rankings
        </button>
      </div>

      {activeTab === "teams" && (
        <div>
          <div className="flex border-b border-gray-200 bg-gray-50">
            <button
              onClick={() => setTeamFormat("test")}
              className={`px-4 py-2 text-sm font-medium ${
                teamFormat === "test"
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Test
            </button>
            <button
              onClick={() => setTeamFormat("odi")}
              className={`px-4 py-2 text-sm font-medium ${
                teamFormat === "odi"
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              ODI
            </button>
            <button
              onClick={() => setTeamFormat("t20")}
              className={`px-4 py-2 text-sm font-medium ${
                teamFormat === "t20"
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              T20
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <th className="px-6 py-3">Rank</th>
                  <th className="px-6 py-3">Team</th>
                  <th className="px-6 py-3 text-right">Points</th>
                  <th className="px-6 py-3 text-right">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {teamRankings[teamFormat as keyof typeof teamRankings].map((team) => (
                  <tr key={team.rank} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        {team.rank === 1 && <Trophy className="mr-1 h-4 w-4 text-yellow-500" />}
                        <span className="font-medium">{team.rank}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        <div className="mr-2 h-8 w-8 flex-shrink-0">
                          <Image
                            src={team.logo || "/placeholder.svg"}
                            alt={team.name}
                            width={30}
                            height={30}
                            className="h-full w-full rounded-full object-contain"
                          />
                        </div>
                        <span className="font-medium">{team.name}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right font-medium">{team.points}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-right font-medium">{team.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "players" && (
        <div>
          <div className="flex border-b border-gray-200 bg-gray-50">
            <button
              onClick={() => setPlayerType("batsmen")}
              className={`px-4 py-2 text-sm font-medium ${
                playerType === "batsmen"
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Batsmen
            </button>
            <button
              onClick={() => setPlayerType("bowlers")}
              className={`px-4 py-2 text-sm font-medium ${
                playerType === "bowlers"
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Bowlers
            </button>
            <button
              onClick={() => setPlayerType("allrounders")}
              className={`px-4 py-2 text-sm font-medium ${
                playerType === "allrounders"
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              All-rounders
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <th className="px-6 py-3">Rank</th>
                  <th className="px-6 py-3">Player</th>
                  <th className="px-6 py-3 text-right">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {playerRankings[playerType as keyof typeof playerRankings].map((player) => (
                  <tr key={player.rank} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        {player.rank === 1 && <Trophy className="mr-1 h-4 w-4 text-yellow-500" />}
                        <span className="font-medium">{player.rank}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        <div className="mr-3 h-10 w-10 flex-shrink-0">
                          <Image
                            src={player.avatar || "/placeholder.svg"}
                            alt={player.name}
                            width={40}
                            height={40}
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{player.name}</div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Image
                              src={player.countryLogo || "/placeholder.svg"}
                              alt={player.country}
                              width={16}
                              height={16}
                              className="mr-1 h-4 w-4 rounded-full"
                            />
                            {player.country}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right font-medium">{player.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
