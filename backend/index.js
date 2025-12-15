import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

let cards = []

app.get('/cards', (req, res) => {
  res.json(cards)
})

app.post('/cards', (req, res) => {
  const { question, answer } = req.body

  if (!question || !answer) {
    return res.status(400).json({ message: 'Missing question or answer' })
  }

  const newCard = {
    id: Date.now(),
    question,
    answer,
    createdAt: new Date().toISOString(),
  }

  cards.push(newCard)
  res.status(201).json(newCard)
})

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001')
})
