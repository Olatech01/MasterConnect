"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { TfiEmail } from "react-icons/tfi";
import { toast } from 'react-toastify'


const ForgetPassword = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const validateInfo = () => {
    if (!email) {
      toast.error("Email fields is required")
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
        router.push('/auth/otpVerification') 
      }, 2000);
    }

  }


  return (
    <div className='w-full flex bg-[#B1ADAD]'>
      <div className='w-full flex h-screen flex-col gap-4 items-center justify-center px-[4rem]'>
        <form onSubmit={handleSubmit} className='bg-[#FFFFFF] w-[585px] rounded-lg h-[424px]  flex flex-col gap-4 items-center justify-center shadow-lg'>
          <h2 className='text-[40px] font-semibold'>Forgot your password</h2>
          <p className='text-[16px] font-medium'>Provide your account’s email for which you want to reset password</p>
          <div className='px-[5rem] w-full flex flex-col gap-4'>
            <div className='flex gap-2 items-center h-[40px] border rounded-md w-full px-3'>
              <TfiEmail size={20} className='' />
              <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='outline-none w-full'
                placeholder='example@example.com'
              />
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
                "Next"
              )
              }
            </button>
          </div>
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

export default ForgetPassword