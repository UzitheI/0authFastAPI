import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate=useNavigate();
  const signOut=()=>{
    localStorage.removeItem('token');
    navigate('/');
  }
  return (
    <div className='p-20 flex flex-col bg-blue-400 space-y-3'>

    <div className='flex justify-center text-3xl'>Profile</div>
    <p className='text-1xl'>this is your profile </p>
    <div>
      <button type='button' onClick={signOut} className='border border-black p-4 bg-red-500 rounded-lg '>Sign Out</button>
    </div>
    </div>
  )
}

export default Profile