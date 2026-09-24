'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../app/asset/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const pathname = usePathname()

    const link=<>
            <li><Link  className="text-[12px]"  href={'/'}>Workouts</Link></li>
            <li><Link className="text-[12px]" href={'/MyPlan'}>My Plan</Link></li>
            
    </>
    return (
        
            <div >

                <div className="navbar  shadow-sm ">
                    
                    <div className="navbar-start container mx-auto  ">
                        <div className="dropdown flex justify-between gap-110 items-center  ">
                        <div tabIndex={0}  className="block md:hidden lg:hidden">
                           <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> </svg>

                        </div>
                        <ul
                            tabIndex={-1}
                            className=" menu menu-sm dropdown-content mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                        <div className='flex gap-1 items-center'>
                        <Image src={Logo} alt='logo' width={20} height={20}/>
                        <h2 className='text-white font-bold'>FITLOG</h2>
                    </div>
                    <div className="navbar-center hidden md:flex lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        {link}
                        </ul>
                    </div>
                    <div className="navbar-end space-x-4 flex items-center">
                            <Link href={'/'}> 
                            <button className='text-[12px]'>Plan</button>
                            </Link>
                            <button className='bg-[#C2F800] rounded-2xl px-2 text-[12px] text-black'>0</button>
                            <Link href={'/'}> 
                            <button className='text-[12px]'>Plan</button>
                            </Link>
                            <button  className='text-[12px]'>0</button>
                    </div>

                </div>

                
            </div>
                </div>
         </div>
    );
};

export default Navbar; 