import React, { useEffect } from 'react';
import Aos from 'aos';
const GetOn = () => {
    useEffect(()=>{
        Aos.init({
            duration:1000
        })
    })
    return (
        <div> 
            <div className='grid grid-cols-2 mt-20 xl:mt-0 md:grid-cols-2 gap-10'>
               <div>
               <div data-aos="fade-down" className='bg-gray-800 py-10 px-2 rounded-2xl mt-60 border-2 border-gray-600'>
               <img src="/images/geton2.png" width="100%" alt="" />
               </div>
               </div>
               <div>
               <div data-aos="fade-up" className='bg-gray-800 py-10 px-2 rounded-2xl border-2 border-gray-600'>
               <img src="/images/geton1.png" width="100%" alt="" />
               </div>
               </div>
            </div>
        </div>
    );
};

export default GetOn;