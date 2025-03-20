import React from 'react'

export default function Popup( {showPopup,setshowPopup}) {
  return (
    <>
      {!showPopup && (<div> <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
        <div className='fixed top-1/2 left-1/2 shadow:md -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-md duration-200 w-[300px]'>

        </div>
      </div>
        </div>)}
    </>
  )
}
