"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { SlLocationPin } from "react-icons/sl";


const Jobs = () => {
    const router = useRouter();

    const jobs = [
        {
            id: 1,
            title: 'UX/UI Designer',
            companyName: "Linsible Technologies Private Limited",
            duration: '2 Months',
            stipend: '2000/Monthly',
            startDate: '18 Aug’ 2023',
            jobType: 'Internship Part time',
            location: 'Work from home'
        },
        {
            id: 2,
            title: 'UX/UI Designer',
            companyName: "Linsible Technologies Private Limited",
            duration: '2 Months',
            stipend: '2000/Monthly',
            startDate: '18 Aug’ 2023',
            jobType: 'Full time',
            location: 'Mumbai'
        },
        {
            id: 3,
            title: 'UX/UI Designer',
            companyName: "Linsible Technologies Private Limited",
            duration: '2 Months',
            stipend: '2000/Monthly',
            startDate: '18 Aug’ 2023',
            jobType: 'Internship Part time',
            location: 'Work from home'
        },
        {
            id: 4,
            title: 'UX/UI Designer',
            companyName: "Linsible Technologies Private Limited",
            duration: '2 Months',
            stipend: '2000/Monthly',
            startDate: '18 Aug’ 2023',
            jobType: 'Internship Part time',
            location: 'Uk'
        },
    ]

    const handleViewDetails = (id) => {
        router.push(`/candidate/jobs/${id}`);
    };
    return (
        <div className='flex flex-col gap-[2rem]'>
            <h2 className="text-[20px] font-semibold">Jobs Available</h2>
            <div className="grid grid-cols-1 gap-4 ">
                {jobs.map((job, index) => (
                    <div key={index} className='flex flex-col gap-2 sm:gap-3 bg-white rounded-lg shadow-md py-3 px-4'>
                        <div className='flex justify-between sm:flex-col sm:gap-3'>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-[20px] font-semibold'>{job.title}</h3>
                                <p className='text-[16px]'>{job.companyName}</p>
                            </div>
                            <p className='text-[16px] flex items-center gap-2'><SlLocationPin size={20} /> {job.location}</p>
                        </div>
                        <div className='grid grid-cols-2 sm:grid-cols-1 gap-3 w-1/2 sm:w-full'>
                            <p className='text-[16px]'>Duration: {job.duration}</p>
                            <p className='text-[16px]'>Stipend: {job.stipend}</p>
                            <p className='text-[16px]'>Start Date: {job.startDate}</p>
                        </div>
                        <div className='flex items-center gap-6'>
                            <h2 className='text-[14px] font-semibold bg-[#D8FFEF] h-[40px] w-fit px-5 border border-[#85AD84] flex items-center justify-center rounded-full'>Posted 1 day ago</h2>
                            <p className='text-[16px]'>{job.jobType}</p>
                        </div>
                        <div className='flex justify-end gap-3'>
                            <button
                                onClick={() => handleViewDetails(job.id)}
                                className='border border-[#85AD84] w-[120px] text-[16px] font-semibold sm:w-full'
                            >View Details</button>
                            <button className='h-[40px] shadow-lg bg-[#D8FFEF] text-[16px] font-semibold border sm:w-full border-[#85AD84] w-[120px]'>Apply Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Jobs