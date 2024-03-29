import './App.css';
import Login from './Components/Login';
import Registration from './Components/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from './Components/Mainpage';
import React, { useState, useEffect,createContext } from 'react';
import UploadPetDetail from './Components/Postpetdetail';
import UploadPetAccessory from './Components/PostPetAccessory';
// import UpdatePetAccessoryForm from './Components/UpdatePetAccssory';
// import UpdatePetAccessory from './Components/UpdatePetAccssory';
import Loading from './Components/LoadingComponent';
import Home from './Components/Home'
import UpdatePetDetails from './Components/UpdatePetDet';
import { Viewcart } from './Components/Viewcart';
import Mergecomponent from './Components/Mergecomponent';
import Petmain from './Components/Adminpet';
// import Mergecomponent from './Components/Mergecomponent';
// import { Header } from './Components/Homeheader';
import Petgetrecord from './Components/Adminpetrecord'
import Booking from './Components/Booking';
import Deletepetaccess from './Components/Deletepetaccess';
import UserPetdetails from './Components/UserPetdetails';
import Adminpetgetrecord from './Components/Adminpetrecord';
import Adminlogin from './Components/Adminlogin';
// import Sample from './Components/Sample';
import Adminpetdetails from './Components/Admincomponent/Adminpetdetails';
import Adminaccessory from './Components/Admincomponent/Adminaccessory';
import UpdatePetAccessory from './Components/UpdatePetAccssory';
import Deleteaccessory from './Components/Deleteaccessory';


export const cartContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [cart, setCart] = useState([]);

  // const logintimeout = 5000; // time out 


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }), []

  
  return (

    <div className='App'>
      {isLoading ? (<Loading />) : (
        <cartContext.Provider value={{ cart, setCart }}>
          <BrowserRouter>
            <Routes>
              <Route>
                <Route path="/" element={<Mainpage />} />
                <Route path='adminlogin' element={<Adminlogin/>}/>
                <Route path="register" element={<Registration />} />
                <Route path="login" element={<Login setIsLoading={setIsLoading} />} />
                <Route path='dashboard'element={<Mergecomponent/>} />
                <Route path="home" element={<Home />} />
                <Route path="adminpage" element={<Petmain />}/>
                <Route path="postpets" element={<UploadPetDetail />} />
                <Route path="postaccessory" element={<UploadPetAccessory />} />
                <Route path="putpetdetail/:id" element={<UpdatePetDetails />} />
                <Route path='putaccessorydetail/:id' element={<UpdatePetAccessory />} />
                <Route path="cart" element={<Viewcart />}/>
                <Route path='petgetdetails' element={<UserPetdetails/>}/>
                <Route path='bookingdetails' element={<Booking/>}/>
                <Route path='deletepetaccessory' element={<Deletepetaccess/>}/>
                <Route path='userpetdetails' element={<UserPetdetails/>}/>
                <Route path='adminpetrecords' element={<Adminpetgetrecord/>}/>
                {/* <Route path='sample' element={<Sample/>}/> */}
                <Route path='adminpetdetails' element={<Adminpetdetails/>}/>
                <Route path='adminpetaccessorydetails' element={<Adminaccessory/>}></Route>
                <Route path='deleteaccessory' element={<Deleteaccessory/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </cartContext.Provider>
      )}
      
    </div>

  );
}

export default App;





{/* <Route path="Login" element={<Login setIsLoading={setIsLoading} logintimeout={logintimeout} />} /> */ }

{/* <UploadeFile/> */}
      {/* <UploadForm/> */}
      {/* <Home/> */}

      {/* <UploadPetDetail/> */}
      {/* <UploadPetAccess/> */}
      {/* <UpdatePetAccessory/> */}

          {/* <Header cart={cart}/> */}
      {/* <Mergecomponent/> */}
