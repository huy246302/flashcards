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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Flashcard App
        </h1>

        <CardList cards={cards} />

        <div className="text-center mt-6">
          <button
            onClick={() => setShowForm(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Add New Card
          </button>
        </div>

        {showForm && <AddCardForm onAdd={addCard} />}
      </div>
  </div>
  );
}

export default App;
