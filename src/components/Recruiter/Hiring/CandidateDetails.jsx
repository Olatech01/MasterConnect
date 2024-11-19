import React from 'react'
import { TbX } from 'react-icons/tb'

const CandidateDetails = ({ onClose }) => {
  return (
    <div className="absolute z-[500] bottom-0 top-0 left-0 h-screen w-full bg-[#000000] flex flex-col items-center justify-center text-[var(--text-color)]">
      <div className="lg:w-[32%] flex flex-col items-center gap-4 border border-[var(--borderTwo)]  px-3 py-3 modal bg-white h-fit overflow-y-scroll shadow rounded-md md:w-[50%] w-full">
        <TbX onClick={onClose} />
      </div>
    </div>
  )
}

export default CandidateDetails