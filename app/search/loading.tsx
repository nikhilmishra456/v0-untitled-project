export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <div className="h-10 w-32 animate-pulse rounded-md bg-gray-200"></div>
        <div className="mt-2 h-4 w-64 animate-pulse rounded-md bg-gray-200"></div>
      </div>

      <div className="mb-8 h-12 animate-pulse rounded-lg bg-gray-200"></div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <div className="h-10 animate-pulse rounded-md bg-gray-200"></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-48 animate-pulse rounded-lg bg-gray-200"></div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <div className="h-64 animate-pulse rounded-lg bg-gray-200"></div>
          <div className="h-48 animate-pulse rounded-lg bg-gray-200"></div>
          <div className="h-48 animate-pulse rounded-lg bg-gray-200"></div>
        </div>
      </div>
    </div>
  )
}
