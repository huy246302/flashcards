import React, { useState } from 'react';
import Card from './Card';

function CardList({ cards }) {
  // Track which cards are flipped
  const [flippedCards, setFlippedCards] = useState({});

  const flipCard = (cardId) => {
    setFlippedCards({
      ...flippedCards,
      [cardId]: !flippedCards[cardId]
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Your Flashcards ({cards.length})
      </h2>

      {cards.length === 0 && (
        <p className="text-gray-500">
          No flashcards yet. Add one!
        </p>
      )}

      <div>
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            flipCard={() => flipCard(card.id)}
            isFlipped={flippedCards[card.id] || false}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;