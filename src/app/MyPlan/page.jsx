'use client';
import SelectedExerciseCard from '@/Component/SelectedExcerciseCard';
import { ExcerciseContext } from '@/Context/ExcerciseProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useState } from 'react';
  
 export const getExcercises=async()=>{
    const res =await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data= await res.json();
    return data;}

const MyPlanPage = () => {

    const excercises =  getExcercises();
    const pathname = usePathname()
    
 const {plannedExcercises,minutes,calories,savedExcercises,selectedExercises} =useContext(ExcerciseContext);
 

 const [shortBy,setShortBy] = useState("duration")
 

   const shortExercises=(exercises)=>{
     const shortedExercises= [...exercises];


     if(shortBy==="duration"){
        shortedExercises.sort((a,b)=> a.duration - b.duration);
     }else if(shortBy==="caloriesBurned"){
        shortedExercises.sort((a,b) => b.caloriesBurned -a.caloriesBurned);
     }else if(shortBy === "rating"){
        shortedExercises.sort((a,b) => a.rating-b.rating);
     }
     return shortedExercises;
   }
    
   const shortedPlannedExcercises =shortExercises(plannedExcercises);
   const shortedSavedExcercises = shortExercises(savedExcercises);
 
 
    return (
        
        <div className=' mx-auto'>
            <div className=' text-center md:text-left space-y-2'>
                <h2 className='text-[30px] font-bold'>MY PLAN</h2>
                <p className='text-[14px]'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
         
            <div className='grid grid-cols-3 bg-[#13161D] py-10 px-5 mt-10 container mx-auto'>
                <div>
                    <p className='text-[12px] text-[#9CA3AF]'>Exercises</p>
                    <button className='text-[36px] font-bold text-[#CCFF00]'>{plannedExcercises.length+savedExcercises.length}</button>
                    
                </div>
                <div >
                    <p className='text-[12px] text-[#9CA3AF]'>Minutes</p>
                    <button className='text-[36px] font-bold '>{minutes}</button>
                </div>
                <div >
                    <p className='text-[12px] text-[#9CA3AF]'>Calories</p>
                    <button className='text-[36px] font-bold'>{calories}</button>
                </div>
                
            </div>
             
             <div className='container mx-auto'>
                        <fieldset className="fieldset bg-black">
                            <legend className="fieldset-legend text-[#CCFF00]">Short By</legend>
                            <select
                            value={shortBy}
                            onChange={(e)=> setShortBy(e.target.value)}
                              className="select bg-black border border-gray-300 px-15">
                                <option disabled={true}>Short By</option>
                                <option>Duration</option>
                                <option>Calorries</option>
                                <option>Rating</option>
                            </select>
                           
                            </fieldset>
                    </div>



            <div className="overflow-x-auto w-full my-5">
                    <div className="tabs-lift tabs w-full">
                        
                        <input type="radio"
                         name="my_tabs_7" 
                        
                        className="tab z-1 bg-[#13161D] text-white "
                          aria-label="Today's Plan" />
                        <div className="sticky inset-s-0 tab-content w-full border-base-900  p-6">
                          
                            {shortedPlannedExcercises.length>0?(
                                shortedPlannedExcercises.map((exercise)=>{
                                    return <SelectedExerciseCard key={exercise.id} exercise={exercise} type="planned"  />
                                })
                            ):(<div className='text-center mt-20'>
                                    <h2 className='text-[30px] font-bold'>NOTHING HERE YET</h2>
                                    <p className='text-[14px]'>Browse the library and add a lift to get today moving.</p>
                                    <Link href={'/'}>
                                    <button className="mt-5  rounded-2xl px-6  bg-[#C2F800] text-black py-3 text-sm font-semibold transition hover:bg-[#C2F800]"> Go to workouts </button>
                                    </Link>
                                    
                                </div>)
                           }
                        </div>
                        
                        <input type="radio" name="my_tabs_7" className="tab z-1  bg-[#13161D]  text-white" aria-label="Saved" defaultChecked />
                        <div className="sticky inset-s-0 tab-content w-full border-base-300  p-6">
                            
                            {
                            shortedSavedExcercises.length>0?(
                                shortedSavedExcercises.map((exercise)=>{
                                    return <SelectedExerciseCard key={exercise.id} exercise={exercise} type="saved" />
                                })
                            ):(<div className='text-center mt-30'>
                                <h2 className='text-[30px] font-bold'>NOTHING HERE YET</h2>
                                <p className='text-[14px]'>Browse the library and add a lift to get today moving.</p>
                                 <Link href={'/'}>
                                    <button className="mt-5  rounded-2xl px-6  bg-[#C2F800] text-black py-3 text-sm font-semibold transition hover:bg-[#C2F800]"> Go to workouts </button>
                                 </Link>
                            </div>)
                           } 
                        </div>
                        
                    </div>
                    
            </div>
                 
         
            
            
           
            
            
        </div>
    );
};

export default MyPlanPage;