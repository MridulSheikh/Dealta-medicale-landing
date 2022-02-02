import React from 'react';

const MassageCard = ({email, subject, text}) => {
    return (
        <div className='p-5 rounded-md shadow-md m-10'> 
            <p className='text-primary'>Email : {email}</p>
            <p>Subject : {subject}</p>
            <p>Massage : {text}</p>
        </div>
    );
};

export default MassageCard;