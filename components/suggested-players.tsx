import Image from "next/image"
import Link from "next/link"
import { UserPlus } from "lucide-react"

// Sample suggested players data
const suggestedPlayers = [
  {
    id: "1",
    name: "MS Dhoni",
    role: "Wicket-keeper",
    avatar: "/placeholder.svg?height=60&width=60",
    mutualConnections: 12,
  },
  {
    id: "2",
    name: "Jasprit Bumrah",
    role: "Bowler",
    avatar: "/placeholder.svg?height=60&width=60",
    mutualConnections: 8,
  },
  {
    id: "3",
    name: "KL Rahul",
    role: "Batsman",
    avatar: "/placeholder.svg?height=60&width=60",
    mutualConnections: 5,
  },
]

export default function SuggestedPlayers() {
  return (
    <div className="space-y-4">
      {suggestedPlayers.map((player) => (
        <div key={player.id} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src={player.avatar || "/placeholder.svg"}
              alt={player.name}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <Link href={`/players/${player.id}`} className="font-medium text-gray-900 hover:text-green-600">
                {player.name}
              </Link>
              <p className="text-sm text-gray-500">{player.role}</p>
              <p className="text-xs text-gray-400">{player.mutualConnections} mutual connections</p>
            </div>
          </div>
          <button className="inline-flex items-center rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200">
            <UserPlus className="h-5 w-5" />
            <span className="sr-only">Connect</span>
          </button>
        </div>
      ))}
      <Link
        href="/players/suggested"
        className="mt-2 block text-center text-sm font-medium text-green-600 hover:text-green-700"
      >
        View more suggested players
      </Link>
    </div>
  )
}
