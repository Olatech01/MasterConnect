"use client";
import React, { useState } from "react";
import { LuShapes } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";



const RegisterCompany = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        companyName: "",
        typeOfCompany: "",
        city: "",
        state: "",
        officialWebsite: "",
        companyContact: "",
        recruiterName: "",
        jobTitle: "",
        gender: "",
        age: "",
        recruiterEmail: "",
        workingYears: "",
        linkedinProfile: "",
        personalContact: "",
        companyAddress: "",
        companySize: "",
        companyEmail: "",
        companyRegistrationNumber: "",
        companyTaxIdentidicationNumber: "",
        companyMedia: "",
        companyFoundedYear: "",
    });

    const [files, setFiles] = useState({
        proof: null,
        companyLogo: null,
        profilePhoto: null,
        certificates: null,
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFiles((prev) => ({
            ...prev,
            [name]: files[0],
        }));
    };

    const steps = [
        { id: 0, title: "Basic Details", icon: <LuShapes size={30} /> },
        { id: 1, title: "Recruiter Personal Details", icon: <FaUser size={30} /> },
        { id: 2, title: "Company Verification Details", icon: <FaRegNewspaper size={30} /> },
        { id: 3, title: "Additional Details", icon: <BsFillBuildingsFill size={30} /> },
    ];
    const handleNext = () => {
        if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
    };

    const handlePrevious = () => {
        if (activeStep > 0) setActiveStep(activeStep - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();

        for (const key in formData) {
            data.append(key, formData[key]);
        }

        for (const key in files) {
            if (files[key]) data.append(key, files[key]);
        }

        try {
            const response = await axios.post(
                "https://masterconnect-backend.onrender.com/api/basicDetails",
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if(response.status === 200 || response.status === 201){
                toast.success(response.data.message);
            } else {
                toast.error("Unexpected response from the server!");
            }
        } catch (error) {
            // console.error("Error submitting form:", error);
            toast.error(error.response?.data?.error || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex">
            <div className="w-1/4 p-4 sm:hidden md:hidden">
                <h2 className="text-lg font-bold mb-4">Register Your Company</h2>
                <ul>
                    {steps.map((step, index) => (
                        <li
                            key={step.id}
                            className={`mb-2 flex items-center gap-2 p-2 rounded-md cursor-pointer ${activeStep === index ? "" : ""
                                }`}
                        >
                            <span className={` h-12 w-12  flex items-center justify-center rounded-full ${activeStep === index ? "bg-blue-500 text-white" : "bg-gray-200"}`}>{step.icon}</span>
                            {step.title}
                        </li>
                    ))}
                </ul>
                <Image height={100} width={200} src={"/reg.svg"} alt="" className="w-full" />
            </div>

            <div className="flex-grow p-6">
                <form onSubmit={handleSubmit} className="mb-6">
                    {activeStep === 0 && (
                        <div className='flex flex-col gap-7 border-2 shadow-md items-center p-5 bg-white'>
                            <h2 className='text-[30px] font-medium'>Basic Details</h2>
                            <div className='w-full flex flex-col gap-3'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Company Name</label>
                                    <input
                                        type="text"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        name="companyName"
                                        placeholder='Enter Company Name Here'
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Type of Company</label>
                                    <select
                                        value={formData.companyType}
                                        onChange={handleChange}
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    >
                                        <option value="">Select Type</option>
                                        <option value="1">Public</option>
                                        <option value="2">Private</option>
                                        <option value="3">Government</option>
                                    </select>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>State</label>
                                        <input
                                            type="text"
                                            name="typeOfCompany"
                                            value={formData.typeOfCompany}
                                            onChange={handleChange}
                                            placeholder='Enter Your State'
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder='Enter Your City'
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <label className="text-[16px] font-medium">Upload Your Company Logo</label>

                                    <input
                                        type="file"
                                        name="companyLogo"
                                        onChange={handleFileChange}
                                        className="w-[25%] px-2 py-2 border-2 rounded-md outline-none shadow-lg"
                                    />

                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Company Official Website</label>
                                    <input
                                        type="text"
                                        name="officialWebsite"
                                        value={formData.officialWebsite}
                                        onChange={handleChange}
                                        placeholder='Enter Company Official Website'
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Company Founded Year</label>
                                        <input
                                            type="text"
                                            name="companyFoundedYear"
                                            value={formData.companyFoundedYear}
                                            onChange={handleChange}
                                            placeholder='Enter Company Founded Year'
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Company Contact</label>
                                        <input
                                            type="tel"
                                            name="companyContact"
                                            value={formData.companyContact}
                                            onChange={handleChange}
                                            placeholder='Enter Company Contact'
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={handlePrevious}
                                    disabled={activeStep === 0}
                                    className={`h-[40px] w-[150px] rounded-md ${activeStep === 0
                                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                        : "bg-blue-500 text-white hover:bg-blue-600"
                                        }`}
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={activeStep === steps.length - 1}
                                    className={`h-[40px] w-[150px] rounded-md ${activeStep === steps.length - 1
                                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                        : "bg-blue-500 text-white hover:bg-blue-600"
                                        }`}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                    {activeStep === 1 && (
                        <div className='flex flex-col gap-7 border-2 shadow-md items-center p-5 bg-white'>
                            <h2 className='text-[30px] font-medium'>Recruiter Personal Details</h2>
                            <div className='w-full flex flex-col gap-3'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Recruiter Name</label>
                                    <input
                                        type="text"
                                        name="recruiterName"
                                        value={formData.recruiterName}
                                        onChange={handleChange}
                                        placeholder='Enter Recruiter Name Here'
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Job Title</label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        placeholder='Enter Job Title Here'
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Gender</label>
                                        <select
                                            value={formData.gender}
                                            name="gender"
                                            onChange={handleChange}
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'>
                                            <option>Select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Age</label>
                                        <input
                                            type="tel"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleChange}
                                            placeholder='Enter Age Here'
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>ID Card/Proof</label>
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Working Years</label>
                                        <input
                                            type="tel"
                                            name="workingYears"
                                            value={formData.workingYears}
                                            onChange={handleChange}
                                            placeholder='Enter Working Years Here'
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Email</label>
                                        <input
                                            type="email"
                                            name="recruiterEmail"
                                            value={formData.recruiterEmail}
                                            onChange={handleChange}
                                            placeholder='Enter Email Here'
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Linkedin <span className='opacity-30'>(Optional)</span></label>
                                        <input
                                            type="text"
                                            name="linkedinProfile"
                                            value={formData.linkedinProfile}
                                            onChange={handleChange}
                                            placeholder='Enter Linkedin URL Here'
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Profile Photo</label>
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Personal Contact</label>
                                        <input
                                            type="tel"
                                            name="personalContact"
                                            value={formData.personalContact}
                                            onChange={handleChange}
                                            placeholder='Enter Personal Contact Here'
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                </div>
                                {/* <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button> */}
                            </div>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={handlePrevious}
                                    disabled={activeStep === 0}
                                    className={`h-[40px] w-[150px] rounded-md ${activeStep === 0
                                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                        : "bg-blue-500 text-white hover:bg-blue-600"
                                        }`}
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={activeStep === steps.length - 1}
                                    className={`h-[40px] w-[150px] rounded-md ${activeStep === steps.length - 1
                                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                        : "bg-blue-500 text-white hover:bg-blue-600"
                                        }`}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                    {activeStep === 2 && (
                        <div className='flex flex-col gap-7 border-2 shadow-md items-center p-5 bg-white'>
                            <h2 className='text-[30px] font-medium'>Company Verification Details</h2>
                            <div className='w-full flex flex-col gap-3'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Company Name</label>
                                    <input
                                        type="text"
                                        placeholder='Autofill'
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Company Registration Number</label>
                                    <input
                                        type="tel"
                                        name="companyRegistrationNumber"
                                        value={formData.companyRegistrationNumber}
                                        onChange={handleChange}
                                        placeholder='Enter company registration number'
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Tax Identification Number (TIN)</label>
                                    <input
                                        type="tel"
                                        name="companyTaxIdentidicationNumber"
                                        value={formData.companyTaxIdentidicationNumber}
                                        onChange={handleChange}
                                        placeholder='Enter tax identification number'
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <label className="text-[16px] font-medium">Certificates</label>

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="w-[25%] px-2 py-2 border-2 rounded-md outline-none shadow-lg"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={handlePrevious}
                                    disabled={activeStep === 0}
                                    className={`h-[40px] w-[150px] rounded-md ${activeStep === 0
                                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                        : "bg-blue-500 text-white hover:bg-blue-600"
                                        }`}
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={activeStep === steps.length - 1}
                                    className={`h-[40px] w-[150px] rounded-md ${activeStep === steps.length - 1
                                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                        : "bg-blue-500 text-white hover:bg-blue-600"
                                        }`}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                    {activeStep === 3 && (
                        <div className='flex flex-col gap-7 border-2 shadow-md items-center p-5 bg-white'>
                            <h2 className='text-[18px] font-semibold'>Additional Details</h2>
                            <div className='w-full flex flex-col gap-3'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Company Name</label>
                                    <input type="text"
                                        placeholder="Autofill"
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className='flex  flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Address</label>
                                    <input
                                        type="text"
                                        name="companyAddress"
                                        value={formData.companyAddress}
                                        onChange={handleChange}
                                        placeholder="Enter Company residential address"
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>E-mail</label>
                                        <input
                                            type="email"
                                            name="companyEmail"
                                            value={formData.companyEmail}
                                            onChange={handleChange}
                                            placeholder='Enter company official contact mail'
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Company Size (In People)</label>
                                        <input
                                            type="tel"
                                            name="companySize"
                                            value={formData.companySize}
                                            onChange={handleChange}
                                            placeholder='Enter no of People working in company'
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label className='text-[16px] font-medium'>Social Media Profiles</label>

                                    <div className='flex gap-2 w-full'>
                                        <input
                                            type="text"
                                            name="companyMedia"
                                            value={formData.companyMedia}
                                            onChange={handleChange}
                                            placeholder='Enter Social Media Name'
                                            className='w-[30%] px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                        <input
                                            type="text"
                                            placeholder='URL'
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    )}
                </form>
                {/* <div className="flex justify-end gap-3">
                    <button
                        onClick={handlePrevious}
                        disabled={activeStep === 0}
                        className={`h-[40px] w-[150px] rounded-md ${activeStep === 0
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={activeStep === steps.length - 1}
                        className={`h-[40px] w-[150px] rounded-md ${activeStep === steps.length - 1
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                    >
                        Next
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default RegisterCompany