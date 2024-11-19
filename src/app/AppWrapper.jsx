"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Navbar from '@/components/Home/Navbar'
import RecruiterLayout from '@/components/Recruiter/RecruiterLayout/RecruiterLayout'

const AppWrapper = ({ children }) => {
    const pathname = usePathname()

    const shouldHideNavbarAndFooter = [
        "/auth/register",
        "/auth/login",
        "/auth/forget",
        "/auth/otpVerification",
        "/auth/newpassword",
        "/recruiter",
        "/recruiter/post",
        "/recruiter/hiring",
        "/recruiter/settings",
        "/recruiter/registerCompany",
        "/admin",
    ].includes(pathname);

   

    return (
        <div className='flex flex-col gap-5'>
            {!shouldHideNavbarAndFooter && <Navbar />}
            {children}
            {!shouldHideNavbarAndFooter && (
                <footer className='flex justify-center py-4'>
                    {/* <p className='text-center text-[14px]'>© 2023 QuizApp. All rights reserved.</p> */}
                </footer>
            )}
        </div>
    )
}

export default AppWrapper
