import React from 'react'

function Footer() {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".2" className='w-full flex gap-5 h-screen bg-zinc-900 p-20'>
    <div className='w-1/2 h-full flex flex-col justify-between font-["Founders_Grotesk"]'>
    <div className='heading'>
    <h1 className='text-[8vw] uppercase leading-none -mb-10'>Eye-</h1>
    <h1 className='text-[8vw] uppercase leading-none -mb-10'>Opening</h1>
    </div>
        <h3 className='text-[2vw]'>osnyX.</h3>
    </div>
    <div className='w-1/2 h-full font-["Founders_Grotesk"]'>
    <h1 className='text-[8vw] uppercase leading-none -mb-10'>Web Apps</h1>
    <div className='dets font-["Founders_Grotesk"] mt-20'>

    <h3 className='text-xl mb-5'>S:</h3>
    <a className='block text-xl font-light' href='https://www.linkedin.com/in/shreyash-shinde-8500a2236/' target='_blank' rel='noopener noreferrer'> LinkedIn</a>
    <a className='block text-xl font-light' href='https://github.com/Shreyash018'  target='_blank' rel='noopener noreferrer'> Github</a>
    <a className='block text-xl font-light' href='' target='_blank' rel='noopener noreferrer'> Twitter</a>
    <a className='block text-xl font-light' href='https://www.instagram.com/0snyx/?locale=en_EN&hl=ar' target='_blank' rel='noopener noreferrer'> Instagram</a>

    <h3 className='text-xl mb-5 mt-7'>L:</h3>
    <p className='block text-xl font-light'>DP Road, Pune</p>
    <p className='block text-xl font-light'>411001</p>

    <h3 className='text-xl mb-5 mt-7'>E:</h3>
    <a className='block text-xl font-light' href='mailto:opvalerio3@gmail.com'>opvalerio3@gmail.com</a>
    </div>
    </div>
    
   </div>
  )
}

export default Footer