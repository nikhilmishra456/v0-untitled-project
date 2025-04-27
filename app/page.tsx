import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import RecentMatches from "@/components/recent-matches"
import FeatureCard from "@/components/feature-card"
import Leaderboards from "@/components/leaderboards"
import FaqSection from "@/components/faq-section"
import AboutUs from "@/components/about-us"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="Cricket Logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-green-700">CricketZone</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["Home", "Matches", "Teams", "Players", "News", "Chat", "Search", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 md:block">
              Sign Up
            </button>
            <button className="block md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-500 py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1600" alt="Cricket Background" fill className="object-cover" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Your Ultimate Cricket Destination
              </h1>
              <p className="mb-6 text-lg opacity-90">
                Stay updated with live scores, player stats, and exclusive cricket content all in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-white px-6 py-3 font-medium text-green-700 transition-colors hover:bg-gray-100">
                  Live Matches
                </button>
                <button className="rounded-full border border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10">
                  Explore Stats
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-64 md:h-80 md:w-80">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Cricket Player"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Matches Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">Recent Matches</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Stay updated with the latest cricket action from around the world
            </p>
          </div>
          <RecentMatches />
          <div className="mt-8 text-center">
            <Link href="#" className="inline-flex items-center text-green-600 hover:text-green-700">
              View all matches
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Top Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">Top Features</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Discover what makes CricketZone the ultimate cricket destination
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="trophy"
              title="Live Match Coverage"
              description="Real-time updates, ball-by-ball commentary, and live scores for all international and domestic matches."
            />
            <FeatureCard
              icon="bar-chart"
              title="Comprehensive Statistics"
              description="Detailed player and team statistics, historical data, and performance analytics."
            />
            <FeatureCard
              icon="users"
              title="Player Profiles"
              description="In-depth profiles of cricket players from around the world, including career stats and highlights."
            />
            <FeatureCard
              icon="calendar"
              title="Match Schedule"
              description="Complete cricket calendar with upcoming matches, tournaments, and series from across the globe."
            />
            <FeatureCard
              icon="video"
              title="Video Highlights"
              description="Watch key moments, best catches, and spectacular shots from recent matches."
            />
            <FeatureCard
              icon="message-square"
              title="Community Forums"
              description="Join discussions with fellow cricket enthusiasts and share your thoughts on the game."
            />
          </div>
        </div>
      </section>

      {/* Leaderboards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">Leaderboards</h2>
            <p className="mx-auto max-w-2xl text-gray-600">Top performing teams and players across different formats</p>
          </div>
          <Leaderboards />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Find answers to common questions about cricket and our platform
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <FaqSection />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AboutUs />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Cricket Logo"
                  className="h-10 w-10 rounded-full bg-white p-1"
                />
                <span className="text-xl font-bold">CricketZone</span>
              </div>
              <p className="mb-4 text-gray-400">
                Your ultimate destination for all things cricket - scores, stats, news, and more.
              </p>
              <div className="flex space-x-4">
                {["twitter", "facebook", "instagram", "youtube"].map((social) => (
                  <a key={social} href="#" className="text-gray-400 transition-colors hover:text-white">
                    <span className="sr-only">{social}</span>
                    <div className="h-6 w-6 rounded-full bg-gray-700"></div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Live Scores", "Fixtures", "Rankings", "News", "Videos"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Resources</h3>
              <ul className="space-y-2">
                {["Teams", "Players", "Venues", "Records", "History", "Rules"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Subscribe</h3>
              <p className="mb-4 text-gray-400">Get the latest cricket updates and news delivered to your inbox.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-md border-0 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-green-600 px-4 py-2 font-medium text-white transition-colors hover:bg-green-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} CricketZone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
