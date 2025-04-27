import Link from "next/link"
import { Bell, Settings } from "lucide-react"
import NotificationItem from "@/components/notification-item"
import SuggestedPlayers from "@/components/suggested-players"
import CreateTeamCard from "@/components/create-team-card"
import NotificationFilters from "@/components/notification-filters"

// Sample notification data
const notifications = [
  {
    id: "1",
    type: "team_invitation",
    title: "Team Invitation",
    message: "Mumbai Strikers has invited you to join their team",
    sender: {
      name: "Mumbai Strikers",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    time: "2 hours ago",
    isRead: false,
    actions: ["accept", "decline"],
  },
  {
    id: "2",
    type: "friend_request",
    title: "Friend Request",
    message: "Rohit Sharma wants to connect with you",
    sender: {
      name: "Rohit Sharma",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    time: "5 hours ago",
    isRead: false,
    actions: ["accept", "decline"],
  },
  {
    id: "3",
    type: "challenge",
    title: "Team Challenge",
    message: "Delhi Dragons has challenged your team to a match on May 15, 2025",
    sender: {
      name: "Delhi Dragons",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    time: "1 day ago",
    isRead: true,
    actions: ["accept", "decline"],
  },
  {
    id: "4",
    type: "match_update",
    title: "Match Update",
    message: "Your upcoming match with Chennai Kings has been rescheduled to June 5, 2025",
    sender: {
      name: "CricketZone",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    time: "2 days ago",
    isRead: true,
    actions: [],
  },
  {
    id: "5",
    type: "system",
    title: "Account Verification",
    message: "Your profile has been verified successfully. You now have access to all features.",
    sender: {
      name: "CricketZone",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    time: "3 days ago",
    isRead: true,
    actions: [],
  },
  {
    id: "6",
    type: "friend_request",
    title: "Friend Request",
    message: "Virat Kohli wants to connect with you",
    sender: {
      name: "Virat Kohli",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    time: "4 days ago",
    isRead: true,
    actions: ["accept", "decline"],
  },
  {
    id: "7",
    type: "challenge",
    title: "Team Challenge",
    message: "Bangalore Blasters has challenged your team to a match on May 20, 2025",
    sender: {
      name: "Bangalore Blasters",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    time: "5 days ago",
    isRead: true,
    actions: ["accept", "decline"],
  },
  {
    id: "8",
    type: "team_invitation",
    title: "Team Invitation",
    message: "Kolkata Knights has invited you to join their team",
    sender: {
      name: "Kolkata Knights",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    time: "1 week ago",
    isRead: true,
    actions: ["accept", "decline"],
  },
]

export default function NotificationsPage() {
  const unreadCount = notifications.filter((notification) => !notification.isRead).length

  return (
    <div className="bg-gray-50 pb-16 pt-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600">Stay updated with your cricket network and activities</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Notifications Column */}
          <div className="lg:col-span-2">
            {/* Notification Header */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <Bell className="mr-2 h-5 w-5 text-green-600" />
                <span className="font-medium text-gray-900">
                  All Notifications <span className="ml-1 text-green-600">({unreadCount} new)</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <NotificationFilters />
                <button className="rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-200">
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Notification Settings</span>
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="space-y-4">
              {notifications.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
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
                  Next
                </button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Suggested Players */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-bold text-gray-900">Suggested Players</h2>
              </div>
              <div className="p-6">
                <SuggestedPlayers />
              </div>
            </div>

            {/* Create Team Card */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-bold text-gray-900">Create Your Team</h2>
              </div>
              <div className="p-6">
                <CreateTeamCard />
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-bold text-gray-900">Notification Settings</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Friend Requests</h3>
                      <p className="text-sm text-gray-500">Get notified when someone sends you a friend request</p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Team Invitations</h3>
                      <p className="text-sm text-gray-500">Get notified when a team invites you to join</p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Team Challenges</h3>
                      <p className="text-sm text-gray-500">Get notified when your team receives a challenge</p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Match Updates</h3>
                      <p className="text-sm text-gray-500">Get notified about changes to your scheduled matches</p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300"></div>
                    </label>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/settings/notifications"
                    className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
                  >
                    View all notification settings
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
