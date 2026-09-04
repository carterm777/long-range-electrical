import { Star, Info } from 'lucide-react'
import { Reveal, useCountUp } from '../lib/motion.js'
import { REVIEWS } from '../lib/site.js'
import './reviews.css'

function GoogleG({ className = '' }) {
  return (
    <svg className={`gmark ${className}`} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path className="gmark-blue" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.8-2 5.1-4.4 6.7v5.6h7.1c4.2-3.8 6.6-9.5 6.6-16.3z" />
      <path className="gmark-green" d="M24 46c6 0 11-2 14.5-5.2l-7.1-5.6c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.6-3.9-12.3-9.1H4.4v5.7C7.9 41 15.4 46 24 46z" />
      <path className="gmark-yellow" d="M11.7 28.2c-.4-1.3-.7-2.7-.7-4.2s.2-2.9.7-4.2v-5.7H4.4A22 22 0 0 0 2 24c0 3.6.9 6.9 2.4 9.9l7.3-5.7z" />
      <path className="gmark-red" d="M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.1 30 2 24 2 15.4 2 7.9 7 4.4 14.1l7.3 5.7c1.7-5.2 6.6-9.1 12.3-9.1z" />
    </svg>
  )
}

function Stars({ start = 0, step = 70, size = 'sm' }) {
  return (
    <span className={`rv-stars rv-stars--${size}`} role="img" aria-label="Rated 5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          className="rv-star"
          key={i}
          data-reveal="wipe"
          style={{ '--reveal-delay': `${start + i * step}ms` }}
        >
          <Star className="lucide" aria-hidden="true" />
        </span>
      ))}
    </span>
  )
}

export default function Reviews() {
  const [numRef, score] = useCountUp(REVIEWS.score, { duration: 1500, decimals: 1 })
  const [featured, ...rest] = REVIEWS.items

  return (
    <section className="section rv band-tint" id="reviews" aria-labelledby="rv-h2">
      <span className="gridwash rv-grid" aria-hidden="true" />
      <span className="rv-wash" aria-hidden="true" />

      <div className="shell rv-inner">
        <Reveal className="sec-head sec-head--center rv-head" technique="rise">
          <p className="eyebrow">Google Reviews</p>
          <h2 id="rv-h2">Rated Five Stars By The People We Work For</h2>
        </Reveal>

        <div className="rv-grid-cards">
          <Reveal className="rv-agg glass" technique="settle" delay={60}>
            <div className="rv-agg-top">
              <GoogleG />
              <p className="rv-agg-source">Google<br /><span>Business Profile</span></p>
            </div>
            <p className="rv-agg-figure" ref={numRef}>
              {score.toFixed(1)}
              <span className="rv-agg-of">/ 5</span>
            </p>
            <Stars start={260} step={80} size="lg" />
            <p className="rv-agg-line">4.9 out of 5 stars, based on real Google reviews</p>
            <p className="rv-agg-count">
              <span className="rv-agg-dot" aria-hidden="true" />
              5 recent reviews shown
            </p>
          </Reveal>

          <Reveal as="figure" className="rv-card rv-card--featured glass" technique="rise" delay={140}>
            <Stars start={420} />
            <p className="rv-focus">{featured.focus}</p>
            <blockquote className="rv-quote rv-quote--lg">
              <p>{featured.quote}</p>
            </blockquote>
            <figcaption className="rv-by">
              <span className="rv-avatar" aria-hidden="true">{featured.name.charAt(0)}</span>
              <span className="rv-by-text">
                <span className="rv-name">{featured.name}</span>
                <span className="rv-meta">Google review</span>
              </span>
            </figcaption>
          </Reveal>

          {rest.map((r, i) => (
            <Reveal as="figure" className="rv-card glass" technique="rise" delay={220 + i * 110} key={r.name}>
              <Stars start={480 + i * 110} />
              <p className="rv-focus">{r.focus}</p>
              <blockquote className="rv-quote">
                <p>{r.quote}</p>
              </blockquote>
              <figcaption className="rv-by">
                <span className="rv-avatar" aria-hidden="true">{r.name.charAt(0)}</span>
                <span className="rv-by-text">
                  <span className="rv-name">{r.name}</span>
                  <span className="rv-meta">Google review</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal className="rv-note-wrap" technique="fade" delay={120}>
          <p className="placeholder-note">
            <Info className="lucide" aria-hidden="true" />
            Placeholder reviews — swap in real Google Business Profile reviews before launch
          </p>
        </Reveal>
      </div>
    </section>
  )
}
