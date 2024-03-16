import { Hono } from 'hono'
import { askRecipe } from './model'

const app = new Hono()

app.get('/', async (c) => {
  const aiResponse = await askRecipe()
  return c.text(aiResponse)
})

export default app
