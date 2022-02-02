import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Aos from 'aos'
import useFirebase from '../../Hooks/useFirebase'
import useAuth from '../../Hooks/useAuth'

export default function Header() {
    const [isOpen, setIsOpen] = useState(true) //set isOpen navber for resposive navbar
    const {singinwithGoogle, user, Logout} = useAuth()
    const [clicked, SetClicked] = useState(false);
    const activeStyle = {
        fontWeight: "bold",
        borderBottom: "3px solid green",
        borderRadius : "1px"
    }
    useEffect(()=>{
        Aos.init({
            duration:1000
        })
    })
    return (
        <div className='sticky top-0 z-50 shadow-md  bg-white'>
        <div className='px-5 xl:px-16 py-3 flex justify-between  bg-white'>
        <div>
        <div className='hidden md:flex'>
        <i className="fas fa-clinic-medical text-primary text-xl xl:text-3xl"></i>
        <h1 className='text-primary text-xl xl:text-3xl mx-2 font-bold'>Delta medicale</h1>
        </div>
        {
            user.displayName ?
            <button onClick={() => SetClicked(!clicked)} className="w-8 mx-2 md:hidden" ><img src={user.photoURL} width="100%" className='rounded-full' alt="" /></button>
            : 
            <div className='flex md:hidden'>
            <i className="fas fa-clinic-medical text-primary text-xl xl:text-3xl"></i>
            <h1 className='text-primary text-xl xl:text-3xl mx-2 font-bold'>Delta medicale</h1>
            </div>
        }
        </div>
        <div>
        <div className='inline-block xl:hidden'>
        <button onClick={() => setIsOpen(!isOpen)}>
        { // this condition for open navbar and close navvbar
           isOpen ? <i className="fas fa-bars text-xl text-primary"></i> : <i className="fas fa-times text-xl text-primary"></i>
        }
        </button>
        </div>
        <div className='hidden xl:flex justify-between align-middle font-semibold'>
        <div className='my-auto'>
        <NavLink to="/" className="py-1 px-3 mx-2 rounded-full" style={({ isActive }) => ({ backgroundColor: isActive ? '#2687B4' : 'white', color: isActive ? 'white' : '#2687B4' })}>HOME</NavLink>
        </div>
        <div className='my-auto'>
        <NavLink to="/service" className="px-3 py-1 mx-2 rounded-full" style={({ isActive }) => ({ backgroundColor: isActive ? '#2687B4' : 'white', color: isActive ? 'white' : '#2687B4' })}>SERVICE</NavLink>
        </div>
           <div className='my-auto'>
           <NavLink to="/apointments" className="py-1 px-3 mx-2 rounded-full" style={({ isActive }) => ({ backgroundColor: isActive ? '#2687B4' : 'white', color: isActive ? 'white' : '#2687B4' })}>APPOINTMENTS</NavLink>
           </div>
           <div className='my-auto'>
           <NavLink to="/contect" className="py-1 px-3 mx-2 rounded-full" style={({ isActive }) => ({ backgroundColor: isActive ? '#2687B4' : 'white', color: isActive ? 'white' : '#2687B4' })}>CONTECT</NavLink>
           </div>
           
           <div className='my-auto'>
           {  user.displayName ?
            <button onClick={() => SetClicked(!clicked)} className={clicked ? "w-8 mx-4 rounded-full border border-primary" : "w-8 mx-4 rounded-full"} ><img src={user.photoURL} width="100%" className='rounded-full' alt="" /></button>
            : 
               <button onClick={singinwithGoogle} className="text-primary transition duration-300 border border-primary hover:bg-primary hover:text-white py-1 px-3 mx-4 rounded-full" >LOGIN</button>
           }
           </div>
           </div>
        </div>
        </div>
        {
            !isOpen && <div className='bg-primary flex justify-center absolute h-screen w-screen'> 
            <div className='text-center my-auto'>
            <NavLink onClick={() => setIsOpen(!isOpen)} to="/" className="text-white font-bold text-2xl block" activeStyle={activeStyle}>HOME</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} to="/service" className="text-white font-bold text-2xl block mt-5" >SERVICE</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} to="/apointments" className="text-white font-bold text-2xl block mt-5" >APPOINTMENTS</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} to="/contect" className="text-white font-bold text-2xl block mt-5" >CONTECT</NavLink>
            { !user.displayName &&
                <button onClick={singinwithGoogle} className="text-white font-bold text-2xl border-2 px-14 py-2 rounded-full mt-5 border-white rouded-full block hover:bg-white hover:text-primary" >LOGIN</button>
            }
            </div>
            </div>
        }
        {
             (clicked) && (user.displayName) &&
            <div className='hidden md:inline-block absolute md:right-20 top-14 bg-white py-5 shadow-md border-primary rounded-xl'>
            <div className='text-center px-5 '>
            <img src={user.photoURL} width={100} className='m-auto  rounded-full' alt="" />
            <p className='font-semibold text-xl mt-3'>{user.displayName}</p>
            <p className='text-gray-800'>{user.email}</p>
            <button onClick={Logout} className='py-1 w-full text-white bg-primary rounded-full mt-5'>singout</button>
            </div>
            <div className='mt-6 text-gray-700 font-semibold'>
            <Link to="Dashboard/users">
            <p  onClick={() => SetClicked(!clicked)} className='hover:text-primary hover:bg-gray-300 px-4 py-2'><i className="fas fa-tachometer-alt mr-4"></i>Dashboard</p>
            </Link>
            <Link to="Rateus">
            <p onClick={() => SetClicked(!clicked)} className='hover:text-primary hover:bg-gray-300 px-4 py-2'><i className="fas fa-star mr-4"></i>Rate us</p>
            </Link>
            </div>
            </div>
        }
        {
             (clicked) && (user.displayName) &&
            <div className='md:hidden px-10 bg-white py-5 shadow-md border-primary rounded-xl'>
            <div className='text-center px-5 '>
            <img src={user.photoURL} width={100} className='m-auto  rounded-full' alt="" />
            <p className='font-semibold text-xl mt-3'>{user.displayName}</p>
            <p className='text-gray-800'>{user.email}</p>
            <button onClick={Logout} className='py-3 w-full text-white bg-primary rounded-full mt-5'>singout</button>
            </div>
            <div className='mt-6 text-gray-700 font-semibold'>
            <Link to="Dashboard/users">
            <p  onClick={() => SetClicked(!clicked)} className='hover:text-primary hover:bg-gray-300 px-4 py-2'><i className="fas fa-tachometer-alt mr-4"></i>Dashboard</p>
            </Link>
            <Link to="Rateus">
            <p onClick={() => SetClicked(!clicked)} className='hover:text-primary hover:bg-gray-300 px-4 py-2'><i className="fas fa-star mr-4"></i>Rate us</p>
            </Link>
            </div>
            </div>
        }
    </div>
    )
}
