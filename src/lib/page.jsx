import React from 'react';


       
 export const getExercises=async()=>{
    const res =await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data= await res.json();
    return data;}

           
        
   
