import React, { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"
import HEROS from '../../constant/OurbestHero';
import HeorsCard from './HeorsCard';
const BestService = () => {
    useEffect(()=>{
        Aos.init()
    })
    console.log(HEROS)
    return (
        <div> 
            <div className='pt-20'>
              <h1 className='text-3xl xl:text-4xl font-bold text-center text-gray-700' data-aos="fade-up">OUR BEST <span className="text-primary">HEROS</span></h1>
            </div>
            <div data-aos="fade-down" className='grid xl:grid-cols-3 gap-14 mt-20 md:mt-32'>
               {
                   HEROS.map(hero => <HeorsCard 
                    name = {hero.name}
                    img = {hero.img}
                    />)
               }
            </div>
        </div>
    );
};

export default BestService;