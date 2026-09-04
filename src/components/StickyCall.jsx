import { Phone } from 'lucide-react'
import { useScrollY } from '../lib/motion.js'
import { BIZ } from '../lib/site.js'
import './sticky.css'

/* Mobile sticky call-only bar — Sticky Bar Slide-In on Scroll Threshold.
   The whole bar is one unit; it never staggers internally. */
export default function StickyCall() {
  const y = useScrollY()
  const show = y > 340

  return (
    <div className="sbar" data-show={show ? 'true' : 'false'} aria-hidden={show ? undefined : 'true'}>
      <a className="sbar-link" href={BIZ.phoneHref} tabIndex={show ? 0 : -1}>
        <span className="sbar-icon" aria-hidden="true"><Phone className="lucide" /></span>
        <span className="sbar-text">
          <span className="sbar-label">Call Long Range Electrical</span>
          <span className="sbar-num">{BIZ.phoneDisplay}</span>
        </span>
      </a>
    </div>
  )
}
