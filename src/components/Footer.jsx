import { Phone, Mail, MapPin, MessageSquareText, Facebook, Instagram, Linkedin, Star, ArrowUp } from 'lucide-react'
import { Reveal, useScrollY } from '../lib/motion.js'
import { BIZ, FOOTER } from '../lib/site.js'
import './footer.css'

const SOCIAL = [
  { label: 'Facebook', Icon: Facebook },
  { label: 'Instagram', Icon: Instagram },
  { label: 'LinkedIn', Icon: Linkedin },
]

export default function Footer() {
  const y = useScrollY()
  const showTop = y > 1400

  return (
    <footer className="ft" id="footer">
      <span className="ft-divider" aria-hidden="true" />

      {/* Trust strip — one quiet reassurance before the utilitarian columns */}
      <div className="ft-strip">
        <div className="shell ft-strip-row">
          <p className="ft-strip-rating">
            <span className="ft-strip-stars" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => <Star className="lucide" key={i} />)}
            </span>
            <span className="ft-strip-score">4.9 out of 5</span>
            <span className="ft-strip-sep" aria-hidden="true" />
            <span className="ft-strip-label">Placeholder Google rating</span>
          </p>
          <p className="ft-strip-claim">Licensed, insured, and straight with you from the first call.</p>
        </div>
      </div>

      <div className="shell ft-inner">
        <Reveal className="ft-col ft-col--brand" technique="rise">
          <a className="ft-mark" href="#top">
            <span className="ft-mark-glyph" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" focusable="false">
                <path d="M3 22h6.5l4-12 4.6 18 4.2-14H29" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="29" cy="14" r="2.4" fill="currentColor" />
              </svg>
            </span>
            <span className="ft-mark-text">
              <span className="ft-mark-a">Long Range</span>
              <span className="ft-mark-b">Electrical</span>
            </span>
          </a>
          <p className="ft-mission">{FOOTER.mission}</p>
          <ul className="ft-social list-reset" aria-label="Social links (placeholder)">
            {SOCIAL.map(({ label, Icon }) => (
              <li key={label}>
                <a href="#footer" className="ft-social-link" aria-label={`${label} — placeholder link`}>
                  <Icon className="lucide" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="ft-col" technique="rise" delay={90}>
          <h3 className="ft-h3">Our Services</h3>
          <ul className="ft-links list-reset">
            {FOOTER.services.map((s) => (
              <li key={s}><a className="sweep" href="#services">{s}</a></li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="ft-col" technique="rise" delay={180}>
          <h3 className="ft-h3">Quick Links</h3>
          <ul className="ft-links list-reset">
            {FOOTER.quickLinks.map((l) => (
              <li key={l.label}><a className="sweep" href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="ft-col" technique="rise" delay={270}>
          <h3 className="ft-h3">Get In Touch</h3>
          <ul className="ft-contact list-reset">
            <li>
              <span className="ft-contact-name">Long Range Electrical</span>
            </li>
            <li>
              <MapPin className="lucide" aria-hidden="true" />
              <span>{BIZ.region}</span>
            </li>
            <li>
              <Phone className="lucide" aria-hidden="true" />
              <a className="sweep" href={BIZ.phoneHref}>{BIZ.phoneDisplay}</a>
            </li>
            <li>
              <MessageSquareText className="lucide" aria-hidden="true" />
              <a className="sweep" href={BIZ.smsHref}>Text {BIZ.phoneDisplay}</a>
            </li>
            <li>
              <Mail className="lucide" aria-hidden="true" />
              <a className="sweep" href={BIZ.emailHref}>{BIZ.email}</a>
            </li>
          </ul>
        </Reveal>
      </div>

      <div className="shell ft-legal">
        <p>© {BIZ.year} Long Range Electrical. All rights reserved.</p>
        <p className="ft-legal-note">
          Demo concept site — contact details, reviews and service area are placeholders pending confirmation.
        </p>
      </div>

      <a className="ft-top" href="#top" data-show={showTop ? 'true' : 'false'} aria-label="Back to top">
        <ArrowUp className="lucide" aria-hidden="true" />
      </a>
    </footer>
  )
}
