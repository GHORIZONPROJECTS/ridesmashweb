import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import FleetTitle from '../../components/FleetTitle'
import FleetManagement from '../../components/FleetManagment'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaCheckCircle } from 'react-icons/fa'
import FleetManagementSection from '../../components/FleetManagementSection'
import FundManagement from '../../components/FundManagement'
import PayToGo from '../../components/PayToGo'
import Blog1 from '../../components/Blog1'
import Blog2 from '../../components/Blog2'
import Blog3 from '../../components/Blog3'
import BlogTitle from '../../components/blogTitle'

const BlogPage = () => {
  return (
    <>
      <div>
        <div>
          <Navbar/>
          <BlogTitle/>
        </div>
        
        <Tabs>

        <div className='flex md:px-40 px-2 md:py-12 py-6'>
        <TabList>
          <Tab><div className='flex flex-row gap-6 text-center'>< FaCheckCircle size={20} color='blue' /><h1 className='text-lg md:6xl md:font-bold text-gray-600'>Blog 1</h1></div></Tab>
          <Tab><div className='flex flex-row gap-6 text-center'>< FaCheckCircle size={20} color='blue' /><h1 className='text-lg md:6xl md:font-bold text-gray-600'>Blog 2</h1></div></Tab>
          <Tab><div className='flex flex-row gap-6 text-center'>< FaCheckCircle size={20} color='blue' /><h1 className='text-lg md:6xl md:font-bold text-gray-600'>Blog 3</h1></div></Tab>
        </TabList>

        </div>

        <div className='flex md:px-24 px-2 md:py-3 py-6'>

        <TabPanel>
          <Blog1/>
        </TabPanel>
        <TabPanel>
        <Blog2/>
        </TabPanel>
        <TabPanel>
        <Blog3/>
        </TabPanel>
        </div>
        </Tabs>
        </div>
        
        <Footer/>
      
      

    </>
  )
}

export default BlogPage