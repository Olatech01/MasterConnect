"use client"
import React, { useState } from 'react'
import DashboardComponent from './DashboardComponent';
import RecruiterComponent from './RecruiterComponent';
import GovernmentComponent from './GovernmentComponent';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard")

  const handlerecruiter = (tab) => {
    setActiveComponent(tab);
  };

  return (
    <div>
      <div className="flex w-[55%] bg-[#FFFFFF] sm:w-full">
        <button
          onClick={() => handlerecruiter("dashboard")}
          className={`h-[48px] w-full rounded-tl-md bg-[#FFFFFF] ${activeComponent === "dashboard" ? "bg-[#F2F5FF] " : ""}`}
        >
          Dashboard
        </button>
        <button
          onClick={() => handlerecruiter("recruiter")}
          className={`h-[48px] w-full bg-[#FFFFFF] ${activeComponent === "recruiter" ? "bg-[#F2F5FF]" : ""}`}
        >
          Recruiter
        </button>
        <button
          onClick={() => handlerecruiter("government")}
          className={`h-[48px] w-full rounded-tr-md bg-[#FFFFFF] ${activeComponent === "government" ? "bg-[#F2F5FF]" : ""}`}
        >
          Government Accreditations
        </button>
      </div>
      <div className="flex-grow border-2 rounded-md p-5">
        {activeComponent === "dashboard" && <DashboardComponent />}
        {activeComponent === "recruiter" && <RecruiterComponent />}
        {activeComponent === "government" && <GovernmentComponent />}
      </div>
    </div>
  )
}

export default Dashboard