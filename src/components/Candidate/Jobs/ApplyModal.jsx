"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ApplyModal = ({ onClose }) => {
    const [whyHire, setWhyHire] = useState("");
    const [past, setPast] = useState("");
    const [option, setOption] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateInfo = () => {
        if (!whyHire || !past || option === "") {
            toast.error("All fields are required");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateInfo()) return;

        setIsLoading(true);
        try {
            setTimeout(() => {
                setIsLoading(false);
                setIsSuccess(true);
                // toast.success("Application submitted successfully");
            }, 2000);
        } catch (error) {
            setIsLoading(false);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            {!isSuccess ? (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-white w-[45%] sm:w-[95%] md:w-[95%] flex flex-col rounded-t-lg items-center gap-[15px] rounded-lg">
                        <div className="bg-[#DDF2FF] w-full flex items-center gap-3 px-5 py-4 rounded-t-lg">
                            <h2 className="text-[18px] font-semibold">UX/UI Designer</h2>
                            <p className="text-[14px]">Linsible Technologies Private Limited</p>
                        </div>

                        <form onSubmit={handleSubmit} className="w-full px-4 py-3 flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-medium">
                                    Q. Why do you want our company to hire you?
                                </label>
                                <textarea
                                    placeholder="Enter your text here"
                                    value={whyHire}
                                    onChange={(e) => setWhyHire(e.target.value)}
                                    className="rounded-lg h-[20vh] shadow-lg border-2 outline-none pl-3 w-full"
                                ></textarea>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-medium">
                                    Q. Do you have any past experience? If yes, please share your past work links.
                                </label>
                                <textarea
                                    placeholder="Enter your text here"
                                    value={past}
                                    onChange={(e) => setPast(e.target.value)}
                                    className="rounded-lg h-[20vh] shadow-lg border-2 outline-none pl-3 w-full"
                                ></textarea>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-medium">
                                    Q. Are you available for a 2-month internship?
                                </label>
                                <div className="flex items-center gap-5">
                                    <div className="flex gap-2">
                                        <input
                                            checked={option === "yes"}
                                            value="yes"
                                            name="option"
                                            onChange={(e) => setOption(e.target.value)}
                                            type="radio"
                                        />
                                        <p className="text-[13px]">Yes</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <input
                                            checked={option === "no"}
                                            value="no"
                                            name="option"
                                            onChange={(e) => setOption(e.target.value)}
                                            type="radio"
                                        />
                                        <p className="text-[13px]">No</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-5">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="border-[#3C4E70] border h-[40px] w-[200px] rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-[#3C4E70] text-white flex items-center justify-center h-[40px] w-[200px] rounded-md"
                                >
                                    {isLoading ? (
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                            />
                                        </svg>
                                    ) : (
                                        "Apply"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-white w-[40%] sm:w-[95%] md:w-[70%] rounded-lg text-center">
                        <div className="bg-[#DDF2FF] w-full flex items-center gap-3 px-5 py-4 rounded-t-lg">
                            <h2 className="text-[18px] font-semibold">UX/UI Designer</h2>
                            <p className="text-[14px]">Linsible Technologies Private Limited</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[1rem] py-6">
                            <h2 className="text-[24px] font-semibold">Application Status</h2>
                            <Image height={100} width={100} src={"/success.svg"} alt="" />
                            <p className="text-[16px]">Applied successfully</p>
                            <Link href={"/candidate/jobs"}>
                                <button className="bg-[#3C4E70] text-white flex items-center justify-center h-[40px] w-[100px] rounded-md">Ok</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ApplyModal;
