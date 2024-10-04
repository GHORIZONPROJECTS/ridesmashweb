import delivery from './../assets/delivery-man.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {Link} from 'react-router-dom'

const DriveMore = () => {
  return (
    <div className="flex md:px-14 p-4 md:h-screen mx-auto my-24 md:my-0 md:items-center md:justify-center bg-black">
        <div className="flex md:flex-row-reverse flex-col justify-between md:items-center gap-8">
           
            <div className=" md:w-1/2">
               
                <img src={delivery} alt='' className=' rounded-3xl'/>
            </div>
            <motion.div
            
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            
            
            className=' md:w-2/5'>
            <h1 className='md:text-4xl text-3xl font-bold text-gray-400 mb-5 leading-normal'>Drive more,<span className='md:text-4xl text-3xl font-bold text-secondary'> Earn more:</span></h1>
            <p className='text-gray-200 text-lg mb-7'> Ridemash provides the greate opportunities for Driver Partners to earn daily pension savings will ease.</p>
            <Link to='/delivery' className='bg-secondary text-black py-2 px-6 rounded hover:text-white hover:bg-primary text-xl'>Learn More</Link>
        </motion.div>

        </div>
    </div>
  )
}

export default DriveMore