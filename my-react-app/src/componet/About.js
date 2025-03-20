import React from 'react'
import { FaUser } from 'react-icons/fa';

export default function About() {
    return (
      <div
      style={{
        backgroundImage: "url('/bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}   
      >
        <div>
          <h1 className='uppercase text-center text-2xl font-semibold text-dark tracking-wider pt-20'>
            About Us
          </h1>
          <div className='bg-white/80 p-10 mt-10'>
          Welcome to KUAKUA Where Taste Meets Convenience!
At KUAKUA, we believe that great food doesn’t have to be complicated. Whether you’re craving a comforting cup of tea, a rich and aromatic coffee, or a deliciously satisfying sandwich, we’ve got something to delight your taste buds. Our menu is designed to bring you the perfect blend of flavor, quality, and affordability.
          
        <div  className='pt-10 flex justify-center'>
        <button className='flex justify-center items-center gap-2 bg-blue-400 text-xl  px-4 py-2 h-[40px] text-white hover:scale-105 duration-300 font-semibold'>
                <FaUser/>
                My account
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  }
