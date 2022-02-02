import React, { useEffect, useState } from 'react';
import UsersCard from './UsersCard';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("");
    useEffect(()=>{
       fetch('https://ancient-earth-75371.herokuapp.com/users')
       .then(res => res.json())
       .then(data => setUsers(data))
    },[])
    const handleSearch = () =>{
        fetch(`https://ancient-earth-75371.herokuapp.com/users/${email}`)
       .then(res => res.json())
       .then(data => setUsers(data))
    }
    return (
        <div className=''> 
        <div className=''>
        <div className='mt-10'>
        <input onBlur={(e) => setEmail(e.target.value)} type="text" placeholder='search user by email' className='px-3 py-2 border-2 border-primary outline-none mr-3 rounded-md' />
        <button onClick={handleSearch} className='bg-primary text-white px-5 py-2 rounded-md'>search</button>
       </div>
       <div className='grid grid-cols-4 gap-10 my-10 shadow-sm px-5 py-3 text-primary'>
        <h1>id</h1>
        <h1>name</h1>
        <h1>email</h1>
        <h1>status</h1>
       </div>
        </div>
            {
                users.map(user => <UsersCard
                    key = {user._id}
                    id ={user._id}
                    email ={user.email}
                    name ={user.name}
                    status ={user.staus}
                    />)
            }
        </div>
    );
};

export default Users;