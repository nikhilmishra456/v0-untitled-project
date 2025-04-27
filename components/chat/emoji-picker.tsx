"use client"

import { X } from "lucide-react"

interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void
  onClose: () => void
}

export default function EmojiPicker({ onEmojiSelect, onClose }: EmojiPickerProps) {
  // Common emojis for cricket chat
  const emojis = [
    "😀",
    "😂",
    "👍",
    "👏",
    "🙌",
    "🏏",
    "🏆",
    "⚾",
    "🎯",
    "🎪",
    "🔥",
    "💪",
    "👊",
    "🤝",
    "🙏",
    "❤️",
    "🎉",
    "🎊",
    "👀",
    "🤔",
    "😎",
    "🤩",
    "😍",
    "🥳",
    "🤗",
    "😱",
    "😮",
    "🤬",
    "😢",
    "😭",
  ]

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
      <div className="mb-2 flex items-center justify-between border-b border-gray-100 pb-1">
        <span className="text-sm font-medium text-gray-700">Emojis</span>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-8 gap-1">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            onClick={() => onEmojiSelect(emoji)}
            className="flex h-8 w-8 items-center justify-center rounded-md text-xl hover:bg-gray-100"
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  )
}
