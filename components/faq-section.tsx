"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How often are cricket rankings updated?",
    answer:
      "ICC cricket rankings for teams and players are typically updated after each series or tournament. Our website updates the rankings as soon as they are officially released by the ICC.",
  },
  {
    question: "How can I find information about upcoming cricket matches?",
    answer:
      "You can find information about upcoming cricket matches in our 'Fixtures' section. We provide a comprehensive schedule of international and domestic cricket matches, including venue details and start times.",
  },
  {
    question: "Do you provide live streaming of cricket matches?",
    answer:
      "We do not directly stream cricket matches, but we provide live scores, ball-by-ball commentary, and match updates in real-time. For official streaming, we recommend checking your local cricket broadcaster or official ICC partners.",
  },
  {
    question: "How can I get notifications for my favorite team's matches?",
    answer:
      "You can set up match notifications by creating an account and selecting your favorite teams in your profile settings. We'll send you alerts for match starts, innings breaks, and final results.",
  },
  {
    question: "Are historical cricket statistics available on your website?",
    answer:
      "Yes, we maintain a comprehensive database of cricket statistics dating back to the first international matches. You can access historical data through our 'Stats' section, including player records, team performances, and match results.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <button
            onClick={() => toggleFaq(index)}
            className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-gray-900 focus:outline-none"
          >
            {faq.question}
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform ${
                openIndex === index ? "rotate-180 transform" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="border-t border-gray-100 px-6 py-4">
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
