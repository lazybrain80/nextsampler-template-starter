import '@/styles/globals.css'
import { SidebarNav } from '@/design/features/user-board'
import { getUserBoardConfig } from '@/config/ui/user-board'

type DashboardLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default async function DashboardLayout({
  children
}: DashboardLayoutProps ) {
  const navMenu = await getUserBoardConfig()
  return (
    <>
      <main className='flex h-screen'>
        <SidebarNav items={navMenu.sidebarNav} />
        {children}
      </main>
    </>
  )
}
