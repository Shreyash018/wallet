import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { RiStarSLine } from "react-icons/ri";

function Cards() {
  return (
    <div data-scroll data-scroll-speed="-.7" className='w-full h-screen bg-zinc-100 flex px-32 items-center gap-5'>
    <div className='cardcontainer h-[50vh] w-1/2'>
    <div className='card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center transition-transform transform hover:scale-90'>
    <h1 className='text-[#CDEA68] uppercase font-semibold tracking-tight font-["Founders_Grotesk"] text-5xl '>engineering</h1>
    <button className='absolute text-[#CDEA68] border-[#CDEA68] px-5 py-1 border-2 rounded-full left-10 bottom-10'>&copy;2020-2024</button>
    </div>
    </div>
    <div className='cardcontainer h-[50vh] flex gap-5 w-1/2'>

    
    <div className='card relative w-1/2 rounded-xl h-full bg-[#222222] flex flex-col items-center justify-center transition-transform transform hover:scale-90'>
    <h1 className='text-[#FFFFFF] uppercase font-semibold tracking-tight font-["Founders_Grotesk"] text-3xl '>web Developer</h1>
    <span className='flex text-2xl'><RiStarSLine /><RiStarSLine /><RiStarSLine /><RiStarSLine /><RiStarSLine /></span>
    <a href='https://www.linkedin.com/in/shreyash-shinde-8500a2236/' target='_blank' rel='noopener noreferrer'><button className='absolute text-[#FFFFFF] px-1 py-1 border-2 rounded-full left-5 bottom-10'> <span className='rotate-[45deg]'><FaArrowUpLong/></span></button></a>
    </div>
    <div className='card relative w-1/2 rounded-xl h-full bg-[#222222] flex items-center justify-center transition-transform transform hover:scale-90'>
    <h1 className='text-[#FFFFFF] uppercase font-semibold tracking-tight font-["Founders_Grotesk"] text-3xl '>CV</h1>
    <a href='https://drive.google.com/file/d/14OMpClp7dVw0cIHpoCrEmN2-QY4ojLK6/view?usp=drive_link' target='_blank' rel='noopener noreferrer'><button className='absolute text-[#FFFFFF] px-1 py-1 border-2 rounded-full left-5 bottom-10'> <span className='rotate-[45deg]'><FaArrowUpLong/></span></button></a>
    </div>
    
    </div>
    </div>
  )
}

export default Cards