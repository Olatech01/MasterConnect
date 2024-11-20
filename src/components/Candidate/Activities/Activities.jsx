import React from 'react'
import { IoPerson } from "react-icons/io5";

const Activities = () => {
    const data = [
        {
            company: "Linsible Technologies (P) Limited",
            position: "Front End Development",
            appliedOn: "27 June 2023",
            applicants: 286,
            status: "Applied",
        },
        {
            company: "Linsible Technologies (P) Limited",
            position: "Front End Development",
            appliedOn: "27 June 2023",
            applicants: 286,
            status: "Applied",
        },
        {
            company: "Linsible Technologies (P) Limited",
            position: "Front End Development",
            appliedOn: "27 June 2023",
            applicants: 286,
            status: "Applied",
        },
        {
            company: "Linsible Technologies (P) Limited",
            position: "Front End Development",
            appliedOn: "27 June 2023",
            applicants: 286,
            status: "Applied",
        },
        {
            company: "Linsible Technologies (P) Limited",
            position: "Front End Development",
            appliedOn: "27 June 2023",
            applicants: 286,
            status: "Applied",
        },
        {
            company: "Linsible Technologies (P) Limited",
            position: "Front End Development",
            appliedOn: "27 June 2023",
            applicants: 286,
            status: "Applied",
        },
    ];
    return (
        <div className='flex flex-col gap-[2rem] w-full min-h-screen'>
            <h2 className="text-[20px] font-semibold">
                Activities
            </h2>
            <div className="bg-white shadow-md rounded-lg sm:overflow-x-auto relative w-full">
                <table className="w-full table-auto border-collapse sm:overflow-x-auto overflow-y-auto">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="px-6 py-3 font-semibold text-[18px]">Company</th>
                            <th className="px-6 py-3 font-semibold text-[18px]">Position</th>
                            <th className="px-6 py-3 font-semibold text-[18px]">Applied On</th>
                            <th className="px-6 py-3 font-semibold text-[18px]">Applicants</th>
                            <th className="px-6 py-3 font-semibold text-[18px]">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-6 py-3 text-[sm] text-gray-800">{item.company}</td>
                                <td className="px-6 py-3 text-sm text-gray-800">{item.position}</td>
                                <td className="px-6 py-3 text-sm text-gray-800">{item.appliedOn}</td>
                                <td className="px-6 py-3 text-sm text-gray-800 flex items-center gap-2"> <IoPerson size={15}/> {item.applicants}</td>
                                <td className="px-6 py-3">
                                    <span className="px-4 py-1 text-blue-700 bg-blue-100 rounded-full text-sm">
                                        {item.status}
                                    </span>
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Activities