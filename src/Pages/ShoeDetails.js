import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../Data/data'
import { Link } from 'react-router-dom'

const ShoeDetails = () => {
 const {id}=useParams()
 const shoe=data.find((item)=>
  Number(item.id)===Number(id)
 )
 console.log(shoe);
 console.log(id);
  return (
    <div>
      <section className='bg-gradient-to-tl from-gray-700'>
        <div className="dark:bg-violet-600 ">
          <div className="container flex lg:flex-row flex-col gap-48  justify-start lg:items-left px-4  mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
            <img src={shoe.img} alt="img"
              className='lg:w-1/2 lg:h-96 border-8 border-white' />

            <div className='flex-col gap-10'>
              <div className="flex flex-col gap-6">
                <h1 className='lg:text-5xl text-left'>{shoe.title}</h1>
                <p className='text-nowrap justify-stretch' ></p>
                  <p >
                   Color: {shoe.color} <br />
                   Size:{shoe.size}
                  </p>
             
              </div>
              <div className='py-10 text-left gap-10'>
                <h3 className='font-light text-2xl '> {shoe.price}/-</h3>
                <button className='px-6 py-2 bg-blue-600 hover:bg-blue-800'>
                  Buy Now
                </button>
                <div> <br />
                  <button className='justify-center  bg-gray-500 text-4xl w-10 font-light'>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link rel="noopener noreferrer" to='/Shoes' className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</Link>
     
        <img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
      </section>
      <div className='flex justify-center text-2xl font-semibold'>
        <Link to='..' relative='path'>
        <button> Back to Shoes
          </button></Link>
      </div>
    </div>
  )

}

export default ShoeDetails