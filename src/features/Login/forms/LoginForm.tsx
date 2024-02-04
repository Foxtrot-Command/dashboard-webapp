'use client'

import EmailLoginForm from 'features/Login/forms/EmailLoginForm'
import AuthenticationWrapper from 'features/Login/layout/AuthenticationWrapper'
import React from 'react'

export const LoginForm = () => {
  return (
    <AuthenticationWrapper pageTitle="Log In">
      <EmailLoginForm />
    </AuthenticationWrapper>
  )
}
