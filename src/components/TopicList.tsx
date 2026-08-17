import type { Topic } from '../types/Topic'

type TopicListProps = {
  topics: Topic[]
  onDelete: (id: number) => void
}

export function TopicList({ topics, onDelete }: TopicListProps) {
  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic.id}>
          {topic.name}

          <button type="button" onClick={() => onDelete(topic.id)}>
            Verwijderen
          </button>
        </li>
      ))}
    </ul>
  )
}
