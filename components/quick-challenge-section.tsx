import Link from "next/link"
import Image from "next/image"
import { Users } from "lucide-react"

// Sample data for friends and teams
const quickChallengeData = {
  friends: [
    {
      id: "1",
      name: "Virat Kohli",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActive: "2 hours ago",
    },
    {
      id: "2",
      name: "Rohit Sharma",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActive: "1 day ago",
    },
    {
      id: "3",
      name: "MS Dhoni",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActive: "3 days ago",
    },
  ],
  teams: [
    {
      id: "1",
      name: "Royal Strikers",
      avatar: "/placeholder.svg?height=40&width=40",
      members: 11,
    },
    {
      id: "2",
      name: "Thunder Kings",
      avatar: "/placeholder.svg?height=40&width=40",
      members: 10,
    },
  ],
}

export default function QuickChallengeSection() {
  return (
    <div className="space-y-6">
      {/* Friends Section */}
      <div>
        <h3 className="mb-3 text-sm font-medium uppercase text-gray-500">Your Friends</h3>
        <div className="space-y-3">
          {quickChallengeData.friends.map((friend) => (
            <div key={friend.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Image
                    src={friend.avatar || "/placeholder.svg"}
                    alt={friend.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{friend.name}</h4>
                  <p className="text-xs text-gray-500">Active {friend.lastActive}</p>
                </div>
              </div>
              <button className="rounded-md bg-green-600 px-3 py-1 text-xs font-medium text-white hover:bg-green-700">
                Challenge
              </button>
            </div>
          ))}
        </div>
        <div className="mt-3 text-center">
          <Link href="/friends" className="text-xs font-medium text-green-600 hover:text-green-700">
            View all friends
          </Link>
        </div>
      </div>

      {/* Teams Section */}
      <div>
        <h3 className="mb-3 text-sm font-medium uppercase text-gray-500">Your Teams</h3>
        <div className="space-y-3">
          {quickChallengeData.teams.map((team) => (
            <div key={team.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src={team.avatar || "/placeholder.svg"}
                  alt={team.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{team.name}</h4>
                  <p className="text-xs text-gray-500">
                    <Users className="mr-1 inline h-3 w-3" /> {team.members} members
                  </p>
                </div>
              </div>
              <button className="rounded-md bg-green-600 px-3 py-1 text-xs font-medium text-white hover:bg-green-700">
                Use Team
              </button>
            </div>
          ))}
        </div>
        <div className="mt-3 text-center">
          <Link href="/teams" className="text-xs font-medium text-green-600 hover:text-green-700">
            Manage teams
          </Link>
        </div>
      </div>
    </div>
  )
}
