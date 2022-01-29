import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const {user, isLoading} = useAuth()
  const location = useLocation()
    if(isLoading){
      return (
        <div className='w-screen h-screen'>
        <h1 children="text-5xl text-primary font-semibold">page Loading.....</h1>
        </div>
      ) 
   }
   if(user.email){
       return children;
   }
   return <Navigate to="/" state={{from : location}} />;
};

export default PrivateRoute;