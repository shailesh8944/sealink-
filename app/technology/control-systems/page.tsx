import type { Metadata } from 'next'
import TechnologyDetailClient from '@/components/pages/TechnologyDetailClient'

export const metadata: Metadata = {
  title: 'Control Systems',
  description: 'Engine control, vessel control, guidance, and optimisation logic for marine and autonomous platforms.',
}

export default function Page() {
  return (
    <TechnologyDetailClient
      eyebrow="Technology — 05"
      title="Control"
      titleAccent="Systems"
      lead="Engine control, vessel control, guidance, and optimisation logic — the layer that turns models and predictions into action."
      overview={[
        'Control systems connect our physics and AI models to real vessel behaviour — engine control, propulsion control, and, for autonomous platforms, guidance and vessel control loops.',
      ]}
      architecture={['Sensor Feedback', 'Control Logic', 'Actuation', 'Engine / Propulsion / Vessel', 'Optimisation Layer']}
      concepts={[
        { title: 'Engine control', desc: 'Electronic control of fuel, timing, and load parameters.' },
        { title: 'Vessel control', desc: 'Heading, speed, and station-keeping control loops.' },
        { title: 'Guidance', desc: 'Route and trajectory control for autonomous and assisted operation.' },
        { title: 'Optimisation', desc: 'Control logic informed by physics-based and data-driven optimisation.' },
      ]}
      tags={['Closed-loop control', 'Supervisory control', 'Guidance & navigation logic', 'Sensor feedback integration']}
    />
  )
}
