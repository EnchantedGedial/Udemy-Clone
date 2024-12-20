"use client"
import React from 'react'
// import '../globals.css'
import Link from 'next/link'

import Containerin from './Containerin'
import { usePathname } from 'next/navigation';


const guestRoutes = [
  {

    label: "Dashboard",
    href: "/",
  },
  {

    label: "Browse",
    href: "/search",
  },
];

const teacherRoutes = [
  {

    label: "Courses",
    href: "/teacher/courses",
  },
  {

    label: "Analytics",
    href: "/teacher/analytics",
  },
  {

    label: "Review",
    href: "/teacher/review",
  },
]

const SideBar = () => {
  const pathname = usePathname();
  const isTeacher = pathname?.includes('/teacher');
  // const isPlayer = pathname?.includes('/teacher');

  const dynamicRoute = isTeacher ? teacherRoutes : guestRoutes;
  return (
    <>

      <div class="min-h-screen flex bg-gray-100">

        <div class="sidebar min-h-screen w-[3rem] overflow-hidden border-r hover:w-72 hover:bg-white hover:shadow-lg">
          <div class="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>

              <ul class="mt-6 space-y-2 tracking-wide">


                {dynamicRoute.map((item) => {
                  { console.log(item.label) }
                  return <li class="min-w-max">
                    <Link href={item.href} aria-label="dashboard" class="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
                      <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-cyan-400 dark:fill-slate-600"></path>
                        <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                        <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-sky-300"></path>
                      </svg>
                      <span class="-mr-1 font-medium">{item.label}</span>
                    </Link>
                  </li>


                })}

              </ul>
            </div>
            <div class="w-max -mb-3">
              <a href="#" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:fill-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                </svg>
                <span class="group-hover:text-gray-700">Settings</span>
              </a>

            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default SideBar

