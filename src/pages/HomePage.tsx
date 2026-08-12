import VersionBadge from '../components/VersionBadge'

function HomePage() {
  return (
    <main>
      <h1>React Training</h1>
      <p>Mijn eerste React-project met TypeScript en Vite.</p>
      <VersionBadge version={__APP_VERSION__} />
    </main>
  )
}

export default HomePage
