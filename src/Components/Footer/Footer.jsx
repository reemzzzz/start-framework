import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";

import { TiSocialTwitterCircular } from "react-icons/ti";


export default function Footer() {
  return (
    <div className='text-xl w-screen'>
       <div className="  bg-slate-600 flex justify-evenly p-5">
          <div className="footer-part text-white">
            <h2 className='font-bold'>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="footer-part text-white">
            <h2 className='font-bold'>AROUND THE WEB</h2>
            <ul className='flex text-center'>
              <li className='text-3xl'> <CiFacebook /> </li>
              <li className='text-3xl'> <CiTwitter /></li>
              <li className='text-3xl'> <CiLinkedin /></li>
              <li className='text-3xl'> <CiGlobe /> </li>
            </ul>
          </div>
          <div className="footer-part text-white">
            <h2 className='font-bold'>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use</p>
            <p>, licensed Bootstrap theme created by Route</p>
          </div>
       </div>
       <div className="last-part font-semibold bg-slate-700 text-white p-5">
        <p>Copyright © Your Website 2021</p>
       </div>
    </div>
  )
}
