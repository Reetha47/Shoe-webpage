import React from 'react'
import { data } from '../../Data/DashboardData';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Card } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const DashBoard = () => {
  return (
    <div className='m-10'>
     <div className='flex flex-col gap-10 lg:flex-row justify-evenly'>
      {data&&data.map((item)=>{
        return (
          <div key={item.id} className="flex max-w-md lg:w-1/2 h-1/3 gap-2 p-6 rounded-md justify-between shadow-md dark:bg-gray-50 dark:text-gray-800">
	
  <div className='py-10'>
    <h2 className="flex items-center gap-2 text-2xl lg:text-3xl font-semibold leading-tight tracking-wide">
		{item.item} <ArrowUpwardIcon/>
	</h2>
	<p className="flex-1 dark:text-gray-600 ">{item.status}</p>
  </div>
	<div className="flex flex-col  gap-3 mt-6">
	<ShoppingCartIcon/>
  {item.per}
	</div>
</div>
        )
      })}
     </div>
     <br />
    <div className='lg:w-full flex flex-col lg:flex-row bg-gradient-to-br from-blue-800'>
      <div className='gap-10'> 
        <div className='ml-10 text-2xl'><h1>Sales update</h1></div>
        <br/>
        <div>
<FiberManualRecordIcon className='text-white'/> Income
        </div>
      
      </div>
      <div  className='lg:w-full w-96 flex'>
    <LineChart
   
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      width={500}
      height={300}
    />
    </div>
    <div className='flex text-right'>
      <div className="inline-flex items-center border-1 divide-x rounded-lg dark:bg-violet-600 dark:text-gray-100 dark:divide-gray-300">

  <button  type="button" className="px-8 py-3 hover:bg-white hover:text-black">Daily</button>
	<button type="button" className="px-8 py-3 hover:bg-white hover:text-black">Monthly</button>
  <button type="button" className="px-8 py-3 hover:bg-white hover:text-black">Yearly</button>
  </div>

        </div>
    </div>
<br />
    <div className='lg:w-screen justify-between flex flex-col lg:flex-row gap-2'>
<Card className='lg:w-1/2 h-96 rounded-xl'>
<div className='bg-gradient-to-b bg-blue-200'>
  <div className=' m-10 flex justify-between'>
    <h1 className='font-semibold'>Revenue by Device</h1>
<MoreHorizIcon/>
  </div>
  <div className="flex flex-col items-center justify-center">
  <PieChart className='flex flex-col'
  series={[
    {
      innerRadius:80,
    
      data: [
        
        { id: 0, value: 10, color:'#707070' },
        { id: 1, value: 15, color:'#C7C7C7' },
        { id: 2, value: 20, color:'#F2F2F2'},
        { id: 3, value: 12, color:'#21134D' },
      ],
    },
  ]}
  width={400}
  height={200}
/>
    </div>
    <div className='flex justify-between gap-4'>
    <div className=' ml-10 flex flex-col gap-2'>
    <div className='flex flex-row gap-10'>
      <FiberManualRecordIcon className='text-neutral-500'/><h1>Desktop</h1>
      <h2>$850.04</h2>
      <h3>64.4%</h3>
      </div>
      <div className='flex flex-row gap-10'>
      <FiberManualRecordIcon className='text-stone-300' /><h1>Mobile</h1>
      <h2>$755.08</h2>
      <h3>48.6%</h3>
      </div>
      </div>
      <div className='mr-10 flex flex-col gap-2'>
      <div className='flex flex-row gap-10'>
      <FiberManualRecordIcon className='text-neutral-100' /><h1>Tablet</h1>
      <h2>$687.03</h2>
      <h3>24.7%</h3>
      </div>
      <div className='flex flex-row gap-10'>
      <FiberManualRecordIcon className='text-indigo-950'/>  <h1>Unknown</h1>
      <h2>$142.07</h2>
      <h3>14.8%</h3>
      </div>
</div>
      </div>
      </div>
</Card>
<br />
<div className=' flex flex-col lg:flex-row gap-2 p-10 mr-16'>
<Card className='lg:w-full h-auto gap-96'>
  <div className='bg-gradient-to-b bg-blue-200'>
  <div className='m-10 flex flex-row justify-between '>
    <h1>Traffic</h1>
  <MoreHorizIcon/>
  </div>
  <div className='flex flex-col lg:flex-row justify-evenly gap-7'>
    <Card>
      <div className='flex flex-row gap-16'>
        <div className='flex-col'>
        <h1 className='text-xl font-light'>Store Visits</h1>
        <h2 className='ml-7 font-semibold'>8950</h2>
        </div>
      <div className='mt-2 mr-2'>+22%</div>
      </div>
    </Card>
    <Card>
      <div className='flex flex-row gap-16'>
        <div className='flex-col'>
        <h1 className='text-xl font-light'>Store Visits</h1>
        <h2 className='ml-7 font-semibold'>8950</h2>
        </div>
      <div className='mt-2 mr-2'>+22%</div>
      </div>
    </Card>
  </div>
  <div className=''>
  <LineChart
   
   xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
   series={[
     {
       data: [2, 5.5, 2, 8.5, 1.5, 5],
       area: true,
     },
   ]}
   width={500}
   height={300}
 />
  </div>
  </div>
</Card>
</div>
    </div>
</div>

    
    
  )
}

export default DashBoard