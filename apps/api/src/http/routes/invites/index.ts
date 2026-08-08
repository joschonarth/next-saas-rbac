import { FastifyInstance } from 'fastify'
import { createInvite } from './create-invite'
import { getInvite } from './get-invite'

export async function inviteRoutes(app: FastifyInstance) {
  app.register(createInvite)
  app.register(getInvite)
}
