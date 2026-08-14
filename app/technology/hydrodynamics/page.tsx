import type { Metadata } from 'next'
import TechnologyDetailClient from '@/components/pages/TechnologyDetailClient'

export const metadata: Metadata = {
  title: 'Hydrodynamics',
  description: 'Hull resistance, wave and added-resistance modelling using CFD and analytical marine hydrodynamics methods.',
}

export default function Page() {
  return (
    <TechnologyDetailClient
      eyebrow="Technology — 03"
      title="Hydrodynamics"
      lead="Hull resistance, waves, and added-resistance modelling — the physical foundation beneath every propulsion and voyage-optimisation prediction."
      overview={[
        'We build hull resistance models using both Computational Fluid Dynamics (CFD) and analytical methods such as Holtrop-Mennen resistance theory, mapping flow lines, wake fields, and wave-making resistance across draft and trim conditions.',
      ]}
      architecture={['Hull Geometry', 'CFD / Analytical Resistance Model', 'Wave & Added Resistance', 'Draft / Trim Conditions', 'Resistance Prediction']}
      concepts={[
        { title: 'CFD hull modelling', desc: 'Computational Fluid Dynamics modelling of wake fields and wave-making resistance.' },
        { title: 'Analytical resistance methods', desc: 'Holtrop-Mennen and related analytical resistance theory for real-time computation.' },
        { title: 'Added resistance in waves', desc: 'Modelling how sea state increases resistance beyond calm-water conditions.' },
        { title: 'Biofouling & roughness tracking', desc: 'Estimating added resistance from marine growth and hull roughness over time.' },
      ]}
      tags={['Holtrop-Mennen resistance theory', 'CFD', 'Wave & added resistance modelling', 'Hull roughness tracking']}
    />
  )
}
