import { useState } from 'react'
import {
  ImagePlus, X, Lock, ArrowRight, CheckCircle2, Phone, Loader2, AlertCircle, Camera,
} from 'lucide-react'
import { usePhotoDiagnosis } from '../lib/usePhotoDiagnosis.js'
import { useRefractionTilt, useMagnetic } from '../lib/motion-extra.js'
import { BIZ, REASSURANCE } from '../lib/site.js'
import './photo-diagnosis.css'

/* The signature element. Logic comes from the shared hook; every visual
   decision below — the three stacked glass plates, the sheen that moves
   against the tilt, the conduit trace with a live current node — is this
   site's own. */
export default function PhotoDiagnosis() {
  const pd = usePhotoDiagnosis()
  const [openedByUser, setOpenedByUser] = useState(false)
  const tiltRef = useRefractionTilt({ max: 4 })
  const magRef = useMagnetic(3)

  const expanded = Boolean(pd.file) || openedByUser
  const done = pd.status === 'done'

  return (
    <div className="pdx" data-state={done ? 'done' : 'form'}>
      {/* Layer 1 + 2 — the plates behind the glass, giving the panel thickness */}
      <span className="pdx-plate pdx-plate--far" aria-hidden="true" />
      <span className="pdx-plate pdx-plate--near" aria-hidden="true" />
      <span className="pdx-halo" aria-hidden="true" />

      {/* Layer 3 — the panel itself */}
      <div className="pdx-panel" ref={tiltRef}>
        <span className="pdx-sheen" aria-hidden="true" />

        <svg className="pdx-trace" viewBox="0 0 400 240" fill="none" aria-hidden="true" focusable="false">
          <path
            id="pdx-trace-path"
            d="M14 60 V26 A12 12 0 0 1 26 14 H150"
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <path d="M386 178 V214 A12 12 0 0 1 374 226 H286" stroke="currentColor" strokeWidth="1.25" />
          <circle
            className="lre-current"
            r="2.6"
            fill="currentColor"
            style={{ offsetPath: 'path("M14 60 V26 A12 12 0 0 1 26 14 H150")' }}
          />
        </svg>

        {!done && (
          <form className="pdx-form" onSubmit={pd.submit} noValidate>
            <div className="pdx-head">
              <p className="pdx-kicker">
                <span className="pdx-kicker-dot" aria-hidden="true" />
                Photo Diagnosis
              </p>
              <p className="pdx-free">Free</p>
            </div>

            <h2 className="pdx-title">Show Us The Problem</h2>
            <p className="pdx-lede">
              Snap the panel, the outlet, the flickering fixture — whatever isn’t working.
              We’ll look at it and call you back with a straight answer.
            </p>

            <ol className="pdx-steps list-reset" aria-label="How the photo diagnosis works">
              <li><span className="pdx-step-n" aria-hidden="true">1</span>Send A Photo</li>
              <li><span className="pdx-step-n" aria-hidden="true">2</span>Add The Details</li>
              <li><span className="pdx-step-n" aria-hidden="true">3</span>We Call Back</li>
            </ol>

            <div
              className="pdx-drop"
              data-dragging={pd.dragging ? 'true' : 'false'}
              data-has-file={pd.file ? 'true' : 'false'}
              {...pd.dropProps}
            >
              {pd.preview ? (
                <div className="pdx-preview">
                  <img src={pd.preview} alt="The photo you selected of your electrical problem" />
                  <div className="pdx-preview-meta">
                    <p className="pdx-preview-name">{pd.file?.name}</p>
                    <p className="pdx-preview-size">
                      {(pd.file?.size / 1024 / 1024).toFixed(1)} MB · ready to send
                    </p>
                  </div>
                  <button type="button" className="pdx-preview-clear" onClick={pd.clearPhoto}>
                    <X className="lucide" aria-hidden="true" />
                    <span className="sr-only">Remove this photo</span>
                  </button>
                </div>
              ) : (
                <button type="button" className="pdx-drop-btn" onClick={pd.openPicker}>
                  <span className="pdx-drop-icon" aria-hidden="true">
                    <ImagePlus className="lucide" />
                  </span>
                  <span className="pdx-drop-copy">
                    <span className="pdx-drop-title">Add A Photo</span>
                    <span className="pdx-drop-sub">Drag one in, or take one on your phone</span>
                  </span>
                  <span className="pdx-drop-scan" aria-hidden="true" />
                </button>
              )}
              <input
                ref={pd.inputRef}
                type="file"
                accept={pd.accepted}
                capture="environment"
                className="sr-only"
                onChange={pd.onFileInput}
                aria-label="Choose a photo of your electrical problem"
              />
            </div>

            {pd.errors.file && (
              <p className="pdx-error" role="alert">
                <AlertCircle className="lucide" aria-hidden="true" />
                {pd.errors.file}
              </p>
            )}

            <button
              type="button"
              className="pdx-skip"
              data-hidden={expanded ? 'true' : 'false'}
              onClick={() => setOpenedByUser(true)}
            >
              <span className="sweep">No photo handy? Just describe it</span>
              <ArrowRight className="lucide" aria-hidden="true" />
            </button>

            <div className="pdx-fields" data-expanded={expanded ? 'true' : 'false'}>
              <div className="pdx-field">
                <label className="pdx-label" htmlFor="pdx-desc">What’s Going On?</label>
                <textarea
                  id="pdx-desc"
                  className="pdx-input pdx-textarea"
                  rows={2}
                  placeholder="Kitchen outlets dead since Tuesday, breaker keeps tripping…"
                  value={pd.fields.description}
                  onChange={pd.setField('description')}
                  aria-invalid={pd.errors.description ? 'true' : undefined}
                />
                {pd.errors.description && (
                  <p className="pdx-error" role="alert">
                    <AlertCircle className="lucide" aria-hidden="true" />
                    {pd.errors.description}
                  </p>
                )}
              </div>

              <div className="pdx-row">
                <div className="pdx-field">
                  <label className="pdx-label" htmlFor="pdx-name">Your Name</label>
                  <input
                    id="pdx-name"
                    className="pdx-input"
                    type="text"
                    autoComplete="name"
                    placeholder="First and last"
                    value={pd.fields.name}
                    onChange={pd.setField('name')}
                    aria-invalid={pd.errors.name ? 'true' : undefined}
                  />
                  {pd.errors.name && (
                    <p className="pdx-error" role="alert">
                      <AlertCircle className="lucide" aria-hidden="true" />
                      {pd.errors.name}
                    </p>
                  )}
                </div>
                <div className="pdx-field">
                  <label className="pdx-label" htmlFor="pdx-phone">Phone</label>
                  <input
                    id="pdx-phone"
                    className="pdx-input"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(587) 555-0148"
                    value={pd.fields.phone}
                    onChange={pd.setField('phone')}
                    aria-invalid={pd.errors.phone ? 'true' : undefined}
                  />
                  {pd.errors.phone && (
                    <p className="pdx-error" role="alert">
                      <AlertCircle className="lucide" aria-hidden="true" />
                      {pd.errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="btn btn--primary btn--block pdx-submit"
                ref={magRef}
                disabled={pd.status === 'sending'}
              >
                {pd.status === 'sending' ? (
                  <>
                    <Loader2 className="lucide pdx-spin" aria-hidden="true" />
                    Sending
                  </>
                ) : (
                  <>
                    Send It To The Crew
                    <ArrowRight className="lucide" aria-hidden="true" />
                  </>
                )}
              </button>

              <p className="reassure reassure--on-dark pdx-reassure">
                <Lock className="lucide" aria-hidden="true" />
                {REASSURANCE}
              </p>
            </div>
          </form>
        )}

        {done && (
          <div className="pdx-done" role="status">
            <span className="pdx-done-ring" aria-hidden="true">
              <CheckCircle2 className="lucide" />
            </span>
            <h2 className="pdx-title pdx-title--done">Got It</h2>
            <p className="pdx-lede">
              Your photo and details are with the crew. Someone will look at it and call
              {pd.fields.phone ? ` ${pd.fields.phone}` : ' you'} back with a real answer — not a sales pitch.
            </p>
            <dl className="pdx-summary">
              <div>
                <dt>Photo</dt>
                <dd>{pd.file ? pd.file.name : 'Described, no photo attached'}</dd>
              </div>
              <div>
                <dt>Name</dt>
                <dd>{pd.fields.name || '—'}</dd>
              </div>
            </dl>
            <div className="pdx-done-actions">
              <a className="btn btn--primary btn--sm" href={BIZ.phoneHref}>
                <Phone className="lucide" aria-hidden="true" />
                Call {BIZ.phoneDisplay}
              </a>
              <button type="button" className="btn btn--ghost-dark btn--sm" onClick={() => { pd.reset(); setOpenedByUser(false) }}>
                <Camera className="lucide" aria-hidden="true" />
                Send Another
              </button>
            </div>
            <p className="reassure reassure--on-dark pdx-reassure">
              <Lock className="lucide" aria-hidden="true" />
              Demo form — nothing was sent anywhere. {REASSURANCE}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
