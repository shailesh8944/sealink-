import type { Metadata } from 'next'
import CapabilityDetailClient from '@/components/pages/CapabilityDetailClient'

export const metadata: Metadata = {
  title: 'Engine & Propulsion Controls',
  description: 'Marine engine control, propulsion control, sensors, telemetry and monitoring engineering.',
}

export default function Page() {
  return (
    <CapabilityDetailClient
      eyebrow="Capability — 02"
      title="Engine &"
      titleAccent="Propulsion Controls"
      lead="Engine control, electronic control systems, propulsion control, sensors, telemetry and monitoring."
      stage="Under Development"
      overview={[
        'Sealink engineers control systems that govern how marine engines and propulsion trains behave — from low-level electronic control to supervisory logic that keeps propulsion within a safe, efficient operating envelope.',
      ]}
      architecture={['Sensors', 'Control Logic', 'Actuation', 'Engine / Propulsion', 'Feedback', 'Monitoring']}
      domainGroups={[
        {
          title: 'Engineering domains',
          items: [
            { title: 'Electronic engine control', desc: 'Fuel, timing, and load management via electronic control units.' },
            { title: 'Propulsion control', desc: 'Coordinated control across engine, clutch, and propeller systems.' },
            { title: 'Sensor integration', desc: 'Pressure, temperature, speed, and load sensing across the propulsion train.' },
            { title: 'Telemetry', desc: 'Real-time data capture from control and monitoring subsystems.' },
            { title: 'Supervisory logic', desc: 'Higher-level control governing operating modes and safety envelopes.' },
            { title: 'Monitoring & alarms', desc: 'Condition monitoring and deviation alerting.' },
          ],
        },
      ]}
      lifecycle={['Requirements', 'System Architecture', 'Simulation', 'Prototype', 'Bench Testing', 'Marine Integration', 'Validation']}
    />
  )
}
