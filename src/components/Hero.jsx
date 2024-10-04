import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-router-dom'

import banner from "./../assets/Ridesmash-brand.png"
const Hero = () => {
  return (
    <div className="flex md:px-12 p-4 max-w-screen-2xl mx-auto mt-10 md:h-[500px]">
        
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-10">
            <motion.div 
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
                
                className="md:w-3/5 w-full flex flex-col">
                <h1 className="lg:text-5xl md:text-4xl text-4xl text-white font-bold leading-relaxed inter ">Ride in Style,</h1>
                <h1  className="lg:text-5xl md:text-4xl text-4xl text-white font-bold roboto-regular">Ride in Comfort</h1>
                <h3 className="text-xl text-gray-300 py-3 font-extralight">We keep lives transformed.</h3>
                {/* <h3 className="text-xl text-gray-300 py-3 font-extralight">The ultimate ride-sharing solution in Africa.</h3> */}
                <div className="flex flex-row gap-3 mt-3">
                    <a href="/driveAndEarn" className='bg-secondary text-primary py-2 px-6 rounded hover:text-white hover:bg-primary text-xl'>Drive and Earn</a>
                    <button className='bg-primary py-2 px-6 text-white rounded hover:text-primary hover:bg-secondary text-xl'>Download App</button>
                </div>
            </motion.div>
            <motion.div
                variants={fadeIn("left", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
            >
                <img src={banner} alt="" className=""/>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero