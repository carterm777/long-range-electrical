import { useId } from 'react'
import { Phone, MessageSquareText } from 'lucide-react'
import { Reveal, useAccordion } from '../lib/motion.js'
import { BIZ, FAQS } from '../lib/site.js'
import './faq.css'

export default function Faq() {
  const { toggle, isOpen } = useAccordion(0)
  const base = useId().replace(/:/g, '')

  return (
    <section className="section faq band-tint-2" id="faq" aria-labelledby="faq-h2">
      <div className="faq-tex" aria-hidden="true">
        <img src="/images/tex-copper.webp" alt="" width="1400" height="788" loading="lazy" decoding="async" />
      </div>
      <span className="faq-wash" aria-hidden="true" />

      <div className="shell faq-inner">
        <div className="faq-side">
          <Reveal className="sec-head faq-head" technique="rise">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-h2">Questions We Get Asked</h2>
            <p>Short answers to the things people ask before they book. Anything else, just call.</p>
          </Reveal>

          <Reveal className="faq-call glass" technique="rise" delay={140}>
            <p className="faq-call-label">Still Not Sure?</p>
            <p className="faq-call-copy">
              Describe the problem over the phone and we’ll tell you what it likely is before
              anyone gets in a truck.
            </p>
            <div className="faq-call-actions">
              <a className="btn btn--primary btn--sm" href={BIZ.phoneHref}>
                <Phone className="lucide" aria-hidden="true" />
                Call {BIZ.phoneDisplay}
              </a>
              <a className="linkline" href={BIZ.smsHref}>
                <MessageSquareText className="lucide" aria-hidden="true" />
                Text Us Instead
              </a>
            </div>
          </Reveal>
        </div>

        <ul className="faq-list list-reset">
          {FAQS.map((f, i) => {
            const open = isOpen(i)
            const btnId = `${base}-q${i}`
            const panelId = `${base}-a${i}`
            return (
              <Reveal
                as="li"
                className="faq-row glass"
                data-open={open ? 'true' : 'false'}
                technique="rise"
                delay={i * 90}
                key={f.q}
              >
                <h3 className="faq-q">
                  <button
                    type="button"
                    id={btnId}
                    className="faq-trigger"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                  >
                    <span className="faq-q-text">{f.q}</span>
                    <span className="faq-sign" aria-hidden="true">
                      <span className="faq-sign-bar" />
                      <span className="faq-sign-bar faq-sign-bar--v" />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq-panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  data-open={open ? 'true' : 'false'}
                >
                  <div className="faq-panel-inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
