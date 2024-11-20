"use client"
import React, { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoIosLogOut, IoMdNotifications } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import Image from 'next/image';
import Link from 'next/link';
import { CiSettings } from 'react-icons/ci';
import { IoIosHelpCircle } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { UserContext } from '@/components/libs/UserContext';
import { AuthContext } from '@/components/libs/AuthContext';

const Header = ({toggleSidebar}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { user, logOut, userType } = useContext(AuthContext);

    console.log(user);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className='flex justify-between items-center px-10 py-4 bg-[#EDF1FF]'>
            <div className='flex items-center gap-2'>
                <FaBars size={24} className='lg:hidden sm:block' onClick={toggleSidebar} />
                {/* Admin */}
            </div>
            <div className='flex gap-2 items-center relative'>
                <IoMdNotifications size={24} />
                <div className='flex flex-col items-end'>
                    <h2 className='text-[18px] font-semibold'>
                        {user ? (
                            <div className="flex items-center gap-4">
                                <p className="text-lg">{user?.username}</p>
                            </div>
                        ) : (
                            <p>Please log in</p>
                        )}
                    </h2>
                    <div className='text-[10px] font-medium items-end'>
                        <p>({userType?.userType})</p>
                    </div>
                </div>
                <div onClick={toggleDropdown} className='flex items-center gap-2'>
                    <Image
                        height={100}
                        width={50}
                        src={'/user.svg'}
                        alt="User profile"
                        className="cursor-pointer"
                    />
                    <TiArrowSortedDown size={24} className="cursor-pointer" />
                </div>
                {isDropdownOpen && (
                    <div className="absolute right-0 top-[4rem] mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-10">
                        <Link href="/profile" className="flex px-4 py-2 gap-2 text-gray-700 hover:bg-gray-100">
                            <FaUserCircle size={25} />
                            Profile
                        </Link>
                        <Link href="/settings" className="flex px-4 py-2 gap-2 text-gray-700 hover:bg-gray-100">
                            <FaBookmark size={25} />
                            Bookmarks
                        </Link>
                        <Link href="/logout" className="flex px-4 py-2 gap-2 text-gray-700 hover:bg-gray-100">
                            <IoIosCheckmarkCircle size={25} />
                            Saved candidate
                        </Link>
                        <Link href="/logout" className="flex px-4 py-2 gap-2 text-gray-700 hover:bg-gray-100">
                            <IoIosHelpCircle size={25} />
                            Help center
                        </Link>
                        <Link href="/logout" className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                            <CiSettings size={25} />
                            Settings
                        </Link>
                        <Link href="/logout" className="flex px-4 py-2 border-t items-center justify-center gap-2">
                            <IoIosLogOut size={25} />
                            Logout
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header