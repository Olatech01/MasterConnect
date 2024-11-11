"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { LuEyeOff, LuEye } from "react-icons/lu";

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false)


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const validateInfo = () => {
    if (!email || !password) {
      toast.error("All fields are required")
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInfo()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        toast.success('Login Successfully');
        // setEmailVerification(true);
      }, 2000);
    }

  }





  return (
    <div className='w-full flex'>
      <div className='w-full flex h-screen flex-col gap-4 items-center justify-center px-[4rem]'>
        <h1 className='text-[20px] font-semibold'>Log into Your Account</h1>
        <p className='text-[20px] font-normal'>Welcome Back ! Select a method to Log In</p>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-3'>
          <div className='flex flex-col gap-2'>
            <label className='text-[16px] font-semibold'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='w-full px-2 py-2 border-2 rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-[16px] font-semibold'>Password</label>
            <div className='flex justify-between items-center rounded-lg h-[43px] shadow-lg px-3'>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Verify Password'
                className=' outline-none  w-full'
              />
              <button
                onClick={togglePasswordVisibility}
                type="button"
                className="cursor-pointer"
              >
                {showPassword ? <LuEyeOff /> : <LuEye />}
              </button>
            </div>
          </div>
          <div className='flex gap-2'>
            <input type='checkbox' className='w-4 h-4' />
            <label className='text-[14px] font-semibold'>Remember Me</label>
          </div>
          <button
            type='submit'
            className='w-full h-[45px] flex items-center justify-center bg-[#3C4E70] rounded-lg text-[#FFFFFF] text-[18px] font-semibold'
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            ) : (
              "Login"
            )
            }
          </button>
        </form>
      </div>
      <div className='w-full h-screen'>
        <Image
          height={100}
          width={100}
          src={"/auth.svg"}
          alt="Not found"
          className="w-full object-cover h-screen"
        />
      </div>
    </div>
  )
}

export default Login