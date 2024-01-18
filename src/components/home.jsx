import React from 'react'
import praful from "../assets/prafulnayak-modified.jpeg"
import Resume from '../assets/PrafulNayakResumeL.pdf'
const HomePage = () => {
  return (
    <>
    <div id='home' className="flex justify-center items-center">
       <div className="left ml-16 mt-40 mb-40 w-3/4 space-y-4">
                <h2 className='text-2xl font-bold'>Hi There!!</h2>
                <h1 className='text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-blue-500 to-green-500'>I'M JADHAV PRAFUL NAYAK</h1>
                <a href={Resume} download="Resume" className='bg-[#303df0a3] text-white rounded-2xl px-3 py-3 font-semibold cursor-pointer absolute mt-5'>Download Resume</a>
   </div>
    <div className="right flex h-screen w-3/4 justify-end items-end">
            <img src={praful} alt="ImageOfPraful" draggable={false}/>
    </div>
    </div>
  
    </>
  )
}

export default HomePage