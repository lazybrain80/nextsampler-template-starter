'use client'

import React, { useState } from 'react'
import { cn } from '@/libs/utils'
import { useTranslations } from 'next-intl'
import {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  Button,
  Input,
  Textarea,
} from '@/design/components'
import * as Icons from '@/design/icons'
import { Note } from '../common'


interface newNoteDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  appendNoteAction: (newNote: Note) => void
}

export const NewNoteDialog = ({ className, appendNoteAction, ...props }: newNoteDialogProps) => {
  const t = useTranslations('NoteApp')

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const resetDialog = () => {
    setTitle('')
    setContent('')
  }

  const handleSave = () => {
    const newNote: Note = {
      id: Math.floor(Math.random() * 1000),
      title,
      content,
      lastModified: new Date().toLocaleString()
    }
    resetDialog()
    appendNoteAction(newNote)
  }

  return (
    <div className={cn(className)}>
      <Dialog {...props}>
        <DialogTrigger asChild>
          <Button className='text-white bg-sky-500 hover:bg-sky-600 font-bold py-2 px-4 rounded-lg shadow-lg'>
            <Icons.Add className='mr-2' size={18} /> {t('add_note')}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('new_note')}</DialogTitle>
            <DialogClose />
          </DialogHeader>
          <Input
            className='w-full'
            placeholder={t('note_title')}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            className='w-full'
            placeholder={t('note_content')}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={handleSave} className='text-white bg-sky-500 hover:bg-sky-600 font-bold py-2 px-4 rounded-lg'>
                <Icons.Save className='mr-2' /> {t('save_note_confirm')}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}