import express, {Express} from 'express'
import { RegisterRoutes } from './generated/routes'
import './app/use-cases/find-public-api/find-public-api.http.controller';

export function app(): Express {
  const app = express()
  app.use(express.json())

  RegisterRoutes(app)
  return app
}

export default app()
