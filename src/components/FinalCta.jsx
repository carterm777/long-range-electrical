import { Phone, MessageSquareText, Lock } from 'lucide-react'
import { Reveal } from '../lib/motion.js'
import { useMagnetic } from '../lib/motion-extra.js'
import { BIZ, FINAL_CTA } from '../lib/site.js'
import './cta.css'

export default function FinalCta() {
  const magRef = useMagnetic(3)

  return (
    <section className="section section--loose cta band-dark" id="contact" aria-labelledby="cta-h2">
      <div className="cta-bed" aria-hidden="true">
        <img
          src="/images/vans-morning.webp"
          alt=""
          width="2000"
          height="1125"
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="cta-scrim" aria-hidden="true" />
      <span className="cta-shape" aria-hidden="true" />

      <div className="shell shell--narrow cta-inner">
        <Reveal className="cta-panel" technique="rise">
          <p className="eyebrow eyebrow--on-dark cta-eyebrow">Free Estimates</p>
          <h2 className="cta-h2" id="cta-h2" data-reveal="clip" style={{ '--reveal-delay': '120ms' }}>
            {FINAL_CTA.h2}
          </h2>
          <p className="cta-sub" data-reveal="rise" style={{ '--reveal-delay': '320ms' }}>
            {FINAL_CTA.sub}
          </p>
          <div className="cta-actions" data-reveal="rise" style={{ '--reveal-delay': '440ms' }}>
            <a className="btn btn--primary cta-call" href={BIZ.phoneHref} ref={magRef}>
              <Phone className="lucide" aria-hidden="true" />
              Call {BIZ.phoneDisplay}
            </a>
            <a className="btn btn--ghost-dark" href={BIZ.smsHref}>
              <MessageSquareText className="lucide" aria-hidden="true" />
              Text Us Instead
            </a>
          </div>
          <p className="reassure reassure--on-dark cta-reassure" data-reveal="fade" style={{ '--reveal-delay': '560ms' }}>
            <Lock className="lucide" aria-hidden="true" />
            No cost, no obligation, and we never share your information.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
