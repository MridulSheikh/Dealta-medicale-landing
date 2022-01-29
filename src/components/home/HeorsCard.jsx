import React, { useEffect } from 'react';
import Aos from 'aos';
const HeorsCard = ({name, img}) => {
    useEffect(()=>{
        Aos.init()
    })
    return (
        <div className='cursor-pointer'>
           <div className='shadow-md rounded-xl'>
           <div className='mx-auto overflow-hidden'>
           <img src={img} width="100%" alt="" />
           </div>
           <div>
           <p className='text-primary text-2xl text-center font-bold mt-6'>{name}</p>
           </div>
           <div className='bg-primary py-5 w-10 rounded-tr-full'>
             
           </div>
           </div>
        </div>
    );
};

export default HeorsCard;