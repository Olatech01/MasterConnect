"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CiSettings, CiStar, CiShoppingCart } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoGridOutline, IoBeakerOutline } from "react-icons/io5";
import { MdClose } from 'react-icons/md';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const pathname = usePathname();

    const sidebar = [
        {
            icon: <IoGridOutline size={20} />,
            title: 'Dashboard',
            path: '/recruiter'
        },
        {
            icon: <IoBeakerOutline size={20} />,
            title: 'Products',
            path: '/admin/products'
        },
        {
            icon: <CiShoppingCart size={20} />,
            title: 'Orders',
            path: '/admin/orders'
        },
        {
            icon: <GoPeople size={20} />,
            title: 'Customers',
            path: '/admin/customers'
        },
        {
            icon: <CiStar size={20} />,
            title: 'Post a job',
            path: '/recruiter/post'
        },
        {
            icon: <CiSettings size={20} />,
            title: 'Settings',
            path: '/admin/settings'
        }
    ];
    return (
        <div className={`fixed top-0 left-0 h-screen sm:h-full sm:z-50 w-[307px] bg-[#EDF1FF] p-4 flex flex-col gap-[30px] overflow-y-auto
        transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0`}>
            <div className='flex items-center justify-between px-4 py-3 border-b border-gray-200'>
                <h2 className='text-lg font-semibold'>Admin Panel</h2>
                <MdClose size={24} className='lg:hidden sm:block' onClick={toggleSidebar} />
            </div>
            <ul className='flex flex-col gap-[0.5rem] mt-3'>
                {sidebar.map((item, index) => (
                    <Link href={item.path} key={index}>
                        <li className={`flex items-center cursor-pointer h-[60px]  px-3 gap-2 ${pathname === item.path ? 'rounded-md bg-white border' : 'text-gray-500'}`}>
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