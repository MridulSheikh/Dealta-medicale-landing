import React, { useEffect, useState } from 'react';
import MassageCard from './MassageCard';

const Massage = () => {
    const [massage , setMassage] = useState([]);
    useEffect(()=>{
         fetch('http://localhost:5000/contect')
         .then(res => res.json(res))
         .then(data => setMassage(data))
    },[])
    console.log(massage)
    return (
        <div>
        <p className='mt-3 ml-10'>({massage.length})</p>
            {
                massage.map(msg => <MassageCard
                    key = {msg._id}
                    email = {msg.email}
                    subject = {msg.subject}
                    text = {msg.text}
                    /> )
            }
        </div>
    );
};

export default Massage;