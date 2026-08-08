import type { FastifyInstance } from 'fastify'
import { createProject } from './create-project'

export async function projectRoutes(app: FastifyInstance) {
  app.register(createProject)
}
