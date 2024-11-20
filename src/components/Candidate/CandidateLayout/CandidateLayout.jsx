"use client"
import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Header from './Header';

const CandidateLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="flex bg-[#F9F9F9]">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex-1 flex flex-col min-h-screen ml-[18rem] md:ml-0 sm:ml-0">
                <Header toggleSidebar={toggleSidebar} />
                <main className="overflow-y-auto py-6 px-[5%] sm:px-3">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default CandidateLayout