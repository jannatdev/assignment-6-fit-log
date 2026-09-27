import React from 'react';
// import data from '@/data/data.json'

       
 export const getExercises=async()=>{
  const res =await fetch('https://api.api-store.workers.dev/api/fitlog');
  const data =await res.json();
    
    return data;
    ;
   }

           
        
   
