"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { MoreVertical, Phone, Video, Info } from "lucide-react"
import MessageInput from "@/components/chat/message-input"
import EmojiPicker from "@/components/chat/emoji-picker"
import type { Chat, User } from "@/app/chat/page"

interface ChatWindowProps {
  chat: Chat | null
  onSendMessage: (text: string, emoji?: string) => void
  onUserProfileClick: (user: User) => void
  onReportUser: (user: User) => void
  users: User[]
}

export default function ChatWindow({ chat, onSendMessage, onUserProfileClick, onReportUser, users }: ChatWindowProps) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages when chat changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [chat])

  const handleSendMessage = (text: string) => {
    onSendMessage(text)
    setShowEmojiPicker(false)
  }

  const handleEmojiSelect = (emoji: string) => {
    onSendMessage("", emoji)
    setShowEmojiPicker(false)
  }

  const getUserById = (id: string): User | undefined => {
    if (id === "currentUser")
      return { id: "currentUser", name: "You", avatar: "/placeholder.svg?height=40&width=40", status: "online" }
    return users.find((user) => user.id === id)
  }

  if (!chat) {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-gray-50 p-6 text-center">
        <div className="mb-4 rounded-full bg-gray-100 p-4">
          <MessageInput className="h-12 w-12 text-gray-400" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-gray-700">Select a conversation</h3>
        <p className="max-w-md text-gray-500">Choose a friend or team from the sidebar to start chatting</p>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col">
      {/* Chat Header */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-white p-4">
        <div className="flex items-center">
          <div className="relative mr-3">
            {chat.type === "direct" ? (
              <>
                <Image
                  src={chat.participants[0].avatar || "/placeholder.svg"}
                  alt={chat.participants[0].name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                  onClick={() => onUserProfileClick(chat.participants[0])}
                />
                <span
                  className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white ${
                    chat.participants[0].status === "online"
                      ? "bg-green-500"
                      : chat.participants[0].status === "away"
                        ? "bg-yellow-500"
                        : "bg-gray-400"
                  }`}
                ></span>
              </>
            ) : (
              <Image
                src={chat.teamAvatar || "/placeholder.svg"}
                alt={chat.teamName || "Team"}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
            )}
          </div>
          <div>
            <h3 className="font-medium text-gray-900">
              {chat.type === "direct" ? chat.participants[0].name : chat.teamName}
            </h3>
            <p className="text-xs text-gray-500">
              {chat.type === "direct"
                ? chat.participants[0].status === "online"
                  ? "Online"
                  : `Last seen ${chat.participants[0].lastSeen}`
                : `${chat.participants.length} members`}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <Phone className="h-5 w-5" />
          </button>
          <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <Video className="h-5 w-5" />
          </button>
          <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <Info className="h-5 w-5" />
          </button>
          <div className="relative">
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <MoreVertical className="h-5 w-5" />
            </button>
            {showOptions && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {chat.type === "direct" && (
                  <button
                    onClick={() => {
                      onReportUser(chat.participants[0])
                      setShowOptions(false)
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Report user
                  </button>
                )}
                <button
                  onClick={() => setShowOptions(false)}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  Clear chat history
                </button>
                {chat.type === "team" && (
                  <button
                    onClick={() => setShowOptions(false)}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Leave team
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
        <div className="space-y-4">
          {chat.messages.map((message) => {
            const isCurrentUser = message.senderId === "currentUser"
            const sender = getUserById(message.senderId)

            return (
              <div key={message.id} className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
                <div className="flex max-w-[70%]">
                  {!isCurrentUser && (
                    <div className="mr-2 mt-1 h-8 w-8">
                      <Image
                        src={sender?.avatar || "/placeholder.svg"}
                        alt={sender?.name || "User"}
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full object-cover"
                        onClick={() => sender && onUserProfileClick(sender)}
                      />
                    </div>
                  )}
                  <div>
                    {!isCurrentUser && chat.type === "team" && (
                      <p className="mb-1 text-xs font-medium text-gray-500">{sender?.name}</p>
                    )}
                    <div
                      className={`rounded-lg p-3 ${
                        isCurrentUser ? "bg-green-600 text-white" : "bg-white text-gray-800 shadow-sm"
                      }`}
                    >
                      {message.emoji && <span className="mr-1 text-xl">{message.emoji}</span>}
                      {message.text && <span>{message.text}</span>}
                    </div>
                    <p className={`mt-1 text-xs ${isCurrentUser ? "text-right" : ""} text-gray-500`}>
                      {message.timestamp}
                      {isCurrentUser && (message.isRead ? " • Read" : " • Delivered")}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="border-t border-gray-200 bg-white p-4">
        <div className="relative">
          <MessageInput
            onSendMessage={handleSendMessage}
            onEmojiButtonClick={() => setShowEmojiPicker(!showEmojiPicker)}
          />
          {showEmojiPicker && (
            <div className="absolute bottom-full right-0 mb-2">
              <EmojiPicker onEmojiSelect={handleEmojiSelect} onClose={() => setShowEmojiPicker(false)} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
