export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <div className="h-10 w-32 animate-pulse rounded-md bg-gray-200"></div>
        <div className="mt-2 h-4 w-64 animate-pulse rounded-md bg-gray-200"></div>
      </div>

      <div className="h-[calc(100vh-250px)] min-h-[500px] animate-pulse rounded-lg bg-gray-200"></div>
    </div>
  )
}
