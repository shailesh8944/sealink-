import type { Metadata } from 'next'
import TechnologyDetailClient from '@/components/pages/TechnologyDetailClient'

export const metadata: Metadata = {
  title: 'Physics-Informed AI',
  description: 'Hybrid physics-informed AI combining hull, propeller, and engine models with machine learning for marine fuel and voyage optimisation.',
}

export default function Page() {
  return (
    <TechnologyDetailClient
      eyebrow="Technology — 01"
      title="Physics-Informed"
      titleAccent="AI"
      lead="Hybrid models that embed hydrodynamic and thermodynamic physics into machine learning, so predictions stay bounded by real marine engineering laws."
      overview={[
        'Rather than relying purely on historical black-box patterns, our models are built on Holtrop-Mennen resistance theory and MAN B&W engine physics, combined with gradient-boosted learning models and live marine weather data. This grounding lets the system extrapolate safely to conditions it has not seen before, instead of guessing from past patterns alone.',
      ]}
      architecture={['Hull Resistance Model', 'Propeller Model', 'Engine Thermodynamics', 'Weather / Sea State', 'Physics-Informed AI', 'Fuel / Voyage / Engine Optimisation']}
      concepts={[
        { title: 'Physics-governed bounds', desc: 'Model predictions stay within limits dictated by hull, propeller, and engine physics — not just data patterns.' },
        { title: 'Sparse-data robustness', desc: 'Physics anchoring keeps predictions stable even where operational data is limited.' },
        { title: 'Root-cause diagnostics', desc: 'Deviation from physical baselines is used to isolate whether loss stems from hull, propeller, or engine deterioration.' },
      ]}
      metrics={[
        { value: '294+', label: 'training voyage rows — MT Magenta Ray' },
        { value: '107', label: 'operational features per data row' },
        { value: '100%', label: 'route position data coverage' },
        { value: '6-cyl', label: 'two-stroke ME engine model' },
      ]}
      tags={['Holtrop-Mennen resistance theory', 'MAN B&W engine physics', 'Python / ML', 'XGBoost', 'MVEM engine core', 'Open-Meteo / ERA5 weather data', 'Docker-ready deployment']}
    />
  )
}
