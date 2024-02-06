import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import about from './../assets/executive.png'

const ServicesTitle = () => {
  return (
    <div>
        <div className='md:w-full md:h-[200px] flex flex-row justify-between items-center '>
    <div className="w-80 items-center justify-center md:h-1/3 mx-5 lg:mx-10">
        <h1 className="text-xl text-white md:text-6xl">Services</h1>
        <div className="flex flex-row py-2 items-center">
            <Link to="/"><p className="mr-1 text-base text-white md:text-2xl">Home</p></Link>
            <IoChevronForwardOutline className="text-base text-white lg:text-2xl"/>
            <p className="ml-1 text-base text-white lg:text-2xl">Our Services</p>
        </div>
       
    </div>
    <div>
      <img
        src={about}
        alt="menu"
        width={600}
        height={600}
        // className="lg: w-[600px] lg: h-[600px] w-[300px] h-[300px]"
      />
    </div>
    </div>
    </div>
  )
}

export default ServicesTitle