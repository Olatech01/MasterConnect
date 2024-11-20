import CandidateLayout from '@/components/Candidate/CandidateLayout/CandidateLayout'
import { AuthProvider } from '@/components/libs/AuthContext'
import { UserProvider } from '@/components/libs/UserContext'
import React from 'react'

const layout = ({ children }) => {
  return (
    <AuthProvider>
        <UserProvider>
            <CandidateLayout>
                {children}
            </CandidateLayout>
        </UserProvider>
    </AuthProvider>
  )
}

export default layout