import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
const Layout = () => {
  return (
    <div >
        <Header/>
        <NavBar/>
        <div className='min-h-[70vh]'> 
        <Outlet/>
        </div>
        <Footer/>

    </div>
  )
}

export default Layout