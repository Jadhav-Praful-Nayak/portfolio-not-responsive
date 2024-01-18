import React from 'react'
import { GithubIcon, PhoneCall } from 'lucide-react'
import Email from "../assets/mail_icon.png"

const contact = () => {
  return (
    <div>
      <div id='contact' className='flex justify-center items-center flex-col mt-48 mb-40'>
        <div className="border-2 border-gray-400 px-[20rem] py-6">
          <h1 className="text-7xl font-extrabold tracking-widest">Contact</h1>
        </div>
        <p className='text-xl mt-4'>Feel <strong>Free</strong> to contact me!</p>
        <div className='mt-8 space-y-7'>
          <div></div>
          <div className='flex space-x-3'><img src={Email} width={30} height={30} />
            <label className='hover:text-cyan-600'>jadhavprafulnayak2000@gmail.com</label></div>
          <div className='flex space-x-3'><GithubIcon width={30} height={30} />
            <a href="https://github.com/Jadhav-Praful-Nayak" className='hover:text-cyan-600'>https://github.com/Jadhav-Praful-Nayak</a></div>
          <div className='flex space-x-3'><PhoneCall width={30} height={30} />
            <label className='hover:text-cyan-600'>+91-9390064762</label></div>
        </div>
        <span className='absolute text-2xl font-extrabold mt-[38rem] tracking-widest'>THANKS FOR PATIENCE!</span>
      </div>

    </div>
  )
}

export default contact