"use client"

import { Clock, X } from "lucide-react"

interface RecentSearchesProps {
  searches: string[]
  onRemove: (search: string) => void
  onSelect: (search: string) => void
}

export default function RecentSearches({ searches, onRemove, onSelect }: RecentSearchesProps) {
  if (searches.length === 0) {
    return <p className="text-center text-gray-500">No recent searches</p>
  }

  return (
    <div className="space-y-2">
      {searches.map((search, index) => (
        <div key={index} className="flex items-center justify-between rounded-md p-2 hover:bg-gray-50">
          <button onClick={() => onSelect(search)} className="flex flex-1 items-center text-left">
            <Clock className="mr-2 h-4 w-4 text-gray-400" />
            <span className="text-gray-900">{search}</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onRemove(search)
            }}
            className="ml-2 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
