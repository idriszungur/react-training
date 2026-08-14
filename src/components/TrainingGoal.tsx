type TrainingGoalProps = {
  title: string
  description: string
}

export function TrainingGoal({
  title,
  description,
}: TrainingGoalProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  )
}
