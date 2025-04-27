"use client"

import { useState, type KeyboardEvent } from "react"
import { Smile, Send } from "lucide-react"

interface MessageInputProps {
  onSendMessage: (text: string) => void
  onEmojiButtonClick: () => void
  className?: string
}

export default function MessageInput({ onSendMessage, onEmojiButtonClick, className }: MessageInputProps) {
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage("")
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (className) {
    return <Send className={className} />
  }

  return (
    <div className="flex items-center rounded-lg border border-gray-300 bg-white">
      <button type="button" onClick={onEmojiButtonClick} className="px-3 py-2 text-gray-500 hover:text-gray-700">
        <Smile className="h-5 w-5" />
      </button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        className="flex-1 border-0 bg-transparent px-2 py-2 focus:outline-none focus:ring-0"
      />
      <button
        type="button"
        onClick={handleSend}
        className="px-3 py-2 text-green-600 hover:text-green-700"
        disabled={!message.trim()}
      >
        <Send className="h-5 w-5" />
      </button>
    </div>
  )
}
