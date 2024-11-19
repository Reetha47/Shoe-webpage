import React, { useState } from 'react'
import { data } from '../Data/data'
import { Link } from 'react-router-dom'
import SearchBar from '../Components/SearchBar'
const Shoes = () => {
  const [searchTerm,setsearchTerm]=useState('')
  return (
    <div className='bg-gradient-to-t from-slate-400 to-slate-800' >
      <h1 className='text-4xl font-sans flex justify-center items-center py-10'>Expolre Our Collection</h1>
      <SearchBar searchTerm={searchTerm} setsearchTermm={setsearchTerm}/>
      <div  className='flex lg:flex-row flex-col py-2 justify-center lg:h-screen lg:w-screen lg:justify-evenly '>
    {data&&data.filter((item)=>{
      return (
        searchTerm.toLowerCase()===""?item:item.title.toLowerCase().includes(searchTerm)
      )
    })
    .map((item)=>{
      return (
        <div key={item.id} >
          <Link to={`/shoes/${item.id}`}>
          <div className='flex flex-row'>
<div className="max-w-xs p-6 rounded-md shadow-md bg-gradient-to-tr from-blue-500">
	<img src={item.img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{item.brand}</span>
		<h2 className="text-xl font-semibold tracking-wide">{item.title}</h2>
	</div>
	<p className="dark:text-gray-800">Color: {item.color} <br /> Size: {item.size}</p>
</div>
          <div>

          </div>
          </div>
      </Link>
          </div>
      )
    })}
    </div>
    </div>
  )
}

export default Shoes