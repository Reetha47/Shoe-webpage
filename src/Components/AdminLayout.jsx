import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const AdminLayout = () => {
    const [showAdminNav,setshowAdminNav]=useState(false)
    console.log(showAdminNav)
  return (
    <div className='bg-gradient-to-br from-blue-500'>
      <div className="lg:ml-20 lg:py-4 flex text-left">
        <div className="text-black flex  px-10 py-2 lg:border-2 lg:bg-black ">

          <div className=' flex flex-row gap-6' >
            <ul className={`flex flex-col lg:flex-row lg:w-2/4 lg:static absolute top-24 font-light text-2xl gap-6 duration-500 ${showAdminNav?"right-5":"right-[-200px]"}`}>
              <NavLink to="." className={({ isActive }) => isActive ? "text-blue-800 font-mono" : "text-blue-400"}> Dashboard</NavLink>
              <NavLink to='income' className={({ isActive }) => isActive ? "text-blue-800 font-mono" : "text-blue-400"}> Income </NavLink>
              <NavLink to='shoe' className={({ isActive }) => isActive ? "text-blue-800 font-mono" : "text-blue-400"}>Shoe</NavLink>
              <NavLink to='review' className={({ isActive }) => isActive ? "text-blue-800 font-mono" : "text-blue-400"}>Review</NavLink>
            </ul>
            <div className='cursor-pointer flex lg:hidden '  onClick={()=>{
          setshowAdminNav(open=>!open)
         }}>
          {
            showAdminNav?<CloseIcon/>:<MenuIcon/>
          }
          
        </div>
          </div>

        </div>

      </div>
      <Outlet />
    </div>
  )
}

export default AdminLayout