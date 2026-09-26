
'use client';

import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const MarkDoneButton = ({exercise}) => {
    const handleMarkDoneButton =()=>{
        toast.success(`${exercise.name} is done`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce
            });
    }
    return (
        <div>
            <button
            onClick={handleMarkDoneButton}
          className="flex items-center gap-1.5 rounded-full bg-lime-400 px-4 py-2 text-xs font-semibold text-black transition hover:bg-lime-300"
        >
          <IoMdCheckmark size={14} />
          Mark as Done
        </button>
         <ToastContainer />
        </div>
    );
};

export default MarkDoneButton;