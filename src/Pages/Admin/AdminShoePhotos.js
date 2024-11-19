import React from 'react'
import { useOutletContext } from 'react-router-dom'

const AdminShoePhotos = () => {
  const {shoe}=useOutletContext()
  return (
    <div>
      <section className="py-6 dark:bg-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src={shoe.img} />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src={shoe.img1} />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src={shoe.img2} />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src={shoe.img3} />
		</div>
	</div>
</section>
    </div>
  )
}

export default AdminShoePhotos