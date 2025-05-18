'use client'

import { useState } from 'react'
import { Editor } from '@tiptap/react'
import { cn } from '@/libs/utils'
import { Card, CardContent, CardFooter, Button, TextEditor } from '@/design/components'

export const InputCard = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const [editor, setEditor] = useState<Editor | null>(null)
  const [totalText, setTotalText] = useState<number>(0)

  return (
    <Card className={cn(className)}>
      <CardContent>
        <TextEditor
          onCreate={editor => setEditor(editor)}
          onTextCountChange={count => setTotalText(count)}
        />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 text-left">
          characters count: {totalText}
        </span>
        <Button
          className="w-20 h-8 rounded-2xl bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => {
            console.log(editor?.getHTML())
          }}
        >
          Post
        </Button>
      </CardFooter>
    </Card>
  )
}
