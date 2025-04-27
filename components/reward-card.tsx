import Image from "next/image"
import { Coins } from "lucide-react"

interface RewardCardProps {
  title: string
  description: string
  image: string
  coins: number
  category: string
}

export default function RewardCard({ title, description, image, coins, category }: RewardCardProps) {
  const getCategoryBadge = () => {
    switch (category) {
      case "equipment":
        return (
          <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">Equipment</span>
        )
      case "merchandise":
        return (
          <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
            Merchandise
          </span>
        )
      case "subscription":
        return (
          <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            Subscription
          </span>
        )
      case "experience":
        return (
          <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
            Experience
          </span>
        )
      case "digital":
        return <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">Digital</span>
      default:
        return (
          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">{category}</span>
        )
    }
  }

  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute right-2 top-2">{getCategoryBadge()}</div>
      </div>
      <div className="p-4">
        <h3 className="mb-1 text-lg font-bold text-gray-900">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Coins className="mr-1 h-5 w-5 text-yellow-500" />
            <span className="font-bold text-gray-900">{coins}</span>
            <span className="ml-1 text-sm text-gray-500">coins</span>
          </div>
          <button className="rounded-md bg-green-600 px-3 py-1 text-sm font-medium text-white hover:bg-green-700">
            Redeem
          </button>
        </div>
      </div>
    </div>
  )
}
