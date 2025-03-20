import React from 'react'
import Slider from './Slider'

const Customers = () => {
  return (
   <>
   <div className='w-full h-auto py-3 px-12 mt-16 flex flex-col items-start justify-start gap-12'>
    <div className='flex flex-col items-start gap-2'>
    <div className='flex items-center'><h2 className='text-2xl  md:text-4xl font-extrabold font-poppins tracking-wider text-[#90e0ef] '> <span className='text-[#ffbd00]'>Our</span> Satisfied Customers</h2></div>
    <div><p className='text-[16px]  md:text-[18px] text-zinc-700 '>Now Its Your Time To Begin</p></div>
    </div>
    

    <div >
        <Slider/>
    </div>
   </div>
   </>
  )
}

export default Customers