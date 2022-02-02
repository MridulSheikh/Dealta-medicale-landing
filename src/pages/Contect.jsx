import React from 'react';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';

const Contect = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [success, setSuccess] = useState(false);
    const style = 'border-2 border-primary px-3 py-2 rounded-full outline-none';
    const submit = (e) =>{
        const data = {
            email, 
            subject, 
            text
        }
        axios.post('https://ancient-earth-75371.herokuapp.com/contect', data)
          .then(function (response) {
            console.log(response);
            if(response.statusText === "OK"){
                alert("Thank you for your submission, we'll send email on your email address in 24hr.")
            }
          })
          .catch(function (error) {
            console.log(error);
          });
          e.preventDefault()
      }
    return (
        <div>
            <form onSubmit={submit} className='grid grid-cols-1 gap-5 px-0 lg:px-36 my-8'>
            <div className='md:flex justify-between'>
            <h1 className='text-2xl lg:text-5xl font-bold text-primary'>Contect <span className='text-gray-400'>info</span></h1>
             <p className='my-auto text-xl text-primary'><i className="fas fa-envelope"></i> prince9nazir@gmail.com</p>
            </div>
            <input onBlur={(e)=> setEmail(e.target.value)}   type="Email" placeholder='Email-Address' className={style}  required/>
            <input onBlur={(e)=> setSubject(e.target.value)} type="text" placeholder='subject' className={style} required/>
            <textarea onBlur={(e)=> setText(e.target.value)} type="text" placeholder='Write your text' className="border-2 border-primary px-3 py-2 rounded-2xl h-72 outline-none" required />
             <button className='bg-primary text-xl text-white py-2  rounded-full'>Submit</button>
            </form>
        </div>
    );
};

export default Contect;