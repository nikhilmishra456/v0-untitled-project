import { BarChart2, Calendar, MessageSquare, Trophy, Users, Video } from "lucide-react"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "trophy":
        return <Trophy className="h-6 w-6 text-green-600" />
      case "bar-chart":
        return <BarChart2 className="h-6 w-6 text-green-600" />
      case "users":
        return <Users className="h-6 w-6 text-green-600" />
      case "calendar":
        return <Calendar className="h-6 w-6 text-green-600" />
      case "video":
        return <Video className="h-6 w-6 text-green-600" />
      case "message-square":
        return <MessageSquare className="h-6 w-6 text-green-600" />
      default:
        return <Trophy className="h-6 w-6 text-green-600" />
    }
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
        {getIcon()}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
