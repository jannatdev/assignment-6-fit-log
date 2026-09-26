
'use client';
import { ExcerciseContext } from '@/Context/ExcerciseProvider';
import React, { useContext, useState } from 'react';
import { MdOutlineDateRange } from 'react-icons/md';
import { Bounce, toast } from 'react-toastify';

const PlanButton = ({excercise}) => {


    const { plannedExcercises,setPlannedExcercises,minutes,setMinutes,calories,setCalories,isPlanned,setIsPlanned} =useContext(ExcerciseContext);
    
    const alreadyPlanned=plannedExcercises.some((item)=> item.id === Number(excercise.id))
    
    
    const handlePlanButton=()=>{
        
       if(alreadyPlanned){
        
        toast.warn(`${excercise.name} is already planned`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        return;
        
       }
        // setIsPlanned (true);
       
      
        setPlannedExcercises((prev)=>[...prev,excercise]);
        
        const newMinutes = minutes+ excercise.duration
        setMinutes (newMinutes)
       
        const newCalories= calories+excercise.caloriesBurned
        setCalories(newCalories);

        toast.success(`${excercise.name} is added`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce
        });;
            
    }
    return (
        <div>
           <button
           onClick={handlePlanButton}
            className="mt-5 px-6 rounded-2xl flex items-center justify-center gap-2 bg-[#C2F800] text-black py-3 text-sm font-semibold transition hover:bg-[#C2F800]"><MdOutlineDateRange />
          {  "Add to Today's Plan"}  </button> 
        </div>
    );
};

export default PlanButton;