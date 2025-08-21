// netlify/functions/api.js
import serverless from 'serverless-http'
import createApp from '../../backend-express/src/app.js'
import dotenv from 'dotenv'
import { connectDB } from '../../backend-express/src/lib/db.js'

dotenv.config()

const app = createApp

let isReady = false
async function ensureReady() {
  if (!isReady) {
    await connectDB()
    isReady = true
  }
}

export const handler = async (event, context) => {
  await ensureReady()
  const wrapped = serverless(app)
  return wrapped(event, context)
}
