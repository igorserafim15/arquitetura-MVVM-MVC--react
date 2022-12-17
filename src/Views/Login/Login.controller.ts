import React from 'react'
import { login } from '../../repositories/auth.repository'
import { LoginModel } from './Login.viewmodel'

export function useLoginController(): LoginModel {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit() {
    try {
      setIsLoading(true)
      const response = await login({ email, password })
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    email,
    password,
    isLoading,
    setEmail,
    setPassword,
    onSubmit,
  }
}
