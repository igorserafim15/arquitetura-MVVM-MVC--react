import { UserModel } from '../models/user.model'
import { client } from '../api/client'

export interface LoginDTO {
  email: string
  password: string
}

export async function login({ email, password }: LoginDTO) {
  const { data } = await client.post<UserModel>('/sessions', {
    email,
    password,
  })
  return data
}
