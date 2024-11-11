"use client"
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const EmailVerification = () => {
  const [otp, setOtp] = useState('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className='bg-[#FFFFFF] h-[300px] w-[400px] flex flex-col items-center justify-center gap-4 rounded-lg'>
        <h2 className='text-[25px] font-semibold'>E-mail Verification</h2>
        <p className='text-[14px] font-normal w-[330px] text-center'>We’ve sent you a 6-Digit Code to your registered mail. Please check your mail and enter the code.</p>
        <OtpInput
          value={otp}
          className="border"
          onChange={setOtp}
          numInputs={6}
          inputStyle="border h-[40px] px-5 rounded-md text-black"
          containerStyle='flex gap-3'
          // renderSeparator={<span>-</span>}
          inputType='number'
          renderInput={(props) => <input {...props} />}
        />
        <button className='bg-[#3C4E70] text-white h-[40px] w-[200px] rounded-full'>Verify email</button>
        <p className='text-[14px] font-medium'>Didn’t Receive the Code? <span className='font-semibold text-[#3C4E70]'>Resend</span></p>
        <p className='text-[14px] font-medium'>If facing any issues?, raise ticket: <span className='font-semibold'>Contact us</span></p>
      </div>
    </div>
  )
}

export default EmailVerification