"use client"
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { toast } from 'react-toastify'
import EmailVerifiedPopUp from './EmailVerifiedPopUp';
import axios from 'axios';

const EmailVerification = ({ email }) => {
  const [otp, setOtp] = useState('');
  const [emailModal, setEmailModal] = useState(false)
  const [isResendOtp, setIsResendOtp] = useState(false)


  const handleResendOtp = () => {
    setIsResendOtp(true);
    setTimeout(() => {
      setIsResendOtp(false);
    }, 3000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      toast.error('Please enter the OTP');
      return;
    }
    try {
      const response = await axios.post('https://jobpilot-backend-1.onrender.com/api/emailVerification', { email, otp }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200 || response.status === 201) {
        toast.success('OTP verified successfully!');
        closeAllModals();
        toast.success("Account created successfully");
        setEmailModal(true)
      } else {
        toast.error(response.data.error || 'Failed to verify OTP');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.error || 'Failed to verify OTP');
      } else {
        toast.error('An error occurred while verifying OTP');
      }
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white h-[300px] w-[400px] flex flex-col items-center justify-center gap-4 rounded-lg p-4">
        <h2 className="text-[25px] font-semibold">E-mail Verification</h2>
        <p className="text-[14px] font-normal w-[330px] text-center">
          We’ve sent you a 6-Digit Code to your registered mail. Please check your mail and enter the code.
        </p>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center'>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
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
          <button type='submit' className="bg-[#3C4E70] text-white h-[40px] w-[200px] rounded-full">Verify email</button>
        </form>
        <p className="text-[14px] font-medium">
          Didn’t Receive the Code? <span className="font-semibold text-[#3C4E70] cursor-pointer">Resend</span>
        </p>
        <p className="text-[14px] font-medium">
          If facing any issues?, raise ticket: <span className="font-semibold cursor-pointer">Contact us</span>
        </p>
      </div>
      {emailModal && <EmailVerifiedPopUp />}
    </div>
  );
};

export default EmailVerification;
