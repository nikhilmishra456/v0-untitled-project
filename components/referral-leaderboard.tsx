import Image from "next/image"
import { Trophy, Medal } from "lucide-react"
import { Coins } from "lucide-react"

// Sample leaderboard data
const leaderboardData = [
  {
    rank: 1,
    name: "Rajesh Kumar",
    avatar: "/placeholder.svg?height=40&width=40",
    referrals: 24,
    coins: 2400,
  },
  {
    rank: 2,
    name: "Ananya Singh",
    avatar: "/placeholder.svg?height=40&width=40",
    referrals: 19,
    coins: 1900,
  },
  {
    rank: 3,
    name: "Vikram Patel",
    avatar: "/placeholder.svg?height=40&width=40",
    referrals: 16,
    coins: 1600,
  },
  {
    rank: 4,
    name: "Priya Sharma",
    avatar: "/placeholder.svg?height=40&width=40",
    referrals: 12,
    coins: 1200,
  },
  {
    rank: 5,
    name: "Arjun Reddy",
    avatar: "/placeholder.svg?height=40&width=40",
    referrals: 10,
    coins: 1000,
  },
]

export default function ReferralLeaderboard() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Medal className="h-5 w-5 text-amber-700" />
      default:
        return <span className="font-bold text-gray-500">{rank}</span>
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Rank
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                User
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Referrals
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Coins Earned
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {leaderboardData.map((user) => (
              <tr key={user.rank} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex h-8 w-8 items-center justify-center">{getRankIcon(user.rank)}</div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <Image
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium text-gray-900">
                  {user.referrals}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right">
                  <div className="flex items-center justify-end">
                    <Coins className="mr-1 h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-900">{user.coins}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
