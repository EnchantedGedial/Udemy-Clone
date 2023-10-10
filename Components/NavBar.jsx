"use client";
import Link from 'next/link'
import React from 'react'
import { UserButton } from "@clerk/nextjs";
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();
  const isTeacher = pathname?.startsWith('/teacher');
  const isCoursePage = pathname?.startsWith('/courses')
  return (
    <>
    
    <header class="text-gray-600 bg-blue-100 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'/'} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src="https://tailus.io/images/logo.svg" class="w-32" alt=""/>
    </Link>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={'/About'} class="mr-5 hover:text-gray-900">About</Link>
      <Link href={'/Stats'} class="mr-5 hover:text-gray-900">Stats</Link>
      <Link href={'/Dashbord'} class="mr-5 hover:text-gray-900">DashBord</Link>
      <Link href={'/'} class="mr-5 hover:text-gray-900">First Link</Link>
  
    </nav>
    <div>
  
      {isTeacher|| isCoursePage ? (
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
              Exit
            </button>
          </Link>
        ) :  (
          <Link href="/teacher/courses">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Teacher mode
            </button>
          </Link>
        ) }
     
    </div>
    <UserButton class="font-4xl" afterSignOutUrl="/"/>
    <Link href={"/sign-in"} class=" m-4 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign -in</Link>
    {/* <Link href={'/sign-up'} class=" m-4  inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign -up</Link> */}
  </div>
</header>
    
    </>
  )
}

export default NavBar
