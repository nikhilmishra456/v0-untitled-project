"use client"

import { useState } from "react"

interface PerformanceChartsProps {
  yearlyPerformance: {
    test: Array<{ year: number; average: number; runs: number }>
    odi: Array<{ year: number; average: number; runs: number }>
    t20: Array<{ year: number; average: number; runs: number }>
  }
}

export default function PerformanceCharts({ yearlyPerformance }: PerformanceChartsProps) {
  const [activeFormat, setActiveFormat] = useState<"test" | "odi" | "t20">("test")
  const [activeMetric, setActiveMetric] = useState<"average" | "runs">("average")

  const formatLabels = {
    test: "Test Cricket",
    odi: "One Day Internationals",
    t20: "T20 Internationals",
  }

  const metricLabels = {
    average: "Batting Average",
    runs: "Total Runs",
  }

  const activeData = yearlyPerformance[activeFormat]

  // Find the maximum value for the selected metric to scale the chart
  const maxValue = Math.max(...activeData.map((item) => item[activeMetric]))
  const chartHeight = 200

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex border-b border-gray-200">
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
        <div className="flex rounded-md border border-gray-200">
          {(["average", "runs"] as const).map((metric) => (
            <button
              key={metric}
              onClick={() => setActiveMetric(metric)}
              className={`px-4 py-2 text-sm font-medium ${
                activeMetric === metric
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {metricLabels[metric]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          {metricLabels[activeMetric]} by Year ({formatLabels[activeFormat]})
        </h3>

        {/* Simple bar chart */}
        <div className="relative h-[250px]">
          <div className="absolute bottom-0 left-0 right-0 top-0">
            {/* Y-axis grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
              <div
                key={ratio}
                className="absolute left-0 right-0 border-t border-gray-200"
                style={{ bottom: `${ratio * chartHeight}px` }}
              >
                <span className="absolute -left-8 -top-3 text-xs text-gray-500">
                  {Math.round((maxValue * (1 - ratio)) / (activeMetric === "average" ? 1 : 100)) *
                    (activeMetric === "average" ? 1 : 100)}
                </span>
              </div>
            ))}

            {/* Bars */}
            <div className="absolute bottom-0 left-10 right-0 flex h-[200px] items-end justify-around">
              {activeData.map((item, index) => {
                const value = item[activeMetric]
                const height = (value / maxValue) * chartHeight
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="w-12 rounded-t bg-green-500 transition-all hover:bg-green-600"
                      style={{ height: `${height}px` }}
                    ></div>
                    <div className="mt-2 text-xs font-medium text-gray-600">{item.year}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          {activeMetric === "average" ? "Batting average per year" : "Total runs scored per year"}
        </div>
      </div>
    </div>
  )
}
