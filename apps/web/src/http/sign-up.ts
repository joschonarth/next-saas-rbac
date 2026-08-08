import { HTTPError } from 'ky'
import { api } from './api-client'

interface SignUpRequest {
  name: string
  email: string
  password: string
}

type SignUpResponse = void

export async function signUp({
  name,
  email,
  password,
}: SignUpRequest): Promise<SignUpResponse> {
  try {
    await api.post('users', {
      json: {
        name,
        email,
        password,
      },
    })
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json()
      throw new Error(message)
    }

    throw err
  }
}
