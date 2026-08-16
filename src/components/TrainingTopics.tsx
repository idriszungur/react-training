import { type FormEvent, useEffect, useState } from 'react'
type Topic = {
  id: number
  name: string
}

const initialTopics: Topic[] = [
  { id: 1, name: 'Componenten' },
  { id: 2, name: 'Props' },
  { id: 3, name: 'State' },
  { id: 4, name: 'Voorwaardelijke weergave' },
  { id: 5, name: 'Lijsten met map' },
]
const STORAGE_KEY = 'react-training-topics'
function loadTopics(): Topic[] {
  const savedTopics = localStorage.getItem(STORAGE_KEY)

  if (savedTopics === null) {
    return initialTopics
  }

  try {
    return JSON.parse(savedTopics) as Topic[]
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    return initialTopics
  }
}

export function TrainingTopics() {
    const [topics, setTopics] = useState(loadTopics)
    const [newTopic, setNewTopic] = useState('')
    useEffect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(topics))
    }, [topics])
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()

  const trimmedTopic = newTopic.trim()

  if (trimmedTopic === '') {
    return
  }

  const topic: Topic = {
    id: Date.now(),
    name: trimmedTopic,
  }

  setTopics([...topics, topic])
  setNewTopic('')
}
function handleDelete(id: number) {
  const remainingTopics = topics.filter((topic) => topic.id !== id)
  setTopics(remainingTopics)
}
  return (
    <section>
      <h2>Behandelde onderwerpen</h2>
      <form onSubmit={handleSubmit}>

  <label htmlFor="new-topic">Nieuw onderwerp</label>

  <input
    id="new-topic"
    type="text"
    value={newTopic}
    onChange={(event) => setNewTopic(event.target.value)}
  />

  <button type="submit" disabled={newTopic.trim() === ''}>
    Onderwerp toevoegen
  </button>
</form>
<p>Aantal onderwerpen: {topics.length}</p>
<button type="button" onClick={() => setTopics(initialTopics)}>
  Herstel basislijst
</button>
{topics.length === 0 ? (
<p>Nog geen onderwerpen toegevoegd.</p>
) : (
<ul>
{topics.map((topic) => (
<li key={topic.id}>
  {topic.name}

  <button type="button" onClick={() => handleDelete(topic.id)}>
    Verwijderen
  </button>
</li>
))}
</ul>
)}
    </section>
  )
}
