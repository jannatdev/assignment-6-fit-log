import Image from 'next/image';
import React from 'react';
import BannerImg from '../app/asset/banner.png'

const Banner = () => {
    return (
        <div className='grid justify-center items-center ml-12 md:grid-cols-12  gap-10 container mx-auto p-10'>
            <div className='text-center md:text-left md:col-span-8 ' >
                <div className=' w-Full md:w-[80%]  space-y-1.5'>
                    <p className='text-[11px] font-bold text-[#C2F800]'>WORKOUT LIBRARY</p>
                    <h1 className=' text-[36px] md:text-[50px] font-bold leading-15'>TRAIN WITH INTENT. LOG  EVERY SET.</h1>
                    <p >FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into {"today's"} plan, and watch the {"week's"} work add up.</p>
                </div>
                <button className='bg-[#C2F800] text-[12px] font-bold py-1.5 px-5 text-black rounded-[5px] mt-4'>BROWSE WORKOUTS</button>
            </div>

            <Image src={BannerImg} alt="Banner Img" className='col-span-4'/>
            

        </div>
    );
};

export default Banner;