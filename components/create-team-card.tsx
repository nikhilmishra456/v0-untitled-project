import Link from "next/link"
import { Users } from "lucide-react"

export default function CreateTeamCard() {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <Users className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">Create Your Own Team</h3>
      <p className="mb-4 text-sm text-gray-600">
        Form your cricket team, invite players, and challenge other teams to matches.
      </p>
      <Link
        href="/teams/create"
        className="inline-flex w-full items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
      >
        Create Team
      </Link>
      <div className="mt-4">
        <p className="text-xs text-gray-500">
          Already have a team?{" "}
          <Link href="/teams/manage" className="font-medium text-green-600 hover:text-green-700">
            Manage Teams
          </Link>
        </p>
      </div>
    </div>
  )
}
