import React from 'react'

export interface LoginModel {
  email: string
  password: string
  isLoading: boolean
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  onSubmit: () => void
}
