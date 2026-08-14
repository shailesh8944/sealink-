import type { Metadata } from 'next'
import CapabilityDetailClient from '@/components/pages/CapabilityDetailClient'

export const metadata: Metadata = {
  title: 'Digital Engineering & Simulation',
  description: 'Simulation, mathematical modelling, digital twins, system architecture and hardware/software integration for marine platforms.',
}

export default function Page() {
  return (
    <CapabilityDetailClient
      eyebrow="Capability — 06"
      title="Digital"
      titleAccent="Engineering"
      lead="Simulation, mathematical modelling, digital twins, system architecture and hardware/software integration."
      stage="Under Development"
      overview={[
        'Digital engineering underpins every other capability at Sealink — the simulation, modelling, and system-architecture work that lets propulsion, controls, and electronics be designed, tested, and validated before and alongside physical hardware.',
      ]}
      architecture={['Requirements & Architecture', 'Mathematical Modelling', 'Simulation', 'Digital Twin', 'Hardware / Software Integration']}
      domainGroups={[
        {
          title: 'Engineering domains',
          items: [
            { title: 'System architecture', desc: 'Defining how propulsion, control, electronics, and software subsystems fit together.' },
            { title: 'Mathematical modelling', desc: 'First-principles models of hydrodynamic, thermodynamic, and control behaviour.' },
            { title: 'Simulation', desc: 'Simulating system behaviour ahead of physical prototyping.' },
            { title: 'Digital twin', desc: 'Software representations of vessel and propulsion systems for monitoring and testing.' },
            { title: 'Hardware/software integration', desc: 'Bridging simulated models with physical control and sensor hardware.' },
          ],
        },
      ]}
      lifecycle={['Requirements', 'System Architecture', 'Simulation', 'Prototype', 'Bench Testing', 'Marine Integration', 'Validation']}
    />
  )
}
