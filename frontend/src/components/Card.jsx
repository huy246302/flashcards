import React from 'react';

function Card({ card, flipCard, isFlipped }) {
  return (
    <div 
      className="
          border border-indigo-100
          p-4 mb-3 cursor-pointer rounded
          hover:bg-indigo-50
          hover:shadow-md
          transition-all duration-200
        "    
      onClick={flipCard}
    >
      <div>
        {isFlipped ? 'Answer' : 'Question'}
      </div>
      <div>
        {isFlipped ? card.answer : card.question}
      </div>
    </div>
  );
}

export default Card;