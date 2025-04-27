import Image from "next/image"
import Link from "next/link"
import { Shield } from "lucide-react"

// Sample teams data
const teams = [
  {
    id: "1",
    name: "Mumbai Strikers",
    logo: "/placeholder.svg?height=60&width=60",
    members: 11,
    location: "Mumbai, India",
  },
  {
    id: "2",
    name: "Delhi Dragons",
    logo: "/placeholder.svg?height=60&width=60",
    members: 12,
    location: "Delhi, India",
  },
  {
    id: "3",
    name: "Chennai Kings",
    logo: "/placeholder.svg?height=60&width=60",
    members: 11,
    location: "Chennai, India",
  },
]

export default function ChallengeTeamCard() {
  return (
    <div>
      <div className="mb-4 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
          <Shield className="h-6 w-6 text-orange-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Challenge a Team</h3>
        <p className="text-sm text-gray-600">Select a team to challenge for a match</p>
      </div>

      <div className="space-y-3">
        {teams.map((team) => (
          <div
            key={team.id}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <Image
                src={team.logo || "/placeholder.svg"}
                alt={team.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium text-gray-900">{team.name}</h4>
                <p className="text-xs text-gray-500">
                  {team.members} members • {team.location}
                </p>
              </div>
            </div>
            <button className="rounded-md bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 hover:bg-orange-200">
              Challenge
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <Link href="/teams/challenge" className="text-sm font-medium text-green-600 hover:text-green-700">
          View all teams
        </Link>
      </div>
    </div>
  )
}
