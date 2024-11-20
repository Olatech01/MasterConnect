import Image from 'next/image'
import React from 'react'

const WideRange = () => {
  return (
    <div className='px-5 sm:px-3'>
        <div className='flex flex-col items-center gap-[1rem] justify-center'>
            <h2 className='text-[50px] font-bold sm:text-[20px]'>Choose From <span className='text-[#1E3561]'>Wide Range</span> of Categories</h2>
            <div className='w-full flex flex-col gap-6'>
                <div className='flex w-full justify-between'>
                    <h2 className='text-[18px] font-medium'>Explore Test Assessments</h2>
                    <p className='text-[18px] font-medium'>Show more</p>
                </div>
                <div className='grid grid-cols-4 gap-4 sm:grid-cols-1 sm:px-[1rem]'>
                    <div className='flex flex-col items-center bg-gradient-to-b from-[#FFEFDD] to-[#FFFFFF] shadow-md rounded-md h-[250px]  justify-center gap-3'>
                        <Image width={100} height={100} src={"/it.svg"} alt="true"/>
                        <h2 className='text-[25px] font-medim'>IT and Software</h2>
                        <button className='bg-[#3C4E70] rounded-md h-[35px] text-[#fff] w-[160px]'>Test now</button>
                    </div>
                    <div className='flex flex-col items-center bg-gradient-to-b from-[#F0DDFF] to-[#FFFFFF] shadow-md rounded-md h-[250px]  justify-center gap-3'>
                        <Image width={100} height={100} src={"/content.svg"} alt="true"/>
                        <h2 className='text-[25px] font-medim'>Content Writing</h2>
                        <button className='bg-[#3C4E70] rounded-md h-[35px] text-[#fff] w-[160px]'>Test now</button>
                    </div>
                    <div className='flex flex-col items-center bg-gradient-to-b from-[#FFDDDD] to-[#FFFFFF] shadow-md rounded-md h-[250px]  justify-center gap-3'>
                        <Image width={100} height={100} src={"/design.svg"} alt="true"/>
                        <h2 className='text-[25px] font-medim'>Designing</h2>
                        <button className='bg-[#3C4E70] rounded-md h-[35px] text-[#fff] w-[160px]'>Test now</button>
                    </div>
                    <div className='flex flex-col items-center bg-gradient-to-b from-[#DDF3FF] to-[#FFFFFF] shadow-md rounded-md h-[250px]  justify-center gap-3'>
                        <Image width={100} height={100} src={"/busi.svg"} alt="true"/>
                        <h2 className='text-[25px] font-medim'>Business and Marketing</h2>
                        <button className='bg-[#3C4E70] rounded-md h-[35px] text-[#fff] w-[160px]'>Test now</button>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-4 sm:grid-cols-1 sm:px-[1rem]'>
                    <div className='flex flex-col items-center bg-gradient-to-b from-[#FFFCDD] to-[#FFFFFF] shadow-md rounded-md h-[250px]  justify-center gap-3'>
                        <Image width={100} height={100} src={"/finance.svg"} alt="true"/>
                        <h2 className='text-[25px] font-medim'>Finance Sectors</h2>
                        <button className='bg-[#3C4E70] rounded-md h-[35px] text-[#fff] w-[160px]'>Test now</button>
                    </div>
                    <div className='flex flex-col items-center bg-gradient-to-b from-[#E0FFDD] to-[#FFFFFF] shadow-md rounded-md h-[250px]  justify-center gap-3'>
                        <Image width={100} height={100} src={"/human.svg"} alt="true"/>
                        <h2 className='text-[25px] font-medim'>Human resources</h2>
                        <button className='bg-[#3C4E70] rounded-md h-[35px] text-[#fff] w-[160px]'>Test now</button>
                    </div>
                    <div className='flex flex-col items-center bg-gradient-to-b from-[#DDFFFD] to-[#FFFFFF] shadow-md rounded-md h-[250px]  justify-center gap-3'>
                        <Image width={100} height={100} src={"/data.svg"} alt="true"/>
                        <h2 className='text-[25px] font-medim'>Data Scientist and Analytics</h2>
                        <button className='bg-[#3C4E70] rounded-md h-[35px] text-[#fff] w-[160px]'>Test now</button>
                    </div>
                    <div className='flex flex-col items-center bg-gradient-to-b from-[#FFDDFE] to-[#FFFFFF] shadow-md rounded-md h-[250px]  justify-center gap-3'>
                        <Image width={100} height={100} src={"/seo.svg"} alt="true"/>
                        <h2 className='text-[25px] font-medim'>SEO Marketing</h2>
                        <button className='bg-[#3C4E70] rounded-md h-[35px] text-[#fff] w-[160px]'>Test now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WideRange