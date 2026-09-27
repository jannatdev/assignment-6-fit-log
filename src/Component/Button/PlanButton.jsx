
'use client';
import { ExcerciseContext } from '@/Context/ExcerciseProvider';
import React, { useContext, useState } from 'react';
import { MdOutlineDateRange } from 'react-icons/md';
import { Bounce, toast, ToastContainer } from 'react-toastify';



const PlanButton = ({exercise}) => {


    const { plannedExcercises,setPlannedExcercises,setMinutes,setCalories} =useContext(ExcerciseContext);
    
    const alreadyPlanned=plannedExcercises.some((item)=> ( item.id) === Number (exercise.id))
    
    
    const handlePlanButton=()=>{
      
       if(alreadyPlanned){
        toast.warn(`${exercise.name} is already added`, {
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
        
        return;

        }

        // setIsPlanned (true
        setPlannedExcercises((prev)=>[...prev,exercise]);

         setMinutes((prev)=> prev+exercise.duration);
         setCalories((prev)=>prev+exercise.caloriesBurned)
    
       
                 
                 toast.success(`${exercise.name} is added`, {
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
            className="mt-5 px-6 rounded-2xl flex items-center justify-center gap-2  hover:scale-110 bg-[#C2F800]  text-black py-3 text-sm font-semibold transition hover:bg-[#C2F800]"><MdOutlineDateRange />
          {  "Add to Today's Plan"}  </button> 
         <ToastContainer />
        </div>
    );
};

export default PlanButton;