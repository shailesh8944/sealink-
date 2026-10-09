export type DevStage =
  | 'Concept'
  | 'Research'
  | 'Simulation'
  | 'Prototype'
  | 'Under Development'
  | 'Bench Tested'
  | 'Field Tested'
  | 'Deployed'
  | 'Deployed at Sea'
  | 'Target'

export default function StatusPill({ stage }: { stage: DevStage }) {
  return <span className="pill status-pill">{stage}</span>
}
