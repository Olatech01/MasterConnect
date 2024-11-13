import React from 'react'
import { GrSend } from "react-icons/gr";
const Post = () => {
    return (
        <div className='flex flex-col gap-7'>
            <h2 className='text-[40px] font-bold'>Post A Job</h2>
            <form className='flex flex-col gap-4'>
                <div className='grid grid-cols-2 sm:grid-cols-1 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-semibold'>Job Title</label>
                        <input
                            type="text"
                            placeholder='Enter Job Title'
                            className='rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3 w-full'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-semibold'>Position:</label>
                        <input
                            type="text"
                            placeholder='Enter Position'
                            className='rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3 w-full'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-semibold'>Work Type:</label>
                        <input
                            type="text"
                            placeholder='Intern/Job'
                            className='rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3 w-full'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[16px] font-semibold'>Skills required:</label>
                        <input
                            type="text"
                            placeholder='e.g Java'
                            className='rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3 w-full'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-[16px] font-semibold'>Job Description:</label>
                    <textarea
                        type="text"
                        placeholder='Enter your Text here'
                        className='rounded-lg min-h-[35vh] shadow-lg border-2 outline-none pl-3 pt-3 w-full'
                    ></textarea>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-1 sm:gap-[1rem] gap-[5rem]'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-4'>
                            <label className='text-[16px] font-semibold'>Internship Start date:</label>
                            <div className='flex gap-[3rem]'>
                                <div className='flex gap-2'>
                                    <input type="radio" />
                                    <p className='text-[14px] font-normal'>Immediately (within next day )</p>
                                </div>
                                <div className='flex gap-2'>
                                    <input type="radio" />
                                    <p className='text-[14px] font-normal'>Later</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <label className='text-[16px] font-normal'>From</label>
                                <input
                                    type="date"
                                    className='border rounded-md px-2'
                                />
                            </div>
                            <div className='flex gap-4 '>
                                <label className='text-[16px] font-normal'>To</label>
                                <input
                                    type="date"
                                    className='border rounded-md px-2 items-center'
                                />
                            </div>
                        </div>
                        <div className='flex gap-2 flex-col'>
                            <label className='text-[16px] font-semibold'>Internship duration</label>
                            <select className='shadow-lg border-2 h-[40px]  rounded-md outline-none'>
                                <option>Select Duration</option>
                                <option>1 month</option>
                                <option>2 months</option>
                                <option>3 months</option>
                                <option>4 months</option>
                                <option>5 months</option>
                            </select>
                        </div>
                        <div className='flex gap-2 flex-col'>
                            <label className='text-[16px] font-semibold'>Stipend</label>
                            <div className='grid grid-cols-2 gap-3'>
                                <div className='flex gap-3'>
                                    <input type="radio" />
                                    <p className='text-[14px] font-normal'>Fixed</p>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="radio" />
                                    <p className='text-[14px] font-normal'>Negotiable</p>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="radio" />
                                    <p className='text-[14px] font-normal'>Performance Based</p>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="radio" />
                                    <p className='text-[14px] font-normal'>Unpaid</p>
                                </div>
                            </div>
                            <div className='flex gap-1 sm:flex-col sm:gap-2'>
                                <select className='shadow-lg border-2 h-[40px] w-full  rounded-md outline-none'>
                                    <option>Select Currency</option>
                                    <option>$</option>
                                    <option>₦</option>
                                    <option>€</option>
                                </select>
                                <input
                                    type="number"
                                    placeholder='Enter Amount'
                                    className='shadow-lg border-2 rounded-md px-2 w-full'
                                />
                                <select className='shadow-lg border-2 h-[40px]  rounded-md outline-none w-full'>
                                    <option>Select Duration</option>
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                    <option>Quarterly</option>
                                    <option>Yearly</option>
                                    <option>Flexible</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[16px] font-semibold'>Intern’s responsibilities:</label>
                            <div className='h-[303px] rounded-md border-2 shadow-lg p-3 flex flex-col gap-4'>
                                <label>Selected interns day-to-day responsibilities include :</label>
                                <div className='flex items-center gap-2 '>
                                    <p>1:</p>
                                    <input type="text" className='outline-none' />
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <p>2:</p>
                                    <input type="text" className='outline-none' />
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <p>3:</p>
                                    <input type="text" className='outline-none' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[16px] font-semibold'>Perks <span className='opacity-20'>(Optional)</span></label>
                            <div className='grid grid-cols-2 gap-3'>
                                <div className='flex gap-3'>
                                    <input type="checkbox" />
                                    <p className='text-[14px] font-normal'>Certificate</p>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" />
                                    <p className='text-[14px] font-normal'>Flexible Work hours</p>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" />
                                    <p className='text-[14px] font-normal'>Letter of Recommendation</p>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" />
                                    <p className='text-[14px] font-normal'>5 days a Week</p>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" />
                                    <p className='text-[14px] font-normal'>Incentives</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='bg-[#3C4E70] h-[40px] flex items-center gap-2 justify-center rounded-full w-[150px] text-white'>
                    Post Job
                    <GrSend />
                </button>
            </form>
        </div>
    )
}

export default Post