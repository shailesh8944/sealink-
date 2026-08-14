import type { Metadata } from 'next'
import TechnologyDetailClient from '@/components/pages/TechnologyDetailClient'

export const metadata: Metadata = {
  title: 'Engine Modelling',
  description: 'Thermodynamic and performance modelling of marine engines, including load, exhaust, and propeller characteristics.',
}

export default function Page() {
  return (
    <TechnologyDetailClient
      eyebrow="Technology — 04"
      title="Engine"
      titleAccent="Modelling"
      lead="Thermodynamics, load, exhaust parameters, propeller characteristics, and engine performance modelling."
      overview={[
        'We model the complete thermodynamic cycle of marine engines, drawing on MAN B&W engine physics to capture mean effective pressure, turbocharger matching, and specific fuel oil consumption (SFOC) under real-time thermal loads — paired with propeller thrust/torque (KT, KQ) modelling.',
      ]}
      architecture={['Combustion Cycle', 'Thermodynamic Model', 'Turbocharger Matching', 'Propeller Thrust / Torque', 'Performance Prediction']}
      concepts={[
        { title: 'Thermodynamic cycle modelling', desc: 'Mean effective pressure, thermal loads, and combustion behaviour.' },
        { title: 'SFOC modelling', desc: 'Specific fuel oil consumption loops under varying load and thermal conditions.' },
        { title: 'Propeller characteristics', desc: 'Thrust and torque coefficients (KT, KQ) across the operating profile.' },
        { title: 'Component wear tracking', desc: 'Predicting thermal efficiency drops and injection/liner wear ahead of alarms.' },
      ]}
      tags={['MAN B&W engine physics', 'MVEM engine core', 'Two-stroke ME modelling', 'Turbocharger matching', 'SFOC modelling']}
    />
  )
}
