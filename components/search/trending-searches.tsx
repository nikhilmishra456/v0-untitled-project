"use client"

import { TrendingUp } from "lucide-react"

interface TrendingSearchesProps {
  onSelect: (search: string) => void
}

export default function TrendingSearches({ onSelect }: TrendingSearchesProps) {
  // Sample trending searches
  const trendingSearches = [
    { text: "IPL players", count: 1250 },
    { text: "Fast bowlers", count: 980 },
    { text: "Mumbai teams", count: 845 },
    { text: "Left-handed batsmen", count: 720 },
    { text: "Cricket academies", count: 650 },
  ]

  return (
    <div className="space-y-3">
      {trendingSearches.map((search, index) => (
        <button
          key={index}
          onClick={() => onSelect(search.text)}
          className="flex w-full items-center justify-between rounded-md p-2 text-left hover:bg-gray-50"
        >
          <div className="flex items-center">
            <TrendingUp className="mr-2 h-4 w-4 text-green-600" />
            <span className="font-medium text-gray-900">{search.text}</span>
          </div>
          <span className="text-xs text-gray-500">{search.count}+ searches</span>
        </button>
      ))}
    </div>
  )
}
