import { useState } from 'react';
import logo from '../../src/assets/logo.png'
import { BiSupport, BiTaxi } from "react-icons/bi";
import {FaXmark, FaBars} from 'react-icons/fa6'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const navItems = [
    {link : "Home", path : "/"},
    {link : "About Us", path : "about"},
    {link : "Our services", path : "services"},
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
                    
                    <a key={link} href={path} className='block text-xl'>{link}</a>

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
        <div className={`space-y-4 px-4 pt-0  pb-5 bg-[#020066] ${isMenuOpened ? "block top-90 right-0 left-0 " : "hidden"}`}>
          {
            navItems.map(({link, path}) => <a key={link} href={path} className='block hover:text-gray-200 text-white py-2 text-2xl font-extralight'>{link}</a>)
          }
        </div>

    </>
  )
}

export default Navbar