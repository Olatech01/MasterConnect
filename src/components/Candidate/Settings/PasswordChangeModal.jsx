"use client"
import axios from 'axios'
import React, { useState } from 'react'

const PasswordChangeModal = ({ onClose, email }) => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState("")

    const validateInfo = () => {
        if (!oldPassword ||!newPassword ||!confirmPassword) {
            toast.error("All fields are required")
            return false;
        }
        if (newPassword!== confirmPassword) {
            toast.error("Passwords do not match")
            return false;
        }
        return true;
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateInfo()) {
            setIsLoading(true)
            const formData = {email, oldPassword, newPassword}

            try {
                const response = await axios.post('https://masterconnect-backend.onrender.com/api/changePassword', formData, {
                    headers: { 'Content-Type': 'application/json' },
                })
                
                if (response.status === 200 || response.status === 201) {
                    setTimeout(() => {
                        setIsLoading(false)
                        onClose()
                    })
                }
            } catch (error) {
                toast.error(error.response?.data?.error || "Failed to change password")
            }
        }
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className='bg-[#FFFFFF] w-[35%] sm:w-[95%] md:w-[80%] flex flex-col gap-[15px] py-[20px] px-6 rounded-lg'>
                <h2 className='text-[20px] font-semibold'>Change Password</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[14px] font-medium'>Old Password</label>
                        <input type="password" placeholder="Enter old password"
                            className='rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3 w-full'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[14px] font-medium'>New Password</label>
                        <input type="password" placeholder="Enter new password"
                            className='rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3 w-full'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[14px] font-medium'>Confirm New Password</label>
                        <input type="password" placeholder="Confirm new password"
                            className='rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3 w-full'
                        />
                    </div>
                    <div className='flex justify-end sm:justify-center gap-[10px]'>
                        <button onClick={onClose} type="button" className='text-[16px] font-semibold border border-[#1E3561] px-10 h-[40px] rounded-full text-[#1E3561]'>Cancel</button>
                        <button type="submit" className='text-[16px] font-semibold bg-[#1E3561] px-10 h-[40px] rounded-full text-white'>Change</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PasswordChangeModal