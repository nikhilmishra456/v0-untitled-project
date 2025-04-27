"use client"

import { useState } from "react"
import { X, Plus, Search, Check } from "lucide-react"
import Image from "next/image"
import type { User } from "@/app/chat/page"

interface CreateTeamModalProps {
  onClose: () => void
  users: User[]
}

export default function CreateTeamModal({ onClose, users }: CreateTeamModalProps) {
  const [teamName, setTeamName] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const toggleUserSelection = (userId: string) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId))
    } else {
      setSelectedUsers([...selectedUsers, userId])
    }
  }

  const handleCreateTeam = () => {
    if (!teamName.trim() || selectedUsers.length === 0) return

    // In a real app, you would send this data to your API
    console.log("Creating team:", {
      name: teamName,
      members: selectedUsers,
    })

    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h3 className="text-lg font-medium text-gray-900">Create New Team</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          {/* Team Name Input */}
          <div className="mb-4">
            <label htmlFor="team-name" className="mb-1 block text-sm font-medium text-gray-700">
              Team Name
            </label>
            <input
              type="text"
              id="team-name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Enter team name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          {/* Search Members */}
          <div className="mb-4">
            <label htmlFor="search-members" className="mb-1 block text-sm font-medium text-gray-700">
              Add Members
            </label>
            <div className="relative">
              <input
                type="text"
                id="search-members"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search friends..."
                className="w-full rounded-md border border-gray-300 px-3 py-2 pl-10 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Selected Members */}
          {selectedUsers.length > 0 && (
            <div className="mb-4">
              <p className="mb-2 text-sm font-medium text-gray-700">Selected ({selectedUsers.length})</p>
              <div className="flex flex-wrap gap-2">
                {selectedUsers.map((userId) => {
                  const user = users.find((u) => u.id === userId)
                  if (!user) return null

                  return (
                    <div
                      key={user.id}
                      className="flex items-center rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"
                    >
                      <span>{user.name}</span>
                      <button
                        onClick={() => toggleUserSelection(user.id)}
                        className="ml-1 text-green-600 hover:text-green-800"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* User List */}
          <div className="mb-4 max-h-60 overflow-y-auto rounded-md border border-gray-200">
            {filteredUsers.length === 0 ? (
              <div className="p-4 text-center text-gray-500">No users found</div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <li key={user.id}>
                    <button
                      onClick={() => toggleUserSelection(user.id)}
                      className="flex w-full items-center justify-between px-4 py-2 hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        <Image
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                          width={32}
                          height={32}
                          className="mr-3 h-8 w-8 rounded-full object-cover"
                        />
                        <span className="text-sm font-medium text-gray-900">{user.name}</span>
                      </div>
                      {selectedUsers.includes(user.id) ? (
                        <Check className="h-5 w-5 text-green-600" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="border-t border-gray-200 p-4">
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleCreateTeam}
              disabled={!teamName.trim() || selectedUsers.length === 0}
              className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Create Team
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
