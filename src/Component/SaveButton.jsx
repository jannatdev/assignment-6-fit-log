
'use client';
import { ExcerciseContext } from '@/Context/ExcerciseProvider';
import React, { useContext } from 'react';
import { RiSave2Line } from 'react-icons/ri';
import { Bounce, toast } from 'react-toastify';

const SaveButton = ({excercise}) => {

    const {savedExcercises,setSavedExcercises,setMinutes,setCalories,} =useContext(ExcerciseContext);
     const alreadySaved = savedExcercises.some((item)=> item.id ===Number(excercise.id))
   
    const handleSaveButton=()=>{
       
        if(alreadySaved){
            toast.warn(`${excercise.name} is already Saved`, {
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
            return
        }
        
       
         setSavedExcercises((prev)=>[...prev,excercise]);


         setMinutes((prev)=> prev+excercise.duration);
         setCalories((prev)=>prev+excercise.caloriesBurned)
                
         
         toast.success(`${excercise.name} is saved`, {
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
             onClick={handleSaveButton}
             className="mt-5 px-6 rounded-2xl flex items-center justify-center gap-2 bg-black border border-white py-3 text-sm font-semibold text-white transition"> <RiSave2Line />
             Save to Later  </button>
        </div>
    );
};

export default SaveButton;