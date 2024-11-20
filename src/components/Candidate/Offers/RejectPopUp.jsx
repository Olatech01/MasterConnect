import React from 'react'

const RejectPopUp = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className='bg-[#FFFFFF] w-[35%] sm:w-[80%] md:w-[80%] flex flex-col items-center gap-[15px] py-[20px] px-6 rounded-lg'>
                <h2 className='text-[20px] font-semibold'>Reject Offer</h2>
                <div className='flex flex-col items-center gap-3'>
                    <h2 className='text-[18px] font-medium'>
                        Do you want to reject this offer?
                    </h2>
                    <p className='text-[16px]'>
                        This action cannot be undone. Please confirm your decision.
                    </p>

                </div>
                <button onClick={onClose}  className='text-white bg-[#1E3561] font-bold w-full py-3 px-6 rounded-lg'>
                    Reject
                </button>
                <button onClick={onClose} className='text-lg font-bold border py-3 w-full rounded-lg'>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default RejectPopUp