'use client'

import { useState, useRef, useCallback } from 'react'
import { cn } from '@/utils/cn'
import * as Icons from '@/design/icons'

interface ChipsInputProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  chipClassName?: string
  inputClassName?: string
  errorClassName?: string
  initialChips?: string[]
  maxChips?: number
  placeholder?: string
  onChipAdd?: (chip: string) => void
  onChipRemove?: (chip: string) => void
  showFooter?: boolean
  footerText?: string // 추가된 prop
}

interface HandleChipAdd {
  (chipValue: string): void
}

interface HandlePaste {
  (e: React.ClipboardEvent<HTMLInputElement>): void
}

interface HandleKeyDown {
  (e: React.KeyboardEvent<HTMLInputElement>): void
}

interface RemoveChip {
  (chipToRemove: string): void
}

export const ChipsInput: React.FC<ChipsInputProps> = ({
  className = '',
  chipClassName = '',
  inputClassName = '',
  errorClassName = '',
  initialChips = [],
  maxChips = 10,
  placeholder = 'Add tags...',
  onChipAdd,
  onChipRemove,
  showFooter = false,
  footerText = 'Press enter or paste comma-separated values to add tags.', // 기본값 추가
}) => {
  const [chips, setChips] = useState<string[]>(initialChips)
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChipAdd: HandleChipAdd = useCallback(
    chipValue => {
      const trimmedValue = chipValue.trim()
      if (!trimmedValue) return

      if (chips.length >= maxChips) {
        setError(`Maximum ${maxChips} tags allowed`)
        return
      }

      if (chips.includes(trimmedValue)) {
        setError('Tag already exists')
        return
      }

      setChips(prev => [...prev, trimmedValue])
      onChipAdd?.(trimmedValue)
      setError('')
    },
    [chips, maxChips, onChipAdd]
  )

  const handleKeyDown: HandleKeyDown = e => {
    if (e.key === 'Enter' && input) {
      e.preventDefault()
      handleChipAdd(input)
      setInput('')
    } else if (e.key === 'Backspace' && !input && chips.length > 0) {
      const lastChip = chips[chips.length - 1]
      setChips(prev => prev.slice(0, -1))
      onChipRemove?.(lastChip)
    }
  }

  const handlePaste: HandlePaste = e => {
    e.preventDefault()
    const pastedText = e.clipboardData.getData('text')
    const values = pastedText
      .split(/[,\n]/)
      .map(val => val.trim())
      .filter(Boolean)

    values.forEach(value => {
      if (chips.length < maxChips) {
        handleChipAdd(value)
      }
    })
    setInput('')
  }

  const removeChip: RemoveChip = chipToRemove => {
    setChips(prev => prev.filter(chip => chip !== chipToRemove))
    onChipRemove?.(chipToRemove)
  }

  const ChipsFooter = showFooter && (
    <div className="mt-2 text-xs text-slate-400">
      {footerText} {maxChips - chips.length} tags remaining.
    </div>
  )

  return (
    <div className={cn('w-full', className)}>
      <div
        className="w-full border border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500 transition-colors"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex flex-wrap gap-2">
          {chips.map((chip, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full group hover:bg-blue-200 transition-colors',
                chipClassName
              )}
              role="button"
              tabIndex={0}
            >
              <span className="text-sm font-medium">{chip}</span>
              <button
                onClick={() => removeChip(chip)}
                className="p-0.5 rounded-full hover:bg-blue-300 transition-colors"
                aria-label={`Remove ${chip}`}
              >
                <Icons.Close className="w-4 h-4" />
              </button>
            </div>
          ))}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            className={cn('flex-1 min-w-[120px] outline-hidden bg-transparent', inputClassName)}
            placeholder={chips.length === 0 ? placeholder : ''}
            aria-label="Add tags"
          />
        </div>
      </div>
      {error && (
        <div className={cn('flex items-center gap-2 mt-2 text-red-500 text-sm', errorClassName)}>
          <Icons.CircleAlert className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}
      {ChipsFooter}
    </div>
  )
}
