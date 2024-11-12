"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className='flex justify-between items-center py-2 px-7 bg-[#EDF1FF]'>
            <div>
                <Image height={100} width={200} src={'/logo.svg'} alt="Not found" />
            </div>
            <ul className='flex gap-5 text-[21px] font-semibold sm:hidden'>
                <li>Home</li>
                <li>Hiring</li>
                <li>Categories</li>
                <li>Announcements</li>
            </ul>
            <div className='flex gap-6 sm:hidden'>
                <Link href={"/auth/login"}>
                    <button className='w-[178px] h-[45px] rounded-full border-2 border-[#3C4E70] text-[20px] font-semibold'>Login</button>
                </Link>
                <Link href={"/auth/register"}>
                    <button className='w-[178px] bg-[#3C4E70] h-[45px] rounded-full text-[#FFFFFF] text-[20px] font-semibold'>Register</button>
                </Link>
            </div>
            <div className='lg:hidden flex gap-3 items-center'>
                <button onClick={toggleMenu} className='text-3xl'>
                    {isMenuOpen ? <MdClose /> : <MdMenu />}
                </button>
            </div>
            {isMenuOpen && (
                <div
                    className={`lg:hidden flex flex-col gap-2 items-start bg-[#F6F6F6] w-full px-[20px] py-[10px] absolute top-[100px] left-0 z-40 transition-all duration-300 ease-in-out 
          ${isMenuOpen ? 'opacity-100 top-[80px]' : 'opacity-0 top-[60px]'}`}
                >
                    <ul className='flex flex-col gap-6'>
                        <li>Home</li>
                        <li>Hiring</li>
                        <li>Categories</li>
                        <li>Announcements</li>
                    </ul>
                    <button className='w-[178px] h-[45px] rounded-full border-2 border-[#3C4E70] text-[20px] font-semibold'>Login</button>
                    <button className='w-[178px] bg-[#3C4E70] h-[45px] rounded-full text-[#FFFFFF] text-[20px] font-semibold'>Register</button>
                </div>
            )}
        </div>
    )
}

export default Navbar