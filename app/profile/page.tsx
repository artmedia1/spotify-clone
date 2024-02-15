'use client'
import React from 'react'

const ProfilePage = () => {
    const handleClick = async (event:any) => {
        console.log('clicked');
      };


  return (
    <div>
        <h1>ProfilePage</h1>
        <button onClick={handleClick}>Sign Out</button>
    </div>
  )
}

export default ProfilePage