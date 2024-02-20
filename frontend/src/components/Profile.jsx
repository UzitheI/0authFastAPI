import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate=useNavigate();
  const signOut=()=>{
    localStorage.removeItem('token');
    navigate('/');
  }
  return (
    <div>

    <div>Profile</div>
    <p>this is your profile </p>
    <div>
      <button type='button' onClick={signOut}>Sign Out</button>
    </div>
    </div>
  )
}

export default Profile