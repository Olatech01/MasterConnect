import React from 'react'

const AdditionalDetails = () => {
    return (
        <div className='flex flex-col gap-7 border-2 shadow-md items-center p-5 bg-white'>
            <h2 className='text-[18px] font-semibold'>Additional Details</h2>
            <form className='w-full flex flex-col gap-3'>
                <div className='flex flex-col gap-2'>
                    <label className='text-[16px] font-medium'>Company Name</label>
                    <input type="text" 
                    placeholder="Autofill"
                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                    />
                </div>
                <div className='flex  flex-col gap-2'>
                    <label className='text-[16px] font-medium'>Address</label>
                    <input type="text" 
                    placeholder="Enter Company residential address"
                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                    />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>E-mail</label>
                        <input
                            type="text"
                            placeholder='Enter company official contact mail'
                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-medium'>Company Size (In People)</label>
                        <input
                            type="text"
                            placeholder='Enter no of People working in company'
                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-[16px] font-medium'>Social Media Profiles</label>

                    <div className='flex gap-2 w-full'>
                        <input
                            type="text"
                            placeholder='Enter Social Media Name'
                            className='w-[30%] px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                        />
                        <input
                            type="text"
                            placeholder='URL'
                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AdditionalDetails