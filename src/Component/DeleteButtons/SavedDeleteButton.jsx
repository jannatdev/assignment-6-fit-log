
'use client';
import { ExcerciseContext } from '@/Context/ExcerciseProvider';
import React, { useContext } from 'react';
import { RxCross1 } from 'react-icons/rx';

const SavedDeleteButton = ({exercise}) => {
    const {savedExcercises,setSavedExcercises,setMinutes,setCalories}=useContext(ExcerciseContext)
      
         
    const handleSavedDeleteButton=()=>{
    
    
    const restSavedExcercises=savedExcercises.filter(savedExcercis=> String(savedExcercis.id) !==String(exercise.id))
     setSavedExcercises(restSavedExcercises);
          
          setMinutes((prev)=> prev-(exercise.duration));
          setCalories((prev)=>prev-(exercise.caloriesBurned))
    }
    
    return (
        <div>
            <button
                onClick={handleSavedDeleteButton}
                className="p-2 text-gray-500 transition hover:text-white"
                aria-label="Remove exercise">
                <RxCross1 size={14} />
            </button> 
        </div>
    );
};

export default SavedDeleteButton;