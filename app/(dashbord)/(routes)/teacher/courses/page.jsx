import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Link href='/teacher/newCourse'>

       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-10">
              Add New Course
            </button>
      
      </Link>
    </div>
  )
}

export default page
