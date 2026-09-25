
'use client';
import { ExcerciseContext } from '@/Context/ExcerciseProvider';
import React, { useContext } from 'react';
import { MdOutlineDateRange } from 'react-icons/md';
import { toast } from 'react-toastify/unstyled';

const PlanButton = ({excercise}) => {


    const {plannedExcercises,setPlannedExcercises,minutes,setMinutes,calories,setCalories} =useContext(ExcerciseContext);
    
    
    
    const handlePlanButton=()=>{
        
       
        
        
        setPlannedExcercises((prev)=>[...prev,excercise]);
        
        const newMinutes = minutes+ excercise.duration
        setMinutes (newMinutes)
       
        const newCalories= calories+excercise.caloriesBurned
        setCalories(newCalories);
        toast.success(`${excercise.name} is added`);

    }
    return (
        <div>
           <button
           onClick={handlePlanButton}
            className="mt-5 px-6 rounded-2xl flex items-center justify-center gap-2 bg-[#C2F800] text-black py-3 text-sm font-semibold transition hover:bg-[#C2F800]"><MdOutlineDateRange /> {"Add to Today's Plan"} </button> 
        </div>
    );
};

export default PlanButton;