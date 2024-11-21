"use client"
import ApplyModal from '@/components/Candidate/Jobs/ApplyModal'
import React, { useState } from 'react'

const page = () => {
    const [applyModal, setApplyModal] = useState(false)

    const handleApply = () => {
        setApplyModal(true)
    }
    const handleClose = () => {
        setApplyModal(false)
    }
    return (
        <div className='flex flex-col gap-[2rem]'>
            <h2 className='text-[40px] font-semibold'>Job Details</h2>
            <div className='flex bg-white sm:flex-col shadow-lg py-8'>
                <div className='flex flex-col gap-7 w-full border-r'>
                    <div className='flex flex-col gap-3 border-b py-3 px-5'>
                        <h3 className='text-[25px] font-semibold'>UX/UI Designer</h3>
                        <p className='text-[18px]'>Linsible Technologies Private Limited</p>
                        <div className='grid grid-cols-3 gap-4 sm:grid-cols-1'>
                            <p className='text-[16px]'>Posted 2 Days ago</p>
                            <p className='text-[16px]'>Work from home</p>
                            <p className='text-[16px]'>Internship</p>
                            <p className='text-[16px]'>2 months</p>
                            <p className='text-[16px]'>2000/month Stipend</p>
                            <p className='text-[16px]'>Start Immediately</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 px-5'>
                        <h2 className='text-[25px] font-semibold'>About Linsible</h2>
                        <p className='text-[14px]'>
                            Linsible Technologies specialize in product building, IT consulting, and software as a service (SaaS) solutions that help businesses grow and thrive in today’s digital world. Our team of experienced professionals has a proven track record of success, working with clients across industries to deliver innovative, customized solutions that meet their unique needs.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 px-5'>
                        <h2 className='text-[25px] font-semibold'>Job Description</h2>
                        <p className='text-[14px]'>
                            We're seeking a talented UX/UI Designer to join our team, where you'll play a pivotal role in shaping exceptional user experiences. Your responsibilities will include conducting user research, creating wireframes and prototypes, designing visually appealing interfaces, and collaborating closely with cross-functional teams. Your work will be instrumental in ensuring our...
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 px-5'>
                        <h2 className='text-[25px] font-semibold'>Role of the Selected Candidate</h2>
                        <ul className='text-[14px] pl-3 flex flex-col gap-2'>
                            <li>1. Understand the purpose and requirements</li>
                            <li>2. Plan and implement new designs</li>
                            <li>3. Bring the customers' and company's visions to life by conducting research, wireframing, sketching, prototyping, and designing user interfaces</li>
                            <li>4. Develop and conceptualize a comprehensive UI/UX design strategy for product</li>
                            <li>5. Produce high-quality UX design solutions through wireframes, visual and graphic designs, flow diagrams, storyboards, site maps, and prototypes</li>
                            <li>6. Incorporating customer feedback, usage metrics, and usability findings into design in order to enhance user experience</li>
                            <li>7. Working on the user experience of the website and application</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-3 px-5'>
                        <h2 className='text-[25px] font-semibold'>Skills Required</h2>
                        <div className='grid grid-cols-4 gap-3 sm:grid-cols-2'>
                            <p className='h-[40px] shadow-lg bg-[#D8FFEF] text-[16px] rounded-full font-semibold flex items-center justify-center border sm:w-full border-[#85AD84]'>Figma</p>
                            <p className='h-[40px] shadow-lg bg-[#D8FFEF] text-[16px] rounded-full font-semibold flex items-center justify-center border sm:w-full border-[#85AD84]'>Prototyping</p>
                            <p className='h-[40px] shadow-lg bg-[#D8FFEF] text-[16px] rounded-full font-semibold flex items-center justify-center border sm:w-full border-[#85AD84]'>Wireframing</p>
                            <p className='h-[40px] shadow-lg bg-[#D8FFEF] text-[16px] rounded-full font-semibold flex items-center justify-center border sm:w-full border-[#85AD84]'>Adobe Illustrator</p>
                            <p className='h-[40px] shadow-lg bg-[#D8FFEF] text-[16px] rounded-full font-semibold flex items-center justify-center border sm:w-full border-[#85AD84]'>Animation</p>
                            <p className='h-[40px] shadow-lg bg-[#D8FFEF] text-[16px] rounded-full font-semibold flex items-center justify-center border sm:w-full border-[#85AD84]'>Canva</p>
                            <p className='h-[40px] shadow-lg bg-[#D8FFEF] text-[16px] rounded-full font-semibold flex items-center justify-center border sm:w-full border-[#85AD84]'>Adobe Indesign</p>
                            <p className='h-[40px] shadow-lg bg-[#D8FFEF] text-[16px] rounded-full font-semibold flex items-center justify-center border sm:w-full border-[#85AD84]'>Sketch</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 px-5'>
                        <h2 className='text-[25px] font-semibold'>No of Openings</h2>
                        <p className='text-[14px]'>
                            2 Positions
                        </p>
                    </div>
                    <div className='flex items-center justify-center sm:hidden'>
                        <button onClick={handleApply} className='bg-[#3C4E70] text-white h-[40px] w-[150px] rounded-md'>Apply Now</button>
                    </div>
                </div>
                <div className='w-[40%] flex flex-col gap-[2rem] sm:w-full'>
                    <div className='flex flex-col gap-3 items-center justify-center border-b py-2 w-full'>
                        <button onClick={handleApply} className='bg-[#3C4E70] text-white sm:hidden h-[40px] w-[250px] rounded-md'>Apply Now</button>
                        <button className='border-[#3C4E70] border h-[40px] w-[250px] sm:hidden rounded-md'>Bookmark</button>
                        <p className='text-[16px] font-semibold'>127 Applicants</p>
                        <p className='text-[14px] font-medium'>Last Date : 27 ‘ June 2023</p>
                    </div>
                    <div className='flex flex-col gap-3 px-5'>
                        <h2 className='text-[25px] font-semibold'>Perks on Joining</h2>
                        <div className='flex flex-col gap-3'>
                            <p className='h-[40px] shadow-lg bg-[#D1DEFF] text-[16px] rounded-full font-semibold flex items-center justify-center border sm:w-full'>Certificate</p>
                            <p className='h-[40px] shadow-lg bg-[#D1DEFF] text-[16px] rounded-full font-semibold flex items-center justify-center border sm:w-full'>Letter of Recommendation</p>
                            <p className='h-[40px] shadow-lg bg-[#D1DEFF] text-[16px] rounded-full font-semibold flex items-center justify-center border sm:w-full'>Flexible Hours</p>
                            <p className='h-[40px] shadow-lg bg-[#D1DEFF] text-[16px] rounded-full font-semibold flex items-center justify-center border sm:w-full'>5 days /week</p>
                        </div>
                    </div>
                </div>
                <div className='sm:block hidden px-4'>
                    <button className='border-[#3C4E70] border h-[40px] sm:w-[400px] mt-4 w-[250px] rounded-md'>Bookmark</button>
                    <button onClick={handleApply} className='bg-[#3C4E70] mt-4 sm:w-[400px] text-white h-[40px] w-[250px] rounded-md'>Apply Now</button>
                </div>
            </div>

            {
                applyModal && <ApplyModal onclose={handleClose} />
            }
        </div>
    )
}

export default page