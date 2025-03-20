import React from 'react'

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
        </div>
        <div>
            <IoCloseOutline/>
        </div>

        </div>
      </div>
        </div>)}
    </>
  )
}
