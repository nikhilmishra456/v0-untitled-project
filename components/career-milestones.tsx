import { Trophy } from "lucide-react"

interface CareerMilestonesProps {
  milestones: Array<{
    achievement: string
    date: string
  }>
}

export default function CareerMilestones({ milestones }: CareerMilestonesProps) {
  return (
    <div className="space-y-4">
      {milestones.map((milestone, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
            <Trophy className="h-4 w-4 text-green-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">{milestone.achievement}</p>
            <p className="text-sm text-gray-500">{milestone.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
