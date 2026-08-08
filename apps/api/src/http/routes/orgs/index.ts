import type { FastifyInstance } from 'fastify'

import { createOrganization } from './create-organization'
import { getMembership } from './get-membership'
import { getOrganization } from './get-organization'
import { getOrganizations } from './get-organizations'
import { updateOrganization } from './update-organization'
import { shutdownOrganization } from './shutdown-organization'

export async function orgRoutes(app: FastifyInstance) {
  app.register(createOrganization)
  app.register(getMembership)
  app.register(getOrganization)
  app.register(getOrganizations)
  app.register(updateOrganization)
  app.register(shutdownOrganization)
}
