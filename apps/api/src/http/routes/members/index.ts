import type { FastifyInstance } from 'fastify'
import { getMembers } from './get-members'
import { updateMember } from './update-member'
import { removeMember } from './remove-member'

export async function memberRoutes(app: FastifyInstance) {
  app.register(getMembers)
  app.register(updateMember)
  app.register(removeMember)
}
