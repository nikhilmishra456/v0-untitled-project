interface RecentFormProps {
  recentForm: Array<{
    match: string
    format: string
    score: string
    date: string
  }>
}

export default function RecentForm({ recentForm }: RecentFormProps) {
  return (
    <div>
      <div className="space-y-4">
        {recentForm.map((match, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="mb-2 sm:mb-0">
              <div className="flex items-center">
                <span
                  className={`mr-2 inline-block h-3 w-3 rounded-full ${
                    Number.parseInt(match.score) >= 50
                      ? Number.parseInt(match.score) >= 100
                        ? "bg-green-500"
                        : "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                ></span>
                <h4 className="font-medium text-gray-900">{match.match}</h4>
                <span className="ml-2 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                  {match.format}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500">{match.date}</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-gray-900">{match.score}</div>
              <div className="text-xs text-gray-500">
                {Number.parseInt(match.score) >= 100
                  ? "Century"
                  : Number.parseInt(match.score) >= 50
                    ? "Half Century"
                    : ""}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
