"use client";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import EmailVerifiedPopUp from "./EmailVerifiedPopUp";
import axios from "axios";

const EmailVerification = ({ email }) => {
  const [otp, setOtp] = useState("");
  const [emailModal, setEmailModal] = useState(false);
  const [isResendOtp, setIsResendOtp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleResendOtp = () => {
    setIsResendOtp(true);
    setTimeout(() => setIsResendOtp(false), 3000);
  };

  const validateInfo = () => {
    if (!otp) {
      toast.error("OTP field is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateInfo()) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          "https://masterconnect-backend.onrender.com/api/emailVerification",
          { email, otp },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200 || response.status === 201) {
          toast.success("OTP verified successfully!");
          setTimeout(() => {
            setEmailModal(true);
            setIsLoading(false);
          }, 2000);
        } else {
          toast.error(response.data.error || "Failed to verify OTP");
          setIsLoading(false);
        }
      } catch (error) {
        toast.error(error.response?.data?.error || "Failed to verify OTP");
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white h-[300px] w-[400px] flex flex-col items-center justify-center gap-4 rounded-lg p-4">
        <h2 className="text-[25px] font-semibold">E-mail Verification</h2>
        <p className="text-[14px] font-normal w-[330px] text-center">
          We’ve sent you a 6-digit code to your registered email. Please check your email and enter the code.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            isInputNum
            inputStyle={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "40px",
              height: "40px",
              fontSize: "18px",
              color: "#000",
              textAlign: "center",
            }}
            renderInput={(props) => <input {...props} />}
            containerStyle={{
              display: "flex",
              gap: "5px",
            }}
          />
          <button
            type="submit"
            className="bg-[#3C4E70] text-white flex items-center justify-center h-[40px] w-[200px] rounded-full"
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
              "Verify Email"
            )}
          </button>
        </form>

        <p className="text-[14px] font-medium">
          Didn’t receive the code?{" "}
          <span
            onClick={handleResendOtp}
            className="font-semibold text-[#3C4E70] cursor-pointer"
          >
            Resend
          </span>
        </p>
        <p className="text-[14px] font-medium">
          Facing issues? Raise a ticket:{" "}
          <span className="font-semibold cursor-pointer">Contact us</span>
        </p>
      </div>
      {emailModal && <EmailVerifiedPopUp />}
    </div>
  );
};

export default EmailVerification;
