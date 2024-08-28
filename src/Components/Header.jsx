import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../Utils/Firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className='absolute flex justify-between w-screen px-36 py-3 bg-gradient-to-b from-black z-10 '>
      <img className='w-44'  src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

      {user && <div className='flex p-3 gap-3'>
        <img className='w-12 h-12 rounded-md ' src={user?.photoURL} alt="user-icon" />
      <button onClick={handleSignOut} className='px-3 py-2 bg-blue-400 rounded-lg text-white'>Sign Out</button>

      </div>}
    </div>
    
  )
}

export default Header
