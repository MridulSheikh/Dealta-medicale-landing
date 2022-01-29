import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';

const ServiceBanner = () => {
    useEffect(()=>{
        Aos.init()
    })
    return (
        <div>
          <div className='grid mt-10 md:mt-0 md:grid-cols-2 gap-5'> 
          <div data-aos="fade-right" className='hidden md:inline'>
            <img src="/images/doctor-service.png" width="100%" alt="" />
          </div>
          <div data-aos="fade-left" className='flex justify-center align-middle'>
          <div className='my-auto xl:pl-15'>
          <p className='text-primary text-xl'>Our services avaliable on COVID-19 </p>
          <h1 className='text-5xl xl:text-6xl font-bold text-primary my-4'><span className='text-gray-700'>We are provide our service </span>online and offline</h1>
          <p className='mb-5 text-xl text-gray-600 mb-4'>Get Telemedicine and Doctor Video Consultation service with thousands of Doctors and Hospitals in Bangladesh. Delta medicale Emergency room operates 24/7, 365 days a year. Our ER is equipped with lifesaving support facilities for critically ill patients.</p>
          <NavLink to="/" className='text-xl py-2 px-3 border text-white bg-primary cursor-pointer rounded-full'>Back to the home</NavLink> 
           </div>
          </div>
          </div>
        </div>
    );
};

export default ServiceBanner;