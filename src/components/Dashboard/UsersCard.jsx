import React from 'react';

const UsersCard = ({email, name, status, id}) => {
    return (
        <div className='grid grid-cols-4 gap-10 my-5 shadow-sm px-5 py-7'>
         <h1>{id}</h1>
         <h1>{name}</h1>
         <h1>{email}</h1>
         <div className='flex justify-between'>
         <h1>{status}</h1>
         <button className='bg-primary text-white px-2 py-1 rounded-md'>Make admin</button>
         </div>
        </div>
    );
};

export default UsersCard;