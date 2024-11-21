import React, { useState } from 'react'

const UpdateModalModal = ({onClose}) => {
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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInfo()) {
            // Call API to update contact
            onClose()
        }
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className='bg-[#FFFFFF] w-[35%] sm:w-[95%] md:w-[80%] flex flex-col gap-[15px] py-[20px] px-6 rounded-lg'>
                <h2 className='text-[20px] font-semibold'>Update Contact</h2>
                <form className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>Password</label>
                        <input type="text" placeholder="John"
                            className='rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3 w-full'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>New Contact</label>
                        <input type="text" placeholder="Doe"
                            className='rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3 w-full'
                        />
                    </div>
                    <div className='flex justify-end gap-[10px]'>
                        <button onClick={onClose} type="button" className='text-[16px] font-semibold border border-[#1E3561] px-10 h-[40px] rounded-full text-[#1E3561]'>Cancel</button>
                        <button type="submit" className='text-[16px] font-semibold bg-[#1E3561] px-10 h-[40px] rounded-full text-white'>Change</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateModalModal