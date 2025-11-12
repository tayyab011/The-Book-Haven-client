import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Loader from '../components/Loader';


const RootLayout = () => {
  const {state} =useNavigation()
    return (
      <div>
      
        <div className=" z-50  sticky top-0">
          <Navbar />
        </div>
        {state == "loading" ? <Loader /> : <Outlet />}
       
        <Footer />
      </div>
    );
};

export default RootLayout;