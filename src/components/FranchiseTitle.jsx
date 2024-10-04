import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import about from './../assets/cars.png'

const FranchiseTitle = () => {
  return (
    
    <div className='flex md:w-full pt-4 md:h-[200px] h-1/3 w-full flex-row justify-between items-center '>

        <div className="flex w-full md:w-full md:items-center md:justify-center items-center justify-center mt-4">

            <h1 className="text-2xl md:text-gray-700 text-gray-700 md:text-6xl font-extrabold md:font-extrabold roboto">Franchise Partner</h1>
            
        </div>
    
    </div>
  )
}

export default FranchiseTitle