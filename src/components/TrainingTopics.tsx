const topics = [
  { id: 1, name: 'Componenten' },
  { id: 2, name: 'Props' },
  { id: 3, name: 'State' },
  { id: 4, name: 'Voorwaardelijke weergave' },
  { id: 5, name: 'Lijsten met map' },
]

export function TrainingTopics() {
  return (
    <section>
      <h2>Behandelde onderwerpen</h2>

      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>{topic.name}</li>
        ))}
      </ul>
    </section>
  )
}
