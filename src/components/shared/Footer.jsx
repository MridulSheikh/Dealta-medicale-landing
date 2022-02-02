import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-gray-700 border-t-2 bg-gray-300 px-5 md:px-20 md:py-10 py-10'>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-10'>
             <div>
              <h1 className='text-3xl md:text-3xl font-semibold'>Quick <span className='text-primary'>Links</span></h1>
               <div className='mt-5 mb-1 hover:text-primary'>
                 <Link to="/">home</Link>
               </div>
               <div className='mb-2 hover:text-primary'>
                 <Link to="/service">service</Link>
               </div>
               <div className='mb-2 hover:text-primary'>
                  <Link to="/">appointments</Link>
               </div>
               <div className='mb-2 hover:text-primary'>
                    <Link to="/">contect</Link>
               </div>
             </div>
             <div>
             <h1 className='text-3xl font-semibold'>our <span className='text-primary'>services</span></h1>
             <div className='mt-4 font-semibold'>
               <ul>
               <li className='mb-2'>Ambulance : +880 1727474225</li>
               <li className='mb-2'>Nurse : +880 1727374225</li>
               <li className='mb-2'>Home care : +880 188374225</li>
               <li className='mb-2'>Booking bed : +880 138374265</li>
               </ul>
             </div>
             </div>
             <div>
              <h1 className='text-2xl font-semibold'><i className="fas fa-clinic-medical mr-3"></i> Delta<span className='text-primary'> medicale</span></h1>
              <h1 className='text-xl font-semibold mt-4'><i className="fas fa-map-marker-alt"></i> Dhaka, Bangladesh</h1>
              <p className='mt-4 font-bold'><span className='text-primary font-bold'>Contect us :</span> Prince9nazir@gmail.com</p>
              <p className='mt-4 font-bold'><span className='text-primary font-bold'>support :</span> +880 1883992408</p>
              <p className='mt-4 font-bold text-primary'>Being Healthy & Fit Isn't a Fad or a Trend, It's a Lifestyle</p>
             </div>
            </div>
        </div>
    );
};

export default Footer;