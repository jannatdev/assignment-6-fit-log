
import React from 'react';
import ExerciseCard from './ExerciseCard';

 export const getExercises=async()=>{
    const res =await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data= await res.json();
    return data;}

const ExercisePage = async() => {
    const exercises= await getExercises();
    return (
        <div className='container mx-auto mt-20'>
            <div className='text-center md:text-left'>
                <h2 className='text-[30px] font-bold'>THE LIBRARY</h2>
                <p className='text-[12px] text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid mx-auto justify-center w-full md:justify-between md:grid-cols-3 gap-5 mt-4'>
                {exercises.map((exercise)=> <ExerciseCard key={exercise.id} exercise={exercise}/>)}
            </div>
        </div>
    );
};

export default ExercisePage;