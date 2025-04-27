"use client"

import type React from "react"

import { useState } from "react"

interface SearchFiltersProps {
  filters: {
    role: string
    skillLevel: string
    location: string
    sort: string
  }
  onFilterChange: (name: string, value: string) => void
  activeTab: "players" | "teams"
}

export default function SearchFilters({ filters, onFilterChange, activeTab }: SearchFiltersProps) {
  const [locationInput, setLocationInput] = useState(filters.location)

  const handleLocationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFilterChange("location", locationInput)
  }

  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Role Filter - Only for Players */}
        {activeTab === "players" && (
          <div>
            <label htmlFor="role-filter" className="mb-1 block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              id="role-filter"
              value={filters.role}
              onChange={(e) => onFilterChange("role", e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            >
              <option value="">All Roles</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="All-rounder">All-rounder</option>
              <option value="Wicket-keeper">Wicket-keeper</option>
            </select>
          </div>
        )}

        {/* Skill Level Filter */}
        <div>
          <label htmlFor="skill-filter" className="mb-1 block text-sm font-medium text-gray-700">
            Skill Level
          </label>
          <select
            id="skill-filter"
            value={filters.skillLevel}
            onChange={(e) => onFilterChange("skillLevel", e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            <option value="">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="professional">Professional</option>
          </select>
        </div>

        {/* Location Filter */}
        <div className={activeTab === "players" ? "sm:col-span-2 lg:col-span-2" : "sm:col-span-2 lg:col-span-3"}>
          <label htmlFor="location-filter" className="mb-1 block text-sm font-medium text-gray-700">
            Location
          </label>
          <form onSubmit={handleLocationSubmit} className="flex">
            <input
              type="text"
              id="location-filter"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              placeholder="City, state, or country"
              className="w-full rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <button
              type="submit"
              className="rounded-r-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              Apply
            </button>
          </form>
        </div>
      </div>

      {/* Additional Filters */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {activeTab === "players" && (
          <>
            <div>
              <label htmlFor="age-filter" className="mb-1 block text-sm font-medium text-gray-700">
                Age Range
              </label>
              <select
                id="age-filter"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option value="">Any Age</option>
                <option value="under18">Under 18</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="over35">Over 35</option>
              </select>
            </div>
            <div>
              <label htmlFor="batting-style" className="mb-1 block text-sm font-medium text-gray-700">
                Batting Style
              </label>
              <select
                id="batting-style"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option value="">Any Style</option>
                <option value="right">Right-handed</option>
                <option value="left">Left-handed</option>
              </select>
            </div>
            <div>
              <label htmlFor="bowling-style" className="mb-1 block text-sm font-medium text-gray-700">
                Bowling Style
              </label>
              <select
                id="bowling-style"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option value="">Any Style</option>
                <option value="fast">Fast</option>
                <option value="medium">Medium</option>
                <option value="spin">Spin</option>
              </select>
            </div>
          </>
        )}
        {activeTab === "teams" && (
          <>
            <div>
              <label htmlFor="team-size" className="mb-1 block text-sm font-medium text-gray-700">
                Team Size
              </label>
              <select
                id="team-size"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option value="">Any Size</option>
                <option value="small">Small (5-10)</option>
                <option value="medium">Medium (11-15)</option>
                <option value="large">Large (16+)</option>
              </select>
            </div>
            <div>
              <label htmlFor="team-type" className="mb-1 block text-sm font-medium text-gray-700">
                Team Type
              </label>
              <select
                id="team-type"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option value="">Any Type</option>
                <option value="club">Club</option>
                <option value="school">School/College</option>
                <option value="corporate">Corporate</option>
                <option value="community">Community</option>
              </select>
            </div>
          </>
        )}
        <div>
          <label htmlFor="availability" className="mb-1 block text-sm font-medium text-gray-700">
            Availability
          </label>
          <select
            id="availability"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            <option value="">Any Availability</option>
            <option value="weekdays">Weekdays</option>
            <option value="weekends">Weekends</option>
            <option value="evenings">Evenings</option>
            <option value="mornings">Mornings</option>
          </select>
        </div>
      </div>
    </div>
  )
}
