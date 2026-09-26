import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
       <main className="min-h-screen bg-[#0D1016] text-white flex items-center justify-center px-6">
         <div className="text-center max-w-lg"> 
            
        {/* 404 */} 
        <h1 className="text-[120px] sm:text-[160px] font-black leading-none text-[#C2F800]"> 404 </h1>
         {/* Title */}
         
       <h2 className="mt-6 text-3xl sm:text-4xl font-bold"> Page Not Found </h2> 
       {/* Description */} 
       <p className="mt-4 text-gray-400 text-sm sm:text-base leading-7"> Sorry, the page you are looking for {"doesn't"} exist or may have been moved somewhere else. </p> {/* Button */} 
       <Link href="/" className="inline-flex mt-8 items-center justify-center rounded-xl bg-[#C2F800] px-6 py-3 font-semibold text-black transition hover:bg-[#d2ff33] hover:scale-105" > Back to Home </Link> 
       </div> 
       </main>
    );
};

export default notFound;