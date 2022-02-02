import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import AppointmentCard from '../components/appointment/AppointmentCard';
import useAuth from '../Hooks/useAuth';

const Appointments = () => {
    const [appointment, setAppointment] = useState([])
    const {user} = useAuth()
    useEffect(()=>{
        const url = `http://localhost:5000/appointment/${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setAppointment(data)
        },[])
    })
    const cancelAppointment = (_id) => {
        const proced = window.confirm('are you sure to cancel this Appoinments')
        if(proced){
            fetch(`http://localhost:5000/appointment/${_id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                const remaining = appointment.filter(appoint => appoint._id !== _id);
                setAppointment(remaining)
            })
        }
    }
    return (
        <div className='pb-10'>
        <h1 className='text-xl text-primary mt-5 font-semibold'>appointments(<span className='text-gray-700'>{appointment.length}</span>)</h1>
        {
            appointment.length === 0 && <div className='text-2xl font-bold h-screen w-screen text-primary'>
                 <h1>There are not any appointment, you are fixed</h1>
            </div>
        }
        <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-10 mt-10'>
            {
                appointment?.map(data => 
                    <AppointmentCard 
                    key={data._id}
                    id={data.appointment_id}
                    _id={data._id}
                    status={data.status}
                    cancelAppointment = {cancelAppointment}
                    />
                    )
            }
        </div>
       </div>
    );
};

export default Appointments;