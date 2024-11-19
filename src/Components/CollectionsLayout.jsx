
import { NavLink, useParams } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const CollectionsLayout = () => {
    const [showCollection,setshowCollection]=useParams(false)
    console.log(showCollection);
  return (
    <div>
        <div className='bg-gradient-to-br from-blue-500'>
      <div className="lg:ml-20 lg:py-4 flex text-left">
        <div className="text-black flex  px-10 py-2 lg:border-2 lg:bg-black">

          <div className=' flex flex-row gap-6' >
            <ul className={`flex flex-col lg:flex-row lg:w-2/4 lg:static absolute top-24 font-light text-2xl gap-6 duration-500 `}>
              <NavLink to="." className={({ isActive }) => isActive ? "text-blue-800" : "text-blue-400"}> Collection</NavLink>
              <NavLink to='pricing' className={({ isActive }) => isActive ? "text-blue-800" : "text-blue-400"}> Pricing </NavLink>
              <NavLink to='details' className={({ isActive }) => isActive ? "text-blue-800" : "text-blue-400"}>Details</NavLink>
              <NavLink to='photos' className={({ isActive }) => isActive ? "text-blue-800" : "text-blue-400"}>Photos</NavLink>
            </ul>
            <div className='cursor-pointer flex lg:hidden '  onClick={()=>{
          setshowCollection(open=>!open)
         }}>
          {
            showCollection?<CloseIcon/>:<MenuIcon/>
          }
          
        </div>
          </div>

        </div>

      </div>
      <Outlet />
    </div>
    </div>
  )
}

export default CollectionsLayout