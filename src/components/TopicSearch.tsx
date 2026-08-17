type TopicSearchProps = {
  searchTerm: string
  onSearchTermChange: (searchTerm: string) => void
}

export function TopicSearch({
  searchTerm,
  onSearchTermChange,
}: TopicSearchProps) {
  return (
    <div>
      <label htmlFor="topic-search">Onderwerpen zoeken</label>

      <input
        id="topic-search"
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchTermChange(event.target.value)}
      />

      <button
        type="button"
        onClick={() => onSearchTermChange('')}
        disabled={searchTerm === ''}
      >
        Zoekopdracht wissen
      </button>
    </div>
  )
}
