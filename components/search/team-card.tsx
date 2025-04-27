import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, Users, Check } from "lucide-react"
import type { Team } from "@/app/search/page"
import SkillLevelBadge from "@/components/search/skill-level-badge"

interface TeamCardProps {
  team: Team
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start p-4">
        <div className="relative mr-4">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <Image
              src={team.logo || "/placeholder.svg"}
              alt={team.name}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          {team.isVerified && (
            <div className="absolute -right-1 -top-1 rounded-full bg-blue-500 p-1 text-white">
              <Check className="h-3 w-3" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <Link href={`/teams/${team.id}`} className="hover:underline">
                <h3 className="font-bold text-gray-900">{team.name}</h3>
              </Link>
              <div className="mt-1 flex items-center text-xs text-gray-500">
                <MapPin className="mr-1 h-3 w-3" />
                {team.location}
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                <Star className="h-5 w-5" fill={team.isFavorite ? "#FFC107" : "none"} />
              </button>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <div className="flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
              <Users className="mr-1 h-3 w-3" />
              {team.members} members
            </div>
            <SkillLevelBadge level={team.skillLevel} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 divide-x divide-gray-100 border-t border-gray-100 bg-gray-50 text-center">
        <div className="p-2">
          <p className="text-xs text-gray-500">Wins</p>
          <p className="font-semibold text-gray-900">{team.wins}</p>
        </div>
        <div className="p-2">
          <p className="text-xs text-gray-500">Losses</p>
          <p className="font-semibold text-gray-900">{team.losses}</p>
        </div>
        <div className="p-2">
          <p className="text-xs text-gray-500">Draws</p>
          <p className="font-semibold text-gray-900">{team.draws}</p>
        </div>
      </div>
      <div className="border-t border-gray-100 p-3 text-center">
        <Link href={`/teams/${team.id}`} className="text-sm font-medium text-green-600 hover:text-green-700">
          View Team
        </Link>
      </div>
    </div>
  )
}
