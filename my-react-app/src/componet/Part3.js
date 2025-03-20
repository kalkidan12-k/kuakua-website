import React from 'react'
import { FaBus } from 'react-icons/fa'

export default function Part3() {
  return (
    <div className='py-16 md:py-28 bg-gray-50'>
      <div className='container'>
        <h1 className='pb-16 tracing-wider text-2xl font-semibold text-dark text-center'>
            why choose us
        </h1>
      </div>
      {/*  card one*/}
      <div className='grid grid-cols-4 py-10 px-10'>
      <div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4'>
      <div className=' text-center flex flex-col items-center gap-1'>
        <p className='text-dark/70 font-semibold'>
        Quality Ingredients</p>
        <p className=' text-purple-400 rotate-90 translate-x-5 text-center text-5xl'>...</p>
        <FaBus className='text-4xl text-purple-400 '/>
      </div>
      </div>
      </div>

     {/*  card two*/}
      <div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4'>
      <div className=' text-center flex flex-col items-center gap-1'>
      <FaBus className='text-4xl text-blue-200 '/>
        <p className=' text-blue-200 rotate-90 translate-x-5 text-center text-5xl'>...</p>
        
        <p className='text-dark/70 font-semibold'>
        Affordable Prices</p>
      </div>
      </div>
      </div>

     { /*  card one*/}
      <div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4'>
      <div className=' text-center flex flex-col items-center gap-1'>
        <p className='text-dark/70 font-semibold'>
        Quick Service</p>
        <p className=' text-purple-400 rotate-90 translate-x-5 text-center text-5xl'>...</p>
        <FaBus className='text-4xl text-purple-400 '/>
      </div>
      </div>
      </div>

     {/*  card two*/}
      <div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4'>
      <div className=' text-center flex flex-col items-center gap-1'>
      <FaBus className='text-4xl text-blue-200 '/>
        <p className=' text-blue-200 rotate-90 translate-x-5 text-center text-5xl'>...</p>
        
        <p className='text-dark/70 font-semibold'>
        Something for Everyone</p>
      </div>
      </div>
      </div> 
    </div>
    </div>
  )
}
