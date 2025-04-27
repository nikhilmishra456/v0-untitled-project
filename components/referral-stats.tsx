"use client"

import { useState } from "react"
import { Coins, Users, Gift, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function ReferralStats() {
  const [activeTab, setActiveTab] = useState("overview")

  // Sample user referral data
  const referralData = {
    coins: 750,
    totalReferrals: 8,
    pendingReferrals: 2,
    rewardsRedeemed: 1,
    recentReferrals: [
      { name: "Rahul Sharma", date: "2 days ago", status: "completed" },
      { name: "Priya Patel", date: "5 days ago", status: "completed" },
      { name: "Amit Kumar", date: "1 week ago", status: "pending" },
    ],
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex-1 px-4 py-3 text-center font-medium ${
            activeTab === "overview"
              ? "border-b-2 border-green-600 text-green-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("referrals")}
          className={`flex-1 px-4 py-3 text-center font-medium ${
            activeTab === "referrals"
              ? "border-b-2 border-green-600 text-green-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          My Referrals
        </button>
        <button
          onClick={() => setActiveTab("rewards")}
          className={`flex-1 px-4 py-3 text-center font-medium ${
            activeTab === "rewards" ? "border-b-2 border-green-600 text-green-600" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          My Rewards
        </button>
      </div>

      {activeTab === "overview" && (
        <div className="p-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg bg-green-50 p-4">
              <div className="flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Coins className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-green-600">Available Coins</p>
                  <h3 className="text-2xl font-bold text-gray-900">{referralData.coins}</h3>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-4">
              <div className="flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-600">Total Referrals</p>
                  <h3 className="text-2xl font-bold text-gray-900">{referralData.totalReferrals}</h3>
                  <p className="text-xs text-gray-500">{referralData.pendingReferrals} pending</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-purple-50 p-4">
              <div className="flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <Gift className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-purple-600">Rewards Redeemed</p>
                  <h3 className="text-2xl font-bold text-gray-900">{referralData.rewardsRedeemed}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900">Recent Referrals</h3>
            <div className="space-y-3">
              {referralData.recentReferrals.map((referral, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{referral.name}</h4>
                    <p className="text-sm text-gray-500">{referral.date}</p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      referral.status === "completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {referral.status.charAt(0).toUpperCase() + referral.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/referral/history"
                className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
              >
                View all referrals
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {activeTab === "referrals" && (
        <div className="p-6">
          <div className="text-center">
            <p className="text-gray-600">View details of all your referrals here.</p>
            <button className="mt-4 inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
              View All Referrals
            </button>
          </div>
        </div>
      )}

      {activeTab === "rewards" && (
        <div className="p-6">
          <div className="text-center">
            <p className="text-gray-600">View your redeemed and available rewards here.</p>
            <button className="mt-4 inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
              View My Rewards
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
