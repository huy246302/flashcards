import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load data from JSON file
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setCards(data);
        setLoading(false);
      });
  }, []);

  // Add a new flashcard
  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      question: window.prompt('Enter question:'),
      answer: window.prompt('Enter answer:')
    };
    
    if (newCard.question && newCard.answer) {
      setCards([...cards, newCard]);
    }
  };

  return (
    <div>
      <h1>Simple Flashcard App</h1>
      
      {loading ? (
        <p>Loading flashcards...</p>
      ) : (
        <CardList cards={cards} />
      )}

      <div>
        <button onClick={addCard}>Add New Card</button>
      </div>
    </div>
  );
}

export default App;