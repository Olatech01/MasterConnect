import Image from 'next/image'
import React from 'react'
import { MdAddIcCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import {
    TbWorld,
} from "react-icons/tb";

import { HiUserGroup } from "react-icons/hi2";
import JobHiringStatus from './JobHiringStatus';

const DashboardComponent = () => {

    const jobPostingData = [10, 12, 8, 15, 20, 25, 18, 30, 22, 17, 24, 19];
    const hiringStatusData = [5, 8, 10, 7, 12, 15, 9, 18, 16, 12, 14, 10];

    return (
        <div className='flex flex-col gap-[2rem] mt-5'>
            <div className='grid grid-cols-3 items-center'>
                <div className='bg-[white] shadow-lg p-4 w-fit'>
                    <Image height={100} width={100} src={'/dash.svg'} alt='' />
                </div>
                <div className='flex flex-col  gap-[1.5rem]'>
                    <h2 className='text-[16px] font-semibold'>Linsible Technologies Pvt Ltd</h2>
                    <h2 className='text-[16px] font-semibold'>IT Industry</h2>
                    <h2 className='text-[16px] font-semibold'>Year Founded: 2019</h2>
                </div>
                <div className='flex flex-col  gap-[1.5rem]'>
                    <h2 className='text-[16px] font-semibold flex items-center gap-2'>
                        <FaLocationDot />
                        Vizag, Andhra Pradesh
                    </h2>
                    <h2 className='text-[16px] font-semibold flex items-center gap-2'>
                        <IoIosMail />
                        companymail@gmail.com
                    </h2>
                    <h2 className='text-[16px] font-semibold flex items-center gap-2'>
                        <MdAddIcCall />
                        +91 7799221303
                    </h2>
                </div>
            </div>
            <div className='flex flex-col gap-[1.5rem]'>
                <h2 className='text-[20px] font-semibold border-b-2 py-2'>Contact Details</h2>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[18px] font-medium'>Full Address</h2>
                    <div className='flex items-center gap-3 pl-2'>
                        <FaLocationDot />
                        <p className='text-[14px] font-normal'>K. RAJARAMAN (WORKING PRESIDENTS),Flat No. 5, Victoria Garden, 106, J.N. Salai, Koyambedu, Chennai - 600107</p>
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[18px] font-medium'>Official Website</h2>
                        <div className='flex items-center gap-3 pl-2'>
                            <TbWorld size={25} />
                            <p className='text-[14px] font-normal'>www.companyname.com</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[18px] font-medium'>Company Size</h2>
                        <div className='flex items-center gap-3 pl-2'>
                            <HiUserGroup size={25} />
                            <p className='text-[14px] font-normal'>50</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[1.5rem]'>
                <h2 className='text-[20px] font-semibold border-b-2 py-2'>Activity Statistics</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:grid-cols-1">
                    <JobHiringStatus
                        title="Jobs Posting"
                        dataPoints={jobPostingData}
                        color="#4F46E5"
                    />
                    <JobHiringStatus
                        title="Hiring Status"
                        dataPoints={hiringStatusData}
                        color="#16A34A"
                    />
                </div>
            </div>
            <div></div>
            <div className='flex flex-col gap-[1.5rem]'>
                <h2 className='text-[20px] font-semibold border-b-2 py-2'>Social media handles</h2>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-4'>
                        <Image height={100} width={50} src={'/facebook.svg'} alt=''/>
                        <h2 className='text-[16px] font-semibold'>Facebook</h2>
                        <p className='text-[14px] font-normal'>https://www.facebook/profile</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-4'>
                        <Image height={100} width={50} src={'/instagram.svg'} alt=''/>
                        <h2 className='text-[16px] font-semibold'>Instagram</h2>
                        <p className='text-[14px] font-normal'>https://www.instagram/profile</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-4'>
                        <Image height={100} width={50} src={'/twitter.svg'} alt=''/>
                        <h2 className='text-[16px] font-semibold'>Twitter</h2>
                        <p className='text-[14px] font-normal'>https://www.twitter/profile</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-4'>
                        <Image height={100} width={50} src={'/link.svg'} alt=''/>
                        <h2 className='text-[16px] font-semibold'>LinkedIn</h2>
                        <p className='text-[14px] font-normal'>https://www.linkedin/profile</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardComponent