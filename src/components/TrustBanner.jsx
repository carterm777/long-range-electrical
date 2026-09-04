import { BadgeCheck, MapPin, Award, ThumbsUp } from 'lucide-react'
import { Reveal } from '../lib/motion.js'
import './trust.css'

/* Four badges, four different meaning-matched Lucide icons, one size box, one
   stroke weight, one optical baseline — so the row reads as one system. */
const BADGES = [
  { label: 'Licensed & Insured', icon: BadgeCheck, note: 'Covered start to finish' },
  { label: 'Locally Owned & Operated', icon: MapPin, note: 'Alberta crew, Alberta jobs' },
  { label: 'Years Of Experience', icon: Award, note: 'Trade-tested hands' },
  { label: 'Satisfaction Guaranteed', icon: ThumbsUp, note: 'We stand behind the work' },
]

export default function TrustBanner() {
  return (
    <section className="section section--tight tb band-dark" aria-labelledby="tb-h2">
      <div className="tb-bed" aria-hidden="true">
        <img src="/images/tex-steel.webp" alt="" width="1400" height="788" loading="lazy" decoding="async" />
      </div>
      <span className="tb-wash" aria-hidden="true" />

      <div className="shell tb-inner">
        <Reveal className="tb-head" technique="rise">
          <h2 className="tb-h2" id="tb-h2">Licensed, Local, And Accountable</h2>
        </Reveal>

        <ul className="tb-list list-reset">
          {BADGES.map((b, i) => {
            const Icon = b.icon
            return (
              <Reveal
                as="li"
                className="tb-badge"
                technique="settle"
                delay={i * 110}
                key={b.label}
              >
                <span className="tb-badge-icon" aria-hidden="true"><Icon className="lucide" /></span>
                <span className="tb-badge-text">
                  <span className="tb-badge-label">{b.label}</span>
                  <span className="tb-badge-note">{b.note}</span>
                </span>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
