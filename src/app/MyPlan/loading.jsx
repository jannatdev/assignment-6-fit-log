import React from 'react';

const loading = () => {
    return (
        <div>
            <span className="loading loading-spinner text-[#C2F800]"></span>
            <h2 className='text-[20px] font-medium'>Loading workouts…</h2>
        </div>
    );
};

export default loading;