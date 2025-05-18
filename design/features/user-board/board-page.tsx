import { ReactNode } from 'react'

export const BoardPage = ({ children }: { children: ReactNode }) => {
  return <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">{children}</div>
}
