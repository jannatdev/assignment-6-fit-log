import PlanButton from '@/Component/PlanButton';
import SaveButton from '@/Component/SaveButton';
import Image  from 'next/image';
import React from 'react';


export const getExcercises=async()=>{
    const res =await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data= await res.json();
    return data;}

const ExerciseDetailspage = async({params}) => {
    const {exerciseId}=await params
    const excercises = await getExcercises();

    const excercise=excercises.find(item=> String(item.id )=== String(exerciseId))

    return (
        <div className="  grid md:grid-cols-2 container mx-auto overflow-hidden rounded-2xl bg-[#0F1115] border border-gray-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"> {/* Image */} 
            <div className="  h-56 "> 
                <div>
                    <Image
                        src={excercise.image}
                        alt="exercise Img"
                        width={200} 
                        height={200}
                        className="object-cover w-full h-full p-5 rounded-xl" /> 
                       
                  
                
                </div>
              

             </div>   

            
                
            <div className="p-5 "> 
                 <div className="mb-3 ">
                     <h2 className="text-[30px] font-bold text-white"> {excercise.name} </h2> 
                      <p className="mb-5 line-clamp-2 text-sm leading-6 text-[#9CA3AF]"> {excercise.description} </p>
                 </div> 
                {/* Muscle Groups */}
                <div className="mb-4 flex flex-wrap gap-2"> 
                        {excercise.muscleGroups?.map((muscle) => (
                             <span key={muscle} className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-medium text-black" >
                                 {muscle} </span> ))} 
                </div>


                <table className='w-full  mt-6 bg-[#151922] '>

                    <tbody>
                        <tr className='flex justify-between items-center border border-gray-800 py-2 px-6'>
                             <td className='text-[14px] text-[#9CA3AF]  '>Equipment</td>
                             <td className='text-[12px]'>{excercise.equipment}</td>
                        </tr>
                        <tr className='flex justify-between items-center border border-gray-800  py-2 px-6 '>
                            <td className='text-[14px] text-[#9CA3AF]'>Difficulty</td>
                       
                            <td className='text-[12px]'>{excercise.difficulty}</td>
                        </tr>

                        <tr className='flex justify-between items-center border border-gray-800  py-2 px-6'>
                            <td className='text-[14px] text-[#9CA3AF]'>Sets</td>
                            <td className='text-[12px]'>{excercise.sets}</td>
                        </tr>

                        <tr className='flex justify-between items-center border border-gray-800  py-2 px-6 '>
                            <td className='text-[14px] text-[#9CA3AF]'>Reps</td>
                            <td className='text-[12px]'>{excercise.reps}</td>
                        </tr>

                        <tr className='flex justify-between items-center border border-gray-800  py-2 px-6'>
                           <td className='text-[14px] text-[#9CA3AF]'>Duration</td>
                           <td className='text-[12px]'>{excercise.duration} min</td>
                        </tr>
                        <tr className='flex justify-between items-center border border-gray-800  py-2 px-6'>
                            <td className='text-[14px] text-[#9CA3AF]'>Calories</td>
                            <td className='text-[12px]'>{excercise.caloriesBurned} kcal</td>
                        </tr>
                        <tr className='flex justify-between items-center border border-gray-800  py2 px-6'>
                            <td className='text-[14px] text-[#9CA3AF]'>Rating</td>
                            <td className='text-[12px]'>{excercise.rating} </td>
                        </tr>
                     </tbody>
                    
                    
                    
              </table>

            
            


                <div className='mt-10'>
                    <p className='font-extrabold'>INSTRUCTIONS</p>
                    <ul className='text-[12px] text-[#9CA3AF] leading-5'>
                        <li>1. Lie on the bench with eyes under the bar and feet planted.</li>
                        <li>2. Unrack with locked elbows and lower the bar to mid-chest.</li>
                        <li>3. Press up in a slight arc until elbows lock without bouncing.</li>
                        <li>4. Keep shoulder blades pinched and a natural arch in the back.</li>
                    </ul>
                </div >
                {/* Button */} 
                <div className='flex items-center gap-6 mt-6'>
                    <PlanButton  excercise={excercise}></PlanButton>
                    <SaveButton  excercise={excercise}></SaveButton>        
                </div>
                
            </div>
     </div>
    );
};

export default ExerciseDetailspage;