import { useState, useContext,useEffect } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import HomePage from './pages/homePage'
import ServicesPage from './pages/servicesPage';
import AboutUsPage from './pages/aboutUsPage';
import ContactUsPage from './pages/contactUsPage';
import LoginPage from './pages/loginPage';
import ForgotPasswordPage from './pages/forgotPasswordPage';
import RiderPage from './pages/riderPage';
import BookingPage from './pages/BookingPage';
import SupportPage from './pages/supportPage';
import DriveAndEarn from './pages/driveAndEarn';

import smash from "./assets/videos/ridesmash.mp4"

function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({children}) => {

    return currentUser ? children : <Navigate to="/home"/>

  }

  const [count, setCount] = useState(0)

  // Loading state 
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
        // Wait for 3 seconds
        setTimeout(() => {

            setIsLoading(false);

        }, 5000);

  }, []);



  return (
    <div>
      
      {/* {
        
        isLoading 

        ?

       <div className='flex items-center justify-center h-screen w-full'>
            <video className="h-[300px] w-[300px] rounded-lg" autoPlay >
              <source src={smash} type="video/mp4" />
            </video>
       </div>

        : */}

        <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path='/' index 
            element={

              
        
                isLoading 
        
                ?
        
               <div className='flex items-center justify-center h-screen w-full'>
                    <video className="h-[300px] w-[300px] rounded-lg" autoPlay >
                      <source src={smash} type="video/mp4" />
                    </video>
               </div>
        
                :

              <HomePage user={currentUser}/>

            

            }
            
            />
            <Route path="services" element={<ServicesPage/>}/>
            <Route path="about" element={<AboutUsPage/>}/>
            <Route path="contact" element={<ContactUsPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="forgotPwd" element={<ForgotPasswordPage/>}/>
            <Route path="booking" element={<BookingPage/>}/>
            <Route path="support" element={<SupportPage/>}/>
            <Route path="driveAndEarn" element={<DriveAndEarn/>}/>
            
            <Route element={
              <RequireAuth>
                  <RiderPage user={currentUser}/>
              </RequireAuth>
            } />

          </Route>
        </Routes>
        </BrowserRouter>
      
      {/* } */}
     

    </div>
  )
}

export default App
