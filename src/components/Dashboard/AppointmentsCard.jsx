import React from 'react';

const AppointmentsCard = ({id, name, address, discripton, userName,  userEmail, appointment_id, status, doctor}) => {
    return (
        <div className='p-10 mb-5 rounded-md shadow-md text-primary'>
            <h1 className='text-2xl'>Name : {name}</h1>
            <h1 className='mt-3'>Address : {address}</h1>
            <h1 className='mt-3'>Discripton : { discripton}</h1>
            <h1 className='mt-3'>User Name : { userName}</h1>
            <h1 className='mt-3'>user Email : {userEmail}</h1>
            <h1 className='mt-3'>Appointment id : {appointment_id}</h1>
            <h1 className='mt-3'>Doctor : {doctor}</h1>
            <div>
            <input type="text" placeholder='fixed date' className='mt-5 px-3 py-1 outline-none border-b-2 border-primary' />
            <button className='bg-primary text-white px-3 ml-5 py-2 rounded-md'>Submit</button>
            </div>
        </div>
    );
};

export default AppointmentsCard;