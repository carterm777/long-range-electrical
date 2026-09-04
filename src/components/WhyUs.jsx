import { MessageSquare, Zap, Sparkles, ShieldCheck } from 'lucide-react'
import { Reveal } from '../lib/motion.js'
import { WHY_US } from '../lib/site.js'
import './why.css'

const ICONS = { MessageSquare, Zap, Sparkles, ShieldCheck }

export default function WhyUs() {
  return (
    <section className="section why band-light" id="why" aria-labelledby="why-h2">
      <span className="why-orb" aria-hidden="true" />
      <span className="gridwash why-grid" aria-hidden="true" />

      <div className="shell why-inner">
        <Reveal className="sec-head why-head" technique="rise">
          <p className="eyebrow">Why Us</p>
          <h2 id="why-h2">Why People Call Us Back</h2>
          <p>The same four things on every job, whether it takes five minutes or two days.</p>
        </Reveal>

        {WHY_US.map((item, i) => {
          const Icon = ICONS[item.icon]
          return (
            <Reveal
              className={`why-card why-card--${i + 1}`}
              technique="rise"
              delay={i * 110}
              key={item.title}
            >
              <span className="why-card-icon" aria-hidden="true"><Icon className="lucide" /></span>
              <h3 className="why-card-title">{item.title}</h3>
              <span
                className="why-rule"
                data-reveal="draw"
                style={{ '--reveal-delay': `${420 + i * 110}ms` }}
                aria-hidden="true"
              />
              <p className="why-card-body">{item.body}</p>
            </Reveal>
          )
        })}

        <Reveal className="why-photo" technique="settle" delay={220}>
          <img
            src="/images/explaining-panel.webp"
            alt="An electrician pointing at a row of breakers inside an open panel while explaining the problem"
            width="2000"
            height="1125"
            loading="lazy"
            decoding="async"
          />
          <span className="why-photo-veil" aria-hidden="true" />
          <p className="why-photo-caption">Every job starts with an explanation.</p>
        </Reveal>
      </div>
    </section>
  )
}
