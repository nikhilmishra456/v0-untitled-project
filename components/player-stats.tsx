"use client"

import { useState } from "react"

interface PlayerStatsProps {
  stats: {
    test: {
      matches: number
      innings: number
      runs: number
      highestScore: string
      average: number
      strikeRate: number
      hundreds: number
      fifties: number
      fours: number
      sixes: number
    }
    odi: {
      matches: number
      innings: number
      runs: number
      highestScore: string
      average: number
      strikeRate: number
      hundreds: number
      fifties: number
      fours: number
      sixes: number
    }
    t20: {
      matches: number
      innings: number
      runs: number
      highestScore: string
      average: number
      strikeRate: number
      hundreds: number
      fifties: number
      fours: number
      sixes: number
    }
  }
}

export default function PlayerStats({ stats }: PlayerStatsProps) {
  const [activeFormat, setActiveFormat] = useState<"test" | "odi" | "t20">("test")

  const formatLabels = {
    test: "Test Cricket",
    odi: "One Day Internationals",
    t20: "T20 Internationals",
  }

  const activeStats = stats[activeFormat]

  return (
    <div>
      <div className="mb-6 flex border-b border-gray-200">
        {(["test", "odi", "t20"] as const).map((format) => (
          <button
            key={format}
            onClick={() => setActiveFormat(format)}
            className={`px-4 py-2 text-sm font-medium ${
              activeFormat === format
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {formatLabels[format]}
          </button>
        ))}
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-900">{formatLabels[activeFormat]} Statistics</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          <div className="rounded-lg bg-gray-50 p-4 text-center">
            <p className="text-xs font-medium uppercase text-gray-500">Matches</p>
            <p className="text-2xl font-bold text-gray-900">{activeStats.matches}</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 text-center">
            <p className="text-xs font-medium uppercase text-gray-500">Innings</p>
            <p className="text-2xl font-bold text-gray-900">{activeStats.innings}</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 text-center">
            <p className="text-xs font-medium uppercase text-gray-500">Runs</p>
            <p className="text-2xl font-bold text-gray-900">{activeStats.runs.toLocaleString()}</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 text-center">
            <p className="text-xs font-medium uppercase text-gray-500">Average</p>
            <p className="text-2xl font-bold text-gray-900">{activeStats.average.toFixed(2)}</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 text-center">
            <p className="text-xs font-medium uppercase text-gray-500">Strike Rate</p>
            <p className="text-2xl font-bold text-gray-900">{activeStats.strikeRate.toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold text-gray-700">Detailed Statistics</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <th className="px-4 py-3">Stat</th>
                  <th className="px-4 py-3 text-right">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">Highest Score</td>
                  <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-gray-900">
                    {activeStats.highestScore}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">100s</td>
                  <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-gray-900">
                    {activeStats.hundreds}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">50s</td>
                  <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-gray-900">
                    {activeStats.fifties}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">Fours</td>
                  <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-gray-900">{activeStats.fours}</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">Sixes</td>
                  <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-gray-900">{activeStats.sixes}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
