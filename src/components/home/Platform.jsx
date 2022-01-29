import React, { useEffect } from 'react';
import GetOn from './GetOn';
import Aos from 'aos';
const Platform = () => {
    useEffect(()=>{
        Aos.init()
    })
    return (
        <div className='grid md:grid-cols-2 mt-36 overflow-hidden'>
            <div data-aos="fade-left">
              <h1 className='text-5xl text-primary font-semibold'>Conversational care with secure messaging</h1>
              <p className='mt-5 text-xl text-gray-700'>With delta medicale you provide your patients a quick and convenient way to contact you with their concerns. Use delta medicale to communicate around the visit about scheduling, insurance verification, care instructions, and more.</p>
              <div className='grid grid-cols-2 gap-5 mt-10 pr-5'>
                <img src="/images/google-play.png" alt="" />
                <img src="/images/apple-store.jpg" width="85%" alt="" />
              </div>
            </div>
            <div>
              <GetOn />
            </div>
        </div>
    );
};

export default Platform;