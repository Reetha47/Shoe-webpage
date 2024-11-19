import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { data } from '../../Data/data'

const AdminShoeDetail = () => {
  const { id } = useParams()
  const shoe = data.find((item) =>
    Number(item.id) === Number(id)
  )
  console.log(shoe);
  console.log(id);
  return (
    <div>
      <div className='lg:w-screen lg:h-screen flex gap-10'>
        <div className='w-1/2'>
          <scetion >
            <div className='flex flex-col m-10 '>
              <img src={shoe.img} alt="img" className='lg:w-96 lg:h-96' />

            </div>
          </scetion>
        </div>
        <div className='flex flex-col gap-5 px-10 py-20'>
          <nav className='lg:w-80 lg:h-10 flex gap-10 bg-gradient-to-t py-2 justify-evenly rounded-lg from-black to-stone-600 text-white '>
            <NavLink className={({ isActive }) => isActive ? "text-blue-800 font-mono" : "text-blue-400"} to='.'> Info</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-blue-800 font-mono" : "text-blue-400"} to='pricing'> Price</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-blue-800 font-mono" : "text-blue-400"} to='photos'> Photos</NavLink>
          </nav>
          <Outlet context={{ shoe }} />
        </div>
      </div>

    </div>
  )
}

export default AdminShoeDetail 