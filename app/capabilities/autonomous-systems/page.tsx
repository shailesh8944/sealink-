import type { Metadata } from 'next'
import CapabilityDetailClient from '@/components/pages/CapabilityDetailClient'

export const metadata: Metadata = {
  title: 'Autonomous Maritime Systems',
  description: 'Guidance, navigation, vessel control, mission planning and autonomous surface vessel technology development.',
}

export default function Page() {
  return (
    <CapabilityDetailClient
      eyebrow="Capability — 05"
      title="From Propulsion"
      titleAccent="to Autonomy"
      lead="Intelligent maritime systems require more than a vessel and an engine. Sealink works across guidance, control, sensing, navigation and mission-level decision systems."
      stage="Research"
      overview={[
        'Autonomous maritime systems bring together sensing, navigation, guidance, control and propulsion into a single decision-making stack. Sealink approaches this as a natural extension of its propulsion and controls engineering work, not a separate product line.',
      ]}
      architecture={['Sensors', 'Perception', 'Navigation', 'Guidance', 'Control', 'Propulsion', 'Mission Execution']}
      domainGroups={[
        {
          title: 'Engineering domains',
          items: [
            { title: 'Autonomous surface vessels', desc: 'Platform-level autonomy for uncrewed surface vessels.' },
            { title: 'Guidance & navigation', desc: 'Route planning and positioning for autonomous operation.' },
            { title: 'Vessel control', desc: 'Control-loop design for autonomous heading, speed, and station-keeping.' },
            { title: 'Collision avoidance', desc: 'Sensing and decision logic for safe autonomous operation.' },
            { title: 'Mission planning', desc: 'Higher-level task and mission sequencing.' },
            { title: 'Propulsion control', desc: 'Integration with propulsion and engine control systems.' },
            { title: 'Sensor integration', desc: 'Perception sensors feeding navigation and guidance logic.' },
          ],
        },
      ]}
      lifecycle={['Requirements', 'System Architecture', 'Simulation', 'Prototype', 'Bench Testing', 'Marine Integration', 'Validation']}
    />
  )
}
