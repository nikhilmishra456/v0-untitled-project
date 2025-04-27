"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, MapPin, Users, AlertCircle } from "lucide-react"

export default function ChallengeForm() {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    opponent: "",
    challengeType: "friendly",
    format: "t20",
    date: "",
    time: "",
    venue: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your API
    console.log("Challenge data:", { ...formData, team: selectedTeam })
    alert("Challenge sent successfully!")
    // Reset form
    setFormData({
      opponent: "",
      challengeType: "friendly",
      format: "t20",
      date: "",
      time: "",
      venue: "",
      message: "",
    })
    setSelectedTeam(null)
  }

  // Sample user teams
  const userTeams = [
    { id: "team1", name: "Royal Strikers", members: 11 },
    { id: "team2", name: "Thunder Kings", members: 10 },
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Opponent */}
      <div>
        <label htmlFor="opponent" className="mb-1 block text-sm font-medium text-gray-700">
          Opponent (Player or Team)
        </label>
        <input
          type="text"
          id="opponent"
          name="opponent"
          value={formData.opponent}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          placeholder="Enter player or team name"
        />
      </div>

      {/* Challenge Type and Format */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="challengeType" className="mb-1 block text-sm font-medium text-gray-700">
            Challenge Type
          </label>
          <select
            id="challengeType"
            name="challengeType"
            value={formData.challengeType}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            <option value="friendly">Friendly Match</option>
            <option value="tournament">Tournament</option>
            <option value="practice">Practice Session</option>
            <option value="knockout">Knockout</option>
          </select>
        </div>
        <div>
          <label htmlFor="format" className="mb-1 block text-sm font-medium text-gray-700">
            Match Format
          </label>
          <select
            id="format"
            name="format"
            value={formData.format}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            <option value="t20">T20 (20 overs)</option>
            <option value="odi">ODI (50 overs)</option>
            <option value="test">Test Match</option>
            <option value="t10">T10 (10 overs)</option>
            <option value="custom">Custom Format</option>
          </select>
        </div>
      </div>

      {/* Date and Time */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="mb-1 block text-sm font-medium text-gray-700">
            <Calendar className="mr-1 inline-block h-4 w-4" /> Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="time" className="mb-1 block text-sm font-medium text-gray-700">
            <Clock className="mr-1 inline-block h-4 w-4" /> Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Venue */}
      <div>
        <label htmlFor="venue" className="mb-1 block text-sm font-medium text-gray-700">
          <MapPin className="mr-1 inline-block h-4 w-4" /> Venue
        </label>
        <input
          type="text"
          id="venue"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          placeholder="Enter match venue"
        />
      </div>

      {/* Team Selection */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          <Users className="mr-1 inline-block h-4 w-4" /> Select Your Team (Optional)
        </label>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {userTeams.map((team) => (
            <div
              key={team.id}
              onClick={() => setSelectedTeam(team.id === selectedTeam ? null : team.id)}
              className={`cursor-pointer rounded-lg border p-3 transition-colors ${
                team.id === selectedTeam
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white hover:border-green-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{team.name}</h4>
                  <p className="text-sm text-gray-500">{team.members} members</p>
                </div>
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    team.id === selectedTeam ? "border-green-500 bg-green-500" : "border-gray-300"
                  }`}
                >
                  {team.id === selectedTeam && <div className="h-2 w-2 rounded-full bg-white"></div>}
                </div>
              </div>
            </div>
          ))}
          <div className="rounded-lg border border-dashed border-gray-300 p-3 text-center">
            <Link href="/teams/create" className="block text-sm font-medium text-green-600 hover:text-green-700">
              + Create New Team
            </Link>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          placeholder="Add a personal message to your challenge"
        ></textarea>
      </div>

      {/* Note */}
      <div className="rounded-md bg-yellow-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Challenges are subject to acceptance by the opponent. You will be notified once they respond.
            </p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full rounded-md bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Send Challenge
        </button>
      </div>
    </form>
  )
}
