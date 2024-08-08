import React from 'react'
import { FaStar } from "react-icons/fa";
import port1 from "../../../public/poert1.png"
import port2 from "../../../public/port2.png"
import port3 from "../../../public/port3.png"
import { FiPlus } from "react-icons/fi";

export default function Portofolio() {
  return (
    <div className='w-screen'>
      <div className="home-text text-center text-4xl text-blue-950 font-bold p-5 grid grid-cols-1 gap-2 ">
           <h2 className=''>PORTOFOLIO COMPONENT</h2>
           <div className="home-icon flex justify-center">
              <div className="line bg-blue-950 h-1 w-28 mt-4"></div>
              <FaStar className='px-3'/>
              <div className="line bg-blue-950 h-1 w-28 mt-4"></div>
           </div>
       </div>   
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className='group w-full relative max-w-sm mx-auto h-auto'>
        <img className='rounded-3xl  w-full max-w-sm mx-auto h-full relative z-0 top-0 left-0' src={port1} alt="" />
        <a href="" className='absolute w-full h-full top-0 left-0 rounded-3xl bg-green-400  opacity-0 z-10 transition-opacity duration-300 group-hover:opacity-70 '></a>
        <FiPlus className='plus-icon absolute  text-white text-6xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-4xl  opacity-0 group-hover:opacity-100 transition-opacity duration-300'/>
        </div>
        <div className='group w-full relative max-w-sm mx-auto h-auto'>
        <img className='rounded-3xl  w-full max-w-sm mx-auto h-full relative z-0 top-0 left-0' src={port2} alt="" />
        <a href="" className='absolute w-full h-full top-0 left-0 rounded-3xl bg-green-400  opacity-0 z-10 transition-opacity duration-300 group-hover:opacity-70 '></a>
        <FiPlus className='plus-icon absolute  text-white text-6xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-4xl  opacity-0 group-hover:opacity-100 transition-opacity duration-300'/>
        </div>
        <div className='group w-full relative max-w-sm mx-auto h-auto'>
        <img className='rounded-3xl  w-full max-w-sm mx-auto h-full relative z-0 top-0 left-0' src={port3} alt="" />
        <a href="" className='absolute w-full h-full top-0 left-0 rounded-3xl bg-green-400  opacity-0 z-10 transition-opacity duration-300 group-hover:opacity-70 '></a>
        <FiPlus className='plus-icon absolute  text-white text-6xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-4xl  opacity-0 group-hover:opacity-100 transition-opacity duration-300'/>
        </div>
        <div className='group w-full relative max-w-sm mx-auto h-auto'>
        <img className='rounded-3xl  w-full max-w-sm mx-auto h-full relative z-0 top-0 left-0' src={port1} alt="" />
        <a href="" className='absolute w-full h-full top-0 left-0 rounded-3xl bg-green-400  opacity-0 z-10 transition-opacity duration-300 group-hover:opacity-70 '></a>
        <FiPlus className='plus-icon absolute  text-white text-6xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-4xl  opacity-0 group-hover:opacity-100 transition-opacity duration-300'/>
        </div>
        <div className='group w-full relative max-w-sm mx-auto h-auto'>
        <img className='rounded-3xl  w-full max-w-sm mx-auto h-full relative z-0 top-0 left-0' src={port2} alt="" />
        <a href="" className='absolute w-full h-full top-0 left-0 rounded-3xl bg-green-400  opacity-0 z-10 transition-opacity duration-300 group-hover:opacity-70 '></a>
        <FiPlus className='plus-icon absolute  text-white text-6xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-4xl  opacity-0 group-hover:opacity-100 transition-opacity duration-300'/>
        </div>
        <div className='group w-full relative max-w-sm mx-auto h-auto'>
        <img className='rounded-3xl  w-full max-w-sm mx-auto h-full relative z-0 top-0 left-0' src={port3} alt="" />
        <a href="" className='absolute w-full h-full top-0 left-0 rounded-3xl bg-green-400  opacity-0 z-10 transition-opacity duration-300 group-hover:opacity-70 '></a>
        <FiPlus className='plus-icon absolute  text-white text-6xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-4xl  opacity-0 group-hover:opacity-100 transition-opacity duration-300'/>
        </div>
        
          
          
          
        </div> 
    </div>
  )
}
