import {
  PlugZap, Search, LayoutPanelLeft, Lightbulb, Building2, Hammer, Phone, ArrowRight,
} from 'lucide-react'
import { Reveal } from '../lib/motion.js'
import { BIZ, SERVICES } from '../lib/site.js'
import './services.css'

const ICONS = { PlugZap, Search, LayoutPanelLeft, Lightbulb, Building2, Hammer }

export default function Services() {
  const [flagship, ...rest] = SERVICES
  const FlagIcon = ICONS[flagship.icon]

  return (
    <section className="section svc band-tint" id="services" aria-labelledby="svc-h2">
      <div className="shell svc-inner">
        <Reveal className="sec-head svc-head" technique="rise">
          <p className="eyebrow">Services</p>
          <h2 id="svc-h2">The Work We Take On</h2>
          <p>From one dead outlet to a full commercial fit-out, quoted straight before anything starts.</p>
        </Reveal>

        {/* Spotlight — Grid-Breaking Oversized Image + Overlapping Bleed */}
        <div className="svc-spot">
          <Reveal className="svc-spot-media" technique="settle">
            <img
              src={flagship.img}
              alt={flagship.alt}
              width="2000"
              height="1125"
              loading="lazy"
              decoding="async"
            />
            <span className="svc-spot-tint" aria-hidden="true" />
          </Reveal>

          <Reveal className="svc-spot-card glass" technique="rise" delay={160}>
            <p className="svc-flag">Most Requested</p>
            <span className="svc-spot-icon" aria-hidden="true"><FlagIcon className="lucide" /></span>
            <h3 className="svc-spot-title">{flagship.title}</h3>
            <p className="svc-spot-body">{flagship.body}</p>
            <a className="btn btn--primary btn--sm svc-spot-cta" href={BIZ.phoneHref}>
              <Phone className="lucide" aria-hidden="true" />
              Call {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>

        <ul className="svc-list list-reset">
          {rest.map((s, i) => {
            const Icon = ICONS[s.icon]
            return (
              <Reveal as="li" className="svc-card" technique="rise" delay={i * 100} key={s.title}>
                <div className="svc-card-media">
                  <img
                    src={s.img}
                    alt={s.alt}
                    width="2000"
                    height="1125"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="svc-card-veil" aria-hidden="true" />
                  <span className="svc-card-icon" aria-hidden="true"><Icon className="lucide" /></span>
                </div>
                <div className="svc-card-body">
                  <h3 className="svc-card-title">{s.title}</h3>
                  <p>{s.body}</p>
                  <span className="linkline svc-card-link">
                    Ask About This
                    <ArrowRight className="lucide" aria-hidden="true" />
                  </span>
                </div>
                <a className="svc-card-hit" href={BIZ.phoneHref}>
                  <span className="sr-only">Call {BIZ.phoneDisplay} about {s.title}</span>
                </a>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
