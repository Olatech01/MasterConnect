import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className='px-5 sm:px-3'>
            <div className='flex flex-col items-center gap-[1rem] justify-center'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-[16px] font-normal bg-[#aeaeae] px-3 py-1'>Our Services</h2>
                    <p className='text-[50px] font-bold sm:text-[20px]'>What <span className='text-[#1E3561]'>We Offer</span></p>
                </div>
                <div className='px-[3rem] flex flex-col gap-4 sm:px-3'>
                    <div className='flex items-center justify-start gap-10 sm:flex-col-reverse'>
                        <Image height={100} width={200} src={"/assess.svg"} alt='' className="w-full" />
                        <div className='flex flex-col gap-[2rem] sm:gap-[0.5rem]'>
                            <h2 className='text-[40px] font-semibold sm:text-[30px]'>Test Assessments</h2>
                            <p className='text-[16px] font-medium w-[956px] sm:w-full'>
                                Participate in our test assessment to achieve excellent results and qualify for showcasing in our exclusive jobs list. Your outstanding performance could be your gateway to exciting career opportunities. Join us now to make a remarkable impression on potential employers.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-end gap-10 sm:flex-col'>
                        <div className='flex flex-col items-end gap-[2rem] sm:gap-[0.5rem] sm:items-start'>
                            <h2 className='text-[40px] font-semibold sm:text-[30px]'>Career Consultation</h2>
                            <p className='text-[16px] font-medium w-[956px] sm:w-full'>
                                We offer personalized career guidance, suggesting the most suitable career paths based on your skills and preferences. Furthermore, we provide a curated selection of premier companies, empowering you to make informed choices and secure opportunities with the best organizations.
                            </p>
                        </div>
                        <Image height={100} width={200} src={"/career.svg"} alt='' className="w-full" />
                    </div>
                    <div className='flex items-center justify-start gap-10 sm:flex-col-reverse'>
                        <Image height={100} width={200} src={"/job.svg"} alt='' className="w-full" />
                        <div className='flex flex-col gap-[2rem] sm:gap-[0.5rem]'>
                            <h2 className='text-[40px] font-semibold sm:text-[30px]'>Job Readiness</h2>
                            <p className='text-[16px] font-medium w-[956px] sm:w-full'>
                                Our mission is to help you secure your dream job. With our dedicated support and personalized approach, we strive to connect you with excellent job opportunities that match your skills and aspirations. Let us be your partner in achieving career success and landing the job you've always wanted.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services