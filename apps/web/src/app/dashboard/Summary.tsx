'use client'

import Typewriter from 'typewriter-effect'
import { useState, type FormEvent, type KeyboardEvent } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const demoStrings: string[] = [
  "This morning, there were 10 incoming calls.",
  "- 5 calls about state ID services",
  "- 2 calls about food kitchen hours",
  "- 3 calls about baby items"
]

const demoString = `
Good morning! Here's your snapshot for <strong>today</strong>. <br><br>
<strong>10 incoming calls</strong> since 8:00 AM. <br>
• <strong>5</strong> — State ID services (3 new applicants, 2 renewals) <br>
• <strong>2</strong> — Food kitchen hours (both for tonight’s dinner) <br>
• <strong>3</strong> — Evictions (1 urgent, 2 informational) <br><br>
Average wait time: <strong>02:14</strong> · Missed calls: <strong>1</strong> (callback pending) <br>
Zip code mismatch detected on <strong>2 eviction calls</strong> (21201 vs 21217). <br>
Suggested actions: schedule a follow-up for the eviction urgent case and update the kitchen hours IVR prompt. <br><br>
Ask a follow-up below if you want a breakdown by <em>time of day</em>, <em>category</em>, or <em>caller zip</em>.
`

function SummaryCard() {
  const [message, setMessage] = useState("")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const trimmed = message.trim()
    if (!trimmed) return
    // TODO: wire up to your handler
    console.log("submit:", trimmed)
    setMessage("")
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      // Simulate submit on Enter without Shift
      const form = (e.currentTarget as HTMLTextAreaElement).form
      form?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
    }
  }

  return (
    <Card className="flex flex-col min-h-[400px] bg-blue-200 border-blue-400">
      <CardHeader>
        <CardTitle>
          <Typewriter
            options={{
              delay: 30,
              autoStart: true
            }}
            onInit={(typewriter) => {
              typewriter.typeString("Welcome back! Here's what you missed...")
                .start();
            }}
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Typewriter
          options={{
            delay: 10,
            strings: demoString,
            cursor: "",
          }}
          onInit={(typewriter) => {
            typewriter.pauseFor(2500)
              .typeString(demoString)
              .start();
          }}
        />
      </CardContent>
      <div className="mx-20 mt-auto">
        <form onSubmit={handleSubmit} className="flex items-end gap-2">
          <div className="relative flex-1">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Ask a follow-up..."
              className="w-full rounded-xl border border-gray-300 bg-blue-100 px-4 py-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none min-h-[48px]"
              aria-label="Chat input"
            />
          </div>
        </form>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Press Enter to send, Shift+Enter for new line</p>
      </div>
    </Card>
  );
}

export default function Summary() {
  return (
    <div className="container mx-auto px-6">
      <SummaryCard />
    </div>
  );
}