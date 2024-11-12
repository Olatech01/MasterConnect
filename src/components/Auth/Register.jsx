"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { LuEyeOff, LuEye } from "react-icons/lu";
import EmailVerification from './EmailVerification';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [validLength, setValidLength] = useState(false)
    const [hasNumber, setHasNumber] = useState(false)
    const [hasSymbol, setHasSymbol] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [agreed, setAgreed] = useState(false)
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [userType, setUserType] = useState('')
    const [showConfirm, setShowConfirm] = useState(false)
    const [emailVerification, setEmailVerification] = useState(false)

    const handleEmailVerification = () => {
        setEmailVerification(!emailVerification)
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value
        setPassword(value)
        setValidLength(value.length >= 6)
        setHasNumber(/\d/.test(value))
        setHasSymbol(/[!@#$%^&*(),.?":{}|<>]/.test(value))
    }

    const togglePasswordVisibility = () => setShowPassword(!showPassword)
    const handleShowConfirm = () => setShowConfirm(!showConfirm)

    const validateInfo = () => {
        if (!username || !confirmPassword || !password || !email || !city || !state || !userType) {
            toast.error("All fields are required")
            return false
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match")
            return false
        }
        if (!validLength || !hasNumber || !hasSymbol) {
            toast.error("Password must meet all complexity requirements")
            return false
        }
        if (!agreed) {
            toast.error("Please agree to the terms and conditions")
            return false
        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateInfo()) {
            setIsLoading(true)
            const formData = { username, userType, email, password, city, state }

            try {
                const response = await axios.post('https://jobpilot-backend-1.onrender.com/api/register', formData, {
                    headers: { 'Content-Type': 'application/json' },
                })

                if (response.status === 200 || response.status === 201) {
                    setTimeout(() => {
                        setIsLoading(false)
                        setEmailVerification(true)
                    }, 2000)
                }
            } catch (error) {
                toast.error("An error occurred while creating the account")
                setIsLoading(false)
            }
        }
    }

    return (
        <div className='w-full flex bg-[#B1ADAD]'>
            <div className='w-full flex h-screen flex-col gap-4 items-center justify-center px-[4rem]'>
                <div className='flex-col gap-4 py-5 flex items-center justify-center bg-[#FFFFFF] rounded-lg w-[700px] min-h-[600px]'>
                    <h2 className='text-[40px] font-semibold'>Create Your Account</h2>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-3 px-[4rem]'>

                        <div className='flex flex-col gap-2'>
                            <label className='text-[16px] font-medium'>Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder='Enter Your Username'
                                className='rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3'
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-[16px] font-medium'>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter Your Email'
                                className='border-2 rounded-lg h-[43px] shadow-lg outline-none pl-3'
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-[16px] font-medium'>Password</label>
                            <div className='flex justify-between items-center border-2 rounded-lg h-[43px] shadow-lg px-3'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder='Enter Your Password'
                                    className='outline-none w-full'
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

                        <div className='flex flex-col gap-2'>
                            <label className='text-[16px] font-medium'>Confirm Password</label>
                            <div className='flex justify-between items-center border-2 rounded-lg h-[43px] shadow-lg px-3'>
                                <input
                                    type={showConfirm ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder='Verify Password'
                                    className='outline-none w-full'
                                />
                                <button
                                    onClick={handleShowConfirm}
                                    type="button"
                                    className="cursor-pointer"
                                >
                                    {showConfirm ? <LuEyeOff /> : <LuEye />}
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <h2 className='text-[16px] font-medium'>User Type</h2>
                            <div className='flex items-center gap-4'>
                                <div className='flex items-center gap-3'>
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="recruiter"
                                        checked={userType === "recruiter"}
                                        onChange={(e) => setUserType(e.target.value)}
                                    />
                                    <label className='text-[16px] font-medium'>Recruiter</label>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="candidate"
                                        checked={userType === "candidate"}
                                        onChange={(e) => setUserType(e.target.value)}
                                    />
                                    <label className='text-[16px] font-medium'>Candidate</label>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-4 w-full'>
                            <div className='flex flex-col gap-2 w-full'>
                                <label className='text-[16px] font-medium'>State</label>
                                <input
                                    type="text"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className='border-2 rounded-lg h-[43px] shadow-lg outline-none pl-3'
                                />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label className='text-[16px] font-medium'>City</label>
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className='border-2 rounded-lg h-[43px] shadow-lg outline-none pl-3'
                                />
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <input
                                type="checkbox"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                            />
                            <p>I agree to the Terms and Privacy policy</p>
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
                            ) : "Sign Up"}
                        </button>
                    </form>
                </div>
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
            {emailVerification && (
                <EmailVerification show={emailVerification} onClose={() => setEmailVerification(false)} />
            )}
        </div>
    )
}

export default Register
