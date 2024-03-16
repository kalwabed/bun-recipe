import { Hono } from 'hono'
import { askAi } from './model'

const app = new Hono()

app.get('/', async (c) => {
  const aiResponse = await askAi()
  return c.text(aiResponse)
})

export default app
