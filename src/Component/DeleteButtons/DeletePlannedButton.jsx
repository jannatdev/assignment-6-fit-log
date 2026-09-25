'use client'
import { ExcerciseContext } from '@/Context/ExcerciseProvider';
import React, { useContext } from 'react';
import SelectedExerciseCard from '../SelectedExcerciseCard';
import { RxCross1 } from 'react-icons/rx';

const DeletePlannedButton = ({exercise}) => {
    const {plannedExcercises,setPlannedExcercises,savedExcercises,setSavedExcercises,minutes,setMinutes,calories,setCalories}=useContext(ExcerciseContext)
  
     const handleDeleteButton=()=>{
        const restPlannedExercises= plannedExcercises.filter((plannedExcercise)=> String(plannedExcercise.id) !== String(exercise.id))
      
      setPlannedExcercises(restPlannedExercises);
        
        const restSavedExcercises=savedExcercises.filter(savedExcercis=> String(savedExcercis.id) !==String(exercise.id))
         setSavedExcercises(restSavedExcercises);
      
      setPlannedExcercises((prev)=>prev-1);
      
      setSavedExcercises((prev)=>prev-1);
      setMinutes((prev)=> prev-(exercise.duration));
      setCalories((prev)=>prev-(exercise.caloriesBurned))
    }

    return (
        <div>
            <button
         onClick={()=>handleDeleteButton()}
          className="p-2 text-gray-500 transition hover:text-white"
          aria-label="Remove exercise"
        >
          <RxCross1 size={14} />
        </button> 
            
        </div>
    );
};

export default DeletePlannedButton;