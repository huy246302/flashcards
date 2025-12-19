import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import AddCardForm from './components/AddCardForm';

function App() {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/cards')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  const addCard = async (question, answer) => {
    const res = await fetch('http://localhost:3001/cards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, answer }),
    });

    const newCard = await res.json();
    setCards(prev => [...prev, newCard]);
    setShowForm(false);
  };

  return (
    <div>
      <h1>Simple Flashcard App</h1>

      <CardList cards={cards} />

      <button onClick={() => setShowForm(true)}>
        Add New Card
      </button>

      {showForm && <AddCardForm onAdd={addCard} />}
    </div>
  );
}

export default App;
