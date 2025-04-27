interface SkillLevelBadgeProps {
  level: "beginner" | "intermediate" | "advanced" | "professional"
}

export default function SkillLevelBadge({ level }: SkillLevelBadgeProps) {
  const getBadgeStyles = () => {
    switch (level) {
      case "beginner":
        return "bg-blue-100 text-blue-800"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "advanced":
        return "bg-orange-100 text-orange-800"
      case "professional":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${getBadgeStyles()}`}>
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  )
}
