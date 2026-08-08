import { FastifyInstance } from 'fastify'
import { createInvite } from './create-invite'
import { getInvite } from './get-invite'
import { getInvites } from './get-invites'
import { acceptInvite } from './accept-invite'

export async function inviteRoutes(app: FastifyInstance) {
  app.register(createInvite)
  app.register(getInvite)
  app.register(getInvites)
  app.register(acceptInvite)
}
