import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="grid gap-12 md:grid-cols-2">
      <div className="flex flex-col justify-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">About CricketZone</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            CricketZone is your ultimate destination for all things cricket. Founded in 2023 by a team of passionate
            cricket enthusiasts, our mission is to bring the excitement and depth of cricket to fans around the world.
          </p>
          <p>
            We provide comprehensive coverage of cricket matches, including live scores, ball-by-ball commentary,
            detailed statistics, and expert analysis. Our platform covers all formats of the game - Test, ODI, T20 -
            across international and domestic competitions.
          </p>
          <p>
            What sets us apart is our commitment to delivering accurate, timely, and engaging cricket content. Whether
            you're looking for the latest match updates, player profiles, or historical cricket data, CricketZone has
            you covered.
          </p>
          <p>
            Join our growing community of cricket fans and experience the game like never before. From casual followers
            to die-hard enthusiasts, CricketZone is designed to enhance your cricket experience.
          </p>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="relative h-full w-full max-w-md overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/placeholder.svg?height=600&width=400"
            alt="Cricket Stadium"
            width={400}
            height={600}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="mb-2 text-2xl font-bold">Our Vision</h3>
            <p className="text-sm opacity-90">
              To be the most trusted and comprehensive cricket platform, connecting fans with the sport they love
              through innovative technology and passionate storytelling.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
