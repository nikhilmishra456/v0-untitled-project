"use client"

import { useState } from "react"
import { Filter } from "lucide-react"

export default function NotificationFilters() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Notifications" },
    { id: "unread", label: "Unread" },
    { id: "team_invitation", label: "Team Invitations" },
    { id: "friend_request", label: "Friend Requests" },
    { id: "challenge", label: "Team Challenges" },
    { id: "match_update", label: "Match Updates" },
    { id: "system", label: "System" },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <Filter className="mr-2 h-4 w-4" />
        Filter
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id)
                  setIsOpen(false)
                }}
                className={`block w-full px-4 py-2 text-left text-sm ${
                  activeFilter === filter.id ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } hover:bg-gray-50`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
