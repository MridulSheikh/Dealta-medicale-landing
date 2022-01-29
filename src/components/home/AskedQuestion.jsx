import React, { useEffect } from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';
const AskedQuestion = () => {
    useEffect(()=>{
        Aos.init()
    })
    return (
        <div className='mt-32 overflow-hidden'>
        <div data-aos="fade-down" className='text-center mb-14'>
        <h1 className='text-gray-700 text-4xl md:text-5xl font-semibold'>Frequently Asked <span className='text-primary'>Questions</span></h1>
        <Link to="contect">
        <button className='text-2xl py-3 px-5 bg-primary text-white rounded-xl mt-10'>Contect Now</button>
        </Link>
        </div>
            <div className='grid xl:grid-cols-2 xl:gap-10 mt-20 xl:mt-32'>
               <div data-aos="fade-right">
                <img src="/images/OO6PT80.jpg" className='mx-auto rounded-2xl' width="80%" alt="" />
               </div>
               <div data-aos="fade-left" className='overflow-hidden flex my-auto'>
                  <Drawer />
               </div>
            </div>
        </div>
    );
};

export default AskedQuestion;