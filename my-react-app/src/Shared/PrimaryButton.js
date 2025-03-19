import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function PrimaryButton() {
  return (
    <div className='flex items-center group'>
  <button className='bg-pink-600 h-[40px] px-3 py-2 text-white'>
    choose your snack
  </button>
  <FaArrowRight className='inline-block group-hover:translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-pink-800 text-white' />
</div>
  )
}
