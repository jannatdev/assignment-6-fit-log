import React from 'react';

const MyPlanPage = () => {
    return (
        <div className='container mx-auto'>
            <div className='space-y-2'>
                <h2 className='text-[30px] font-bold'>MY PLAN</h2>
                <p className='text-[14px]'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
         
            <div className='grid grid-cols-3 bg-[#13161D] py-10 px-5 mt-10 mx-auto'>
                <div>
                    <p className='text-[12px] text-[#9CA3AF]'>Exercises</p>
                    <button className='text-[36px] font-bold text-[#CCFF00]'>0</button>
                </div>
                <div >
                    <p className='text-[12px] text-[#9CA3AF]'>Minutes</p>
                    <button className='text-[36px] font-bold '>0</button>
                </div>
                <div >
                    <p className='text-[12px] text-[#9CA3AF]'>Calories</p>
                    <button className='text-[36px] font-bold'>0</button>
                </div>
                
            </div>

            
            <div className="overflow-x-auto max-w-60 my-5">
                    <div className="tabs-lift tabs min-w-max">
                        <input type="radio" name="my_tabs_7" className="tab z-1 bg-[#13161D] text-white" aria-label="Today's Plan" />
                        <div className="sticky start-0 tab-content max-w-60 border-base-300 text-white p-6"></div>
                        
                        <input type="radio" name="my_tabs_7" className="tab z-1  bg-[#13161D]  text-white" aria-label="Saved" defaultChecked />
                        <div className="sticky start-0 tab-content max-w-60 border-base-300  p-6"> </div>
                        
                    </div>
            </div>
            <div className='text-center mt-20'>
                <h2 className='text-[30px] font-bold'>NOTHING HERE YET</h2>
                <p className='text-[14px]'>Browse the library and add a lift to get today moving.</p>
                <button className="mt-5  rounded-2xl px-6  bg-[#C2F800] text-black py-3 text-sm font-semibold transition hover:bg-[#C2F800]"> Go to workouts </button>
            </div>
            
            
        </div>
    );
};

export default MyPlanPage;