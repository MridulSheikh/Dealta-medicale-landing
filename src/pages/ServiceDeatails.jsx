import { data } from 'autoprefixer';
import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import useAuth from '../Hooks/useAuth';
import axios from 'axios'
import Aos from 'aos';

const ServiceDeatails = () => {
    const {_id} = useParams()
    const [service, setService] = useState({});
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [discripton, setDiscription] = useState('');
    const [success, setSuccess] = useState(false)
    const {user} = useAuth()
    useEffect(()=>{
        const url = `http://localhost:5000/service/${_id}`;
       fetch(url)
       .then(res => res.json())
       .then(data => {
             setService(data)
       })
    },[])
    useEffect(()=>{
        Aos.init({})
    })
    // post 
    const submit = e =>{
        const data = {
            name,
            address,
            discripton,
            userName : user.displayName,
            userEmail : user.email,
            appointment_id : _id,
            status : "Under Revew...",
            doctor : service.doctor_name
        }
        axios.post('http://localhost:5000/appointment', data)
          .then(function (response) {
            console.log(response);
            if(response.statusText === "OK"){
                setSuccess(!success)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
          e.preventDefault()
    }

    return (
        <div className='mx-0 md:mx-48 pb-10'>
        <h1 data-aos="fade-id" className='text-3xl md:text-5xl text-primary font-semibold mt-10 mb-5 md:mb-20 text-center'>{service.name}</h1>
        <div className='grid lg:grid-cols-1 gap-8'>
        <div data-aos="fade-right">
           <img src={service.img} alt="" width="100%" className='my-auto' />
        </div>
        <div>
        <p data-aos="fade-left" className='text-xl text-gray-700'>{service.discripton}</p>
        </div>
        </div>
        <div data-aos="fade-left" className='mt-20  grid md:grid-cols-2 gap-10 border pb-7 px-3 md:px-0 md:pb-0 rounded-3xl overflow-hidden '>
        <div>
        <img src={service.doctor_img} alt="" className=''  width="100%" />
        </div>
        <div className='flex align-middle'>
        <div className='my-auto mt-7 md:mt-auto'>
        <p className='text-5xl font-semibold text-primary'>{service.doctor_name}</p>
        <p className='text-2xl text-primary font-semibold mt-5'>$ {service.doctor_rate} <span className='text-gray-700'>per hour</span></p>
        <p className='text-xl mt-5 font-semibold text-primary'>Avlable on : {
            service.date?.map(date => <span className='text-gray-600'>{date}, </span> )
        }
        </p>
        </div>
        </div>
        </div>
        <div className='mt-20'>
         <h1 className='text-4xl font-semibold text-gray-600 mt-7 mb-5'>Fill up this form, we are revew this form in 24 hr, and we'll send a email on your email address.</h1>
        <form onSubmit={submit}>
           <input onBlur={(e)=> setName(e.target.value)}  type="text" className='w-full py-3 rounded-full my-4 border-2 border-primary px-3' placeholder='please enter your name' required/>
           <input onBlur={(e)=> setAddress(e.target.value)} type="text" className='w-full py-3 rounded-full mb-4 border-2 border-primary px-3' placeholder='please enter your Address' required/>
          <textarea onBlur={(e)=> setDiscription(e.target.value)} name="text" className='border-2 border-primary w-full rounded-3xl p-3' placeholder='Discribe your problem here' id="" cols="30" rows="10" required />
          <button className='bg-primary py-3 text-xl text-white w-full rounded-full mt-7'>Submit</button>
        </form>
        </div>
        {
            success && <div className='fixed bg-gray-100 rounded-2xl border top-20 text-center w-8/12 px-5 py-5'>
            <h1 className='text-2xl font-bold text-green-600 my-28'>Thank you for your submission, we'll send the serial number on your email addreess in 24hr.</h1>
            <button className='w-full py-2 bg-primary text-xl text-white rounded-full ' onClick={()=>setSuccess(!success)}>OK</button>
            </div>
        }
        </div>
    );
};

export default ServiceDeatails;