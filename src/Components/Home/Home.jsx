import React from 'react'
import homeImg from '../../assets/avataaars.svg'
import { FaStar } from "react-icons/fa";


export default function Home() {
  return (
    <div className='w-screen'>
      <div className=" bg-green-400 w-full">

        <img className='w-1/4 m-auto p-5' src={homeImg} alt="" />
        <div className="home-text text-center text-4xl text-white font-bold p-5 grid grid-cols-1 gap-2 ">
           <h2 className=''>START FRAMEWORK</h2>
           <div className="home-icon flex justify-center">
              <div className="line bg-white h-1 w-28 mt-4"></div>
              <FaStar className='px-3'/>
              <div className="line bg-white h-1 w-28 mt-4"></div>
           </div>
           <span className='text-base font-normal'>Graphic Artist - Web Designer - Illustrator</span>
          
           
        </div>
        
      </div>
      
    </div>
  )
}
