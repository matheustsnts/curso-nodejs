import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Curso de Node JS!</h1>')
})

export default app