'use client'

import React from 'react'
import { cn } from '@/libs/utils'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import * as Icons from '@/design/icons'
import { Button } from '@/design/components'

const MenuButton = ({
  className,
  disabled,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & { disabled?: boolean }) => {
  return (
    <Button
      className={cn('h-8 w-8 bg-white hover:bg-gray-100 text-black', className)}
      disabled={disabled}
      {...props}
    />
  )
}
const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center p-2 rounded-lg shadow-md bg-white/90 backdrop-blur-xs">
      <MenuButton
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <Icons.Undo />
      </MenuButton>
      <MenuButton
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <Icons.Redo />
      </MenuButton>
      <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2" />
      <MenuButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        <Icons.Heading1 />
      </MenuButton>
      <MenuButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        <Icons.Heading2 />
      </MenuButton>
      <MenuButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        <Icons.Heading3 />
      </MenuButton>
      <MenuButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        <Icons.Heading4 />
      </MenuButton>
      <MenuButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        <Icons.Heading5 />
      </MenuButton>
      <MenuButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        <Icons.Heading6 />
      </MenuButton>
      <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2" />
      <MenuButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <Icons.Bold />
      </MenuButton>
      <MenuButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <Icons.Italic />
      </MenuButton>
      <MenuButton
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        <Icons.Code />
      </MenuButton>
      <MenuButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <Icons.Strike />
      </MenuButton>
      <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2" />
      <MenuButton onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        <Icons.ClearFormatting />
      </MenuButton>
      <MenuButton onClick={() => editor.chain().focus().clearNodes().run()}>
        <Icons.Eraser />
      </MenuButton>
      <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2" />
      <MenuButton
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        <Icons.CodeBlock />
      </MenuButton>
      <MenuButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <Icons.Bullet />
      </MenuButton>
      <MenuButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <Icons.OrderList />
      </MenuButton>

      <MenuButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <Icons.Quote />
      </MenuButton>
      <MenuButton onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <Icons.HorizontalRule />
      </MenuButton>
    </div>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ mergeNestedSpanStyles: true }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
]

export const TextEditor = ({
  className,
  onCreate,
  onTextCountChange,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  onCreate?: (editor: Editor) => void
  onTextCountChange?: (count: number) => void
}) => {
  const onEditorCreate = ({ editor }: { editor: Editor }) => {
    onCreate?.(editor)
  }

  const onEditorUpdate = ({ editor }: { editor: Editor }) => {
    onTextCountChange?.(editor.getText().length)
  }

  return (
    <div className={cn(className)}>
      <EditorProvider
        editorProps={{
          attributes: {
            class:
              'prose sm:prose-sm lg:prose-lg xl:prose-2xl mt-2 p-4 max-w-full min-h-[12.5rem] rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-hidden',
          },
        }}
        immediatelyRender={false}
        slotBefore={<MenuBar />}
        extensions={extensions}
        onCreate={onEditorCreate}
        onUpdate={onEditorUpdate}
      />
    </div>
  )
}
