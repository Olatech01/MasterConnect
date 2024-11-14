"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { CiBookmark } from 'react-icons/ci';
import { FaFilter } from "react-icons/fa";
import { AiOutlineExclamation } from "react-icons/ai";


const Hiring = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const candidate = [
    { id: 1, name: 'John Doe', location: 'New York', city: 'New York', degreeType: 'Bachelor', branch: 'Computer Science', profession: 'Software Engineer', img: '/frame.svg', institution: 'Kwara State university' },
    { id: 2, name: 'Jane Doe', location: 'Los Angeles', city: 'Los Angeles', degreeType: 'Master', branch: 'Computer Science', profession: 'Software Engineer', img: '/frame.svg', institution: 'Kwara State university' },
    { id: 3, name: 'David Doe', location: 'Chicago', city: 'Chicago', degreeType: 'Bachelor', branch: 'Computer Science', profession: 'Software Engineer', img: '/frame.svg', institution: 'Kwara State university' },
    { id: 4, name: 'Emma Doe', location: 'San Francisco', city: 'San Francisco', degreeType: 'Master', branch: 'Computer Science', profession: 'Software Engineer', img: '/frame.svg', institution: 'Kwara State university' },
  ]

  const openModal = (candidate) => setSelectedCandidate(candidate);
  const closeModal = () => setSelectedCandidate(null);

  return (
    <div className='flex gap-[1rem]'>
      <div className='w-[426px] border rounded-lg p-3 flex flex-col gap-[1.5rem]'>
        <div className='flex gap-2 items-center'>
          <FaFilter />
          <h2>Filter</h2>
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[16px] font-semibold'>Location</h3>
            <select className='border rounded-md h-[35px] outline-none'>
              <option>Select</option>
            </select>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[16px] font-semibold'>City</h3>
            <select className='border rounded-md h-[35px] outline-none'>
              <option>Select</option>
            </select>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[16px] font-semibold'>Degree Type</h3>
            <select className='border rounded-md h-[35px] outline-none'>
              <option>Select</option>
            </select>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[16px] font-semibold'>Branch</h3>
            <select className='border rounded-md h-[35px] outline-none'>
              <option>Select</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <h3 className='text-[16px] font-semibold'>Profession</h3>
          <select className='border rounded-md h-[35px] outline-none'>
            <option>Search for required Profession....</option>
          </select>
        </div>
        <div className='flex flex-col gap-1'>
          <h3 className='text-[16px] font-semibold'>Graduation Year</h3>
          <select className='border rounded-md h-[35px] outline-none'>
            <option>Select</option>
          </select>
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[16px] font-semibold'>Internships</h3>
            <input
              type="text"
              className='border rounded-md h-[35px] outline-none px-2'
              placeholder='Enter no of Internships'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[16px] font-semibold'>Skills</h3>
            <input
              type="text"
              className='border rounded-md h-[35px] outline-none px-2'
              placeholder='Enter with comma'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-[16px] font-semibold'>Availability</h2>
          <div className='flex gap-1'>
            <input
              type="checkbox"
              className='border-2 rounded-md outline-none'
            />
            <label htmlFor="full-time">Work From Home</label>
          </div>
          <div className='flex gap-1'>
            <input
              type="checkbox"
              className='border-2 rounded-md outline-none'
            />
            <label htmlFor="full-time">On-site</label>
          </div>
        </div>
      </div>
      <div>
        <div className='grid grid-cols-3 gap-4'>
          {candidate.map((candidate) => (
            <div key={candidate.id} className='flex flex-col items-center justify-center gap-1 border w-[250px] shadow-lg px-2 py-3'>
              <div className='flex justify-between w-full items-center'>
                <p className='bg-[#1E3561] text-white h-5 w-5 rounded-full text-center'>{candidate.id}</p>
                <CiBookmark />
              </div>
              <Image height={100} width={50} src={candidate.img} alt='' />
              <h2 className='text-[20px] font-semibold'>{candidate.name}</h2>
              <p className='text-[16px] font-medium'>{candidate.institution}</p>
              <p className='font-normal text-[14px]'>{candidate.location}</p>
              <div className='flex justify-between w-full'>
                <button className='font-semibold flex items-center' onClick={() => openModal(candidate)}>
                  <AiOutlineExclamation />
                  More info
                </button>
                <button className='bg-[#1E3561] h-[28px] rounded-full w-[90px] text-white font-semibold'>Message</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedCandidate && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg w-[584px] flex flex-col gap-4'>
            <div className='flex justify-between items-center mb-4 '>
              <h2 className='text-[24px] font-semibold'>{selectedCandidate.name}'s Details</h2>
              <button onClick={closeModal} className='text-lg font-bold'>&times;</button>
            </div>
            <div className='flex gap-3 items-center'>
              <Image height={100} width={70} src={selectedCandidate.img} alt={selectedCandidate.name} />
              <div className='flex flex-col gap-3'>
                <div className='flex gap-5'>
                  <h3 className='text-[18px] font-semibold'>{selectedCandidate.name}</h3>
                  <p>Age : 19</p>
                  <p>Gender : Male</p>
                </div>
                <p className='text-[16px] font-medium'>{selectedCandidate.institution}</p>
              </div>

            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='text-[18px] font-semibold'>Educational Details</h2>
              <div className='flex flex-col gap-2'>
                <h2 className='text-[14px] font-normal'>Degree (2019 - ‘23) : B.Tech - CSE (Artificial Intelligence)   -   CGPA: 9.7</h2>
                <h2 className='text-[14px] font-normal'>XII        (2017 - ‘19) : MPC - (Maths, Physics and Chemistry -  CGPA: 9.5</h2>
                <h2 className='text-[14px] font-normal'>X         (2007 - ‘17) : SSC - (Maths, Physics and Chemistry  -  CGPA: 9.8</h2>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='text-[18px] font-semibold'>Skills</h2>
              <div className='flex gap-2'>
                <p className='bg-[#EDF1FF] h-[35px] flex items-center justify-center rounded-md px-3'>HTML5</p>
                <p className='bg-[#EDF1FF] h-[35px] flex items-center justify-center rounded-md px-3'>CSS</p>
                <p className='bg-[#EDF1FF] h-[35px] flex items-center justify-center rounded-md px-3'>Bootstrap</p>
                <p className='bg-[#EDF1FF] h-[35px] flex items-center justify-center rounded-md px-3'>React JS</p>
                <p className='bg-[#EDF1FF] h-[35px] flex items-center justify-center rounded-md px-3'>PHP</p>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='text-[18px] font-semibold'>Experience</h2>
              <div className='flex flex-col gap-2'>
                <h2 className='text-[14px] font-normal'>VINTERN - Front end Development (Jul ‘23 - Aug’23)</h2>
                <h2 className='text-[14px] font-normal'>XYZ         - Front end Development (Jan ‘22 - Apr ‘23)</h2>
              </div>
            </div>
            <div className='flex justify-center'>
              <button className='bg-[#1E3561] h-[40px] rounded-full w-[200px] text-white font-semibold'>Message</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hiring