import { useState } from 'react'

function AddCardForm({ onAdd }) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!question || !answer) return

    onAdd(question, answer)
    setQuestion('')
    setAnswer('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Question"
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />

      <input
        placeholder="Answer"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
      />

      <button type="submit">Add Card</button>
    </form>
  )
}

export default AddCardForm
