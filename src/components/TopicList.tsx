import type { Topic } from '../types/Topic'

type TopicListProps = {
  topics: Topic[]
  onEdit: (topic: Topic) => void
  onDelete: (id: number) => void
}

export function TopicList({ topics, onEdit, onDelete }: TopicListProps) {
  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic.id}>
          {topic.name}
          <button type="button" onClick={() => onEdit(topic)}>
            Bewerken
          </button>
          <button type="button" onClick={() => onDelete(topic.id)}>
            Verwijderen
            </button>
        </li>
      ))}
    </ul>
  )
}
