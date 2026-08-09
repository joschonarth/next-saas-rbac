import { Role } from '@saas/auth'

import { api } from './api-client'
import { HTTPError } from 'ky'

interface CreateInviteRequest {
  org: string
  email: string
  role: Role
}

type CreateInviteResponse = void

export async function createInvite({
  org,
  email,
  role,
}: CreateInviteRequest): Promise<CreateInviteResponse> {
  try {
    await api.post(`organizations/${org}/invites`, {
      json: {
        email,
        role,
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
