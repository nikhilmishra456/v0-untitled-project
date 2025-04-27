export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8 text-center">
        <div className="mx-auto h-10 w-48 animate-pulse rounded-md bg-gray-200"></div>
        <div className="mx-auto mt-2 h-4 w-64 animate-pulse rounded-md bg-gray-200"></div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {/* Search Section Loading */}
          <div className="overflow-hidden rounded-xl bg-white shadow-md">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="h-6 w-48 animate-pulse rounded-md bg-gray-200"></div>
            </div>
            <div className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="h-10 w-full max-w-md animate-pulse rounded-md bg-gray-200"></div>
                <div className="h-10 w-32 animate-pulse rounded-md bg-gray-200"></div>
              </div>
              <div className="space-y-4">
                <div className="h-5 w-32 animate-pulse rounded-md bg-gray-200"></div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-20 animate-pulse rounded-lg bg-gray-200"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Challenge Form Loading */}
          <div className="overflow-hidden rounded-xl bg-white shadow-md">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="h-6 w-48 animate-pulse rounded-md bg-gray-200"></div>
            </div>
            <div className="p-6 space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-12 animate-pulse rounded-md bg-gray-200"></div>
              ))}
              <div className="h-24 animate-pulse rounded-md bg-gray-200"></div>
              <div className="h-12 animate-pulse rounded-md bg-gray-200"></div>
            </div>
          </div>
        </div>

        {/* Sidebar Loading */}
        <div className="space-y-8">
          <div className="overflow-hidden rounded-xl bg-white shadow-md">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="h-6 w-32 animate-pulse rounded-md bg-gray-200"></div>
            </div>
            <div className="p-6 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 animate-pulse rounded-md bg-gray-200"></div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-white shadow-md">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="h-6 w-48 animate-pulse rounded-md bg-gray-200"></div>
            </div>
            <div className="p-6 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 animate-pulse rounded-md bg-gray-200"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
