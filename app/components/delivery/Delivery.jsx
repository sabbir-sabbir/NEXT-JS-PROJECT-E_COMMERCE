import React from 'react'
import options from './details'
import Link from 'next/link'


const Delivery = () => {
  return (
    <div className='w-full h-auto py-3 px-12 grid grid-cols-1 md:grid-cols-2 mt-16 gap-8 md:gap-0 '>
        <div className='w-[80%] mt-12'><img src="/deliverybig.svg" alt="delivery image" /></div>
        <div className='flex flex-col items-start justify-start space-y-6 '>
            <div className=' w-[80%] flex flex-col items-center gap-3'> <span><img className='w-24 h-24 object-cover' src="/delivery.svg" alt="delivery" /></span> <h1 className='text-2xl  md:text-4xl font-extrabold font-poppins tracking-wider text-[#90e0ef] '>Fastest Delivery Within <span className='text-[#ffbd00]'>A Day</span> </h1></div>
            <div className='flex flex-col  gap-5'>
                {options.map((option, i)=> (
                   <div key={i} className='flex items-center gap-3'> <span><img className='w-6 h-6 object-cover' src={option.img} alt={option.text} /></span> <p className='font-poppins text-zinc-500'>{option.text}</p></div>
                ))}
            </div>

            <div className='bg-amber-400 rounded-sm w-[220px] h-auto flex items-center justify-center'> <Link href="!#"><button className='py-1 px-2'>See More</button></Link> </div>
            
        </div>
    </div>
  )
}

export default Delivery