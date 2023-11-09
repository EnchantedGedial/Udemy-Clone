
import { ClerkProvider } from '@clerk/nextjs'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Containerin from '@/Components/Containerin'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Udemy Clone',
  description: 'This is a greate way to Edu Tech Brake Through',
}

export default function RootLayout({ children }) {
  return (
    <>
    <ClerkProvider>

    <html lang="en">
  
      <body className={inter.className}>
        <NavBar/>
        <div className="flex">
        <SideBar/>
        {children}
        </div>
      
        </body>
    </html>
    </ClerkProvider>
    </>
  )
}
