import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import OUR_SPACIAL_SERVICE from '../../constant/OurServiceSpaciality';
import SpacialityCard from './SpacialityCard';
import SERVICES from '../../constant/SERVICES_MOCK_DATA';
const OurSpatiality = () => {
    const [service, setService] = useState([])
    useEffect(()=>{
        Aos.init()
    })
    useEffect(()=>{
    fetch('https://ancient-earth-75371.herokuapp.com/service')
    .then(res => res.json())
    .then(data => setService(data))
    },[])
    return (
        <div className='mt-20 xl:mt-36'>
            <div className='text-center'>
              <h1 data-aos="fade-up" className='text-5xl text-gray-600 font-bold'>our <span className='text-primary'>spaciality</span></h1>
            </div>
            <div className='grid md:grid-cols-3 gap-10 mt-36'>
               {
                   service.map(service => <SpacialityCard
                    key={service.key}
                    name={service.name}
                    discripton={service.discripton}
                    img={service.img}
                    _id={service._id}
                    />)
               }
            </div>
        </div>
    );
};

export default OurSpatiality;