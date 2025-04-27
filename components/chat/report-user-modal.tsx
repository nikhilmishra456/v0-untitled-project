"use client"

import { useState } from "react"
import { X, Flag } from "lucide-react"
import Image from "next/image"
import type { User } from "@/app/chat/page"

interface ReportUserModalProps {
  user: User
  onClose: () => void
}

export default function ReportUserModal({ user, onClose }: ReportUserModalProps) {
  const [reason, setReason] = useState("")
  const [selectedReason, setSelectedReason] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const reportReasons = ["Inappropriate behavior", "Spam or scam", "Fake profile", "Harassment", "Other"]

  const handleSubmit = () => {
    // In a real app, you would send this data to your API
    console.log("Reporting user:", {
      userId: user.id,
      reason: selectedReason,
      details: reason,
    })

    setSubmitted(true)

    // Close modal after 2 seconds
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h3 className="text-lg font-medium text-gray-900">Report User</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Flag className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">Report Submitted</h3>
            <p className="text-gray-600">Thank you for your report. We'll review it as soon as possible.</p>
          </div>
        ) : (
          <>
            <div className="p-4">
              <div className="mb-4 flex items-center">
                <Image
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="mr-3 h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">You're reporting this user</p>
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-700">Reason for reporting</label>
                <div className="space-y-2">
                  {reportReasons.map((reportReason) => (
                    <div key={reportReason} className="flex items-center">
                      <input
                        type="radio"
                        id={reportReason}
                        name="report-reason"
                        value={reportReason}
                        checked={selectedReason === reportReason}
                        onChange={() => setSelectedReason(reportReason)}
                        className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <label htmlFor={reportReason} className="ml-2 block text-sm text-gray-700">
                        {reportReason}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="report-details" className="mb-1 block text-sm font-medium text-gray-700">
                  Additional details (optional)
                </label>
                <textarea
                  id="report-details"
                  rows={4}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Please provide any additional information..."
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                ></textarea>
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
                  onClick={handleSubmit}
                  disabled={!selectedReason}
                  className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Submit Report
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
