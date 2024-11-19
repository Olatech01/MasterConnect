import { AuthProvider } from '@/components/libs/AuthContext'
import { UserProvider } from '@/components/libs/UserContext'
import RecruiterLayout from '@/components/Recruiter/RecruiterLayout/RecruiterLayout'
import React from 'react'

const layout = ({ children }) => {
    return (
        <AuthProvider>
            <UserProvider>
                <RecruiterLayout>
                    <div className=''>
                        {children}
                    </div>
                </RecruiterLayout>
            </UserProvider>
        </AuthProvider>
    )
}

export default layout