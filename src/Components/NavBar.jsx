import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
const NavBar = () => {
    const [showNavlinks,setshowNavlinks]=useState(false)
console.log(showNavlinks);
  return (
    <div>
        <div className="">
      <div className="text-black flex justify-between px-24 border-2 h-20 items-center ">
        <h1 className="text-2xl text-red-700">Shoes</h1>
        <div className=' flex flex-row gap-6'>
        <ul className={`flex flex-col lg:flex-row lg:static absolute top-24 font-light text-2xl gap-6 duration-500 ${showNavlinks?"right-5":"right-[-200px]"}`}>
          <NavLink  to="/" className=  {({isActive})=>isActive? "text-blue-800 font-mono":"text-blue-400"}> Home</NavLink>
          <NavLink to='/about'  className={({isActive})=>isActive? "text-blue-800 font-mono" :"text-blue-400"}> About </NavLink>
          <NavLink to='/admin' className={({isActive})=>isActive? "text-blue-800 font-mono":"text-blue-400"}>Admin</NavLink>
          <NavLink to='/shoes' className={({isActive})=>isActive? "text-blue-800 font-mono":"text-blue-400"}>Shoes</NavLink>

        </ul>
        <div className='cursor-pointer flex lg:hidden '  onClick={()=>{
          setshowNavlinks(open=>!open)
         }}>
          {
            showNavlinks?<CloseIcon/>:<MenuIcon/>
          }
          
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavBar