import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
const SpacialityCard = ({name, discripton, img, _id}) => {
    useEffect(()=>{
        Aos.init()
    })
    return (
        <div data-aos="fade-up" className='overflow-hidden shadow-lg rounded-2xl'>
        <img src={img} width="100%" alt="" />
        <div className='p-5'>
        <div className='h-80 overflow-hidden'>
            <h1 className='text-3xl font-semibold my-5 text-primary'>{name}</h1>
            <p className='text-gray-700'>{discripton}</p>
         </div>   
            <Link to={`/service/${_id}`}>
            <button className="bg-primary text-xl text-white w-full py-2 rounded-full mt-0">Fixed appointments</button>
            </Link>
        </div>
        </div>
    );
};

export default SpacialityCard;