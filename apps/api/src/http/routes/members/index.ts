import type { FastifyInstance } from 'fastify'
import { getMembers } from './get-members'

export async function memberRoutes(app: FastifyInstance) {
  app.register(getMembers)
}
