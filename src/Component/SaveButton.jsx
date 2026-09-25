
'use client';
import { ExcerciseContext } from '@/Context/ExcerciseProvider';
import React, { useContext } from 'react';
import { RiSave2Line } from 'react-icons/ri';

const SaveButton = ({excercise}) => {

    const {setSavedExcercises,setMinutes,setCalories} =useContext(ExcerciseContext);
  
   
    const handleSaveButton=()=>{

       
         setSavedExcercises((prev)=>[...prev,excercise]);


         setMinutes((prev)=> prev+excercise.duration);
         setCalories((prev)=>prev+excercise.caloriesBurned)
                toast.success(`${excercise.name} is Saved`);
        
                
    }
    return (
        <div>
             <button 
             onClick={handleSaveButton}
             className="mt-5 px-6 rounded-2xl flex items-center justify-center gap-2 bg-black border border-white py-3 text-sm font-semibold text-white transition"> <RiSave2Line /> Save to Later </button>
        </div>
    );
};

export default SaveButton;