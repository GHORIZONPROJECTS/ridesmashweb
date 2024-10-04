import { useState } from 'react';
import logo from '../../src/assets/logo.png'
import { BiSupport, BiTaxi } from "react-icons/bi";
import {FaXmark, FaBars} from 'react-icons/fa6'
import { NavLink} from 'react-router-dom';


const Navbar = () => {

  const navItems = [
    {link : "Home", path : "/"},
    {link : "Services", path : "services"},
    {link : "Drive & Earn", path : "driveAndEarn"},
    {link : "About Us", path : "about"},
    {link : "Contact Us", path : "contact"},
   
  ]


  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const toggle = () => {
    setIsMenuOpened(!isMenuOpened)
  }


  return (
    <>
        <nav className=' md:px-14 p-4 max-w-screen-2xl mx-auto text-primary '>
          <div className='flex justify-between '>

            <div className='flex items-center space-x-14'>
              <a href='/' className=' bg-secondary w-[80px] h-[80px] items-center justify-center flex rounded-xl'>
                <img src={logo} alt='' className='w-[60px] h-[60px]'/>
              </a>

              <ul className='md:flex space-x-12 hidden'>
                {
                    navItems.map(({link, path}) => 
                    
                    <a key={link} href={path} className='block text-lg'>{link}</a>

                    )
                }  
              </ul> 
            </div>

            <div className='md:flex hidden items-center space-x-12 '>
              <div className='flex items-center  justify-between gap-2'>
                <BiTaxi className='font-bold text-2xl'/>
                <a href='/booking' className=' text-xl'>Book a Ride</a>
              </div>
              <div className='flex items-center justify-between gap-2'>
                 <BiSupport className='font-bold text-2xl'/>
                 <a href='/support' className='text-xl'>Support</a>
              </div>
              <a href='login' className='bg-secondary py-2 px-4 rounded hover:text-white hover:bg-primary text-xl'>Login</a>
            </div>

             {/* small screen */}

             <div className='md:hidden'>
                <button onClick={toggle} className=''>
                    {
                      isMenuOpened ? (<FaXmark className='text-4xl'/>) : (<FaBars className='text-4xl'/>)
                    }
                </button>
             </div>

          </div>
          
        </nav>
        <div className={`space-y-4 px-4 pt-0  pb-5 bg-[#020066] flex flex-col gap-1 h-[500px] ${isMenuOpened ? "block top-90 right-0 left-0 " : "hidden"}`}>
          {
            navItems.map(({link, path}) => <a key={link} href={path} className='block hover:text-gray-200 text-white py-1 text-2xl font-extralight'>{link}</a>)
          }
          <div className='flex flex-col gap-3 mb-6'>
            
              <div className='flex items-center gap-3 '>
                <BiTaxi className='font-bold text-2xl text-white gap-2'/>
                <a href='/booking' className=' text-2xl text-white'>Book a Ride</a>
              </div>
              <div className='flex items-center gap-2'>
                 <BiSupport className='font-bold text-2xl text-white gap-2'/>
                 <a href='/support' className='text-2xl text-white'>Support</a>
              </div>
              
              <a href='login' className='bg-secondary my-6 py-2 px-4 rounded hover:text-white hover:bg-primary text-xl text-center'>Login</a>
              
             
            </div>
        </div>

    </>
  )
}

export default Navbar