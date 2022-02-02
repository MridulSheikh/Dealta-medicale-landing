import React from 'react';
import { Link, Outlet, Route, Routes} from 'react-router-dom';
import Users from '../components/Dashboard/Users';

const DashBoard = () => {
  
  const style = {
    height : "571px",
    overflowY: "scroll"
  }

    return (
        <div style={style} className='overflow-hidden'>
          <div className='h-screen absolute left-0 top-0 bg-gray-700 w-60 text-white px-1 pt-20'>
             <Link to="/Dashboard/users" className='block rounded-sm my-3 py-1 hover:bg-gray-500 px-2'>Users</Link> 
             <Link to="Appoinments" className='block rounded-sm py-1 hover:bg-gray-500 px-2'>Appointment Request</Link> 
             <Link to="massage" className='block rounded-sm mt-3 py-1 hover:bg-gray-500 px-2'>massage</Link> 
             <Link to="admin" className='block rounded-sm mt-3 py-1 hover:bg-gray-500 px-2'>Admin</Link> 
          </div>
          <div className='pl-48 overflow-hidden'>
              <Outlet />
          </div>
        </div>
    );
};

export default DashBoard;