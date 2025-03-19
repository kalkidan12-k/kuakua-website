import React from 'react';


export default function Part1() {
  return (
    <div className='relative'>
      <div className='container z-[-1]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>
          {/* Text Section */}
          <div>
            <h1 className='font-bold text-2xl'>FRESH AND HEALTHY SNACK DELIVERY IN KUAKUA</h1>
            <p className='mt-4 text-lg'>
              Delicious snacks delivered to your door from Kuakua.
            </p>
          </div>
          {/* Image Section  <div>
            <img src={te} alt='Fast Food' className='w-full h-auto rounded-lg shadow-lg' />
          </div>*/}
          
        </div>
      </div>
    </div>
  );
}