import Image  from 'next/image';
import React from 'react';
import { FaClock, FaDumbbell, FaFire, FaRepeat, FaStar } from 'react-icons/fa6';
import { MdOutlineDateRange } from 'react-icons/md';
import { RiSave2Line } from 'react-icons/ri';

export const getExercises=async()=>{
    const res =await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data= await res.json();
    return data;}

const ExcerciseDetailspage = async({params}) => {
    const {exerciseId}=await params
    const exercises = await getExercises();

    const exercise=exercises .find(item=> String(item.id )=== String(exerciseId))

    return (
        <div className="  grid grid-cols-12 container mx-auto overflow-hidden rounded-2xl bg-[#0F1115] border border-gray-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"> {/* Image */} 
            <div className=" col-span-4 relative h-56 w-full"> 
                <div>
                    <Image
                        src={exercise.image}
                        alt="exercise Img"
                        width={600} 
                        height={1000}
                        className="object-cover p-5 rounded-xl" /> 
                        {/* Difficulty */}
                     <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-800 backdrop-blur"> {exercise.difficulty} </span> </div> {/* Content */} 
                
                </div>
                


                 {/* Title + Rating */}
                
            <div className="p-5 col-span-8"> 
                 <div className="mb-3 flex items-start justify-between gap-3">
                     <h2 className="text-xl font-bold text-white"> {exercise.name} </h2> 
                    <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-[#C2F800]">
                        <FaStar /> {exercise.rating} 
                    </div>
                 </div> 
                {/* Muscle Groups */}
                <div className="mb-4 flex flex-wrap gap-2"> 
                        {exercise.muscleGroups?.map((muscle) => (
                             <span key={muscle} className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-medium text-black" >
                                 {muscle} </span> ))} 
                </div>
            
            {/* Description */}
                <p className="mb-5 line-clamp-2 text-sm leading-6 text-[#9CA3AF]"> {exercise.description} </p> 
                                  {/* Workout Information */}
                 <div className="grid grid-cols-2 gap-4 border-y border-gray-100 py-4"> {/* Duration */} 
                    <div className="flex items-center gap-2"> 
                        <FaClock className="text-[#C2F800]" /> <div>
                        <p className="text-xs text-[#9CA3AF]"> Duration </p> 
                        <p className="text-sm font-semibold text-[#9CA3AF]"> {exercise.duration} min </p>
                                                 
                    </div>
                </div> 
                {/* Calories */}
                                                  
                                                  
                <div className="flex items-center gap-2">
                    <FaFire className="text-[#C2F800]" />
                     <div> 
                        <p className="text-xs text-[#9CA3AF]"> Calories </p>
                        <p className="text-sm font-semibold text-[#9CA3AF]">{exercise.caloriesBurned} kcal </p> 
                    </div> 
                </div>
            {/* Sets */} 
                <div className="flex items-center gap-2"> 
                    <FaDumbbell className="text-[#C2F800]" /> 
                    <div>
                        <p className="text-xs text-[#9CA3AF]"> Sets </p> 
                        <p className="text-sm font-semibold text-[#9CA3AF]">{exercise.sets} sets </p> 
                    </div>
                </div> {/* Reps */}
                   <div className="flex items-center gap-2" >
                     <FaRepeat className="text-[#C2F800]" /> 
                    <div>
                        <p className="text-xs text-[#9CA3AF]"> Reps </p>
                        <p className="text-sm font-semibold text-[#9CA3AF]"> {exercise.reps} </p> 
                    </div>
                      
                   </div>
                 </div>
            {/* Equipment */} 
                <div className="mt-4">
                   <p className="mb-1 text-xs font-medium text-[#9CA3AF]"> Equipment </p>
                   <p className="text-sm font-semibold text-[#9CA3AF]"> {exercise.equipment} </p> 
                </div> 


                <div className='my-4'>
                    <p className='font-extrabold'>INSTRUCTIONS</p>
                    <ul className='text-[12px] text-[#9CA3AF] leading-5'>
                        <li>1. Lie on the bench with eyes under the bar and feet planted.</li>
                        <li>2. Unrack with locked elbows and lower the bar to mid-chest.</li>
                        <li>3. Press up in a slight arc until elbows lock without bouncing.</li>
                        <li>4. Keep shoulder blades pinched and a natural arch in the back.</li>
                    </ul>
                </div >
                {/* Button */} 
                <div className='flex items-center gap-10'>
                    <button className="mt-5 px-6 rounded-2xl flex items-center justify-center gap-2 bg-[#C2F800] text-black py-3 text-sm font-semibold transition hover:bg-[#C2F800]"><MdOutlineDateRange /> Add to Today's Plan </button>
                    <button className="mt-5 px-6 rounded-2xl flex items-center justify-center gap-2 bg-black border border-white py-3 text-sm font-semibold text-white transition"> <RiSave2Line /> Save to Later </button>         
                </div>
                
            </div>
     </div>
    );
};

export default ExcerciseDetailspage;