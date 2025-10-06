import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TranscriptEntry from "./TranscriptEntry"
import CallHeader from "./CallHeader"

export default function CallPage() {
  const phone = "(410) 522-7395"
  const time = new Date(2025, 9, 5, 10, 15)

  const categories: Array<{ label: string; className: string }> = [
    { label: "State ID", className: "bg-blue-100 text-blue-700 border-blue-200" },
    { label: "Food Kitchen", className: "bg-green-100 text-green-700 border-green-200" },
  ]

  type Entry = { role: "Caller" | "Agent"; ts: string; text: string; type: "call_begin" | "transcript" | "tool_call" | "call_end" }
  const transcript: Entry[] = [
    { role: "Agent", ts: "10:14", text: "Call started.", type: "call_begin" },
    { role: "Caller", ts: "10:15", text: "Hi, does the Franciscan Center help people get a Maryland state ID?", type: "transcript" },
    { role: "Agent", ts: "10:15", text: "Yes, we do. I can walk you through what you need and when to come in.", type: "transcript" },
    { role: "Caller", ts: "10:16", text: "What do I have to bring?", type: "transcript" },
    { role: "Agent", ts: "10:16", text: "For a Maryland ID you'll need proof of identity, like a birth certificate or passport, proof of Maryland address, such as a lease, utility bill, or a letter from your shelter, and 3, your Social Security number or proof that you're not eligible. If you're missing anything, we can help request copies.", type: "transcript" },
    { role: "Caller", ts: "10:17", text: "Do I need an appointment, and what day should I come?", type: "transcript" },
    { role: "Agent", ts: "10:17", text: "No appointment needed. We host a walk-in ID clinic on Wednesdays from 10:00 AM to 2:00 PM. Bring what you have—we can review and make copies.", type: "transcript" },
    { role: "Caller", ts: "10:18", text: "How long does it take?", type: "transcript" },
    { role: "Agent", ts: "10:18", text: "It depends, but it typically takes a few months. We can talk about options when you come in.", type: "transcript" },
    { role: "Caller", ts: "10:19", text: "Okay, I'll come Wednesday. Thanks so much for the help.", type: "transcript" },
    { role: "Agent", ts: "10:19", text: "You're welcome. We'll be ready for you—ask for the ID clinic at the front desk.", type: "transcript" },
    { role: "Agent", ts: "10:20", text: "Call ended.", type: "call_end" },
  ]

  return (
    <div className="px-8 pb-6">
      <CallHeader />
      <Card className="mx-6">
        <CardHeader className="border-b">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-20">
            <div>
              <CardTitle className="text-2xl">{phone}</CardTitle>
              <div className="mt-1 text-sm text-gray-600">Time of Call: {time.toLocaleString()}</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <span key={c.label} className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${c.className}`}>
                    {c.label}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <button className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50">Summary/Transcript</button>
              </div>
            </div>

            <div className="text-left md:min-w-[260px]">
              <div className="text-sm text-gray-500">Summary</div>
              <p className="text-sm text-gray-700 mt-1">
                Confirmed Franciscan Center supports Maryland IDs. Advised to bring proof of identity and Maryland address
                (lease, bill, or shelter letter). Walk-in ID clinic on <span className="font-medium">Wednesdays 10:00 AM-2:00 PM</span>.
                Discuss assistance on arrival.
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-6">
          <ul className="space-y-4">
            {transcript.map((e, idx) => (
              <li key={idx}>
                <TranscriptEntry role={e.role} ts={e.ts} text={e.text} type={e.type} />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
/* reminder to make this route [callId] post-demo */