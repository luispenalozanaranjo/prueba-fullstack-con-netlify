// src/app.js
import express from 'express'
import cors from 'cors'
import logger from './logger.js'
import logging from './logging-middleware.js'
import routes from './routes.js'

export function createApp() {
  const app = express()

  // Middlewares
  app.use(express.json())
  app.use(cors({ origin: true }))
  app.use(logging(logger))

  // Rutas
  app.use('/api', routes)

  // Health
  app.get('/health', (_req, res) => { res.json({ ok: true }) })

  return app
}

export default createApp()
