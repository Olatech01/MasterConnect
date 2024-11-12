"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { toast } from 'react-toastify'

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [isResendOtp, setIsResendOtp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()



  const validateInfo = () => {
    if (!otp) {
      toast.error("Otp fields is required")
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
        router.push('/auth/newpassword');
      }, 2000);
    }

  }

  return (
    <div className='w-full flex bg-[#B1ADAD]'>
      <div className='w-full flex h-screen flex-col gap-4 items-center justify-center px-[4rem]'>
        <form onSubmit={handleSubmit} className='bg-[#FFFFFF] w-[585px] rounded-lg h-[424px]  flex flex-col gap-4 items-center justify-center shadow-lg'>
          <h2 className='text-[40px] font-semibold'>Enter 4 Digits Code</h2>
          <p className='text-[16px] font-medium'>Enter the 4 Digits code that was sent to your mail for verification</p>
          <div className='px-[5rem] w-full flex flex-col items-center gap-4'>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              isInputNum
              inputStyle={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                width: '40px',
                height: '40px',
                fontSize: '18px',
                color: '#000',
                textAlign: 'center',
                margin: '0 5px'
              }}
              containerStyle={{
                display: 'flex',
                gap: '5px'
              }}
              renderInput={(props) => <input {...props} />}
            />
            <p className="text-[14px] font-medium">
              Didn’t Receive the Code? <span className="font-semibold text-[#3C4E70] cursor-pointer">Resend</span>
            </p>
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
                "Submit"
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

export default OtpVerification