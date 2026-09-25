
'use client';
import React, { createContext, useState } from 'react';



 export const ExcerciseContext =createContext();
  
 
 const ExcerciseProvider = ({children}) => {

   
    const [plannedExcercises,setPlannedExcercises]=useState([])
    const[savedExcercises,setSavedExcercises]=useState([])
    const [minutes,setMinutes] =useState(0)
    const [calories,setCalories]=useState(0)
    const [select,isSelect]=useState(true)

    const sharedValue={
        plannedExcercises,setPlannedExcercises,
        savedExcercises,setSavedExcercises,
        minutes,setMinutes,
        calories,setCalories,
        select,isSelect
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