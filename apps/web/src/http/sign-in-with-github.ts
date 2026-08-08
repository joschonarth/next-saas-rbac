import { HTTPError } from 'ky'
import { api } from './api-client'

interface SignInWithGithubRequest {
  code: string
}

interface SignInWithGithubResponse {
  token: string
}

export async function signInWithGithub({ code }: SignInWithGithubRequest) {
  try {
    const result = await api
      .post('sessions/github', {
        json: {
          code,
        },
      })
      .json<SignInWithGithubResponse>()

    return result
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json()
      throw new Error(message)
    }

    throw err
  }
}
