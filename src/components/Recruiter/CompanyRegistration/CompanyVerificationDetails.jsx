"use client"
import React, { useState } from 'react'

const CompanyVerificationDetails = () => {
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
            <h2 className='text-[30px] font-medium'>Company Verification Details</h2>
            <form className='w-full flex flex-col gap-3'>
                <div className='flex flex-col gap-2'>
                    <label className='text-[16px] font-medium'>Company Name</label>
                    <input
                        type="text"
                        placeholder='Autofill'
                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-[16px] font-medium'>Company Registration Number</label>
                    <input
                        type="text"
                        placeholder='Enter company registration number'
                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-[16px] font-medium'>Tax Identification Number (TIN)</label>
                    <input
                        type="text"
                        placeholder='Enter tax identification number'
                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <label className="text-[16px] font-medium">Certificates</label>

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
                    <p className='text-[12px] font-medium'>Upload only Govt. verified certifications of your company</p>

                    {logo && <p className="text-sm text-gray-500">Selected File: {logo.name}</p>}
                </div>
            </form>
        </div>
    )
}

export default CompanyVerificationDetails