import type { Metadata } from 'next'
import CapabilityDetailClient from '@/components/pages/CapabilityDetailClient'

export const metadata: Metadata = {
  title: 'Marine Propulsion',
  description: 'Indigenous marine propulsion engineering — engine architecture, propulsion matching, controls, and vessel integration.',
}

export default function Page() {
  return (
    <CapabilityDetailClient
      eyebrow="Capability — 01"
      title="Marine"
      titleAccent="Propulsion"
      lead="Development and integration of compact, efficient and reliable propulsion systems for specialised marine platforms."
      stage="Under Development"
      overview={[
        'Sealink is developing indigenous propulsion technologies for compact marine platforms, with emphasis on efficiency, reliability, maintainability, controllability and integration with modern vessel systems.',
      ]}
      architecture={['Engine', 'ECU', 'Propeller', 'Propulsion Control', 'Vessel', 'Intelligence']}
      domainGroups={[
        {
          title: 'Engine',
          items: [
            { title: 'Thermodynamic modelling', desc: 'Combustion cycle and thermal load modelling for compact marine engines.' },
            { title: 'Performance prediction', desc: 'Predicting power, efficiency, and fuel behaviour across the operating envelope.' },
            { title: 'Engine health', desc: 'Monitoring deviations from expected engine behaviour over time.' },
          ],
        },
        {
          title: 'Propulsion',
          items: [
            { title: 'Propulsion matching', desc: 'Matching engine output to propeller and hull characteristics.' },
            { title: 'Propeller performance', desc: 'Thrust, torque, and efficiency across the operating profile.' },
            { title: 'Efficiency', desc: 'Optimising propulsion-train efficiency across speed and load conditions.' },
          ],
        },
        {
          title: 'Controls',
          items: [
            { title: 'Engine control', desc: 'Electronic control of fuel, timing, and load parameters.' },
            { title: 'Propulsion control', desc: 'Coordinated control of engine and propulsion elements.' },
            { title: 'Sensor feedback', desc: 'Closed-loop control informed by live sensor data.' },
            { title: 'Supervisory control', desc: 'Higher-level logic governing propulsion system state.' },
          ],
        },
        {
          title: 'Integration',
          items: [
            { title: 'Vessel systems', desc: 'Integration with vessel power, control, and monitoring systems.' },
            { title: 'Telemetry', desc: 'Data acquisition from propulsion and engine subsystems.' },
            { title: 'Monitoring & optimisation', desc: 'Continuous monitoring feeding performance optimisation.' },
          ],
        },
      ]}
      lifecycle={['Requirements', 'System Architecture', 'Simulation', 'Prototype', 'Bench Testing', 'Marine Integration', 'Validation']}
    />
  )
}
