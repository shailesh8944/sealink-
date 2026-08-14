import type { Metadata } from 'next'
import CapabilityDetailClient from '@/components/pages/CapabilityDetailClient'

export const metadata: Metadata = {
  title: 'Intelligent Propulsion',
  description: 'Physics-informed AI, fuel optimisation, performance prediction, diagnostics and digital twins for marine propulsion.',
}

export default function Page() {
  return (
    <CapabilityDetailClient
      eyebrow="Capability — 04"
      title="Intelligent"
      titleAccent="Propulsion"
      lead="Physics-informed AI, fuel optimisation, performance prediction, diagnostics and digital twins."
      stage="Field Tested"
      overview={[
        'Our software and AI technologies connect propulsion, vessel performance and operational data to make marine systems measurable, predictable and optimisable. AFCOS, our flagship product, is the clearest evidence of this capability operating in the real world.',
      ]}
      architecture={['Hull / Propeller / Engine Models', 'Weather & Operational Data', 'Physics-Informed AI', 'Fuel / Voyage / Engine Optimisation']}
      domainGroups={[
        {
          title: 'Engineering domains',
          items: [
            { title: 'Fuel optimisation', desc: 'Predicting and optimising fuel consumption under changing operational conditions.' },
            { title: 'Performance prediction', desc: 'Combining physics and data-driven models for vessel and propulsion prediction.' },
            { title: 'Digital twin', desc: 'Representing marine propulsion and vessel systems in software for simulation and monitoring.' },
            { title: 'Predictive diagnostics', desc: 'Identifying deviations from expected system behaviour to support maintenance decisions.' },
          ],
        },
      ]}
      lifecycle={['Requirements', 'System Architecture', 'Simulation', 'Prototype', 'Bench Testing', 'Marine Integration', 'Validation']}
    />
  )
}
