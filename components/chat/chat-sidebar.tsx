"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, MessageCircle, Users, Plus, X } from "lucide-react"
import type { Chat, User } from "@/app/chat/page"

interface ChatSidebarProps {
  activeTab: "direct" | "team"
  setActiveTab: (tab: "direct" | "team") => void
  chats: Chat[]
  onChatSelect: (chat: Chat) => void
  activeChat: Chat | null
  onCreateTeam: () => void
  onUserProfileClick: (user: User) => void
}

export default function ChatSidebar({
  activeTab,
  setActiveTab,
  chats,
  onChatSelect,
  activeChat,
  onCreateTeam,
  onUserProfileClick,
}: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)

  const filteredChats = chats.filter((chat) => {
    if (chat.type !== activeTab) return false

    if (!searchQuery) return true

    if (chat.type === "direct") {
      return chat.participants[0].name.toLowerCase().includes(searchQuery.toLowerCase())
    } else {
      return chat.teamName?.toLowerCase().includes(searchQuery.toLowerCase())
    }
  })

  const getStatusIndicator = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "away":
        return "bg-yellow-500"
      default:
        return "bg-gray-400"
    }
  }

  return (
    <div className="flex h-full flex-col border-r border-gray-200 bg-white">
      {/* Tabs - Desktop */}
      <div className="hidden border-b border-gray-200 lg:block">
        <div className="flex">
          <button
            onClick={() => setActiveTab("direct")}
            className={`flex flex-1 items-center justify-center px-4 py-3 text-center font-medium ${
              activeTab === "direct"
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Direct Messages
          </button>
          <button
            onClick={() => setActiveTab("team")}
            className={`flex flex-1 items-center justify-center px-4 py-3 text-center font-medium ${
              activeTab === "team" ? "border-b-2 border-green-600 text-green-600" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Users className="mr-2 h-5 w-5" />
            Team Chats
          </button>
        </div>
      </div>

      {/* Search and Create */}
      <div className="border-b border-gray-200 p-3">
        {showSearch ? (
          <div className="relative">
            <input
              type="text"
              placeholder={`Search ${activeTab === "direct" ? "friends" : "teams"}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <button
              onClick={() => {
                setShowSearch(false)
                setSearchQuery("")
              }}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowSearch(true)}
              className="flex items-center rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              <Search className="mr-2 h-4 w-4" />
              {`Search ${activeTab === "direct" ? "friends" : "teams"}`}
            </button>
            {activeTab === "team" && (
              <button
                onClick={onCreateTeam}
                className="flex items-center rounded-md bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700"
              >
                <Plus className="mr-1 h-4 w-4" />
                New Team
              </button>
            )}
          </div>
        )}
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-3">
        {filteredChats.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center text-gray-500">
            <p className="mb-2">No {activeTab === "direct" ? "conversations" : "team chats"} found</p>
            {searchQuery && <p className="text-sm">Try a different search term</p>}
          </div>
        ) : (
          <div className="space-y-2">
            {filteredChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => onChatSelect(chat)}
                className={`flex cursor-pointer items-center rounded-lg p-2 transition-colors ${
                  activeChat?.id === chat.id ? "bg-green-50" : "hover:bg-gray-50"
                }`}
              >
                <div className="relative mr-3 h-12 w-12 flex-shrink-0">
                  {chat.type === "direct" ? (
                    <>
                      <Image
                        src={chat.participants[0].avatar || "/placeholder.svg"}
                        alt={chat.participants[0].name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover"
                        onClick={(e) => {
                          e.stopPropagation()
                          onUserProfileClick(chat.participants[0])
                        }}
                      />
                      <span
                        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${getStatusIndicator(
                          chat.participants[0].status,
                        )}`}
                      ></span>
                    </>
                  ) : (
                    <Image
                      src={chat.teamAvatar || "/placeholder.svg"}
                      alt={chat.teamName || "Team"}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 truncate">
                      {chat.type === "direct" ? chat.participants[0].name : chat.teamName}
                    </h3>
                    <span className="text-xs text-gray-500">{chat.lastMessage?.timestamp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">
                      {chat.lastMessage?.emoji && <span className="mr-1">{chat.lastMessage.emoji}</span>}
                      {chat.lastMessage?.text}
                    </p>
                    {chat.unreadCount > 0 && (
                      <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-medium text-white">
                        {chat.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
