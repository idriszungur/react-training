type VersionBadgeProps = {
  version: string
}

function VersionBadge({ version }: VersionBadgeProps) {
  return <span>Versie {version}</span>
}

export default VersionBadge
