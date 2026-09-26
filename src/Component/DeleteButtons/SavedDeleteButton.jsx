
'use client';
import { ExcerciseContext } from '@/Context/ExcerciseProvider';
import React, { useContext } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { Bounce, toast, ToastContainer } from 'react-toastify';
// import { Bounce, toast, ToastContainer } from 'react-toastify';

const SavedDeleteButton = ({exercise}) => {
    const {savedExcercises,setSavedExcercises,setMinutes,setCalories}=useContext(ExcerciseContext)
      
         
    const handleSavedDeleteButton=()=>{
    
    
    const restSavedExcercises=savedExcercises.filter(savedExcercis=> String(savedExcercis.id) !==String(exercise.id))
     setSavedExcercises(restSavedExcercises);
          
          setMinutes((prev)=> prev-(exercise.duration));
          setCalories((prev)=>prev-(exercise.caloriesBurned))

          toast.error(`${exercise.name} is deleted`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce
            });
    }
    
    return (
        <div>
            <button
                onClick={handleSavedDeleteButton}
                className="p-2 text-gray-500 transition hover:text-white"
                aria-label="Remove exercise">
                <RxCross1 size={14} />
            </button>
          <ToastContainer />
        </div>
    );
};

export default SavedDeleteButton;