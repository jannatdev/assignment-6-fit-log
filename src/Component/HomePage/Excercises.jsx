
import React from 'react';
import ExcerciseCard from './ExcerciseCard';

 export const getExercises=async()=>{
    const res =await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data= await res.json();
    return data;}

const ExcercisePage = async() => {
    const exercises= await getExercises();
    
    return (
        <div className=' mt-15'>
            <div className='container mx-auto '>
                <h2 className='text-[30px] font-bold text-center md:text-left ml-15'>THE LIBRARY</h2>
                <p className= ' text-[12px] text-[#9CA3AF] text-center md:text-left ml-15'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid justify-center md:grid-cols-3 md:justify-between gap-4 mt-4' id="library">
                {exercises.map((exercise)=> <ExcerciseCard key={exercise.id} exercise={exercise}/>)}
            </div>
        </div>
    );
};

export default ExcercisePage;