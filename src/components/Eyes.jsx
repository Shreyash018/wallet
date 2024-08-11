// import React, { useEffect, useState } from 'react'
// import main from './img/main.png'

// function Eyes() {

//     const [rotate, setRotate] = useState(0);
//     useEffect(() => {
//         window.addEventListener("mousemove", (e)=>{
//             let mouseX = e.clientX;
//             let mouseY = e.clientY; 

//             let deltaX = mouseX - window.innerWidth/2;
//             let deltaY = mouseY - window.innerHeight/2;

//             var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
//             setRotate(angle-180);

            
//         })
//     })
//   return (
//     <div className='eyes w-full h-screen overflow-hidden'>
//         <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center' style={{ backgroundImage: `url(${main})`}}>
//          <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
//          <div data-scroll data-scroll-section data-scroll-speed=".2" className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
//               <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
//               <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'><div className='w-7 h-7 bg-zinc-100 rounded-full'></div></div>
              
//               </div>
//          </div>
//          <div data-scroll data-scroll-section data-scroll-speed=".2" className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
//                <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
//                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'><div className='w-7 h-7 bg-zinc-100 rounded-full'></div></div>
              
//               </div>
//          </div>
//          </div>
//         </div>
//     </div>
//   )
// }

// export default Eyes




import React, { useEffect, useState } from 'react';
import main from './img/main.png';

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      // Calculate the translation for the pupil
      let pupilTranslateX = deltaX / 27; // Adjust the divisor to control the amount of movement
      let pupilTranslateY = deltaY / 27; // Adjust the divisor to control the amount of movement
      setTranslateX(pupilTranslateX);
      setTranslateY(pupilTranslateY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div
        data-scroll
        data-scroll-speed='-.7'
        className='relative w-full h-full bg-cover bg-center'
        style={{ backgroundImage: `url(${main})` }}
      >
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed='.2'
            className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'
          >
            <div
              className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'
              style={{
                transform: `translate(${translateX}px, ${translateY}px)`,
              }}
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'
              >
                <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
              </div>
            </div>
          </div>
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed='.2'
            className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'
          >
            <div
              className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'
              style={{
                transform: `translate(${translateX}px, ${translateY}px)`,
              }}
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'
              >
                <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
