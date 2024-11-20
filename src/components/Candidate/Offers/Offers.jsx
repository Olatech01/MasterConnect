"use client"
import React, { useState } from 'react'
import RejectPopUp from './RejectPopUp';

const Offers = () => {
    const [reject, setReject] = useState(false)
    const handleReject = () => {
        setReject(true)
    }
    const handleAccept = () => {
        router.push('/recruiter/profile')
    }
    const handleCancel = () => {
        setReject(false)
    }
    return (
        <div className="h-fit p-5 sm:px-2">
            <h2 className="text-[20px] font-semibold">Offers</h2>
            <div className="bg-white max-h-[80vh] overflow-y-auto px-[1rem] py-3 rounded-lg shadow-md">
                <div className="flex flex-col gap-4">
                    {[...Array(7)].map((_, index) => (
                        <div
                            key={index}
                            className="min-h-[150px] border rounded-lg p-3 flex flex-col gap-3"
                        >
                            <h2 className="text-[18px] font-semibold">Linsible Technologies</h2>
                            <div className="grid grid-cols-3 sm:grid-cols-1 gap-3">
                                <h2 className="text-[16px] font-medium">Type : Full-Time</h2>
                                <h2 className="text-[16px] font-medium">
                                    Position : Front End Developer
                                </h2>
                                <h2 className="text-[16px] font-medium">2LPA - 8LPA</h2>
                                <h2 className="text-[16px] font-medium">Last Date : 26 Sep 2023</h2>
                                <h2 className="text-[16px] font-medium">Openings : 4</h2>
                            </div>
                            <div className="flex justify-end gap-4">
                                <button onClick={handleReject} className="w-[100px] h-[35px] rounded-md border">Reject</button>
                                <button className="w-[100px] h-[35px] rounded-md bg-[#3C4E70] text-white">
                                    Connect
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {reject && <RejectPopUp onClose={handleCancel}/>}
        </div>
    );
};

export default Offers;
