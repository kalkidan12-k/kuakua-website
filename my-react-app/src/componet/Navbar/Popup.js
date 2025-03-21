import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

    import { IoCloseOutline } from 'react-icons/io5'

export default function Popup( {showPopup,setshowPopup}) {
  return (
    <>
      {!showPopup && (<div> <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
        <div className='fixed top-1/2 left-1/2 shadow:md -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md duration-200 w-[300px]'>
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold text-dark'>
                login
            </h1>
            <div>
            <IoCloseOutline className=' text-2xl cursor-pointer
            onClick={()=>setOrderPopup(flase)}'/>
        </div>
        </div>
        <div className='mt-4'>
            <input type='email' placeholder='enter email'
            className='w-full rounded-md border border-gray-300
            px-2 py-1 mb-4'/>
            <input type='email' placeholder='enter email'
            className='w-full rounded-md border border-gray-300
            px-2 py-1 mb-4'/>

        </div>
        {/* login button*/}
        <div>
        <button className='w-full bg-purple-400 text-white p-2 round-md onClick={()=>setOrderPopup(flase)}'>
            login
        </button>
        </div>
        {/* othersocial media */}
        <div>
        <p className='text-center'>
   or login to
        </p>
        <div className='flex justify-center text-2xl gap-2'>
            <FaFacebook className='hover:text-blue-400'/>
            <FaGoogle className='hover:text-purple-400'/>
        </div>
        </div>

        </div>
        
      </div>
        </div>)}
    </>
  )
}
