import delivery from './../assets/delivery-person.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

const EarnDelivery = ({currency, country}) => {
  return (
    <div className="  md:px-14 p-4 max-w-screen-2xl mx-auto my-24 md:my-0 ">
        <div className="flex md:flex-row-reverse flex-col justify-between md:items-center gap-8">
           
            <div className=" md:w-1/2">
                {/* <div className='w-[100%] h-[100%] bg-primary'>

                </div> */}
                <img src={delivery} alt='' className=' rounded-3xl'/>
            </div>
            <motion.div
            
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            
            
            className=' md:w-2/5'>
                <h1 className='md:text-4xl text-3xl font-bold text-primary mb-5 leading-normal'>Earning up to {currency}{currency === "GHS" ? "5,715" : "400,000.00"} Deliverying Items Monthly Guarantteed,<span className='md:text-4xl text-3xl font-bold text-secondary'>With Ridesmash Expert.</span></h1>
                <p className='text-tertiary text-lg mb-7'>We guard our drivers through expert procedures to earn as much as {currency}{currency === "GHS" ? "5,715" : "400,000.00"} monthly, Our driving process is reliable and beneficial. </p>
                <button className='bg-secondary text-primary py-2 px-6 rounded hover:text-white hover:bg-primary text-xl'>Learn More</button>
            </motion.div>

        </div>
    </div>
  )
}

export default EarnDelivery