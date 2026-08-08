import type { FastifyInstance } from 'fastify'
import { getMembers } from './get-members'
import { updateMember } from './update-member'

export async function memberRoutes(app: FastifyInstance) {
  app.register(getMembers)
  app.register(updateMember)
}
