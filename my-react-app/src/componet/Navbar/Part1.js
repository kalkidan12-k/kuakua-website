import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';

export default function Part1() {
  return (
    <div className='relative z-[-1] bg-amber-50'>
      <div className='container py-16 sm:py-0 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>
          {/* Text Section */}
          <div className='font-bold text-2xl space-y-7 text-dark order-2 sm:order-1'>
            <h1 className='text-4xl'>
              FRESH AND HEALTHY SNACK <span className='text-sky-300 font-cursive text-5xl'>DELIVERY</span> <br/>IN KUAKUA
            </h1>
            <p className='lg:pr-64'>
              Delicious snacks delivered to your door from Kuakua.
            </p>
            {/* Button Section */}
            <div>
              <PrimaryButton />
            </div>
          </div>
          {/* Video Section */}
          <div className='order-1 relative z-30 sm:order-2'>
            <video
              src="/san.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full sm:scale-125 sm:-translate-y-17"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}