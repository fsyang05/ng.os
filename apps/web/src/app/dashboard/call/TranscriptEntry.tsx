import { Card, CardContent } from "@/components/ui/card"

export type TranscriptEntryProps = {
  role: string
  ts: string
  text: string
  type: "call_begin" | "transcript" | "tool_call" | "call_end"
}

export default function TranscriptEntry({ role, ts, text, type }: TranscriptEntryProps) {
  const cardVariant =
    type === "call_begin"
      ? "bg-green-50 border border-green-200"
      : type === "call_end"
      ? "bg-red-50 border border-red-200"
      : "border"

  const roleColor =
    type === "call_begin" ? "text-green-900" : type === "call_end" ? "text-red-900" : "text-gray-900"

  return (
    <Card className={`rounded-xl shadow-none ${cardVariant}`}>
      <CardContent>
        <div className="flex items-baseline justify-between text-sm">
          <span className={`font-medium ${roleColor}`}>{role}</span>
          <span className="tabular-nums text-gray-500">{ts}</span>
        </div>
        <p className="mt-1 text-gray-800">{text}</p>
      </CardContent>
    </Card>
  )
}