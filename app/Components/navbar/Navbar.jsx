'use client'
import Logo from '../../../public/Logo.png'
import Image from "next/image";
import './style.css'
import { useState } from 'react';
export default function Navbar() {
  const [isActive, setisActive] = useState(true)

  const toogleActive = () => {
    setisActive(prevValue => !prevValue)
  }
  return (
    <div className='container px-10 py-8'>
      <div className="flex justify-between items-center ">
        <div className="w-12">
          <Image src={Logo} alt='LOGO' />
        </div>
        <div className="flex flex-col gap-2 cursor-pointer z-10" onClick={toogleActive}>
          <div className={isActive ? 'w-12 h-2 bg-whiteColor rounded-sm ' : 'w-12 h-2 bg-whiteColor rounded-t-sm'}></div>
          <div className="flex flex-row">
            <div className={isActive ? 'w-6 h-2 bg-whiteColor rounded-l-sm transition ease-in-out duration-300 ' : 'w-6 h-2 bg-whiteColor rotate-90 translate-x-[-.5rem] transition ease-in-out duration-300 '}></div>
            <div className={isActive ? 'w-6 h-2 bg-whiteColor rounded-r-sm transition ease-in-out duration-300' : 'w-6 h-2 bg-whiteColor rotate-90 translate-x-[.5rem] transition ease-in-out duration-300 '}></div>
          </div>
          <div className={isActive ? 'w-12 h-2 bg-whiteColor rounded-sm' : 'w-12 h-2 bg-whiteColor rounded-b-sm'}></div>
        </div>

      </div>
      {isActive ?
        <div className="bg-Black2 w-[80%] h-screen text-whiteColor absolute right-[-100%] top-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-Black2 transition-all duration-300 ease-in-out  ">
          <div className="flex flex-col justify-center items-end gap-20 mt-20 px-9 py-10">
            <h1 className='text-end text-3xl'>Project</h1>
            <h1 className='text-end text-3xl'>Resume</h1>
            <h1 className='text-end text-3xl'>Contact</h1>
          </div>
        </div>
        :
        <div className="bg-Black2 w-[80%] h-screen text-whiteColor absolute right-0 top-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-Black2 transition-all duration-300 ease-in-out  ">
          <div className="flex flex-col justify-center items-end gap-20 mt-20 px-9 py-10">
            <h1 className='text-end text-3xl'>Project</h1>
            <h1 className='text-end text-3xl'>Resume</h1>
            <h1 className='text-end text-3xl'>Contact</h1>
          </div>
        </div>}
    </div>
  )
}
