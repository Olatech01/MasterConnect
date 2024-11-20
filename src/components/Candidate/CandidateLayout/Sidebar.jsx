"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CiSettings, CiStar, CiShoppingCart, CiBookmark } from "react-icons/ci";
import { RxActivityLog } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import { IoGridOutline, IoBeakerOutline } from "react-icons/io5";
import { LuMessageSquarePlus } from 'react-icons/lu';
import { MdClose } from 'react-icons/md';
import { MdWorkOutline } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const pathname = usePathname();

    const sidebar = [
        {
            icon: <IoGridOutline size={20} />,
            title: 'Dashboard',
            path: '/candidate'
        },
        {
            icon: <MdWorkOutline size={20} />,
            title: 'Jobs',
            path: '/candidate/jobs'
        },
        {
            icon: <RxActivityLog size={20} />,
            title: 'Offers',
            path: '/candidate/offers'
        },
        {
            icon: <TfiWrite size={20} />,
            title: 'Activities',
            path: '/candidate/activities'
        },
        {
            icon: <LuMessageSquarePlus size={20} />,
            title: 'Message',
            path: '/candidate/message'
        },
        {
            icon: <GrAnnounce size={20} />,
            title: 'Announcement',
            path: '/candidate/announcement'
        },
        {
            icon: <CiSettings size={20} />,
            title: 'Settings',
            path: '/candidate/settings'
        }
    ];
    return (
        <div className={`fixed top-0 left-0 h-screen sm:h-full sm:z-50 w-[307px] bg-[#EDF1FF] p-4 flex flex-col gap-[30px] overflow-y-auto
        transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0`}>
            <div className='flex items-center justify-between px-4 py-3 border-b border-gray-200'>
                <Image height={100} width={200} src={"/logo.svg"} alt='' />
                <MdClose size={24} className='lg:hidden sm:block' onClick={toggleSidebar} />
            </div>
            <ul className='flex flex-col gap-[0.5rem] mt-3'>
                {sidebar.map((item, index) => (
                    <Link href={item.path} key={index}>
                        <li onClick={toggleSidebar} className={`flex items-center cursor-pointer h-[60px]  px-3 gap-2 ${pathname === item.path ? 'rounded-md bg-white border' : 'text-gray-500'}`}>
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar