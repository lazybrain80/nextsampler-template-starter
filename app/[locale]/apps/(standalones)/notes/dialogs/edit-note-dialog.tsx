'use client'

import React, { useEffect, useState } from 'react'
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


interface editNoteDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  note: Note
  updateNoteAction: (newNote: Note) => void
}

export const EditNoteDialog = ({ className, note, updateNoteAction, ...props }: editNoteDialogProps) => {
  const t = useTranslations('NoteApp')

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    setTitle(note.title)
    setContent(note.content)
  }, [note])

  const resetDialog = () => {
    setTitle('')
    setContent('')
  }

  const handleSave = () => {
    const newNote: Note = {
      id: note.id,
      title,
      content,
      lastModified: new Date().toLocaleString()
    }
    resetDialog()
    updateNoteAction(newNote)
  }

  return (
    <div className={cn(className)}>
      <Dialog {...props}>
        <DialogTrigger asChild>
          <Button className='bg-slate-100 hover:bg-slate-300 text-sky-500 hover:text-sky-600 font-bold rounded-lg'>
            <Icons.Edit2 />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('edit_note')}</DialogTitle>
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