import { TrainingTopics } from '../components/TrainingTopics'
import VersionBadge from '../components/VersionBadge'
import { TrainingGoal } from '../components/TrainingGoal'
import { TrainingCounter } from '../components/TrainingCounter'

function HomePage() {
  return (
    <main>
      <h1>React Training</h1>
      <p>Mijn eerste React-project met TypeScript en Vite.</p>

      <TrainingGoal
        title="React-componenten begrijpen"
        description="Ik leer gegevens met props door te geven."
              />

        <TrainingTopics />

      <TrainingCounter target={5} />

      <VersionBadge version={__APP_VERSION__} />
    </main>
  )
}

export default HomePage
