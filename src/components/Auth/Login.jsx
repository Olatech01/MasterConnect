"use client"
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { LuEyeOff, LuEye } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { setCookie } from "cookies-next";
import { AuthContext } from '../libs/AuthContext';

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateInfo = () => {
    if (!email || !password) {
      toast.error("All fields are required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInfo()) return;

    setIsLoading(true);
    const formData = { email, password };

    try {
      const response = await axios.post(
        'https://masterconnect-backend.onrender.com/api/login',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200 || response.status === 201) {
        const { userType, username, token } = response.data.user;

        logIn(token, username, userType); 

        toast.success("Login Successful!");

        const redirectPath =
          userType === 'recruiter'
            ? '/recruiter'
            : userType === 'admin'
              ? '/admin'
              : '/candidate';

        setTimeout(() => router.push(redirectPath), 2000);
      } else {
        toast.error("Invalid login credentials.");
      }
    } catch (error) {
      toast.error("Failed to login");
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className='w-full flex bg-[#B1ADAD]'>
      <div className='w-full flex h-screen sm:h-fit sm:py-5 items-center justify-center px-[4rem] sm:px-2'>
        <div className='flex-col gap-4 flex items-center justify-center bg-[#FFFFFF] rounded-lg w-[700px] sm:w-full min-h-[600px]'>
          <h1 className='text-[20px] font-semibold'>Log into Your Account</h1>
          <p className='text-[20px] font-normal sm:px-2 sm:text-[16px]'>Welcome Back! Select a method to Log In</p>
          <div className='flex gap-10 sm:flex-col sm:gap-4'>
            <button className='flex items-center border-2 shadow-lg h-[40px] px-4'>
              <FcGoogle />
              <span className='ml-[2px] text-[14px] font-semibold'>Sign in with Google</span>
            </button>
            <button className='flex items-center border-2 shadow-lg h-[40px] px-4'>
              <FaFacebookSquare />
              <span className='ml-[2px] text-[14px] font-semibold'>Sign in with Facebook</span>
            </button>
          </div>
          <p>or continue with email</p>
          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5 px-[4rem] sm:px-2'>
            <div className='flex flex-col gap-2'>
              <label className='text-[16px] font-semibold'>Email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-[16px] font-semibold'>Password</label>
              <div className='flex justify-between items-center border-2 rounded-lg h-[43px] shadow-lg px-3'>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter your password'
                  className='outline-none w-full'
                />
                <button onClick={togglePasswordVisibility} type="button" className="cursor-pointer">
                  {showPassword ? <LuEyeOff /> : <LuEye />}
                </button>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2'>
                <input type='checkbox' className='w-4 h-4' />
                <label className='text-[14px] font-semibold'>Remember Me</label>
              </div>
              <Link href="/auth/forget">
                <p className='text-[#0057FF]'>Forget password</p>
              </Link>
            </div>
            <button
              type='submit'
              className='w-full h-[45px] flex items-center justify-center bg-[#3C4E70] rounded-lg text-[#FFFFFF] text-[18px] font-semibold'
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <p className='text-[14px] font-medium'>Don’t have an account? <span className='text-[#0057FF]'>Create New One</span></p>
        </div>
      </div>
      <div className='w-full h-screen sm:hidden'>
        <Image
          height={100}
          width={100}
          src="/auth.svg"
          alt="Not found"
          className="w-full object-cover h-screen"
        />
      </div>
    </div>
  );
};

export default Login;
