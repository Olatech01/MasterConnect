import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='px-5 sm:px-0'>
        <div className='bg-[#EDF1FF] min-h-[673px] sm:flex-col-reverse rounded-md flex items-center gap-[4rem] px-[2rem] sm:px-[0.5rem] sm:py-5'>
            <div className='flex flex-col gap-5 sm:gap-3 sm:text-center'>
                <h2 className='text-[24px] font-medium'>GROWTH | IMPACT</h2>
                <h1 className='text-[70px] font-bold text-[#1E3561] w-[695px] sm:w-full leading-none sm:text-[20px]'>Find Your Dream Job With Us</h1>
                <p className='w-[821px] text-[20px] sm:w-full font-medium sm:text-[12px]'>Discover your dream job and unlock a world of opportunities with our student-focused job portal. Start your journey towards a successful future today!</p>
                <button className='bg-[#2C4471] sm:mt-3 h-[50px] rounded-lg w-[205px]'>Enroll Now</button>
                <div className='grid grid-cols-3 gap-3 sm:flex sm:flex-col'>
                    <h2 className='bg-white h-[30px] flex items-center justify-center rounded-full px-3'>Web Development</h2>
                    <h2 className='bg-white h-[30px] flex items-center justify-center rounded-full px-3'>Full Stack Developer</h2>
                    <h2 className='bg-white h-[30px] flex items-center justify-center rounded-full px-3'>Data Scientist</h2>
                    <h2 className='bg-white h-[30px] flex items-center justify-center rounded-full px-3'>Artificial Intelligence</h2>
                    <h2 className='bg-white h-[30px] flex items-center justify-center rounded-full px-3'>MERN Stack Developer</h2>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <Image height={100} width={200} src={'/one.svg'} alt="Not found" className='w-full'/>
                <Image height={100} width={200} src={'/two.svg'} alt="Not found" className='w-full'/>
                <Image height={100} width={200} src={'/three.svg'} alt="Not found" className='w-full'/>
                <Image height={100} width={200} src={'/four.svg'} alt="Not found" className='w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Hero