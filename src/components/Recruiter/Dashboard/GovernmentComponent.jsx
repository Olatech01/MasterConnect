import Image from 'next/image'
import React from 'react'

const GovernmentComponent = () => {
  return (
    <div className='flex flex-col gap-[2rem] mt-5'>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-4 items-center sm:flex-col sm:items-start'>
                <h2 className='text-[13px] font-medium'>Company Registration Number:</h2>
                <p className='text-[18px] font-semibold'>12345646546546544</p>
            </div>
            <div className='flex gap-4 items-center sm:flex-col sm:items-start'>
                <h2 className='text-[13px] font-medium'>Tax Identification Number:</h2>
                <p className='text-[18px] font-semibold'>GSTIN12345646546546544</p>
            </div>
        </div>
        <div className='flex flex-col gap-[1.5rem]'>
            <h2 className='text-[20px] font-semibold border-b-2 py-2'>Government Recognized Certificates</h2>
            <div className='grid grid-cols-3 gap-2'> 
                <Image height={100} width={200} src={'/gov1.svg'} alt='' className='w-full'/>
                <Image height={100} width={200} src={'/gov2.svg'} alt='' className='w-full'/>
                <Image height={100} width={200} src={'/gov1.svg'} alt='' className='w-full'/>
            </div>
        </div>
        <div className='flex flex-col gap-[1.5rem]'>
            <h2 className='text-[20px] font-semibold border-b-2 py-2'>Company Images</h2>
            <div className='grid grid-cols-3 gap-2'> 
                <Image height={100} width={200} src={'/com.svg'} alt='' className='w-full'/>
                <Image height={100} width={200} src={'/comimg.svg'} alt='' className='w-full'/>
                <Image height={100} width={200} src={'/com.svg'} alt='' className='w-full'/>
            </div>
        </div>
    </div>
  )
}

export default GovernmentComponent