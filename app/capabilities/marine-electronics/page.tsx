import type { Metadata } from 'next'
import CapabilityDetailClient from '@/components/pages/CapabilityDetailClient'

export const metadata: Metadata = {
  title: 'Marine Electronics',
  description: 'Sensor integration, data acquisition, onboard monitoring, communication and intelligent instrumentation for marine platforms.',
}

export default function Page() {
  return (
    <CapabilityDetailClient
      eyebrow="Capability — 03"
      title="Marine"
      titleAccent="Electronics"
      lead="Sensor integration, data acquisition, onboard monitoring, communication and intelligent instrumentation."
      stage="Under Development"
      overview={[
        'Sealink builds the electronics layer that turns a vessel into a measurable, monitorable system — sensor integration, data acquisition hardware, onboard instrumentation, and communication between subsystems.',
      ]}
      architecture={['Sensors', 'Data Acquisition', 'Onboard Processing', 'Communication', 'Monitoring / Display']}
      domainGroups={[
        {
          title: 'Engineering domains',
          items: [
            { title: 'Sensor integration', desc: 'Interfacing engine, propulsion, and vessel sensors into a unified data layer.' },
            { title: 'Data acquisition', desc: 'Onboard hardware for capturing and logging operational data.' },
            { title: 'Onboard monitoring', desc: 'Instrumentation for real-time visibility into vessel and system state.' },
            { title: 'Communication', desc: 'Onboard and shore-side data communication pathways.' },
            { title: 'Intelligent instrumentation', desc: 'Instrumentation designed to feed downstream analysis and control systems.' },
          ],
        },
      ]}
      lifecycle={['Requirements', 'System Architecture', 'Simulation', 'Prototype', 'Bench Testing', 'Marine Integration', 'Validation']}
    />
  )
}
