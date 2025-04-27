export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8 h-10 w-48 animate-pulse rounded-md bg-gray-200"></div>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="mb-6 flex items-center justify-between">
            <div className="h-6 w-32 animate-pulse rounded-md bg-gray-200"></div>
            <div className="h-6 w-24 animate-pulse rounded-md bg-gray-200"></div>
          </div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-24 animate-pulse rounded-lg bg-gray-200"></div>
          ))}
        </div>
        <div className="space-y-8">
          <div className="overflow-hidden rounded-xl bg-white shadow-md">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="h-6 w-32 animate-pulse rounded-md bg-gray-200"></div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="h-12 w-12 animate-pulse rounded-full bg-gray-200"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-24 animate-pulse rounded-md bg-gray-200"></div>
                      <div className="h-3 w-16 animate-pulse rounded-md bg-gray-200"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl bg-white shadow-md">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="h-6 w-32 animate-pulse rounded-md bg-gray-200"></div>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="h-16 animate-pulse rounded-md bg-gray-200"></div>
                <div className="h-10 animate-pulse rounded-md bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
