import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='bg-blue-950 text-white p-5 font-bold w-screen'>
      <div className="container flex justify-between">
      <Link to= "" className='capitalize text-4xl'>START FRAMEWORK</Link >
      <ul className='flex gap-10'>
        <li><NavLink to="about">ABOUT</NavLink></li>
        <li><NavLink to="portofolio"> PORTOFOLIO</NavLink></li>
        <li><NavLink to="contact">CONTACT</NavLink></li>
      </ul>
      </div>
      
    </div>
  )
}
