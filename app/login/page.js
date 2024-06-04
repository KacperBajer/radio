'use client'
import React, { useState } from 'react'

const page = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }


  return (
    <div className='text-white bg-black px-10 flex items-center justify-center w-full min-h-screen'>
        <form className='w-full max-w-[400px]'>
            <p className='text-5xl text-center mb-5'>Log In</p>
            <p className='text-sm text-center text-gray-400 mb-5'>Administrative privileges await! Access the full suite of tools, controls, and insights by logging in to your account.</p>
            <input type='text' onChange={handleChange} value={formData.username} className='formInput' placeholder='Username' name='username' />
            <input type='password' onChange={handleChange} value={formData.password} className='formInput mt-2' placeholder='Password' name='password' />
            <button type='submit' className='btn-primary rounded-xl mt-4 w-full'>Log In</button>
        </form>
    </div>
  )
}

export default page