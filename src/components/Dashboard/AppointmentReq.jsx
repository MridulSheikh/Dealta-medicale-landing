import React, { useEffect, useState } from 'react';
import AppointmentsCard from './AppointmentsCard';

const AppointmentReq = () => {
    const [appointment, setAppointment] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/appointment")
        .then(res => res.json())
        .then(data => setAppointment(data))
    },[])
    console.log(appointment)
    return (
        <div className=''>
        <p className='m-5'>({appointment.length})</p>
           {
               appointment.map(appointment => <AppointmentsCard 
                key = {appointment._id}
                id ={appointment._id}
                name = {appointment.name}
                address = {appointment.address}
                discripton ={appointment.discripton}
                userName = {appointment.userName}
                userEmail = {appointment.userEmail}
                appointment_id = {appointment.appointment_id}
                status = {appointment.status}
                doctor = {appointment.doctor}
                />)
           }
        </div>
    );
};

export default AppointmentReq;