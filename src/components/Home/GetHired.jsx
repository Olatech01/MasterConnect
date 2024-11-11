import Image from 'next/image'
import React from 'react'

const GetHired = () => {
  return (
    <div className='px-5 sm:px-0'>
        <div className='flex flex-col items-center gap-[1rem] justify-center'>
            <h2 className='text-[50px] font-bold sm:text-[20px]'>Get Hired in <span className='text-[#1E3561]'>4 Quick Easy Steps</span></h2>
            <p className='w-[615px] text-[20px] text-center sm:text-[14px] sm:w-full font-normal'>The quickest and most effective way to get hired by the top firm working in your career interest ones </p>
            <div className='grid grid-cols-4 gap-3 sm:grid-cols-1 sm:px-[2rem]'>
                <div className='flex flex-col items-center shadow-md text-center justify-center gap-4 border-2 rounded-lg h-[308px] px-6'>
                    <Image height={100} width={100} src={'/account.svg'} alt=""/>
                    <h2 className='text-[25px] font-semibold'>Create Account</h2>
                    <p className='text-[18px] font-normal'>For your dream job, create an account for yourself</p>
                </div>
                <div className='flex flex-col items-center text-center shadow-md justify-center mt-[4rem] sm:mt-0 gap-4 border-2 rounded-lg h-[308px] px-6'>
                    <Image height={100} width={100} src={'/test.svg'} alt=""/>
                    <h2 className='text-[25px] font-semibold'>Get Test Assessment</h2>
                    <p className='text-[18px] font-normal'>Get Your test assessment done and qualify for Job Hunting</p>
                </div>
                <div className='flex flex-col items-center text-center shadow-md justify-center gap-4 border-2 rounded-lg h-[308px] px-6'>
                    <Image height={100} width={100} src={'/show.svg'} alt=""/>
                    <h2 className='text-[25px] font-semibold'>Showcase Yourself</h2>
                    <p className='text-[18px] font-normal'>Qualify the assessment and fill your achievements and personals to get hired</p>
                </div>
                <div className='flex flex-col items-center text-center shadow-md justify-center mt-[4rem] sm:mt-0 gap-4 border-2 rounded-lg h-[308px] px-6'>
                    <Image height={100} width={100} src={'/hired.svg'} alt=""/>
                    <h2 className='text-[25px] font-semibold'>Get Hired</h2>
                    <p className='text-[18px] font-normal'>Get Your Dream Job and Excel in your career</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetHired