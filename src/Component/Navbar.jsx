'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import Logo from '../app/asset/logo.png'
import { usePathname } from 'next/navigation';
import { ExcerciseContext } from '@/Context/ExcerciseProvider';

const Navbar = () => {


    const {plannedExcercises,savedExcercises}=useContext(ExcerciseContext)
    
    const pathname = usePathname()

    const link=<>
            <li><Link  className={`${pathname === '/'?  " text-[#C2F800]" :""} "text-[12px]"`}  href={'/'}>Workouts</Link></li>
            <li><Link className={`${pathname === '/MyPlan'?  " text-[#C2F800]" :""} "text-[12px]"`} href={'/MyPlan'}>My Plan</Link></li>
            
    </>
    return (
        
            

                <div className="navbar  shadow-sm ">
                    
                   
                 <div className="navbar-start flex items-center justify-between container mx-auto  ">
                     <div className="dropdown md:hidden  ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm" >
                             <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> 
                        </div>
                        <ul tabIndex={0} 
                        className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow" > 
                        {link}
                         </ul>
                        
                     </div>

                     {/* Logo */}
                    <div className='flex gap-1 items-center'>
                        <Image src={Logo} alt='logo' width={20} height={20}/>
                        <h2 className='text-white font-bold'>FITLOG</h2>
                    </div>



                    <div className="navbar-center hidden md:flex lg:flex mr-25">
                        <ul className="menu menu-horizontal px-1">
                        {link}
                        </ul>
                    </div>
                    <div className="navbar-end space-x-4 flex items-center">
                            <Link href={'/MyPlan'}> 
                            <button className='text-[12px]'>Plan</button>
                            </Link>
                            <button className='bg-[#C2F800] rounded-2xl px-2 text-[12px] text-black'>{plannedExcercises.length} </button>
                            <Link href={'/MyPlan'}> 
                            <button className='text-[12px]'>Saved</button>
                            </Link>
                            <button  className='text-[12px] border border-gray-700 rounded-2xl px-2'>{savedExcercises.length} </button>
                    </div>

                </div>

                
          </div>
  
    
    );
};

export default Navbar; 