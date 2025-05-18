'use client'

import React from 'react'
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
} from '@/design/components'
import * as Icons from '@/design/icons'


interface deleteNoteDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  folderId : number
  noteId: number
  deleteNoteAction: (folderId : number, noteId: number) => void
}

export const DeleteNoteDialog = ({ className, folderId, noteId, deleteNoteAction, ...props }: deleteNoteDialogProps) => {
  const t = useTranslations('NoteApp')
  
  const handleDelete = () => {
    deleteNoteAction(folderId, noteId)
  }

  return (
    <div className={cn(className)}>
      <Dialog {...props}>
        <DialogTrigger asChild>
          <Button className='bg-slate-100 hover:bg-slate-300 text-red-500 hover:text-red-600 font-bold rounded-lg'>
            <Icons.Trash2 />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('delete_note')}</DialogTitle>
            <DialogClose />
          </DialogHeader>
          <div className='py-4'>
            <p>{t('delete_note_message')}</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                className='bg-slate-100 hover:bg-slate-300 text-red-500 hover:text-red-600 font-bold py-2 px-4 rounded-lg'
                onClick={handleDelete}
              >
                <Icons.Save className='mr-2' /> {t('delete_note_confirm')}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}