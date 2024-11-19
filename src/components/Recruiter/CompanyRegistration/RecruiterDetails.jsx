import React from 'react'

const RecruiterDetails = () => {
    return (
        <div className='flex flex-col gap-7 border-2 shadow-md items-center p-5 bg-white'>
            <h2 className='text-[30px] font-medium'>Recruiter Personal Details</h2>
            <form className='w-full flex flex-col gap-3'>
                <div className='flex flex-col gap-2'>
                    <label className='text-[16px] font-medium'>Recruiter Name</label>
                    <input
                        type="text"
                        placeholder='Enter Recruiter Name Here'
                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-[16px] font-medium'>Job Title</label>
                    <input
                        type="text"
                        placeholder='Enter Job Title Here'
                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                    />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>Gender</label>
                        <select className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'>
                            <option>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>Age</label>
                        <input
                            type="text"
                            placeholder='Enter Age Here'
                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>ID Card/Proof</label>
                        <input
                            type="text"
                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>Working Years</label>
                        <input
                            type="text"
                            placeholder='Enter Working Years Here'
                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>Email</label>
                        <input
                            type="text"
                            placeholder='Enter Email Here'
                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>Linkedin <span className='opacity-30'>(Optional)</span></label>
                        <input
                            type="text"
                            placeholder='Enter Linkedin URL Here'
                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>Profile Photo</label>
                        <input
                            type="text"
                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>Personal Contact</label>
                        <input
                            type="text"
                            placeholder='Enter Personal Contact Here'
                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RecruiterDetails