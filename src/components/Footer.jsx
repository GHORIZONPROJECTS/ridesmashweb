import logo from './../assets/logo1.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import android from "./../assets/Google-play-store.png";
import apple from "./../assets/Apple-Download.png";

const Footer = () => {

  let currentYear = new Date().getFullYear()
    
  return (
    <div className=" md:max-w-screen-2xl mx-auto bg-primary md:px-14 p-4 text-white">
        <div className='my-4 flex flex-col md:flex-row gap-10'>
            <div className=" md:w-1/2 space-y-8">
                <a href="/" >
                    <img src={logo} alt='' className='w-[120px] h-[120px]'/>
                </a>
                <p className='md:w-1/2 text-base font-extralight text-gray-300'>Ridesmash Technology operates as a e-hailing and delivery service company in Nigeria and Ghana and expanding to other parts of africa.</p>
                <div>
                    <input type='email' name='email' id='email' placeholder='Your email' className='bg-secondary py-2 px-4 rounded-md focus:outline-none ' />
                    <input type='submit' value='submit' className='px-4 py-2  rounded-md -ml-2 bg-white cursor-pointer text-primary hover:bg-white hover:text-primary duration-300 transition-all '/>
                </div>
            </div>
            <div className='md:w-1/2 flex md:flex-row flex-col flex-wrap justify-between gap-8 items-start'>
                <div className='space-y-4 mt-5'>
                    <h1 className=' text--300 md:text-xl'>Services</h1>
                    <ul className='space-y-3'>
                        <a href='/' className='block hover:text-gray-300 text-gray-200'>Ride</a>
                        <a href='/' className='block hover:text-gray-300 text-gray-200'>Delivery</a>
                        <a href='/' className='block hover:text-gray-300 text-gray-200'>Car Rental</a>
                        <a href='/' className='block hover:text-gray-300 text-gray-200'>Airport Pickup</a>
                        <a href='/' className='block hover:text-gray-300 text-gray-200'>Smashfood</a>
                        <a href='/' className='block hover:text-gray-300 text-gray-200'>Smashwise</a>
                        <a href='/' className='block hover:text-gray-300 text-gray-200'>Ridesmash Business</a>
                    </ul>
                </div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text--300 md:text-xl'>Partnership</h4>
                    <ul className='space-y-3'>
                        <a href='/' className='block hover:text-gray-300 text-gray-200'>Drive and Earn</a>
                        <a href='/' className='block hover:text-gray-300 text-gray-200'>Fleets Management </a>
                        <a href='/' className='block hover:text-gray-300 text-gray-200'>Franchise Partner</a>
                        {/* <a href='/' className='block hover:text-gray-200'>Airport Pickup</a>
                        <a href='/' className='block hover:text-gray-200'>Smashfood</a>
                        <a href='/' className='block hover:text-gray-200'>Smashwise</a>
                        <a href='/' className='block hover:text-gray-200'>Ridesmash Business</a> */}
                    </ul>
                </div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text--300 md:text-xl'>Countries</h4>
                    <ul className='space-y-3'>
                        <a href='/' className='block hover:text-gray-300 text-gray-200'>Nigeria</a>
                        <a href='/' className='block hover:text-gray-300 text-gray-200'>Ghana </a>
                        <a href='/' className='block hover:text-gray-300 text-gray-200'>Others...</a>
                        {/* <a href='/' className='block hover:text-gray-200'>Airport Pickup</a>
                        <a href='/' className='block hover:text-gray-200'>Smashfood</a>
                        <a href='/' className='block hover:text-gray-200'>Smashwise</a>
                        <a href='/' className='block hover:text-gray-200'>Ridesmash Business</a> */}
                    </ul>
                </div>
            </div>
        </div>
       <hr className=' border-b-[0.5] border-solid border-gray-600'/>

       {/* contacts */}

       <div className='flex md:flex-row flex-col md:items-center justify-between md:py-4 gap-8 py-4 '>
         <div>
            <h5 className=' text-gray-300'>Call: 070-RIDESMASH.COM</h5>
            <h3 className=' text-gray-300'>Email: info@ridesmash.com</h3>
         </div>
         <div className='flex flex-col gap-2 md:items-center md:justify-center'>
            <h3 className=' text-gray-300'>Connect with us (Nigeria) </h3>
            <div>
            <div className='flex flex-row items-center gap-3'>
                <a href='/'><FaFacebookF className=' text-2xl' /></a>
                <a href='/'><FaInstagram className=' text-2xl' /></a>
                <a href='/'><FaTwitter className=' text-2xl' /></a>
                <a href='/'><FaTiktok className=' text-2xl' /></a>
            </div>
            </div>
         </div>
         <div className='flex flex-col gap-2 md:items-center md:justify-center'>
            <h3 className=' text-gray-300'>Connect with us (Ghana) </h3>
            <div className='flex flex-row items-center gap-3 '>
                <a href='/'><FaFacebookF className=' text-2xl' /></a>
                <a href='/'><FaInstagram className=' text-2xl' /></a>
                <a href='/'><FaTwitter className=' text-2xl' /></a>
                <a href='/'><FaTiktok className=' text-2xl' /></a>
            </div>
         </div>
       </div>

         {/* apps */}
         <hr className=' border-b-[0.5] border-solid border-gray-600'/>
       
         <div className='flex md:flex-row flex-col md:items-center justify-between md:py-4 py-4 gap-8 mb-4 '>
         <div>
            <h3 className=' text-gray-300'>Terms and Conditions</h3>
            <h3 className=' text-gray-300'>Privacy Policy</h3>
         </div>
         <div className='flex flex-row items-center gap-3'>
            <a href='/'><img src={android} alt='google' className='w-[200px] '/></a>
            <a href='/'><img src={apple} alt='apple' className='w-[200px] '/></a>
           
         </div>
         {/* <div>
            <h3 className=' text-gray-300'>Connect with us (Ghana) </h3>
            <div>
                <span>icons</span>
            </div>
         </div> */}
         </div>
         <div className='items-center md:py-2 py-8 md:justify-center'>
         <p className='regular-14 w-full text-center text-gray-300'>&copy; {currentYear} Ridesmash Technology| All rights reserved</p>
     
         </div>
    </div>
  )
}

export default Footer