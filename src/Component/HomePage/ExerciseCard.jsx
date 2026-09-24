


// import Image from 'next/image';

import  Link  from 'next/link';
import Image  from 'next/image';

import { BiStar } from 'react-icons/bi';
import { FaRegClock } from 'react-icons/fa';

import { FaClockRotateLeft, FaFire, FaFireFlameCurved, FaStar } from 'react-icons/fa6';
  

   
const ExerciseCard = ({exercise}) => {
  //  console .log("Exercises",exercise)
    return (
        <Link href={`/${exercise.id}`}>
            <div className="w-full max-w-[395px]  rounded-2xl  text-white exercise mt-10">
          
          {/* Image */}
          <div className="relative h-[240px] w-full">
            <Image
              src={exercise.image}
              alt="exerciseImg"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            
            {/* Muscle Groups */}
            <div className="mb-4 flex gap-2">
              {exercise.muscleGroups?.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#c8ff00] px-3 py-1 text-[12px] font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Exercise Name */}
            <h2 className="text-xl font-extrabold uppercase tracking-wide">
              {exercise.name}
            </h2>

            {/* Equipment */}
            <p className="mt-1 text-sm text-gray-400">
              {exercise.equipment}
            </p>

            {/* Divider */}
            <div className="my-4 border-t border-[#292a30]" />

            {/* Exercise Info */}
            <div className="flex items-center gap-5 text-sm text-gray-400">
              
              {/* Duration */}
              <div className="flex items-center gap-2">
                <FaRegClock className="text-[#C2F800]" />
                <span>{exercise.duration} min</span>
              </div>

              {/* Calories */}
              <div className="flex items-center gap-2">
                <FaFire className="text-[#C2F800]" />
                <span>{exercise.caloriesBurned} kcal</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <FaStar className="text-[#C2F800]" />
                <span>{exercise.rating}</span>
              </div>

            </div>
          </div>
        </div>
        </Link>
        
    );
};

export default ExerciseCard;