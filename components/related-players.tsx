import Image from "next/image"
import Link from "next/link"

// Sample related players data
const relatedPlayers = {
  "virat-kohli": [
    {
      id: "joe-root",
      name: "Joe Root",
      country: "England",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "steve-smith",
      name: "Steve Smith",
      country: "Australia",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "kane-williamson",
      name: "Kane Williamson",
      country: "New Zealand",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ],
  "joe-root": [
    {
      id: "virat-kohli",
      name: "Virat Kohli",
      country: "India",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "steve-smith",
      name: "Steve Smith",
      country: "Australia",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "kane-williamson",
      name: "Kane Williamson",
      country: "New Zealand",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ],
  default: [
    {
      id: "virat-kohli",
      name: "Virat Kohli",
      country: "India",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "joe-root",
      name: "Joe Root",
      country: "England",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "steve-smith",
      name: "Steve Smith",
      country: "Australia",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ],
}

interface RelatedPlayersProps {
  currentPlayerId: string
}

export default function RelatedPlayers({ currentPlayerId }: RelatedPlayersProps) {
  // Get related players based on current player ID, or use default if not found
  const players = relatedPlayers[currentPlayerId as keyof typeof relatedPlayers] || relatedPlayers.default

  return (
    <div className="space-y-4">
      {players.map((player) => (
        <Link
          key={player.id}
          href={`/players/${player.id}`}
          className="flex items-center space-x-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
        >
          <Image
            src={player.avatar || "/placeholder.svg"}
            alt={player.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-medium text-gray-900">{player.name}</h4>
            <p className="text-sm text-gray-500">{player.country}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
