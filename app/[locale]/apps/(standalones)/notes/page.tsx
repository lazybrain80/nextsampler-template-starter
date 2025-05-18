'use client'

import { useState } from 'react'
import { cn } from '@/libs/utils'
import { useTranslations } from 'next-intl'
import React from 'react'
import {
  BoardHeader,
} from '@/design/features/user-board'
import {
  Card,
  Button,
} from '@/design/components'
import * as Icons from '@/design/icons'
import { Folder, Note } from './common'
import {
  NewNoteDialog,
  EditNoteDialog,
  DeleteNoteDialog,
} from './dialogs'

const NotesAppPage = () => {
  const t = useTranslations('NoteApp')

  const [folders, setFolders] = useState<Folder[]>([
    {
      id: 1,
      name: 'Personal',
      notes: [
        {
          id: 1,
          title: 'Example Note',
          content: 'This is the Example note',
          lastModified: '2021-09-01'
        },
    ] },
    { id: 2, name: 'Work', notes: [] },
    { id: 3, name: 'Ideas', notes: [] },
  ])
  const [activeFolder, setActiveFolder] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [titleEditable, setTitleEditable] = useState(false)

  const addFolder = () => {
    const newFolder = {
      id: folders.length + 1,
      name: `New Folder ${folders.length + 1}`,
      notes: [],
    }
    setFolders([...folders, newFolder])
  }

  const addNote = (folderId: number, note: Note) => {
    const updatedFolders = folders.map(folder => {
      if (folder.id === folderId) {
        const newNote = {
          ...note,
          lastModified: new Date().toLocaleString(),
        }
        return { ...folder, notes: [...folder.notes, newNote] }
      }
      return folder
    })
    setFolders(updatedFolders)
  }

  const deleteNote = (folderId : number, noteId: number) => {
    const updatedFolders = folders.map(folder => {
      if (folder.id === folderId) {
        return { ...folder, notes: folder.notes.filter(note => note.id !== noteId) }
      }
      return folder
    })
    setFolders(updatedFolders)
  }

  const updateNote = (updatedNote: Note) => {
    const updatedFolders = folders.map(folder => {
      if (folder.id === activeFolder) {
        return {
          ...folder,
          notes: folder.notes.map(n => (n.id === updatedNote.id ? updatedNote : n))
        }
      }
      return folder
    })
    setFolders(updatedFolders)
  }

  const updateFolderTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedFolders = folders.map((folder: Folder) => {
      if (folder.id === activeFolder) {
        return { ...folder, name: e.target.value }
      }
      return folder
    })
    setFolders(updatedFolders)
  }

  const filteredFolders = folders.filter(folder =>
    folder.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8'>
      {/* Page Header */}
      <BoardHeader title={t('title')} />
      {/* Profile Header */}
      <Card className='rounded-2xl shadow-lg h-[90%] bg-gray-100 flex'>
        {/* Note Sidebar */}
        <div className='w-64 bg-sky-500 p-6 text-white'>
          <h1 className='text-2xl font-bold mb-6'>{t('title')}</h1>
          <div className='mb-4'>
            <div className='flex items-center bg-sky-600 rounded-lg p-2'>
              <Icons.Search className='text-sky-300 mr-2' />
              <input
                type='text'
                placeholder='Search folders...'
                className='bg-transparent text-white placeholder-sky-300 focus:outline-hidden w-full'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className='h-[87%] overflow-y-auto scrollbar-hide'>
          <ul>
            {filteredFolders.map((folder) => (
              <li
                key={folder.id}
                className={`flex items-center py-2 px-4 rounded-lg cursor-pointer ${activeFolder === folder.id ? 'bg-sky-600' : 'hover:bg-sky-600'}`}
                onClick={() => setActiveFolder(folder.id)}
              >
                <Icons.BookOpen className='mr-2' />
                {folder.name}
              </li>
            ))}
          </ul>
          <Button
            className='mt-4 w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center'
            onClick={addFolder}
          >
            <Icons.Add className='mr-2' /> New Folder
          </Button>
          </div>
        </div>

        {/* Note Content */}
        <div className='flex-1 p-10'>
          <div className='flex justify-between items-center mb-6'>
            {/* Note title Content */}
            <div className='flex items-center relative'>
              {titleEditable
                ?(
                    <div className='flex items-center absolute'>
                    <input
                      type='text'
                      className='text-3xl font-bold text-gray-800 focus:outline-hidden border border-slate-500 p-1'
                      value={folders.find(f => f.id === activeFolder)?.name || ''}
                      onChange={updateFolderTitle}
                      onBlur={() => setTitleEditable(false)}
                      style={{ width: `${(folders.find(f => f.id === activeFolder)?.name.length || 1) + 1}ch` }}
                    />
                    <Button
                      className='bg-slate-100 hover:bg-slate-300 rounded-lg ml-4'
                      onClick={() => setTitleEditable(!titleEditable)}
                    >
                      <Icons.Save className='text-sky-500' />
                    </Button>
                    </div>
                )
                :(
                  <></>
              )}
              <span
                className={cn(
                    'text-3xl font-bold text-gray-800',
                    titleEditable && 'hidden'
                  )}>
                {folders.find(f => f.id === activeFolder)?.name || 'Select a folder'}
              </span>
              <Button
                className={cn(
                  'bg-slate-100 hover:bg-slate-300 rounded-lg ml-4',
                  titleEditable && 'hidden'
                )}
                onClick={() => setTitleEditable(!titleEditable)}
              >
                <Icons.Edit2 className='text-sky-500' />
              </Button>
            </div>
            <Button className='bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg flex items-center'>
              <Icons.Settings className='mr-2' /> Settings
            </Button>
          </div>

          {/* Note Content */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {folders
              .find(f => f.id === activeFolder)
              ?.notes.map(note => (
                <div key={note.id} className='bg-white rounded-2xl shadow-lg p-6 hover:shadow-lg transition-shadow duration-300'>
                  <h3 className='text-xl font-semibold mb-2'>{note.title}</h3>
                  <p className='text-gray-600 mb-4'>{note.content.substring(0, 100)}...</p>
                  <div className='flex justify-between items-center text-sm text-gray-500'>
                    <span>{note.lastModified}</span>
                    <div className='flex items-center'>
                      <EditNoteDialog
                        className='mr-2'
                        note={note}
                        updateNoteAction={updateNote}
                      />
                      <DeleteNoteDialog
                        folderId={activeFolder}
                        noteId={note.id}
                        deleteNoteAction={deleteNote}
                      />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <NewNoteDialog
            className='mt-6'
            appendNoteAction={(newNote) => addNote(activeFolder, newNote)} 
          />
        </div>
      </Card>
    </div>
  )
}

export default NotesAppPage