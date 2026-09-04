import { Home, Store, HardHat, Ruler, Tractor, Building, Phone, Info, MapPin } from 'lucide-react'
import { Reveal } from '../lib/motion.js'
import { useLayerDrift } from '../lib/motion-extra.js'
import { BIZ, COVERAGE } from '../lib/site.js'
import './coverage.css'

const ICONS = { Home, Store, HardHat, Ruler, Tractor, Building }

export default function Coverage() {
  const bedRef = useLayerDrift({ depth: 0.3, pointer: 10, scroll: 52 })

  return (
    <section className="section cov band-dark" id="coverage" aria-labelledby="cov-h2">
      <div className="cov-bed" ref={bedRef} aria-hidden="true">
        <img
          src="/images/panorama-hills-hero.webp"
          alt=""
          width="2000"
          height="1125"
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="cov-scrim" aria-hidden="true" />
      <span className="gridwash cov-grid" aria-hidden="true" />

      <svg className="cov-trace" viewBox="0 0 1200 600" fill="none" aria-hidden="true" focusable="false">
        <path d="M-20 470 H320 A24 24 0 0 0 344 446 V214 A24 24 0 0 1 368 190 H1220" stroke="currentColor" strokeWidth="1.2" />
        <path d="M-20 300 H140 A24 24 0 0 1 164 324 V560" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <circle
          className="lre-current"
          r="3"
          fill="currentColor"
          style={{
            offsetPath: 'path("M-20 470 H320 A24 24 0 0 0 344 446 V214 A24 24 0 0 1 368 190 H1220")',
            '--current-dur': '9s',
            '--current-delay': '0.6s',
          }}
        />
      </svg>

      <div className="shell cov-inner">
        <Reveal className="cov-card glass glass--dark" technique="rise">
          <p className="eyebrow eyebrow--on-dark">Coverage</p>
          <h2 className="cov-h2" id="cov-h2">Where We Work</h2>
          <p className="cov-copy">{COVERAGE.framing}</p>
          <div className="cov-actions">
            <a className="btn btn--primary btn--sm" href={BIZ.phoneHref}>
              <Phone className="lucide" aria-hidden="true" />
              Call {BIZ.phoneDisplay}
            </a>
            <span className="cov-region">
              <MapPin className="lucide" aria-hidden="true" />
              {BIZ.region}
            </span>
          </div>
          <p className="placeholder-note placeholder-note--on-dark cov-note">
            <Info className="lucide" aria-hidden="true" />
            Placeholder coverage — a confirmed city and neighbourhood list replaces this before launch
          </p>
        </Reveal>

        <ul className="cov-zones list-reset" aria-label="Types of property we work on">
          {COVERAGE.zones.map((z, i) => {
            const Icon = ICONS[z.icon]
            return (
              <Reveal as="li" className="cov-zone" technique="rise" delay={120 + i * 80} key={z.label}>
                <span className="cov-zone-icon" aria-hidden="true"><Icon className="lucide" /></span>
                <h3 className="cov-zone-label">{z.label}</h3>
                <span className="cov-zone-glow" aria-hidden="true" />
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
