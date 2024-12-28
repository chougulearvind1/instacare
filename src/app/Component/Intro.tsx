import Image from 'next/image'
import React from 'react'
import doctors from '@/doctors-day.jpeg'



const Intro = () => {
  return (
    <div>
    <a href="#" className="no-underline flex flex-col  items-center bg-[#d7eefecc] border border-gray-200 rounded-lg shadow md:flex-row-reverse md:w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-1/3 md:rounded-none md:rounded-s-lg " src={doctors} alt="doctors"/>
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h1 className=" text-4xl font-bold tracking-tight text-blue-800 dark:text-white mb-4  "> Online healthcare  in India now affordable accessible & made easy !</h1>
            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">Experience hassle- healthcare with our all-in-one platform designed to make your health journey simpler, smarter, and more connected.</p>
        </div>
    </a>
    </div>
  )
}

export default Intro