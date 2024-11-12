import RecruiterLayout from '@/components/Recruiter/RecruiterLayout/RecruiterLayout'
import React from 'react'

const layout = ({ children }) => {
    return (
        <RecruiterLayout>
            <div className=''>
                {children}
            </div>
        </RecruiterLayout>
    )
}

export default layout