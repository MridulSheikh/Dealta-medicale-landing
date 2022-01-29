import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"
import TaeAugust11 from "./../../utilities/images/TaeAugust11.jpg"

export default function Banner() {
       useEffect(()=>{
           Aos.init()
       })
    return (
        <div>
            <div className='grid grid-cols-1 xl:grid-cols-2 pt-16'>
                <div data-aos="fade-right" className='flex justify-center align-middle xl:mt-1'>
                <div className='my-auto xl:pr-15'>
                   <p className='text-primary text-xl'>Our services avaliable on COVID-19 </p>
                   <h1 className='text-5xl xl:text-6xl font-bold text-primary my-4'><span className='text-gray-700'>Find your </span>Doctor online!</h1>
                   <p className='mb-5 text-xl text-gray-600 mb-4'>Get Telemedicine and Doctor Video Consultation service with thousands of Doctors and Hospitals in Bangladesh. Delta medicale Emergency room operates 24/7, 365 days a year. Our ER is equipped with lifesaving support facilities for critically ill patients.</p>
                   <NavLink to="service" className='text-xl py-2 px-3 border text-white bg-primary cursor-pointer rounded-full'>Get our services</NavLink> 
                </div>
                </div>
                <div className='hidden md:inline-block'>
                <div data-aos="fade-left">
                  <img src={TaeAugust11} alt="" width="100%" />
                </div>
                </div>
            </div>
        </div>
    )
}
