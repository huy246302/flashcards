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
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 mt-6 rounded-lg shadow"
    >
      <h3 className="text-lg font-semibold mb-4">
        Add a new flashcard
      </h3>

      <input
        className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="Question"
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />

      <input
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="Answer"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
      />

      <div className="flex justify-end gap-2">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default AddCardForm
