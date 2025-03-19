import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';

export default function Part1() {
  return (
    <div className='relative z-[-1]'>
      <div className='container py-16 sm:py-0 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>
          {/* Text Section */}
          <div className='font-bold text-2xl space-y-7 text-dark order-2 sm:order-1'>
            <h1 className='text-4xl'>FRESH AND HEALTHY SNACK <span className='text-sky-300 font-cursive text-6xl'>DELIVERY</span> {"    "} IN KUAKUA</h1>
            <p className='lg:pr-64'>
              Delicious snacks delivered to your door from Kuakua.
            </p>
            {/* button section */}
            <div>
              <PrimaryButton/>
            </div>
          </div>
          {/* Image Section */}
          <div className='order-1  relative z-30 sm:order-2'>
            <img src="/fastFood.jpeg" alt="Fast Food" className="w-full sm:scale-125 sm:-translate-y-17" />
          </div>
        </div>
      </div>
    </div>
  );
}