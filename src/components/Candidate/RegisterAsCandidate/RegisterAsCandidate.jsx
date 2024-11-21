"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import { BsFillBuildingsFill } from 'react-icons/bs';
import { FaRegNewspaper } from 'react-icons/fa';
import { LuShapes } from 'react-icons/lu';
import { toast } from 'react-toastify';

const RegisterAsCandidate = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        { id: 0, title: "Basic Details", icon: <LuShapes size={30} /> },
        { id: 2, title: "Candidate Verification Details", icon: <FaRegNewspaper size={30} /> },
        { id: 3, title: "Education Details", icon: <BsFillBuildingsFill size={30} /> },
    ];
    const handleNext = () => {
        if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
    };

    // const handlePrevious = () => {
    //     if (activeStep > 0) setActiveStep(activeStep - 1);
    // };

    const [formData, setFormData] = useState({
        governmentId: null,
        collegeIdProof: null,
        marksheets: null,
        certifications: null,
        // video: null,
        hobbies: "",
        rank: "",
        candidateName: "",
        candidateEmail: "",
        candidateAge: "",
        internShipCompleted: "",
        candidateGender: "",
        candidatePassport: null,
        candidatePosition: "",
        candidateLinkedin: "",
        institution: "",
        degreeType: "",
        institutionStartDate: "",
        institutionEndDate: "",
        departmentType: "",
    });
    const [isLoading, setIsLoading] = useState("")
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await axios.post(
                "https://masterconnect-backend.onrender.com/api/candidate-verification",
                formDataToSend,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            if (response.status === 200 || response.status === 201) {
                setTimeout(() => {
                    setIsLoading(false)
                    toast.success("Verification details submitted successfully!");
                }, 2000)
            }
        } catch (error) {
            toast.error("Error submitting the form!");
            setIsLoading(false)
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
                <Image height={100} width={200} src={"/reg.svg"} alt="true" className="w-full" />
            </div>
            <div className="flex-grow p-6">
                <form onSubmit={handleSubmit}>
                    {activeStep === 0 && (
                        <div className='flex flex-col gap-7 border-2 shadow-md items-center p-5 bg-white'>
                            <h2 className='text-[30px] font-medium'>Basic Details</h2>
                            <div className='w-full flex flex-col gap-3'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Candidate Name</label>
                                    <input
                                        type="text"
                                        name="candidateName"
                                        value={formData.candidateName}
                                        onChange={handleChange}
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className='grid grid-cols-2 gap-[2rem]'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Gender</label>
                                        <select
                                            name="candidateGender"
                                            value={formData.gender}
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
                                            name="candidateAge"
                                            value={formData.candidateAge}
                                            onChange={handleChange}
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Interested Position</label>
                                    <select
                                        name="candidatePosition"
                                        value={formData.candidatePosition}
                                        onChange={handleChange}
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'>
                                        <option>Select</option>
                                        <option>Software Engineer</option>
                                        <option>Data Scientist</option>
                                        <option>Product Manager</option>
                                        <option>Marketing</option>
                                        <option>Sales</option>
                                        <option>Finance</option>
                                        <option>Engineering Manager</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className='grid grid-cols-2 gap-[2rem]'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Candidate Mail</label>
                                        <input
                                            type="email"
                                            name="candidateEmail"
                                            value={formData.candidateEmail}
                                            onChange={handleChange}
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Linkedin Profile URL</label>
                                        <input
                                            type="text"
                                            name="candidateLinkedin"
                                            value={formData.candidateLinkedin}
                                            onChange={handleChange}
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-[2rem]'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Candidate Passport Photo </label>
                                        <input
                                            type="file"
                                            name="candidatePassport"
                                            accept=".png, .jpg, .jpeg, .pdf"
                                            onChange={handleFileChange}
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Internships Completed</label>
                                        <input
                                            type="text"
                                            name="internShipCompleted"
                                            value={formData.internShipCompleted}
                                            onChange={handleChange}
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-3">
                                    {/* <button
                                        onClick={handlePrevious}
                                        disabled={activeStep === 0}
                                        className={`h-[40px] w-[150px] rounded-md ${activeStep === 0
                                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                            : "bg-blue-500 text-white hover:bg-blue-600"
                                            }`}
                                    >
                                        Previous
                                    </button> */}
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
                        </div>
                    )}
                    {activeStep === 1 && (
                        <div className='flex flex-col gap-7 border-2 shadow-md items-center p-5 bg-white'>
                            <h2 className='text-[30px] font-medium'>Candidate Verification Details</h2>
                            <div className='w-full flex flex-col gap-3'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Government ID</label>
                                    <input
                                        type="file"
                                        name="governmentId"
                                        accept=".png, .jpg, .jpeg, .pdf"
                                        onChange={handleFileChange}
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className='grid grid-cols-2 gap-[2rem]'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>College ID Proof</label>
                                        <input
                                            type="file"
                                            name="collegeIdProof"
                                            accept=".png, .jpg, .jpeg, .pdf"
                                            onChange={handleFileChange}
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Marksheets Till Last Semester</label>
                                        <input
                                            type="file"
                                            name="marksheets"
                                            accept=".png, .jpg, .jpeg, .pdf"
                                            onChange={handleFileChange}
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-[2rem]'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Certifications </label>
                                        <input
                                            type="file"
                                            name="certifications"
                                            accept=".png, .jpg, .jpeg, .pdf"
                                            onChange={handleFileChange}
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                    {/* <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Tell me About Yourself Video</label>
                                        <input
                                            type="file"
                                            name="video"
                                            accept=".mp4"
                                            onChange={handleFileChange}
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div> */}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Hobbies</label>
                                    <input
                                        type="text"
                                        name="hobbies"
                                        value={formData.hobbies}
                                        onChange={handleChange}
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Rank</label>
                                    <input
                                        type="text"
                                        name="rank"
                                        value={formData.rank}
                                        onChange={handleChange}
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className="flex justify-end gap-3">
                                    {/* <button
                                        onClick={handlePrevious}
                                        disabled={activeStep === 0}
                                        className={`h-[40px] w-[150px] rounded-md ${activeStep === 0
                                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                            : "bg-blue-500 text-white hover:bg-blue-600"
                                            }`}
                                    >
                                        Previous
                                    </button> */}
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
                        </div>
                    )}
                    {activeStep === 2 && (
                        <div className='flex flex-col gap-7 border-2 shadow-md items-center p-5 bg-white'>
                            <h2 className='text-[30px] font-medium'>Candidate Education Details</h2>
                            <div className='w-full flex flex-col gap-3'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Institute Name</label>
                                    <input
                                        type="text"
                                        name="institution"
                                        value={formData.institution}
                                        onChange={handleChange}
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Degree</label>
                                    <input
                                        type="text"
                                        name="degreeType"
                                        value={formData.degreeType}
                                        onChange={handleChange}
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className='grid grid-cols-2 gap-[2rem]'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>Start Year</label>
                                        <input
                                            type="date"
                                            name="institutionStartDate"
                                            value={formData.institutionStartDate}
                                            onChange={handleChange}
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-[16px] font-medium'>End Year/ Expected Year</label>
                                        <input
                                            type="date"
                                            name="institutionEndDate"
                                            value={formData.institutionEndDate}
                                            onChange={handleChange}
                                            className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-[16px] font-medium'>Department</label>
                                    <input
                                        type="text"
                                        name="departmentType"
                                        value={formData.departmentType}
                                        onChange={handleChange}
                                        className='w-full px-2 py-2 border-2 rounded-md outline-none shadow-lg'
                                    />
                                </div>
                                <div className="flex justify-end gap-3">
                                    {/* <button
                                        onClick={handlePrevious}
                                        disabled={activeStep === 0}
                                        className={`h-[40px] w-[150px] rounded-md ${activeStep === 0
                                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                            : "bg-blue-500 text-white hover:bg-blue-600"
                                            }`}
                                    >
                                        Previous
                                    </button> */}
                                    <button
                                        type='submit'
                                        className='w-full h-[45px] flex items-center justify-center bg-[#3C4E70] rounded-lg text-[#FFFFFF] text-[18px] font-semibold'
                                    >
                                        {isLoading ? (
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                        ) : "Sign Up"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default RegisterAsCandidate