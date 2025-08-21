// src/server.js
import dotenv from 'dotenv'
import createApp from './app.js'
import { connectDB } from './lib/db.js'

dotenv.config()

const port = process.env.PORT || 3001
const app = createApp

const start = async () => {
  await connectDB()
  app.listen(port, () => {
    console.log(`[BOOT] Backend escuchando en http://localhost:${port}`)
  })
}

start().catch((err) => {
  console.error('[BOOT] Error al iniciar:', err)
  process.exit(1)
})
