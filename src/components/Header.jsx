import { useEffect, useId, useRef, useState } from 'react'
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react'
import { useScrollY, useMediaQuery } from '../lib/motion.js'
import { useMagnetic } from '../lib/motion-extra.js'
import { BIZ, NAV } from '../lib/site.js'
import './header.css'

function Wordmark() {
  return (
    <a className="hdr-mark" href="#top" aria-label={`${BIZ.name} — back to top`}>
      <span className="hdr-mark-glyph" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none" focusable="false">
          <path
            d="M3 22h6.5l4-12 4.6 18 4.2-14H29"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="29" cy="14" r="2.4" fill="currentColor" />
        </svg>
      </span>
      <span className="hdr-mark-text">
        <span className="hdr-mark-a">Long Range</span>
        <span className="hdr-mark-b">Electrical</span>
      </span>
    </a>
  )
}

function NavItem({ item }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const panelId = useId()
  const hasMenu = Array.isArray(item.items)

  useEffect(() => {
    if (!open) return
    const onDocDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('pointerdown', onDocDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDocDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (!hasMenu) {
    return (
      <li className="hdr-nav-item">
        <a className="hdr-nav-link sweep" href={item.href}>{item.label}</a>
      </li>
    )
  }

  return (
    <li
      className="hdr-nav-item hdr-nav-item--menu"
      ref={wrapRef}
      onPointerEnter={() => setOpen(true)}
      onPointerLeave={() => setOpen(false)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false) }}
    >
      <button
        type="button"
        className="hdr-nav-link hdr-nav-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sweep">{item.label}</span>
        <ChevronDown className="lucide hdr-chev" aria-hidden="true" />
      </button>
      <div
        id={panelId}
        className="hdr-menu"
        data-open={open ? 'true' : 'false'}
        role="group"
        aria-label={item.label}
      >
        <div className="hdr-menu-inner">
          <p className="hdr-menu-label">{item.label}</p>
          <ul className="hdr-menu-list list-reset">
            {item.items.map((sub, i) => (
              <li key={sub} style={{ '--i': i }}>
                <a href={item.href} className="hdr-menu-link">
                  <span>{sub}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default function Header() {
  const y = useScrollY()
  const compact = y > 24
  const isMobile = useMediaQuery('(max-width: 900px)')
  const magRef = useMagnetic(3)

  return (
    <header className="hdr" data-compact={compact ? 'true' : 'false'} id="top">
      <div className="hdr-contact" aria-label="Contact details">
        <div className="shell shell--wide hdr-contact-row">
          <a className="hdr-contact-item sweep" href={BIZ.phoneHref}>
            <Phone className="lucide" aria-hidden="true" />
            <span>{BIZ.phoneDisplay}</span>
          </a>
          <span className="hdr-contact-sep" aria-hidden="true" />
          <a className="hdr-contact-item sweep" href={BIZ.emailHref}>
            <Mail className="lucide" aria-hidden="true" />
            <span>{BIZ.email}</span>
          </a>
          <span className="hdr-contact-sep" aria-hidden="true" />
          <span className="hdr-contact-item hdr-contact-item--static">
            <MapPin className="lucide" aria-hidden="true" />
            <span>{BIZ.region}</span>
          </span>
        </div>
      </div>

      <div className="hdr-bar">
        <div className="shell shell--wide hdr-bar-row">
          <Wordmark />

          <nav className="hdr-nav" aria-label="Primary">
            <ul className="hdr-nav-list list-reset">
              {NAV.map((item) => <NavItem key={item.label} item={item} />)}
            </ul>
          </nav>

          <a
            className="btn btn--primary btn--sm hdr-call"
            href={BIZ.phoneHref}
            ref={magRef}
          >
            <Phone className="lucide" aria-hidden="true" />
            <span className="hdr-call-label">
              {isMobile && !compact ? 'Call' : BIZ.phoneDisplay}
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
