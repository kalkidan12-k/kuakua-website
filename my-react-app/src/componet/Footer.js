import React from 'react'
import { FaPhone } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    
    <div className=' text-white mt-20'>
        <div className='container bg-purple-500 rotate-t-3xl'>
        <div>
              <h1 className='uppercase font-bold text-center py-10 text-3xl'>
                contact us
            </h1>
            {/*  location */}
            <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-14 border-b-2 border-white ph-6'>
            <div className='text-center space-y-4'>
                <div className='flex justify-center '>
                    <IoLocationSharp className='text-5xl'/>
                </div>
                <p>
                    kito infront of jit campus<br/> jimma,ethiopia
                </p>
            </div>
        
        {/*  location */}
        
            <div className='text-center space-y-4'>
                <div className='flex justify-center '>
                    <MdEmail className='text-5xl'/>
                </div>
                <p>
                    kuakua@gmail.com
                </p>
                <p>
                    hk@gmail.com
                </p>
            </div>
            <div className='text-center space-y-4'>
                <div className='flex justify-center '>
                    <FaPhone className='text-5xl '/>
                </div>
                <p>
                    +251-911-111-111
                </p>
                <p>
                   +251-911-111-112
                </p>
            </div>
            </div>
    </div>
    </div>
    </div>
      
    
  )
}
