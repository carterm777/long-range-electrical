import { Quote, Phone } from 'lucide-react'
import { Reveal, useScrub } from '../lib/motion.js'
import { BIZ, STORY } from '../lib/site.js'
import './story.css'

export default function Story() {
  const railRef = useScrub()

  return (
    <section className="section st band-light" id="story" aria-labelledby="st-h2">
      <span className="st-orb" aria-hidden="true" />

      <div className="shell st-inner">
        {/* Sticky side — Layered Photo Stack */}
        <div className="st-aside">
          <Reveal className="st-stack" technique="settle">
            <figure className="st-photo st-photo--back">
              <img
                src="/images/about-crew.webp"
                alt="Five electricians in navy workwear lined up in front of two service vans inside their shop"
                width="2000"
                height="1125"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="st-photo st-photo--front">
              <img
                src="/images/kitchen-table-quote.webp"
                alt="An electrician handing a printed quote across a kitchen table to a homeowner, coffee cups beside them"
                width="2000"
                height="1125"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <blockquote className="st-pull">
              <Quote className="lucide" aria-hidden="true" />
              <p>Treat every customer’s home the way you’d treat your own.</p>
            </blockquote>
          </Reveal>

          <Reveal className="st-aside-cta" technique="fade" delay={200}>
            <p>Same crew, same standard</p>
            <a className="btn btn--ghost btn--sm" href={BIZ.phoneHref}>
              <Phone className="lucide" aria-hidden="true" />
              Call {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>

        {/* Story column — Glass Timeline Markers */}
        <div className="st-col">
          <Reveal className="sec-head st-head" technique="rise">
            <p className="eyebrow">Our Story</p>
            <h2 id="st-h2">The Standard We Started With</h2>
          </Reveal>

          <div className="st-track" ref={railRef}>
            <span className="st-rail" aria-hidden="true" />
            <ol className="st-steps list-reset">
              {STORY.map((s, i) => (
                <Reveal as="li" className="st-step" technique="rise" delay={i * 120} key={s.marker}>
                  <span className="st-dot" aria-hidden="true" />
                  <h3 className="st-marker">{s.marker}</h3>
                  <p className="st-body">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
