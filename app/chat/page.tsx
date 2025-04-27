"use client"

import { useState } from "react"
import ChatSidebar from "@/components/chat/chat-sidebar"
import ChatWindow from "@/components/chat/chat-window"
import UserProfileModal from "@/components/chat/user-profile-modal"
import CreateTeamModal from "@/components/chat/create-team-modal"
import ReportUserModal from "@/components/chat/report-user-modal"
import { MessageCircle, Users } from "lucide-react"

// Sample data types
export type User = {
  id: string
  name: string
  avatar: string
  status: "online" | "offline" | "away"
  lastSeen?: string
}

export type Message = {
  id: string
  senderId: string
  text: string
  timestamp: string
  isRead: boolean
  emoji?: string
}

export type Chat = {
  id: string
  type: "direct" | "team"
  participants: User[]
  messages: Message[]
  unreadCount: number
  lastMessage?: Message
  teamName?: string
  teamAvatar?: string
}

export default function ChatPage() {
  const [activeTab, setActiveTab] = useState<"direct" | "team">("direct")
  const [activeChat, setActiveChat] = useState<Chat | null>(null)
  const [showUserProfile, setShowUserProfile] = useState(false)
  const [showCreateTeam, setShowCreateTeam] = useState(false)
  const [showReportUser, setShowReportUser] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  // Sample users data
  const users: User[] = [
    { id: "1", name: "Virat Kohli", avatar: "/placeholder.svg?height=40&width=40", status: "online" },
    {
      id: "2",
      name: "Rohit Sharma",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "away",
      lastSeen: "2h ago",
    },
    { id: "3", name: "MS Dhoni", avatar: "/placeholder.svg?height=40&width=40", status: "offline", lastSeen: "1d ago" },
    { id: "4", name: "KL Rahul", avatar: "/placeholder.svg?height=40&width=40", status: "online" },
    { id: "5", name: "Jasprit Bumrah", avatar: "/placeholder.svg?height=40&width=40", status: "online" },
  ]

  // Sample chats data
  const chats: Chat[] = [
    {
      id: "chat1",
      type: "direct",
      participants: [users[0]],
      messages: [
        {
          id: "msg1",
          senderId: "1",
          text: "Hey, are you coming for practice today?",
          timestamp: "10:30 AM",
          isRead: true,
        },
        {
          id: "msg2",
          senderId: "currentUser",
          text: "Yes, I'll be there by 4 PM",
          timestamp: "10:32 AM",
          isRead: true,
        },
        {
          id: "msg3",
          senderId: "1",
          text: "Great! See you then",
          timestamp: "10:33 AM",
          isRead: false,
        },
      ],
      unreadCount: 1,
      lastMessage: {
        id: "msg3",
        senderId: "1",
        text: "Great! See you then",
        timestamp: "10:33 AM",
        isRead: false,
      },
    },
    {
      id: "chat2",
      type: "direct",
      participants: [users[1]],
      messages: [
        {
          id: "msg4",
          senderId: "2",
          text: "Did you see the match yesterday?",
          timestamp: "Yesterday",
          isRead: true,
        },
      ],
      unreadCount: 0,
      lastMessage: {
        id: "msg4",
        senderId: "2",
        text: "Did you see the match yesterday?",
        timestamp: "Yesterday",
        isRead: true,
      },
    },
    {
      id: "chat3",
      type: "team",
      participants: [users[0], users[1], users[2]],
      messages: [
        {
          id: "msg5",
          senderId: "1",
          text: "Team meeting at 6 PM today",
          timestamp: "9:15 AM",
          isRead: true,
        },
        {
          id: "msg6",
          senderId: "2",
          text: "I'll be there",
          timestamp: "9:20 AM",
          isRead: true,
        },
        {
          id: "msg7",
          senderId: "3",
          text: "Let's discuss the batting order",
          timestamp: "9:25 AM",
          isRead: false,
          emoji: "🏏",
        },
      ],
      unreadCount: 2,
      lastMessage: {
        id: "msg7",
        senderId: "3",
        text: "Let's discuss the batting order",
        timestamp: "9:25 AM",
        isRead: false,
        emoji: "🏏",
      },
      teamName: "Mumbai Strikers",
      teamAvatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "chat4",
      type: "team",
      participants: [users[3], users[4]],
      messages: [
        {
          id: "msg8",
          senderId: "4",
          text: "Practice session tomorrow at 5 PM",
          timestamp: "Yesterday",
          isRead: true,
        },
      ],
      unreadCount: 0,
      lastMessage: {
        id: "msg8",
        senderId: "4",
        text: "Practice session tomorrow at 5 PM",
        timestamp: "Yesterday",
        isRead: true,
      },
      teamName: "Delhi Dragons",
      teamAvatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const handleChatSelect = (chat: Chat) => {
    setActiveChat(chat)
  }

  const handleSendMessage = (text: string, emoji?: string) => {
    if (!activeChat) return

    console.log(
      `Message sent to ${activeChat.type === "direct" ? activeChat.participants[0].name : activeChat.teamName}: ${text}`,
    )
    // In a real app, you would send this message to your API
    // and update the chat state with the new message
  }

  const handleUserProfileClick = (user: User) => {
    setSelectedUser(user)
    setShowUserProfile(true)
  }

  const handleCreateTeam = () => {
    setShowCreateTeam(true)
  }

  const handleReportUser = (user: User) => {
    setSelectedUser(user)
    setShowReportUser(true)
  }

  return (
    <div className="bg-gray-50 pb-16 pt-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Chat</h1>
          <p className="text-gray-600">Chat with your friends and team members</p>
        </div>

        {/* Chat Interface */}
        <div className="grid h-[calc(100vh-250px)] min-h-[500px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md lg:grid-cols-[320px_1fr]">
          {/* Chat Tabs */}
          <div className="border-b border-gray-200 bg-white lg:hidden">
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
                  activeTab === "team"
                    ? "border-b-2 border-green-600 text-green-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Users className="mr-2 h-5 w-5" />
                Team Chats
              </button>
            </div>
          </div>

          {/* Chat Sidebar */}
          <ChatSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            chats={chats}
            onChatSelect={handleChatSelect}
            activeChat={activeChat}
            onCreateTeam={handleCreateTeam}
            onUserProfileClick={handleUserProfileClick}
          />

          {/* Chat Window */}
          <ChatWindow
            chat={activeChat}
            onSendMessage={handleSendMessage}
            onUserProfileClick={handleUserProfileClick}
            onReportUser={handleReportUser}
            users={users}
          />
        </div>
      </div>

      {/* Modals */}
      {showUserProfile && selectedUser && (
        <UserProfileModal
          user={selectedUser}
          onClose={() => setShowUserProfile(false)}
          onReport={() => {
            setShowUserProfile(false)
            setShowReportUser(true)
          }}
        />
      )}

      {showCreateTeam && <CreateTeamModal onClose={() => setShowCreateTeam(false)} users={users} />}

      {showReportUser && selectedUser && (
        <ReportUserModal user={selectedUser} onClose={() => setShowReportUser(false)} />
      )}
    </div>
  )
}
