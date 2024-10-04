import Earn from "../../components/Earn"
import EarnDelivery from "../../components/EarnDelivery"
import Features from "../../components/Features"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"
import Socials from "../../components/Socials"
import {useEffect, useState} from 'react'
import axios from 'axios'
import ServiceOption from "../../components/serviceOption"
import AboutBackGround from "../../components/AboutBackground"
import GetApp from "../../components/GetApp"
import GetDriverApp from "../../components/GetDriverApp"
import WhyChooseUs from "../../components/WhyChooseus"
import BlogContent from "../../components/blogContent"
import FaqView from "../../components/faqView"


const HomePage = () => {

const [countryInfo, setCountryInfo] = useState({countryName : '', countryCode : '', countryCurrency : ''})
// const [data, setData] = useState({})

const getGeoInfo = () => {
  axios.get('https://ipapi.co/json/').then((response) => {

      // setData(response.data)
      let data = response.data;
      setCountryInfo({
          countryName: data.country_name,
          countryCode: data.country_calling_code,
          countryCurrency: data.currency
      });
  }).catch((error) => {
      console.log(error);
  });
};

useEffect(() => {
  getGeoInfo()
}, [])

console.log(countryInfo.countryName)
console.log(countryInfo.countryCode)
console.log(countryInfo.countryCurrency)
// console.log(data)

//   useEffect(() => {
//     fetch('https://extreme-ip-lookup.com/json/')
//     .then( res => res.json())
//     .then(response => {
//      console.log("Country is : ", response);
//    })
//    .catch((data, status) => {
//      console.log('Request failed:', data);
//    });
//  },[])

  return (
    <>
      
      <div className="bg-gradient-to-t from-black to-transparent ">
        <Navbar/>
        {/*<AboutBackGround/>*/}
        <Hero/> 
      </div>
        <ServiceOption/>
        <GetApp/>
        {/* <Features/> */}
        <WhyChooseUs/>
        
        <Earn currency = {countryInfo.countryCurrency} country = {countryInfo.countryName}/>
        <GetDriverApp/>
        {/* <GetApp/> */}
        <EarnDelivery currency = {countryInfo.countryCurrency} country = {countryInfo.countryName}/>
        <BlogContent/>
        {/* <FaqView/> */}
       
        <Footer/>
      
       
    </>
  )
}

export default HomePage