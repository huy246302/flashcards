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
      <h2>Your Flashcards ({cards.length} total)</h2>
      
      <div>
        {cards.map(card => (
          <div key={card.id}>
            <Card
              card={card}
              flipCard={() => flipCard(card.id)}
              isFlipped={flippedCards[card.id] || false}
            />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;