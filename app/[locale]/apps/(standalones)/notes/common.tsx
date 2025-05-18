export interface Note {
  id: number
  title: string
  content: string
  lastModified: string
}

export interface Folder {
  id: number
  name: string
  notes: Note[]
}
