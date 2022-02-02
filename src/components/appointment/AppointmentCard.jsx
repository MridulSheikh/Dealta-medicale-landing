import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const AppointmentCard = ({id,_id, cancelAppointment, status}) => {
    const [appointment,setAppointment] = useState({})
    useEffect(()=>{
       const  url=`https://ancient-earth-75371.herokuapp.com/service/${id}`
       console.log(id)
       fetch(url)
       .then(res => res.json())
       .then(data => {
            setAppointment(data)
       })
    },[])
    console.log(appointment)
    return (
        <div>
             <div>
                <img className='rounded-t-2xl' src={appointment.img} alt="" />
                <div className='border border-t-0 pt-2 rounded-b-2xl px-3 pb-2'>
                <h1 className='text-2xl text-primary font-semibold'>{appointment.name}</h1>
                <p className='mt-3 text-xl'>{appointment.doctor_name}</p>
                <p className='text-green-500 mt-5'>{status}</p>
                {
                    <button onClick={()=> cancelAppointment(_id)} className='w-full py-2 text-xl bg-red-800 rounded-full mt-5 text-white'>Cencel appointment</button>
                }
                </div>
             </div>
        </div>
    );
};

export default AppointmentCard;