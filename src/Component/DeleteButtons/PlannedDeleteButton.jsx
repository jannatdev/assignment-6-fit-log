import { ExcerciseContext } from '@/Context/ExcerciseProvider';
import React, { useContext } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { toast } from 'react-toastify';

const PlannedDeleteButton = ({exercise}) => {
    const {plannedExcercises,setPlannedExcercises,setMinutes,setCalories}=useContext(ExcerciseContext)
      
         const handlePlannedDeleteButton=()=>{
            const restPlannedExercises= plannedExcercises.filter((plannedExcercise)=> plannedExcercise.id!== Number(exercise.id))
          
          setPlannedExcercises(restPlannedExercises);
            
            
          
          setMinutes((prev)=> prev-(exercise.duration));
          setCalories((prev)=>prev-(exercise.caloriesBurned))

          toast.error("Item is deleted")
        }
    return (
        <div>
             <button
                onClick={handlePlannedDeleteButton}
                className="p-2 text-gray-500 transition hover:text-white"
                aria-label="Remove exercise"
                >
                <RxCross1 size={14} />
            </button> 
            
        </div>
    );
};

export default PlannedDeleteButton;