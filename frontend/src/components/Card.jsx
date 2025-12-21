import React from 'react';

function Card({ card, flipCard, isFlipped }) {
  return (
    <div
      onClick={flipCard}
      className="
        bg-white
        border border-gray-200
        rounded-lg
        p-4
        mb-4
        cursor-pointer
        shadow-sm
        hover:shadow-md
        transition
      "
    >
      <div className="text-sm text-gray-500 mb-1">
        {isFlipped ? 'Answer' : 'Question'}
      </div>

      <div className="text-lg font-medium">
        {isFlipped ? card.answer : card.question}
      </div>
    </div>
  );
}

export default Card;