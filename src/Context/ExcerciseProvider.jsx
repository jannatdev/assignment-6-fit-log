
'use client';
import React, { createContext, useState } from 'react';



 export const ExcerciseContext =createContext();
  
 
 const ExcerciseProvider = ({children}) => {

   
    const [plannedExcercises,setPlannedExcercises]=useState([])
    const[savedExcercises,setSavedExcercises]=useState([])
    const [selectedExercises,setSelectedExercises]=useState([])
    const [isSaved,setIsSaved]=useState(false);
    const [isPlanned,setIsPlanned]=useState(false);
    const [minutes,setMinutes] =useState(0)
    const [calories,setCalories]=useState(0)
    

    const sharedValue={
        plannedExcercises,setPlannedExcercises,
        savedExcercises,setSavedExcercises,
        minutes,setMinutes,
        calories,setCalories,
        isSaved,setIsSaved,
        isPlanned,setIsPlanned,
        selectedExercises,setSelectedExercises
        
    }
    return (
        <div>
            <ExcerciseContext.Provider value={sharedValue}>
                    {children}
            </ExcerciseContext.Provider>
        </div>
    );
};

export default ExcerciseProvider;