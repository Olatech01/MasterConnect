import Image from 'next/image'
import React from 'react'

const Perfect = () => {
    return (
        <div className='px-5 sm:px-3'>
            <div className='flex flex-col items-center gap-[1rem] justify-center'>
                <h2 className='text-[50px] font-bold sm:text-[20px]'>Perfect <span className='text-[#1E3561]'>Job Searching</span> Platform</h2>
                <div className='w-full bg-[#EDF1FF] rounded-md flex sm:flex-col-reverse items-center gap-[3rem] min-h-[436px] px-[4rem] sm:px-2 sm:py-7'>
                    <div className=''>
                        <Image height={100} width={300} src={"/build.svg"} alt='' className="" />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-[40px] sm:text-[20px] font-semibold w-[500px] sm:w-full leading-none'>Build Your Personal Account Profile</h2>
                        <p className='w-[753px] text-[18px] font-medium sm:w-full'>
                            Create an account for job information that you wanted, get notified by every company and land in your dream career through our platform. We make your thoughts and dreams succesful
                        </p>
                        <button className='h-[40px] rounded-md w-[236px] bg-[#3C4E70] text-white'>Register Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfect