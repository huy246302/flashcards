import express, { json } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(json());

const DATA_FILE = './cards.json';

// helper function
function readCards() {
  const data = readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

function writeCards(cards) {
  writeFileSync(DATA_FILE, JSON.stringify(cards, null, 2));
}

// GET all cards
app.get('/cards', (req, res) => {
  const cards = readCards();
  res.json(cards);
});

// POST new card
app.post('/cards', (req, res) => {
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ error: 'Missing data' });
  }

  const cards = readCards();

  const newCard = {
    id: Date.now(),
    question,
    answer
  };

  cards.push(newCard);
  writeCards(cards);

  res.status(201).json(newCard);
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
