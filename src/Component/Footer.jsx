import  Image  from 'next/image';
import React from 'react';
import Logo from '../app/asset/logo.png'

const Footer = () => {
    return (
        <div className=' container mx-auto ml-15 md:ml-0 mt-10 grid md:grid-cols-2 gap-4 md:gap-180  md:text-0  justify-center md:justify-between items-center'>
            <div className='flex items-center gap-2 mx-10'>
                <Image src={Logo} alt='logo' width={20} height={20}/>
                <h2 className='text-white font-bold'>FITLOG</h2>
            </div>
            <p className='italic text-[12px] text-[#9CA3AF]  text-center'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
    );
};

export default Footer;