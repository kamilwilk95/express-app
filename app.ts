import express, {Express} from 'express'
import { RegisterRoutes } from './generated/routes'

export function app(): Express {
  const app = express()
  app.use(express.json())

  RegisterRoutes(app)
  return app
}

export default app()
