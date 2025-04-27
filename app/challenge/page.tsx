import { Search, Users, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ChallengeForm from "@/components/challenge-form"
import ActiveChallenges from "@/components/active-challenges"
import QuickChallengeSection from "@/components/quick-challenge-section"

export default function ChallengePage() {
  return (
    <div className="bg-gray-50 pb-16 pt-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">Challenge</h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Challenge your friends or other teams to cricket matches and track your active challenges
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content - Search and Challenge Form */}
          <div className="lg:col-span-2">
            {/* Search Section */}
            <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-md">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-xl font-bold text-gray-900">Find Players or Teams to Challenge</h2>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
                    <div className="relative flex-1">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search for players or teams..."
                        className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        <Filter className="mr-2 h-4 w-4" />
                        Filters
                      </button>
                      <select className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500">
                        <option value="all">All</option>
                        <option value="players">Players</option>
                        <option value="teams">Teams</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Search Results */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Popular Teams</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Team Card 1 */}
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-gray-200">
                            <Image
                              src="/placeholder.svg?height=48&width=48"
                              alt="Mumbai Strikers"
                              width={48}
                              height={48}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Mumbai Strikers</h4>
                            <p className="text-sm text-gray-500">
                              <Users className="mr-1 inline h-3 w-3" /> 11 members
                            </p>
                          </div>
                        </div>
                        <button className="rounded-md bg-green-600 px-3 py-1 text-sm font-medium text-white hover:bg-green-700">
                          Challenge
                        </button>
                      </div>
                    </div>

                    {/* Team Card 2 */}
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-gray-200">
                            <Image
                              src="/placeholder.svg?height=48&width=48"
                              alt="Delhi Dragons"
                              width={48}
                              height={48}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Delhi Dragons</h4>
                            <p className="text-sm text-gray-500">
                              <Users className="mr-1 inline h-3 w-3" /> 12 members
                            </p>
                          </div>
                        </div>
                        <button className="rounded-md bg-green-600 px-3 py-1 text-sm font-medium text-white hover:bg-green-700">
                          Challenge
                        </button>
                      </div>
                    </div>

                    {/* Team Card 3 */}
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-gray-200">
                            <Image
                              src="/placeholder.svg?height=48&width=48"
                              alt="Chennai Kings"
                              width={48}
                              height={48}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Chennai Kings</h4>
                            <p className="text-sm text-gray-500">
                              <Users className="mr-1 inline h-3 w-3" /> 11 members
                            </p>
                          </div>
                        </div>
                        <button className="rounded-md bg-green-600 px-3 py-1 text-sm font-medium text-white hover:bg-green-700">
                          Challenge
                        </button>
                      </div>
                    </div>

                    {/* Team Card 4 */}
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-gray-200">
                            <Image
                              src="/placeholder.svg?height=48&width=48"
                              alt="Bangalore Blasters"
                              width={48}
                              height={48}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Bangalore Blasters</h4>
                            <p className="text-sm text-gray-500">
                              <Users className="mr-1 inline h-3 w-3" /> 10 members
                            </p>
                          </div>
                        </div>
                        <button className="rounded-md bg-green-600 px-3 py-1 text-sm font-medium text-white hover:bg-green-700">
                          Challenge
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <Link href="/teams" className="text-sm font-medium text-green-600 hover:text-green-700">
                      View all teams
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge Form */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-xl font-bold text-gray-900">Create a Challenge</h2>
              </div>
              <div className="p-6">
                <ChallengeForm />
              </div>
            </div>
          </div>

          {/* Sidebar - Quick Challenge and Active Challenges */}
          <div className="space-y-8">
            {/* Quick Challenge Section */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-bold text-gray-900">Quick Challenge</h2>
              </div>
              <div className="p-6">
                <QuickChallengeSection />
              </div>
            </div>

            {/* Active Challenges */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-bold text-gray-900">Your Active Challenges</h2>
              </div>
              <div className="p-6">
                <ActiveChallenges />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
