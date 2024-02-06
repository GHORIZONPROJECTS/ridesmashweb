import { useState } from "react"
import lite from './../assets/lite.jpg'
import classic from './../assets/classic-car.png'
import executive from './../assets/executive.png'
import Switch from '@mui/material/Switch';
import bike from './../assets/biker.png'
import van from './../assets/van.png'
import truck from './../assets/truck.png'

const ServiceOption = () => {

  const [isRide, setIsRide] = useState(false)  

  const [switchChecked, setSwitchChecked] = useState(true);

  const rideOptions = [
    {id: 1, type : 'Smash Lite', image : lite, title : "Affordable and Fast", descrtiption : "Our cheapest ride rate, at your doorstep with all the comfort you can ask for"},
    {id: 2, type : 'Smash Classic', image : classic, title : "Top Request with Ambience", descrtiption : "Classic ride comes with top notch 100% cruise, all classic cars are exotic and classy."},
    {id: 3, type : 'Smash Executive', image : executive, title : "Affordable and Fast", descrtiption : "As the name implies executieve rides has all the features and more. self secured cars, alarm security system."},
  ]

  const deliveryOptions = [
    {id: 1, type : 'Smash Bike', image : bike, title : "Affordable and Fast", descrtiption : "Our cheapest ride rate, at your doorstep"},
    {id: 2, type : 'Smash Van', image : van, title : "Top Request with Ambience", descrtiption : "Gives you the desired class and style on the road."},
    {id: 3, type : 'Smash Truck', image : truck, title : "Affordable and Fast", descrtiption : "Our cheapest ride rate, at your doorstep"},
  ]

  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto md:py-20 py-8">
        <div className="text-center">
            <h3 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Checkout Our Service Options</h3>
            <p className="md:w-1/3 text-tertiary mx-auto px-4">We offer a wide range of classy cars to our riders, this brings with it the ambience and style on every trip.</p>
            <div className="mt-16">
                <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                    <span className="mr-8 text-2xl font-semibold">Smash Delivery</span>
                        <Switch checked={switchChecked} onChange={() => {setSwitchChecked(!switchChecked);}}/>
                        {/* <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                            <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isRide ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                        </div> */}
                    <span className="ml-8 text-2xl font-semibold">Smash Ride</span>
                </label>
                {/* <input type="checkbox" id="toggle" className="hidden" checked={isRide} onChange={() => setIsRide(!isRide)}/> */}
            </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
            {switchChecked ?


                rideOptions.map((options, index) => 
                
                <div key={index} className="border py-10 md:px-10 px-4 rounded-lg shadow-3xl">
                    <h3 className="text-3xl font-bold text-center text-primary my-5">{options.type}</h3>
                    <div className="flex item-center justify-center w-[90%]">
                        <img src={options.image} alt="" className="w-[250px] h-[180px] "/>
                    </div>
                    
                    <p className="text-tertiary my-5">{options.descrtiption}</p>
                </div>
                
                )

                :

                deliveryOptions.map((options, index) => 
                
                <div key={index} className="border py-10 md:px-10 px-4 rounded-lg shadow-3xl items-center justify-center">
                    <h3 className="text-3xl font-bold text-center justify-center text-primary my-5">{options.type}</h3>
                    <div className="flex item-center justify-center w-[90%] ">
                        <img src={options.image} alt="" className="w-[200px] h-[150px]"/>
                    </div>
                    
                    <p className="text-tertiary my-5">{options.descrtiption}</p>
                </div>
                
                )
            }
        </div>
    </div>
  )
}

export default ServiceOption