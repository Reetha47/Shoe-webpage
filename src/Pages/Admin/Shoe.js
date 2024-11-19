import React from 'react'
import { data } from '../../Data/data'
import { Link } from 'react-router-dom'

const Shoe = () => {
  return (
	<div>
		<div className='flex flex-col sm:ml-20 lg:ml-2 lg:gap-10 lg:flex-row justify-evenly lg:w-screen lg:h-screen lg:py-10'>
			{data&&data.map((item)=>{
				return(
					<div>
						<div key={item.id}>
					<Link to={`/admin/shoe/${item.id}`}>
				<div  className="max-w-xs p-3 rounded-md shadow-md bg-gradient-to-tr from-blue-500">
				<img src={item.img} alt="img" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"/>
				<div className="mt-6 mb-2">
					<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{item.brand}</span>
					<h2 className="text-xl font-semibold tracking-wide">{item.title}</h2>
				</div>
				<p >Color:{item.color} <br />
				Size:{item.size}
				</p>
			</div>
			
			</Link>
			
			</div>
					</div>
				)
			})}
		</div>
		
	</div>
  )
}

export default Shoe