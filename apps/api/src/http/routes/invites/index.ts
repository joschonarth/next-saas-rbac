import { FastifyInstance } from 'fastify'
import { createInvite } from './create-invite'

export async function inviteRoutes(app: FastifyInstance) {
  app.register(createInvite)
}
