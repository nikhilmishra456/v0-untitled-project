import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, UserPlus, Check } from "lucide-react"
import type { Player } from "@/app/search/page"
import SkillLevelBadge from "@/components/search/skill-level-badge"

interface PlayerCardProps {
  player: Player
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start p-4">
        <div className="relative mr-4">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <Image
              src={player.avatar || "/placeholder.svg"}
              alt={player.name}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          {player.isVerified && (
            <div className="absolute -right-1 -top-1 rounded-full bg-blue-500 p-1 text-white">
              <Check className="h-3 w-3" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <Link href={`/players/${player.id}`} className="hover:underline">
                <h3 className="font-bold text-gray-900">{player.name}</h3>
              </Link>
              <div className="mt-1 flex items-center">
                <Image
                  src={player.countryFlag || "/placeholder.svg"}
                  alt={player.country}
                  width={16}
                  height={16}
                  className="mr-1 h-4 w-4 rounded-full"
                />
                <span className="text-xs text-gray-500">{player.country}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                <Star className="h-5 w-5" fill={player.isFavorite ? "#FFC107" : "none"} />
              </button>
              <button className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                <UserPlus className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">{player.role}</span>
            <SkillLevelBadge level={player.skillLevel} />
            <div className="flex items-center text-xs text-gray-500">
              <MapPin className="mr-1 h-3 w-3" />
              {player.location}
            </div>
          </div>
        </div>
      </div>
      {player.stats && (
        <div className="grid grid-cols-4 divide-x divide-gray-100 border-t border-gray-100 bg-gray-50 text-center">
          <div className="p-2">
            <p className="text-xs text-gray-500">Matches</p>
            <p className="font-semibold text-gray-900">{player.stats.matches}</p>
          </div>
          <div className="p-2">
            <p className="text-xs text-gray-500">Runs</p>
            <p className="font-semibold text-gray-900">{player.stats.runs}</p>
          </div>
          <div className="p-2">
            <p className="text-xs text-gray-500">Wickets</p>
            <p className="font-semibold text-gray-900">{player.stats.wickets}</p>
          </div>
          <div className="p-2">
            <p className="text-xs text-gray-500">Avg</p>
            <p className="font-semibold text-gray-900">{player.stats.average}</p>
          </div>
        </div>
      )}
      <div className="border-t border-gray-100 p-3 text-center">
        <Link href={`/players/${player.id}`} className="text-sm font-medium text-green-600 hover:text-green-700">
          View Profile
        </Link>
      </div>
    </div>
  )
}
