import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../Utils/Firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { logo } from '../Utils/Constant';

function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
     
    }).catch((error) => {
      navigate("/error");
    });
  }

  const unsubscribe = useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email:email,  displayName:displayName,photoURL:photoURL}));
        // ...
        navigate("/browse")
      }
       else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    //unsubscribe when compponent is unmount 
    return ()=> unsubscribe;
  },[])
  return (
    <div className='absolute flex justify-between w-screen px-36 py-3 bg-gradient-to-b from-black z-10 '>
      <img className='w-44'  src={logo} alt="logo" />

      {user && <div className='flex p-3 gap-3'>
        <img className='w-12 h-12 rounded-md ' src={user?.photoURL} alt="user-icon" />
      <button onClick={handleSignOut} className='px-3 py-2 bg-blue-400 rounded-lg text-white'>Sign Out</button>

      </div>}
    </div>
    
  )
}

export default Header
