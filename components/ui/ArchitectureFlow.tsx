export default function ArchitectureFlow({ stages }: { stages: string[] }) {
  return (
    <div className="architecture-flow" aria-hidden="true">
      {stages.map((stage, i) => (
        <span key={stage}>
          <span className={i === stages.length - 1 ? 'flow-highlight' : undefined}>{stage}</span>
          {i < stages.length - 1 && <span className="flow-arrow"> → </span>}
        </span>
      ))}
    </div>
  )
}
