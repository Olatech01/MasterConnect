import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import { FaBars } from 'react-icons/fa'

const Header = ({toggleSidebar}) => {
    return (
        <div className='flex justify-between items-center px-10 py-4 bg-[#EDF1FF]'>
            <div className='flex items-center gap-2'>
                <FaBars size={24} className='lg:hidden sm:block' onClick={toggleSidebar} />
                Admin
            </div>
            <IoIosLogOut size={24} />
        </div>
    )
}

export default Header