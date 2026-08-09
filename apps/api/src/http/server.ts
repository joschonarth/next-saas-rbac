import { env } from '@saas/env'
import { app } from './app'

app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP server running!')
})
