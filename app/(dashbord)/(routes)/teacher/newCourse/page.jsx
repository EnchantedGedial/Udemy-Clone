"use client"
import React, { useState } from 'react'

const page = () => {

  const [name, setname] = useState()
  // const [email,setemail] = useState()
  // const [password,setPassword] = useState()

  const handleSignin = async (e) => {
    e.preventDefault();
    console.log("request under process")

    try {
      const response = await fetch("http://localhost:3000/api/courses", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name }),

      });

      if (response.ok) {
        console.log("Product Added Sucessfully");
        setname('')
        
      } else {
        console.log("Product Not added");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return <>
    <div className='h-full w-9/11 m-auto border-collapse mt-10'>

      <form onSubmit={handleSignin}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Course Name</h2>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                    <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="name" onChange={(e) => setname(e.target.value)} />
                    {console.log(name)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>

      </form>


    </div>


  </>
}

export default page
