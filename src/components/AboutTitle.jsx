import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import about from './../assets/executive.png'


const AboutTitle = () => {
  return (

    <div className='md:w-full md:h-[200px] flex flex-row justify-between items-center '>
    <div className="w-80 items-center justify-center md:h-1/3 mx-5 lg:mx-10">
        <h1 className="text-xl text-white md:text-6xl">About Us</h1>
        <div className="flex flex-row py-2 items-center">
            <Link to="/"><p className="mr-1 text-base text-white md:text-2xl">Home</p></Link>
            <IoChevronForwardOutline className="text-base text-white lg:text-2xl"/>
            <p className="ml-1 text-base text-white lg:text-2xl">About Us</p>
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

    // <div className="flex flex-row justify-between ">
    //      <div className="  justify-center mx-5 lg:mx-10">
    //         <h1 className="text-3xl lg:text-6xl">About Us</h1>
    //         <div className="flex flex-row py-2 items-center ">
    //             <Link href="/"><p className="mr-1 text-primary lg:text-2xl">Home</p></Link>
    //             <IoChevronForwardOutline className="text-base lg:text-2xl"/>
    //             <p className="ml-1 text-base lg:text-2xl text-primary">About Us</p>
    //         </div>
           
    //     </div>
    //     <div>
    //       {/* <img
    //         src='/hero.png'
    //         alt="menu"
    //         width={600}
    //         height={600}
    //         // className="lg: w-[600px] lg: h-[600px] w-[300px] h-[300px]"
    //       /> */}
    //     </div>
    // </div>
  )
}

export default AboutTitle