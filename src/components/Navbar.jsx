import React from 'react'

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Founders_Grotesk'] flex justify-between items-center">
    <div className='logo'>
   <h1 className='text-xl text-gray-400 font-["Founders_Grotesk"] font-semibold uppercase tracking-wider'>shreyash shinde</h1>
    </div>
    <div className='links flex gap-10'>
        {[ "Work", "About", "Contact"].map((item, index) => (
            <a key={index} className={`text-lg capitalize font-light ${index === 2 && "ml-40"}`}>{item}</a>
        ))}
    </div>
    </div>
  )
}

export default Navbar




