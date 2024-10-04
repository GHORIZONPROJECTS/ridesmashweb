import delivery from './../assets/payback.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {Link} from 'react-router-dom'

const DriveEarnDelivery = ({currency, country}) => {
  return (
    <div className="flex md:px-14 p-4 md:h-screen mx-auto my-24 md:my-0 md:items-center md:justify-center bg-black">
        <div className="flex md:flex-row-reverse flex-col justify-between md:items-center gap-8">
           
            <div className=" md:w-1/2">
                {/* <div className='w-[100%] h-[100%] bg-primary'>

                </div> */}
                <img src={delivery} alt='' className=' rounded-3xl md:w-[80%] md-[60%]'/>
            </div>
            <motion.div
            
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            
            
            className=' md:w-2/5'>
            <h1 className='md:text-4xl text-3xl font-bold text-gray-400 mb-5 leading-normal'>2.5% Weekly payback,<span className='md:text-4xl text-3xl font-bold text-secondary'> while you drive on Ridesmash:</span></h1>
            <p className='text-gray-200 text-lg mb-7'>  As part of our effort to sustain a suitable financial freedom to our drive partner, we avail our drivers on weekly basis a rebate of 2.5% charged on commission. </p>
            <Link to='/delivery' className='bg-secondary text-black py-2 px-6 rounded hover:text-white hover:bg-primary text-xl'>Learn More</Link>
        </motion.div>

        </div>
    </div>
  )
}

export default DriveEarnDelivery