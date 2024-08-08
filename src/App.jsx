import { Children, useState } from 'react'

import './App.css'
import LayOut from './Components/LayOut/LayOut'
import  Home  from './Components/Home/Home'
import  About  from './Components/About/About'
import  Portofolio  from './Components/Porofolio/Portofolio'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Contact from './Components/Contact/Contact'


const routing = createBrowserRouter(
  [
    {
      element: <LayOut /> ,
      path: '' ,
      children : [
        {index: true , element: <Home />},
        {path: 'about' , element: <About />},
        {path: 'portofolio' , element: <Portofolio />},
        {path: 'contact' , element: <Contact />}
      ]

    }
  ]
)

function App() {
  
  
  return (
    <>
     <div className='h-screen'>

     <RouterProvider router = {routing}/>
     </div>
    </>
  )
}

export default App
