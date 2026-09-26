
import  Image  from 'next/image';
import React, { useContext } from 'react';

import { FaClockRotateLeft, FaFire } from 'react-icons/fa6';
import { IoMdCheckmark } from 'react-icons/io';
import { MdOutlineStar } from 'react-icons/md';
import PlannedDeleteButton from './DeleteButtons/PlannedDeleteButton';
import SavedDeleteButton from './DeleteButtons/SavedDeleteButton';
import MarkDoneButton from './MarkDoneButton';
import Link from 'next/link';


const SelectedExerciseCard = ({exercise,type}) => {
   
   
    

    return (
       
      <div className='container max-auto '>
        
          <div className="flex items-center gap-4 rounded-lg border border-gray-700 bg-[#151922] p-2.5 text-white shadow-sm">
      
      {/* Exercise Image */}
      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md">
        <Image
          src={exercise.image}
          alt="cardImg"
          fill
          className="object-cover"
        />
      </div>

      {/* Exercise Information */}
      <div className="min-w-0 flex-1 hidden md:block">
        <h3 className="truncate text-sm font-bold uppercase tracking-wide">
          {exercise.name}
        </h3>

        <p className="mt-1 text-xs text-gray-400">
          {exercise.equipment}
        </p>

        {/* Stats */}
        <div className="mt-2 flex items-center gap-4 text-xs text-gray-300 className='text-[#C2F800]">
          <span className="flex items-center gap-1">
           <FaClockRotateLeft size={12} className='text-[#C2F800]'/>
            {exercise.duration} min
          </span>

          <span className="flex items-center gap-1 className='text-[#C2F800]">
            <FaFire size={12} className='text-[#C2F800]'  />
            {exercise.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1" >
           <MdOutlineStar size={12} className='text-[#C2F800]'  />
            {exercise.rating}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex shrink-0 items-center gap-2">

       <Link href={'/'}>
             <button
          className="rounded-full border border-gray-600 px-4 py-2 text-xs text-gray-300 transition hover:border-gray-400 hover:text-white"
        >
          View Details
        </button>
       </Link>
       
        {type==="planned" && (
          <MarkDoneButton exercise={exercise}></MarkDoneButton>
        )}
        
         {type === "planned" && (
            <PlannedDeleteButton exercise={exercise}></PlannedDeleteButton>
         )}

          {type === "saved" && (
            <SavedDeleteButton exercise={exercise}></SavedDeleteButton>
          )}
       
       
      </div>
    </div>
        
     </div> 
        
    );
};

export default SelectedExerciseCard;