import React, { useEffect } from 'react';
import Aos from 'aos';
const ServiceCard = ({name, discription}) => {
    useEffect(()=>{
        Aos.init()
    })
    return (
        <div data-aos="fade-left" className='mt-20'>
            <h1 className='text-3xl font-bold mb-5 text-primary'>{name}</h1>
            <p className='text-gray-800 text-xl'>{discription}</p>
        </div>
    );
};

export default ServiceCard;