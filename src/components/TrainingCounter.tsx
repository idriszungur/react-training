import { useState } from 'react'
type TrainingCounterProps = {
  target: number
}

export function TrainingCounter({ target }: TrainingCounterProps) {
  const [count, setCount] = useState(0)

  return (
    <section>
      <h2>Oefenteller</h2>
      <p>Aantal klikken: {count}</p>
      {count >= target ? (
  <p>Doel van {target} bereikt!</p>
) : (
  <p>Nog {target - count} te gaan.</p>
)}

      <button type="button"
              onClick={() => setCount(count + 1)}
              disabled={count >= target}>
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
