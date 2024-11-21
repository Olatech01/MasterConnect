import React from "react";
import { IoPerson } from "react-icons/io5";

const Activities = () => {
  const data = [
    {
      company: "Linsible Technologies (P) Limited",
      position: "Front End Development",
      appliedOn: "27 June 2023",
      applicants: 286,
      status: "Pending",
    },
    {
      company: "Linsible Technologies (P) Limited",
      position: "Front End Development",
      appliedOn: "27 June 2023",
      applicants: 286,
      status: "Pending",
    },
    {
      company: "Linsible Technologies (P) Limited",
      position: "Front End Development",
      appliedOn: "27 June 2023",
      applicants: 286,
      status: "Rejected",
    },
    {
      company: "Linsible Technologies (P) Limited",
      position: "Front End Development",
      appliedOn: "27 June 2023",
      applicants: 286,
      status: "Pending",
    },
    {
      company: "Linsible Technologies (P) Limited",
      position: "Front End Development",
      appliedOn: "27 June 2023",
      applicants: 286,
      status: "Rejected",
    },
    {
      company: "Linsible Technologies (P) Limited",
      position: "Front End Development",
      appliedOn: "27 June 2023",
      applicants: 286,
      status: "Accepted",
    },
  ];

  // Helper function for status colors
  const getStatusStyles = (status) => {
    switch (status) {
      case "Accepted":
        return "text-green-700 bg-green-100";
      case "Pending":
        return "text-orange-700 bg-orange-100";
      case "Rejected":
        return "text-red-700 bg-red-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full min-h-screen px-4">
      <h2 className="text-2xl font-semibold">Activities</h2>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto w-full">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left text-sm md:text-base">
              <th className="px-6 py-3 font-semibold">Company</th>
              <th className="px-6 py-3 font-semibold">Position</th>
              <th className="px-6 py-3 font-semibold">Applied On</th>
              <th className="px-6 py-3 font-semibold">Applicants</th>
              <th className="px-6 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t text-sm md:text-base">
                <td className="px-6 py-3 text-gray-800">{item.company}</td>
                <td className="px-6 py-3 text-gray-800">{item.position}</td>
                <td className="px-6 py-3 text-gray-800">{item.appliedOn}</td>
                <td className="px-6 py-3 text-gray-800 flex items-center gap-2">
                  <IoPerson size={15} />
                  {item.applicants}
                </td>
                <td className="px-6 py-3">
                  <span
                    className={`px-4 py-1 rounded-full ${getStatusStyles(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Activities;
