import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

    const handleButtonClick = () => {
      window.location.href = "mailto:opvalerio3@gmail.com";
    };
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className='w-full h-screen bg-zinc-900 pt-[0.5vw]'>
        <div className='textstructure mt-[9vw] px-[5vw]'>
        
        {["I Create", "Eye Opening", "Web Apps"].map((items, index) =>{
            return(
            <div className='masker'>
            <div className='w-fit flex'>
            {index === 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='mr-[1.5vw] w-[8vw] rounded-md h-[5.3vw] relative -bottom-[1vw] bg-red-500'>
             
             </motion.div>)}
            <h1 className='uppercase text-9xl leading-[7.2vw] tracking-tighter font-["Founders_Grotesk"] font-semibold'>{items}</h1>
            </div>
            </div>
            );
        })} 
        </div>

            <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
                {["For public and private companies", "From the first pitch to IPO"].map((items, index) => <p className='text-md font-light tracking-tighter leading-none'>{items}</p>)}
                <div className='start flex items-center gap-5'>
                
                <div className='group flex gap-3'>

                <button 
                className='px-5 py-2 border-[2px] border-zinc-400 rounded-full font-light text-md uppercase group-hover:bg-white group-hover:text-black'
                onClick={handleButtonClick}
                >
                Start The Project
                </button>

                <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-400 rounded-full group-hover:bg-white group-hover:text-black'>
                <span className='rotate-[45deg]'><FaArrowUpLong/></span>
                </div>
                </div>


                </div>
            </div>
    </div>
  )
}

export default LandingPage