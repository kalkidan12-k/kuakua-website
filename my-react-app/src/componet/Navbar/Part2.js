import React from 'react'
import PrimaryButton from '../../Shared/PrimaryButton'

export default function Part2() {
  return (
    <div className='container py-15 relative'>
      <div>
      <h1 className='uppercase py-8 tracking-wider text-2xl font-semibold text-dark text-center'>
tast the HEALTHY difference
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
       <div>
        <p>
            {""}
            we know that <span>time</span> is the  greatest value modern world 
            our healthy snack plan delivery services good tast in kuakua
            who want eating healthy and tasty food
        </p>
      </div> 
      
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10 '>
      <div></div>
       <div>
        <p >
        {""}
         we know that <span>time</span> is the  greatest value modern world 
            our healthy snack plan delivery services good tast in kuakua
            who want eating healthy and tasty food
        </p>
      </div> 
      </div>
      <div className='flex justify-center mt-10 sm:mt-14'>
        <PrimaryButton/>
      </div>
      <div className='absolute top-3 left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
        <img src='/te.jpg' alt="Fast Food" className="max-w[160px] h-[85px]" />
      </div>
      <div className='absolute bottom-16 left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
        <img src='/chips1.jpg' alt="Fast Food" className="max-w[160px] h-[85px]" />
      </div>
      <div className='absolute top-10 right-16  sm:right-20 opacity-50 sm:opacity-100'>
        <img src='/sandwich.jpg' alt="Fast Food" className="max-w[160px] h-[85px]" />
      </div>
      <div className='absolute bottom-0 right-0  sm:right-20 opacity-50 sm:opacity-100'>
        <img src='/ertb2.jpg' alt="Fast Food" className="max-w[180px] h-[100px]" />
      </div>
    
      </div>
    </div>
  )
}
