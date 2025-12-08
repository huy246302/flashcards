import React from 'react';

function Card({ card, flipCard, isFlipped }) {
  return (
    <div onClick={flipCard}>
      <div>
        {isFlipped ? card.answer : card.question}
      </div>
      <div>
        {isFlipped ? '(Click to see question)' : '(Click to see answer)'}
      </div>
    </div>
  );
}

export default Card;