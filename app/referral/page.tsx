import Image from "next/image"
import { Copy, Share2, Gift, Users, ArrowRight, Twitter, Facebook, Mail } from "lucide-react"
import ReferralStats from "@/components/referral-stats"
import RewardCard from "@/components/reward-card"
import ReferralLeaderboard from "@/components/referral-leaderboard"

export default function ReferralPage() {
  return (
    <div className="bg-gray-50 pb-16 pt-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-green-700 to-green-500 shadow-lg">
          <div className="relative px-6 py-12 sm:px-12 sm:py-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-400 opacity-20"></div>
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-green-800 opacity-20"></div>
            <div className="relative z-10 grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center text-white">
                <h1 className="mb-2 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                  Refer Friends, <br />
                  <span className="text-yellow-300">Score Big Rewards!</span>
                </h1>
                <p className="mb-6 text-lg opacity-90">
                  Invite your cricket-loving friends to join CricketZone and earn exclusive rewards, premium features,
                  and even real cricket gear!
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="inline-flex items-center rounded-full bg-white px-6 py-3 font-medium text-green-700 transition-colors hover:bg-gray-100">
                    <Share2 className="mr-2 h-5 w-5" />
                    Share Your Link
                  </button>
                  <button className="inline-flex items-center rounded-full border border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10">
                    <Gift className="mr-2 h-5 w-5" />
                    View Rewards
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-64 w-64 md:h-80 md:w-80">
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="Referral Rewards"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User's Referral Stats */}
        <div className="mb-12">
          <ReferralStats />
        </div>

        {/* How It Works Section */}
        <div className="mb-12">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Follow these simple steps to refer friends and earn rewards
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Share2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Share Your Link</h3>
              <p className="text-gray-600">
                Share your unique referral link with friends via social media, email, or messaging apps.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Friends Join</h3>
              <p className="text-gray-600">
                When your friends sign up using your link and complete their profile, you both earn referral coins.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Gift className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Claim Rewards</h3>
              <p className="text-gray-600">
                Redeem your earned coins for exclusive rewards, premium features, and cricket merchandise.
              </p>
            </div>
          </div>
        </div>

        {/* Referral Link Section */}
        <div className="mb-12 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Your Referral Link</h2>
          <div className="mb-6 flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <div className="relative flex-1">
              <input
                type="text"
                value="https://cricketzone.com/join?ref=USER123"
                readOnly
                className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 pr-10 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-green-600">
                <Copy className="h-5 w-5" />
              </button>
            </div>
            <button className="rounded-md bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700">
              Copy Link
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm text-gray-500">Share via:</span>
            <button className="rounded-full bg-[#1DA1F2] p-2 text-white hover:bg-[#1a94da]">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </button>
            <button className="rounded-full bg-[#4267B2] p-2 text-white hover:bg-[#3b5998]">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </button>
            <button className="rounded-full bg-[#EA4335] p-2 text-white hover:bg-[#d33426]">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </button>
            <button className="rounded-full bg-green-600 p-2 text-white hover:bg-green-700">
              <span className="px-2 text-sm font-medium">WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Available Rewards Section */}
        <div className="mb-12">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Available Rewards</h2>
            <p className="mx-auto max-w-2xl text-gray-600">Redeem your referral coins for these exclusive rewards</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <RewardCard
              title="Premium Membership"
              description="1 month of premium membership with ad-free experience and exclusive content"
              image="/placeholder.svg?height=200&width=200"
              coins={500}
              category="subscription"
            />
            <RewardCard
              title="Cricket Bat"
              description="Professional grade cricket bat from our sponsor brands"
              image="/placeholder.svg?height=200&width=200"
              coins={2500}
              category="equipment"
            />
            <RewardCard
              title="Match Tickets"
              description="Two tickets to an upcoming cricket match in your city"
              image="/placeholder.svg?height=200&width=200"
              coins={1500}
              category="experience"
            />
            <RewardCard
              title="Team Jersey"
              description="Official jersey of your favorite cricket team"
              image="/placeholder.svg?height=200&width=200"
              coins={1000}
              category="merchandise"
            />
            <RewardCard
              title="Profile Badge"
              description="Exclusive referral champion badge for your profile"
              image="/placeholder.svg?height=200&width=200"
              coins={200}
              category="digital"
            />
            <RewardCard
              title="Cricket Ball Set"
              description="Set of 6 professional cricket balls"
              image="/placeholder.svg?height=200&width=200"
              coins={800}
              category="equipment"
            />
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center rounded-md bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700">
              View All Rewards
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Referral Leaderboard */}
        <div className="mb-12">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Referral Champions</h2>
            <p className="mx-auto max-w-2xl text-gray-600">Top referrers this month who are leading the scoreboard</p>
          </div>

          <ReferralLeaderboard />
        </div>

        {/* FAQ Section */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">How many coins do I earn per referral?</h3>
              <p className="text-gray-600">
                You earn 100 referral coins for each friend who signs up using your link and completes their profile.
                Your friend also receives 50 welcome coins.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">How long do referral coins last?</h3>
              <p className="text-gray-600">
                Referral coins don't expire! They remain in your account until you redeem them for rewards.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">How do I track my referrals?</h3>
              <p className="text-gray-600">
                You can track all your successful referrals in the "My Referrals" tab on this page, including pending
                and completed referrals.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">When will I receive my physical rewards?</h3>
              <p className="text-gray-600">
                Physical rewards like cricket equipment and merchandise typically ship within 7-10 business days after
                redemption. Digital rewards are credited instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
