"use client";
import React, { useState } from "react";
import DashboardComponent from "./DashboardComponent";
import RecruiterComponent from "./RecruiterComponent";
import GovernmentComponent from "./GovernmentComponent";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("none");
  const [isCompanyRegistered, setIsCompanyRegistered] = useState(false);
  const router = useRouter();

  const handleTabSwitch = (tab) => {
    setActiveComponent(tab);
  };

  const handleRegisterCompany = () => {
    router.push("/recruiter/registerCompany");
  };

  const handleCompanyRegistered = () => {
    setIsCompanyRegistered(true);
    setActiveComponent("dashboard");
  };

  return (
    <div className="h-[75%]">
      {!isCompanyRegistered ? (
        <div className="flex flex-col items-center justify-center h-[75%]">
          <div className="flex flex-col items-center justify-center h-[75%]">
            <h1 className="text-2xl font-semibold text-gray-700">
              Looks like you haven’t registered your company.
            </h1>
            <p className="text-gray-500 mt-2">
              Register your company with one click.
            </p>
            <button
              onClick={handleRegisterCompany}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Register Company
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex w-[55%] bg-[#FFFFFF] sm:w-full">
            <button
              onClick={() => handleTabSwitch("dashboard")}
              className={`h-[48px] w-full rounded-tl-md bg-[#FFFFFF] ${activeComponent === "dashboard" ? "bg-[#F2F5FF] " : ""
                }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => handleTabSwitch("recruiter")}
              className={`h-[48px] w-full bg-[#FFFFFF] ${activeComponent === "recruiter" ? "bg-[#F2F5FF]" : ""
                }`}
            >
              Recruiter
            </button>
            <button
              onClick={() => handleTabSwitch("government")}
              className={`h-[48px] w-full rounded-tr-md bg-[#FFFFFF] ${activeComponent === "government" ? "bg-[#F2F5FF]" : ""
                }`}
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
      )}
    </div>
  );
};

export default Dashboard;
