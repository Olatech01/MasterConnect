import Link from 'next/link';
import React from 'react'
import { ImCheckmark } from "react-icons/im";

const NewPasswordSuccssPopUp = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white h-[350px] w-[500px] flex flex-col items-center justify-center gap-4 rounded-lg p-4">
        <h2 className='text-[40px] font-extrabold'>Password Updated</h2>
        <div className='bg-[#1E3561] h-24 w-24 rounded-full flex items-center justify-center'>
          <ImCheckmark
            size={40}
            style={{
              color: "white"

            }} />
        </div>
        <p className='text-[16px] font-medium'>Your Password has been Updated</p>
        <Link href={"/auth/login"}>
          <button className='bg-[#1E3561] h-[40px] text-white w-fit px-[3rem]'>Login</button>
        </Link>
      </div>
    </div>
  )
}

export default NewPasswordSuccssPopUp