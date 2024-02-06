import rider1 from './../assets/rider-female.jpg'
import rider2 from './../assets/dispatch-boy.jpg'
import rider3 from './../assets/african-woman.jpg'
const Features = () => {
  return (
    <div className="md:my-24 my-24 md:px-12 p-4 max-w-screen-2xl mx-auto mt-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className=" lg:w-1/4">
                <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">Why Riders Choose us</h3>
                <p className="text-base text-tertiary">Ridesmash is a rising giant in the taxi business. Our riders and drivers rated us as one of the best out there </p>
            </div>
            <div className="w-full lg:w-3/4">
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl  items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                        <div className='flex w-[100%] h-[100%] flex-col'>
                            <img src={rider1} alt="" className=" h-2/5 rounded-tl-3xl rounded-tr-3xl"/>
                            <h5 className='text-2xl font-semibold text-primary px-5 mt-5'>Convenient ride home</h5>
                            <h5 className='text-lg text-gray-600 px-3 mt-3'>All our cars are clean and chilling, expect to experience the a ride in style.</h5>
                        </div>
                    </div>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl  items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                        <div className='flex w-[100%] h-[100%] flex-col'>
                            <img src={rider2} alt="" className=" h-2/5 rounded-tl-3xl rounded-tr-3xl"/>
                            <h5 className='text-2xl font-semibold text-primary px-5 mt-5'>Saftey Guaranteed</h5>
                            <h5 className='text-lg text-gray-600 px-3 mt-3'>Our drivers are well trained to follow all security measures as you journey home.</h5>
                        </div>
                    </div>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl  items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                        <div className='flex w-[100%] h-[100%] flex-col'>
                            <img src={rider3} alt="" className=" h-2/5 rounded-tl-3xl rounded-tr-3xl"/>
                            <h5 className='text-2xl font-semibold text-primary px-5 mt-5'>Discount price on every trip</h5>
                            <h5 className='text-lg text-gray-600 px-3 mt-3'>We give discount to regular riders and you can be sure of having monthly discount on of 25%.</h5>
                        </div>
                    </div>
                   
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Features