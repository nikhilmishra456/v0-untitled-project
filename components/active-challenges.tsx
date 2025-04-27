"use client"

import Link from "next/link"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, MapPin, Check, X, ChevronDown, ChevronUp } from "lucide-react"

// Sample active challenges data
const challengesData = [
  {
    id: "1",
    opponent: {
      name: "Mumbai Strikers",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "May 15, 2025",
    time: "10:00 AM",
    venue: "Central Cricket Ground, Mumbai",
    format: "T20",
    status: "pending", // pending, accepted, rejected
    sentByYou: false,
  },
  {
    id: "2",
    opponent: {
      name: "Rohit Sharma",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "May 20, 2025",
    time: "2:00 PM",
    venue: "City Sports Club, Delhi",
    format: "ODI",
    status: "accepted",
    sentByYou: true,
  },
  {
    id: "3",
    opponent: {
      name: "Chennai Kings",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "May 25, 2025",
    time: "11:30 AM",
    venue: "National Stadium, Chennai",
    format: "T10",
    status: "pending",
    sentByYou: true,
  },
]

export default function ActiveChallenges() {
  const [expandedChallenge, setExpandedChallenge] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedChallenge(expandedChallenge === id ? null : id)
  }

  const handleAction = (id: string, action: "accept" | "reject" | "cancel") => {
    // In a real app, you would send this action to your API
    console.log(`Challenge ${id}: ${action}`)
    alert(`Challenge ${action}ed successfully!`)
  }

  return (
    <div className="space-y-4">
      {challengesData.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center">
          <p className="text-gray-500">You don't have any active challenges yet.</p>
        </div>
      ) : (
        challengesData.map((challenge) => (
          <div
            key={challenge.id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
          >
            {/* Challenge Header */}
            <div
              onClick={() => toggleExpand(challenge.id)}
              className="flex cursor-pointer items-center justify-between p-4"
            >
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={challenge.opponent.avatar || "/placeholder.svg"}
                    alt={challenge.opponent.name}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{challenge.opponent.name}</h4>
                  <p className="text-sm text-gray-500">
                    {challenge.format} • {challenge.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    challenge.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : challenge.status === "accepted"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {challenge.status.charAt(0).toUpperCase() + challenge.status.slice(1)}
                </span>
                {expandedChallenge === challenge.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </div>

            {/* Challenge Details */}
            {expandedChallenge === challenge.id && (
              <div className="border-t border-gray-100 bg-gray-50 p-4">
                <div className="mb-4 space-y-2 text-sm">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">
                      {challenge.date} at {challenge.time}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{challenge.venue}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{challenge.format} Match</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-end gap-2">
                  {challenge.status === "pending" && !challenge.sentByYou && (
                    <>
                      <button
                        onClick={() => handleAction(challenge.id, "accept")}
                        className="inline-flex items-center rounded-md bg-green-600 px-3 py-1 text-sm font-medium text-white hover:bg-green-700"
                      >
                        <Check className="mr-1 h-4 w-4" />
                        Accept
                      </button>
                      <button
                        onClick={() => handleAction(challenge.id, "reject")}
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        <X className="mr-1 h-4 w-4" />
                        Decline
                      </button>
                    </>
                  )}
                  {challenge.sentByYou && challenge.status === "pending" && (
                    <button
                      onClick={() => handleAction(challenge.id, "cancel")}
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      <X className="mr-1 h-4 w-4" />
                      Cancel Challenge
                    </button>
                  )}
                  {challenge.status === "accepted" && (
                    <button className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1 text-sm font-medium text-white hover:bg-blue-700">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))
      )}

      <div className="mt-4 text-center">
        <Link href="/challenge/history" className="text-sm font-medium text-green-600 hover:text-green-700">
          View challenge history
        </Link>
      </div>
    </div>
  )
}
