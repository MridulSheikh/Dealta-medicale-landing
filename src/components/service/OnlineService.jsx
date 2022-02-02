import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import SERVICES from '../../constant/SERVICES_MOCK_DATA';
import ServiceCard from './ServiceCard';

const OnlineService = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        Aos.init()
    })
    useEffect(()=>{
      fetch('https://ancient-earth-75371.herokuapp.com/service')
      .then(res => res.json())
      .then(data => setService(data))
    },[])
    return (
        <div className='mt-20 overflow-hidden'>
            <div className='grid xl:grid-cols-2'>
            <div data-aos="fade-right">
            <div className='sticky top-20'>
            <h1 className='text-5xl md:text-6xl font-bold text-gray-700'>Fixed a appointments <span className='text-primary'>with our Doctors</span></h1>
            <p className='my-10'>
            
            </p>
            <NavLink to="/appointments" className='text-xl py-3 px-5 border text-white bg-primary cursor-pointer rounded-full'>appointment</NavLink>
            </div>
            </div>
            <div className='grid grid-cols-1 md:ml-36'>
              {
                  service.map(service => <ServiceCard
                    key={service.key}
                    name ={service.name}
                    discription = {service.discripton}
                    />)
              }
            </div>
            </div>
        </div>
    );
};

export default OnlineService;