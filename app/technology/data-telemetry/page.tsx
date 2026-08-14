import type { Metadata } from 'next'
import TechnologyDetailClient from '@/components/pages/TechnologyDetailClient'

export const metadata: Metadata = {
  title: 'Data & Telemetry',
  description: 'NMEA, engine telemetry, sensors, operational data, and monitoring for marine platforms.',
}

export default function Page() {
  return (
    <TechnologyDetailClient
      eyebrow="Technology — 06"
      title="Data &"
      titleAccent="Telemetry"
      lead="NMEA, engine telemetry, sensors, operational data, and monitoring — the data layer every model and control system depends on."
      overview={[
        'Every physics-informed model and control system depends on operational data — NMEA navigation feeds, engine telemetry, sensor streams, and weather data — captured, structured, and made available for modelling and monitoring.',
      ]}
      architecture={['Sensors / NMEA', 'Onboard Acquisition', 'Structured Operational Data', 'Modelling & Monitoring']}
      concepts={[
        { title: 'NMEA integration', desc: 'Navigation and positioning data feeds from standard marine protocols.' },
        { title: 'Engine telemetry', desc: 'Load, temperature, pressure, and fuel data from engine systems.' },
        { title: 'Weather data', desc: 'Open marine weather sources feeding voyage and resistance models.' },
        { title: 'Monitoring', desc: 'Structured operational data made available for live monitoring and diagnostics.' },
      ]}
      tags={['NMEA', 'Open-Meteo / ERA5 weather data', 'Engine telemetry', 'Voyage monitor UI']}
    />
  )
}
