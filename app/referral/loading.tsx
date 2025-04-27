export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section Loading */}
      <div className="mb-12 h-64 animate-pulse rounded-2xl bg-gray-200"></div>

      {/* Stats Loading */}
      <div className="mb-12 h-48 animate-pulse rounded-lg bg-gray-200"></div>

      {/* How It Works Loading */}
      <div className="mb-12">
        <div className="mb-8 text-center">
          <div className="mx-auto h-8 w-48 animate-pulse rounded-md bg-gray-200"></div>
          <div className="mx-auto mt-2 h-4 w-64 animate-pulse rounded-md bg-gray-200"></div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 animate-pulse rounded-lg bg-gray-200"></div>
          ))}
        </div>
      </div>

      {/* Referral Link Loading */}
      <div className="mb-12 h-32 animate-pulse rounded-lg bg-gray-200"></div>

      {/* Rewards Loading */}
      <div className="mb-12">
        <div className="mb-8 text-center">
          <div className="mx-auto h-8 w-48 animate-pulse rounded-md bg-gray-200"></div>
          <div className="mx-auto mt-2 h-4 w-64 animate-pulse rounded-md bg-gray-200"></div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-64 animate-pulse rounded-lg bg-gray-200"></div>
          ))}
        </div>
      </div>

      {/* Leaderboard Loading */}
      <div className="mb-12 h-64 animate-pulse rounded-lg bg-gray-200"></div>

      {/* FAQ Loading */}
      <div className="h-64 animate-pulse rounded-lg bg-gray-200"></div>
    </div>
  )
}
