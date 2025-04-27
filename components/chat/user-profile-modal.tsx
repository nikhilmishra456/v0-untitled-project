"use client"

import { X, MessageCircle, Flag, Shield } from "lucide-react"
import Image from "next/image"
import type { User } from "@/app/chat/page"

interface UserProfileModalProps {
  user: User
  onClose: () => void
  onReport: () => void
}

export default function UserProfileModal({ user, onClose, onReport }: UserProfileModalProps) {
  // Sample user stats
  const userStats = {
    matches: 42,
    runs: 1250,
    wickets: 15,
    teams: ["Mumbai Strikers", "City Challengers"],
    joinedDate: "January 2023",
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
        <div className="relative">
          {/* Header/Cover Image */}
          <div className="h-32 bg-gradient-to-r from-green-700 to-green-500 rounded-t-lg"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white p-1 text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Profile Image */}
          <div className="absolute left-1/2 top-16 -translate-x-1/2 transform">
            <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white">
              <Image
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="mt-16 p-6 text-center">
          <h3 className="mb-1 text-xl font-bold text-gray-900">{user.name}</h3>
          <div className="mb-4 flex items-center justify-center">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                user.status === "online"
                  ? "bg-green-100 text-green-800"
                  : user.status === "away"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
              }`}
            >
              {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
              {user.status !== "online" && user.lastSeen && ` • ${user.lastSeen}`}
            </span>
          </div>

          {/* Stats */}
          <div className="mb-6 grid grid-cols-3 gap-4 border-b border-t border-gray-200 py-4">
            <div>
              <p className="text-lg font-bold text-gray-900">{userStats.matches}</p>
              <p className="text-xs text-gray-500">Matches</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">{userStats.runs}</p>
              <p className="text-xs text-gray-500">Runs</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">{userStats.wickets}</p>
              <p className="text-xs text-gray-500">Wickets</p>
            </div>
          </div>

          {/* Teams */}
          <div className="mb-6 text-left">
            <h4 className="mb-2 text-sm font-medium text-gray-700">Teams</h4>
            <div className="space-y-1">
              {userStats.teams.map((team, index) => (
                <div key={index} className="rounded-md bg-gray-50 px-3 py-2 text-sm">
                  <Shield className="mr-1 inline-block h-4 w-4 text-green-600" />
                  {team}
                </div>
              ))}
            </div>
          </div>

          {/* Member Since */}
          <div className="mb-6 text-left">
            <h4 className="mb-1 text-sm font-medium text-gray-700">Member Since</h4>
            <p className="text-sm text-gray-600">{userStats.joinedDate}</p>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <button className="flex flex-1 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
              <MessageCircle className="mr-2 h-5 w-5" />
              Message
            </button>
            <button
              onClick={onReport}
              className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              <Flag className="mr-2 h-5 w-5" />
              Report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
