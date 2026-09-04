import {
  Phone, ArrowRight, HeartHandshake, ShieldCheck, ClipboardList, CalendarClock,
} from 'lucide-react'
import { WordReveal } from '../lib/motion.js'
import { useLayerDrift, useMagnetic } from '../lib/motion-extra.js'
import PhotoDiagnosis from './PhotoDiagnosis.jsx'
import { BIZ, HERO } from '../lib/site.js'
import './hero.css'

const BADGE_ICONS = { HeartHandshake, ShieldCheck, ClipboardList, CalendarClock }

const BADGES = [
  { label: 'Satisfaction Guarantee', icon: 'HeartHandshake' },
  { label: 'Licensed & Insured', icon: 'ShieldCheck' },
  { label: 'Free Estimates', icon: 'ClipboardList' },
  { label: 'Flexible Scheduling', icon: 'CalendarClock' },
]

export default function Hero() {
  /* Layered Parallax Drift — three depths, all behind the glass */
  const bedRef = useLayerDrift({ depth: 0.22, pointer: 16, scroll: 46 })
  const midRef = useLayerDrift({ depth: 0.55, pointer: 20, scroll: 30 })
  const traceRef = useLayerDrift({ depth: 0.95, pointer: 24, scroll: 18 })
  const callRef = useMagnetic(3)

  return (
    <section className="hero" aria-labelledby="hero-h1">
      <div className="hero-bed" ref={bedRef} aria-hidden="true">
        <img
          src="/images/street-dusk.webp"
          alt=""
          width="2000"
          height="1125"
          fetchpriority="high"
          decoding="async"
        />
      </div>
      <span className="hero-scrim" aria-hidden="true" />

      <div className="hero-mid" ref={midRef} aria-hidden="true">
        <span className="hero-glow hero-glow--a" />
        <span className="hero-glow hero-glow--b" />
        <span className="gridwash hero-grid" />
      </div>

      <svg
        className="hero-trace"
        ref={traceRef}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M-40 872 H236 A26 26 0 0 0 262 846 V742 A26 26 0 0 1 288 716 H612 A26 26 0 0 0 638 690 V612"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M1480 96 H1250 A26 26 0 0 0 1224 122 V214 A26 26 0 0 1 1198 240 H1010"
          stroke="currentColor"
          strokeWidth="1.4"
          opacity="0.55"
        />
        <circle
          className="lre-current"
          r="3.4"
          fill="currentColor"
          style={{
            offsetPath:
              'path("M-40 872 H236 A26 26 0 0 0 262 846 V742 A26 26 0 0 1 288 716 H612 A26 26 0 0 0 638 690 V612")',
            '--current-dur': '11s',
          }}
        />
      </svg>

      <div className="shell shell--wide hero-inner">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--on-dark hero-eyebrow" data-load style={{ '--reveal-delay': '0ms' }}>
            {HERO.eyebrow}
          </p>

          <h1 className="hero-h1" id="hero-h1">
            <WordReveal text={HERO.h1} step={58} start={100} />
          </h1>

          <p className="hero-sub" data-load style={{ '--reveal-delay': '480ms' }}>
            {HERO.sub}
          </p>

          <ul className="hero-badges list-reset" aria-label="What you get either way">
            {BADGES.map((b, i) => {
              const Icon = BADGE_ICONS[b.icon]
              return (
                <li
                  className="hero-badge"
                  key={b.label}
                  data-load
                  style={{ '--reveal-delay': `${600 + i * 70}ms` }}
                >
                  <span className="hero-badge-icon" aria-hidden="true"><Icon className="lucide" /></span>
                  <span className="hero-badge-label">{b.label}</span>
                </li>
              )
            })}
          </ul>

          <div className="hero-actions" data-load style={{ '--reveal-delay': '880ms' }}>
            <a className="btn btn--primary hero-call" href={BIZ.phoneHref} ref={callRef}>
              <Phone className="lucide" aria-hidden="true" />
              Call {BIZ.phoneDisplay}
            </a>
            <a className="btn btn--ghost-dark" href="#services">
              See Our Services
              <ArrowRight className="lucide" aria-hidden="true" />
            </a>
          </div>

          <p className="hero-note" data-load style={{ '--reveal-delay': '960ms' }}>
            Straight pricing, explained before anything gets touched.
          </p>
        </div>

        <div className="hero-widget" data-load style={{ '--reveal-delay': '200ms' }}>
          <PhotoDiagnosis />
        </div>
      </div>
    </section>
  )
}
