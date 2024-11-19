"use client"
import React, { useState } from 'react'

const BasicDetails = () => {
    const [logo, setLogo] = useState(null); 
    const [preview, setPreview] = useState(null); 

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setLogo(file);
            setPreview(URL.createObjectURL(file)); 
        }
    };
    return (
        <div className='flex flex-col gap-7 border-2 shadow-md items-center p-5 bg-white'>
            <h2 className='text-[30px] font-medium'>Basic Details</h2>
            <form className='w-full flex flex-col gap-3'>
                <div className='flex flex-col gap-2'>
                    <label className='text-[16px] font-medium'>Company Name</label>
                    <input
                        type="text"
                        placeholder='Enter Company Name Here'
                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-[16px] font-medium'>Type of Company</label>
                    <select
                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                    >
                        <option value="">Select Type</option>
                        <option value="1">Public</option>
                        <option value="2">Private</option>
                        <option value="3">Government</option>
                    </select>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>State</label>
                        <input
                            type="text"
                            placeholder='Enter Your State'
                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>City</label>
                        <input
                            type="text"
                            placeholder='Enter Your City'
                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <label className="text-[16px] font-medium">Upload Your Company Logo</label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-[25%] px-2 py-2 border-2 rounded-md outline-none shadow-lg"
                    />

                    {preview && (
                        <div className="">
                            <img
                                src={preview}
                                alt="Uploaded Company Logo"
                                className="w-24 h-24 rounded-md object-cover border-2 border-gray-300 shadow-md"
                            />
                        </div>
                    )}

                    {logo && <p className="text-sm text-gray-500">Selected File: {logo.name}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-[16px] font-medium'>Company Official Website</label>
                    <input
                        type="text"
                        placeholder='Enter Company Official Website'
                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                    />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>Company Founded Year</label>
                        <input
                            type="date"
                            placeholder='Enter Company Founded Year'
                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>Company Contact</label>
                        <input
                            type="text"
                            placeholder='Enter Company Contact'
                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BasicDetails