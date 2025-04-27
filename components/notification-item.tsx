"use client"

import { useState } from "react"
import Image from "next/image"
import { Bell, Users, UserPlus, Shield, Calendar, Check, X } from "lucide-react"

interface NotificationProps {
  notification: {
    id: string
    type: string
    title: string
    message: string
    sender: {
      name: string
      avatar: string
    }
    time: string
    isRead: boolean
    actions: string[]
  }
}

export default function NotificationItem({ notification }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [status, setStatus] = useState<string | null>(null)

  const handleAction = (action: string) => {
    setStatus(action)
    // In a real app, you would send this action to your API
    setTimeout(() => {
      setIsVisible(false)
    }, 2000)
  }

  if (!isVisible) return null

  const getIcon = () => {
    switch (notification.type) {
      case "team_invitation":
        return <Users className="h-5 w-5 text-blue-500" />
      case "friend_request":
        return <UserPlus className="h-5 w-5 text-purple-500" />
      case "challenge":
        return <Shield className="h-5 w-5 text-orange-500" />
      case "match_update":
        return <Calendar className="h-5 w-5 text-green-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  const getBgColor = () => {
    return notification.isRead ? "bg-white" : "bg-green-50"
  }

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-gray-200 ${getBgColor()} p-4 shadow-sm transition-all hover:shadow-md`}
    >
      {!notification.isRead && <div className="absolute left-0 top-0 h-full w-1 bg-green-500"></div>}
      <div className="flex items-start space-x-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
          {getIcon()}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{notification.title}</h3>
              <p className="text-gray-600">{notification.message}</p>
            </div>
            <span className="text-xs text-gray-500">{notification.time}</span>
          </div>
          <div className="mt-2 flex items-center">
            <div className="flex items-center">
              <Image
                src={notification.sender.avatar || "/placeholder.svg"}
                alt={notification.sender.name}
                width={24}
                height={24}
                className="mr-2 h-6 w-6 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">{notification.sender.name}</span>
            </div>
            {notification.actions.length > 0 && !status && (
              <div className="ml-auto flex space-x-2">
                <button
                  onClick={() => handleAction("accepted")}
                  className="inline-flex items-center rounded-md bg-green-600 px-3 py-1 text-sm font-medium text-white hover:bg-green-700"
                >
                  <Check className="mr-1 h-4 w-4" />
                  Accept
                </button>
                <button
                  onClick={() => handleAction("declined")}
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <X className="mr-1 h-4 w-4" />
                  Decline
                </button>
              </div>
            )}
            {status && (
              <div className="ml-auto">
                {status === "accepted" ? (
                  <span className="inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
                    <Check className="mr-1 h-4 w-4" />
                    Accepted
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    <X className="mr-1 h-4 w-4" />
                    Declined
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
