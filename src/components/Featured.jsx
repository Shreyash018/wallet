import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import pro1 from './img/pro1.png'
import pro2 from './img/pro2.png'

function Featured() {
    
    const cards = [useAnimation(), useAnimation()]
   
  const handleHover = (index) =>{
   cards[index].start({y:"0"});
  }

  const handleHoverEND = (index) =>{
    cards[index].start({y:"100%"});
   }
 
  return (
    <div  className='w-full py-20'>
        <div className='w-full px-20 flex border-b-[1px] pb-20 border-zinc-600'>
            <h1 className='text-8xl text-gray-500 font-["Neue_Montreal"]'>/</h1>
            <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
            <h1 className='text-8xl text-gray-500 font-["Neue_Montreal"]'>.</h1>
            
        </div>
        <div className='px-20'>
            <div className='cards w-full flex gap-10 mt-10 mb-20'>
                <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEND(0)} className='cardcontainer relative w-1/2 h-[75vh] '>
                <h1 className='absolute flex overflow-hidden text-white left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-["Founders_Grotesk"] font-semibold leading-none tracking-tighter text-8xl'>
                 {"Mini Waggering App".split("").map((item, index) => (<motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease:[0.22,1,0.36,1], delay:index*.01}} className='inline-block translate-y-full'>{item}</motion.span>))}
                </h1>
                
                <a href='https://github.com/Shreyash018/mini-wagering' target='_blank' rel='noopener noreferrer'> 
                <img className="w-full h-full rounded-xl bg-cover transition-transform transform hover:scale-90" src={pro1} alt=''></img></a>
                 
                <div className='links flex gap-3 mt-5'>
                  {[ "React Native", "Tailwind CSS", "Firebase", "Expo CLI"].map((item, index) => (
                  <a key={index} className="px-3 py-1 border-[2px] border-zinc-400 rounded-full">{item}</a>
                  ))}
                </div>
                </motion.div>
                

                <motion.div  onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEND(1)} className='cardcontainer relative w-1/2 h-[75vh] '>
                <h1 className='absolute flex overflow-hidden text-white right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-["Founders_Grotesk"] font-semibold leading-none tracking-tighter text-8xl'>
                {"DeBank Crypto Token".split("").map((item, index) => (<motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease:[0.22,1,0.36,1], delay:index*.01}} className='inline-block translate-y-full'>{item}</motion.span>))}
                </h1>
                 
                 <a href='https://github.com/Shreyash018/Dbank' target='_blank' rel='noopener noreferrer' >
                 <img className="w-full h-full bg-cover transition-transform transform hover:scale-90" src={pro2} alt=''></img></a>
                 
                  <div className='links flex gap-3 mt-5'>
                  {[ "React JS", "CSS", "Javascript", "Firebase", "Blockchain"].map((item, index) => (
                  <a key={index} className="px-3 py-1 border-[2px] border-zinc-400 rounded-full">{item}</a>
                  ))}
                </div>

                </motion.div>
            </div>


            <div className='cards w-full flex gap-10 mt-10'>
                <div className='cardcontainer relative w-1/2 h-[75vh] '>
                <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-["Founders_Grotesk"] font-semibold leading-none tracking-tighter text-8xl'>
                 {"FYDE".split("").map((item, index) => (<span className='inline-block translate-y-full'>{item}</span>))}
                </h1>
                <img className="w-full h-full bg-cover" src={pro1} alt=''></img>
                </div>

                <div className='cardcontainer relative w-1/2 h-[75vh] '>
                <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-["Founders_Grotesk"] font-semibold leading-none tracking-tighter text-8xl'>
                {"VISE".split("").map((item, index) => (<span className='inline-block translate-y-full'>{item}</span>))}
                </h1>
                  <div className='card w-full h-full rounded-xl overflow-hidden'>
                  <img className="w-full h-full bg-cover" src={pro2} alt=''></img>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Featured