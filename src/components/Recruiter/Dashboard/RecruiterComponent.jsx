import Image from 'next/image'
import React from 'react'

const RecruiterComponent = () => {
    return (
        <div className='flex gap-[5rem] mt-5'>
            <div className='bg-[white] shadow-lg h-fit p-4 w-fit'>
                <Image height={100} width={100} src={'/man.svg'} alt='' />
            </div>
            <div className='flex flex-col gap-[2rem]'>
                <div className='flex gap-4 items-center'>
                    <h2 className='text-[13px] font-medium'>Name:</h2>
                    <p className='text-[18px] font-semibold'>Ayanda Boluwatife</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <h2 className='text-[13px] font-medium'>Job Title:</h2>
                    <p className='text-[18px] font-semibold'>HR (Human Resources)</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <h2 className='text-[13px] font-medium'>Contact:</h2>
                    <p className='text-[18px] font-semibold'>+2348124229230</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <h2 className='text-[13px] font-medium'>Work Experience:</h2>
                    <p className='text-[18px] font-semibold'>7+ years of experience</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <h2 className='text-[13px] font-medium'>Age:</h2>
                    <p className='text-[18px] font-semibold'>32</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <h2 className='text-[13px] font-medium'>Gender:</h2>
                    <p className='text-[18px] font-semibold'>Male</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <h2 className='text-[13px] font-medium'>Address:</h2>
                    <p className='text-[18px] font-semibold'>mustaphas902@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default RecruiterComponent