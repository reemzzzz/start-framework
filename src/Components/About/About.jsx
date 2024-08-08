import React from 'react'
import { FaStar } from "react-icons/fa";

export default function About() {
  return (
    <div className='bg-green-400 w-screen h-screen flex flex-col justify-center'>
      <div className="home-text text-center text-4xl text-white  font-bold p-5 grid grid-cols-1 gap-2 place-items-center">
           <h2 className=''>ABOUT COMPONENT</h2>
           <div className="home-icon flex justify-center">
              <div className="line bg-white h-1 w-28 mt-4"></div>
              <FaStar className='px-3'/>
              <div className="line bg-white h-1 w-28 mt-4"></div>
           </div>
           <div className='flex justify-center text-sm font-normal m-auto gap-3'>
            <span className='w-1/4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</span>
            <span className='w-1/4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</span>
           </div>
          
           
        </div>
    </div>
  )
}
