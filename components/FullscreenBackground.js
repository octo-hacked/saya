import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

const FullscreenBackground = () => {
  return (
    <div className="relative h-screen w-full my-0 overflow-hidden">
      {/* Fullscreen Background Image with Responsive Margins */}
      <div className="relative h-full my-0 lg:mx-8">
        <Image
          src="/building.jpg" // Ensure correct spelling of 'building'
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-10 rounded-xl max-w-full"
        />
      </div>

      {/* Sticky Navbar on Top */}
      <Navbar />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-9xl font-extrabold text-center">
        <span>S A</span>
        <br />
        <span>Y A</span>
      </div>

      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold text-center">
        <h2>Go-to solution for all your elevator needs</h2>
      </div>
    </div>
  );
};

export default FullscreenBackground;
