export default eventHandler(() => ({
  ok: true,
  hasMongoUri: Boolean(process.env.MONGODB_URI),
  hasUser: Boolean(process.env.BASIC_AUTH_USER),
  hasPass: Boolean(process.env.BASIC_AUTH_PASS),
}))
