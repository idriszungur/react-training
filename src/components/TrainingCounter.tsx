import { useState } from 'react'

export function TrainingCounter() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <h2>Oefenteller</h2>
      <p>Aantal klikken: {count}</p>

      <button type="button" onClick={() => setCount(count + 1)}>
        Verhoog teller
      </button>

      <button type="button"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}>
        Verlaag teller
      </button>

      <button type="button" onClick={() => setCount(0)}>
        Reset teller
      </button>

    </section>
  )
}
