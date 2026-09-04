# Selection Log — Long Range Electrical

Primary style family: **glass-depth**. Page ambition: **maximal-and-layered**.
Scroll-trigger default for every scroll entrance on this page: IntersectionObserver
`threshold 0.18 / rootMargin 0px 0px -12% 0px` (kit `useInView` default, which satisfies
the repo's Scroll Trigger Timing rule). Deviations are noted per section.

---

## Step 0 — Page inventory

| # | Section | Type file used | Imagery available | Tonal band |
|---|---|---|---|---|
| 1 | Header / Nav | navigation | none (wordmark only) | glass over hero |
| 2 | Hero + photo-diagnosis widget | hero + forms | `street-dusk` | dark |
| 3 | Google Reviews | social-proof | none (avatars would be fabricated) | light |
| 4 | Trust Badges Banner | credibility | `tex-steel` as a low-opacity bed | deep band |
| 5 | Why Us | value-proposition | `explaining-panel` (added Pass 1) | light |
| 6 | Services | services | `rewiring-hero`, `troubleshooting-hero`, `panel-new`, `lighting-hero`, `commercial-lift`, `rewire-rough-in` | light |
| 7 | Coverage / Service Area | location | `panorama-hills-hero` | dark |
| 8 | Our Story | about-story | `about-crew`, `kitchen-table-quote` | light |
| 9 | FAQ | faq | `tex-copper` (very low opacity bed) | tinted light |
| 10 | Final CTA | calls-to-action | `vans-morning` | dark |
| 11 | Footer | footer | none | dark |
| — | Mobile sticky call bar | calls-to-action | none | glass |

Ambition rationale: the brief hands over a single typeface (Open Sans) and a narrow
cyan→royal-blue range. Personality therefore has to come from **depth and light**, not
type pairing — which is exactly what `glass-depth` is for. The type ramp is pushed
unusually wide (11px tracked micro-labels against a 66px H1) to compensate for the single
family, per DIRECTION.md's stated risk.

Font substitution table: **none needed.** The brief names Open Sans for both roles and
Open Sans is on Google Fonts. Loaded weights: 400, 600, 700, 800 (800 is used only for the
H1 and the aggregate-rating numeral).

---

## Per-section selections

### 1. Header / Navigation
- **Layout:** Transparent-to-Solid Scroll Nav — *beats Standard Horizontal Nav Bar because the hero is a dark full-bleed photo bed, which is this entry's exact "Best for"; Standard Horizontal is explicitly avoided when the brand wants a more distinctive first impression.* Its "Avoid when" (light-coloured hero) does not apply — the hero is deep navy.
- **Visual style:** Glass Frosted Nav Bar (glass-depth). Premium execution note honoured: the blur sits on the bar's backdrop only, the bar's own text is rendered on an opaque-enough tint so links stay crisp.
- **Style family:** glass-depth
- **Animation:** Nav Background Fade-In on Scroll (scroll) + Underline Grow on Hover (hover, from Underline Sweep in the richness file, 220ms ease-out-quart, left origin) + CTA Button Magnetic Hover (≤3px pull).
- **Element sequence:** the bar's fill/shadow/height is the only thing that transitions on scroll (one group, 320ms). Links and CTA never move. Dropdown panels: Mega Menu Column Stagger Reveal, adapted — panel enters as one unit (140ms), items inside stagger 26ms.
- **Reduced motion:** fill change is instant, no underline sweep, no magnetic pull.

### 2. Hero (+ photo-diagnosis widget)
- **Layout:** Asymmetric Layered Hero (assigned) — content column 54%, widget column 46%, offset off the vertical centre with the widget hanging lower and breaking the section's bottom rule. *Beats Split-Screen Hero, which gives the photo 50% weight this brief does not need: the widget, not the photo, is the hero's subject.*
- **Visual style:** Layered Glass Panel (assigned, glass-depth) + **Layered Depth Composition** from `image-and-visual-richness.md` (DIRECTION's featured image technique, use #1 of 2): background photo (`street-dusk`) → midground cyan/royal radial shape + a conduit hairline grid → foreground glass panels. Its Avoid-when ("section needs to stay simple and fast") is knowingly overridden: this is the one section on the page that is allowed to be the most layered.
- **Style family:** glass-depth
- **Animation:** Cursor-Reactive Parallax Layers (assigned) + Staggered Load-In on the text stack + **Layered Parallax Drift** (DIRECTION's featured motion technique) on scroll. Both cursor- and scroll-linked drift are fed into the same three layer variables by the site-specific `useLayerDrift` hook so they never fight each other. Flattened below 900px and under reduced motion.
- **Element sequence (load, motion budget = 6 groups):**
  1. eyebrow + trace mark (0ms, clip reveal)
  2. H1 (100ms, Weighted Word Reveal — once-per-page technique, 58ms/word)
  3. subheadline (480ms, rise)
  4. value-badge row (600ms, staggered rise, 70ms sibling step — one group per badge, icon+label move together)
  5. CTA pair + supporting line (880ms, one unit)
  6. photo-diagnosis widget (200ms, load-rise — deliberately early and out of reading order so the signature element is never the last thing to arrive)
- **Reduced motion:** all six appear instantly, no drift, no tilt.

### 3. Google Reviews
- **Layout:** Testimonial Card Grid (assigned) — 5 reviews in a 12-column asymmetric grid: the aggregate callout occupies a tall left cell, reviews fill the rest at two sizes. *Beats Testimonial Carousel because all five quotes are short (one to two lines) and the grid's Avoid-when — long quotes — does not apply; and a static grid lets the Google framing be read at a glance.*
- **Visual style:** Glass Panel Quote Card (assigned, glass-depth), over a cool near-white ground with a faint cyan mesh. Aggregate callout uses **Large Numeral Statistic Display** from `visual-styles/credibility.md` for the 4.9 — oversized numeral against a deliberately tiny label.
- **Style family:** glass-depth (+ editorial in the numeral)
- **Animation:** Staggered Rise (110ms step, reading order, one group per card) + Star Rating Fill Animation on Scroll (quick 60ms sweep per star, fires after its card lands) + Counting Numerals on the 4.9 (1500ms, ease-out-expo) + Magnetic Lift on hover (6px, 260ms).
- **Element sequence:** section eyebrow+h2 → aggregate callout (numeral counts) → cards stagger in reading order → stars sweep per card → placeholder note last.
- **Reduced motion:** stars render full, number renders final, no lift.

### 4. Trust Badges Banner
- **Layout:** Certification Badge Wall (four badges, equal cells) — *the entry's Avoid-when is "fewer than four badges"; there are exactly four, which is its floor. Beats Awards and Press Mention Bar, which needs real press logos that do not exist here.*
- **Visual style:** Glass Badge Cluster (assigned, glass-depth) over a deep band with `tex-steel` at very low opacity. Premium execution note honoured: blur kept low so badge text stays legible; all four icons share one size box, one stroke weight, one optical baseline.
- **Style family:** glass-depth
- **Animation:** Badge Cluster Staggered Pop-In (scroll, 110ms step) — ordered by credential weight (Licensed & Insured first), not left-to-right by accident; it happens to also be reading order. Hover: soft internal glow lift.
- **Element sequence:** h2 → four badges as one staggered cluster (icon+label per badge move together).
- **Reduced motion:** badges appear in place.

### 5. Why Us
- **Layout:** Icon + Blurb Grid (assigned) — 4 equal-weight points, one sentence each: exactly this entry's "Content shape it wants".
- **Visual style:** Soft Card Elevation (assigned, glass-depth) + **Background Pattern Behind Foreground Photo** — the hairline conduit grid is the pattern and `explaining-panel.webp` is the foreground photo (added in Pass 1; see the elevation sweep).
- **Style family:** glass-depth
- **Animation:** Sequential Reveal on Scroll (h2 first, then one group per card, 110ms step) + Hover Tilt and Lift on Cards (≤1.2° tilt, 6px lift, 260ms — kept under the "gimmick" line).
- **Element sequence:** eyebrow+h2+lede (one group) → 4 cards staggered → the accent rule under each card title draws in as that card's closing beat (Sequential Line Draw, 500ms).
- **Reduced motion:** no tilt, no lift; rules render drawn.

### 6. Services
- **Layout:** Featured Service Spotlight with Secondary List (assigned) — Electrical Installations is spotlit with a real photograph; the other five run as a secondary list. *Beats Service Card Grid, whose Avoid-when is "services vary in scope" — here they genuinely do, and a uniform 6-up grid would flatten the flagship.*
- **Visual style:** Glass Panel Service Card (assigned, glass-depth) for the five secondary cards; the spotlight uses **Grid-Breaking Oversized Image** + **Overlapping or Bleeding Image** from the richness file so the flagship photo bleeds past the card edge.
- **Style family:** glass-depth (+ editorial in the spotlight)
- **Animation:** Staggered Grid Fade-In on Scroll (spotlight first as its own beat, then the five cards in reading order, 100ms step) + Card Hover Reveal (the card's own photo strip and arrow resolve on hover) + Image Zoom on Hover on the spotlight photo (1.04, 700ms).
- **Element sequence:** eyebrow+h2 → spotlight image (Depth Settle) → spotlight copy+CTA (one group) → five secondary cards staggered.
- **Reduced motion:** no zoom, no hover reveal transition; cards fade only.

### 7. Coverage / Service Area
- **Layout:** Service Area List or Coverage Zone Grid (assigned) — the brief forbids naming towns, so the "zones" are the six real service categories from the nav's Service Areas dropdown. *Beats Map Embed with Address Card outright: there is no confirmed address to pin, and a fabricated pin would be exactly the invented fact the brief prohibits.*
- **Visual style:** Glass Overlay Address Card on Map (assigned) — reinterpreted honestly: the "map" is a wide Alberta environmental photograph (`panorama-hills-hero`) with a drawn conduit-grid overlay standing in for map graticule, and the glass card floats over it. No fake map, no fake pin.
- **Style family:** glass-depth
- **Animation:** Address Card Slide-In on Scroll (headline → details as one grouped card) + Coverage Zone Highlight on Hover on the six zone chips + Layered Parallax Drift on the photo bed (second and final use of the featured motion technique; desktop only).
- **Element sequence:** photo bed (focus pull) → h2+framing copy → glass card (slide-in) → six zone chips staggered 80ms → placeholder flag last.
- **Reduced motion:** static bed, instant card, hover highlight without transition.

### 8. Our Story
- **Layout:** Split Story with Sticky Photo or Quote (assigned) — three paragraphs of real narrative plus one photograph strong enough to anchor the sticky side (`about-crew`). *Beats Single-Column Long-Form Story because a photo anchor exists; beats Chronological Timeline because the brief gives no dated milestones and a timeline would have to invent them.*
- **Visual style:** Glass Timeline Markers (assigned) — the markers run down the story column as three quiet glass beats (Start / Word Of Mouth / The Standard), which is the only ordering the copy genuinely supports. Plus **Layered Photo Stack** in the sticky column (`about-crew` behind, `kitchen-table-quote` offset in front).
- **Style family:** glass-depth (+ editorial)
- **Animation:** Story Section Sticky Scroll Progress (pinned photo, text sequences past it) + Progressive Reveal Scrub on the paragraphs + Sequential Line Draw on the marker rail.
- **Element sequence:** sticky photo stack enters once (Depth Settle) and holds → eyebrow+h2 → marker rail draws → paragraph blocks scrub in one at a time.
- **Reduced motion:** photo not pinned on mobile anyway; scrub resolves to full opacity, rail renders drawn.

### 9. FAQ
- **Layout:** Classic Accordion List (assigned) — six question/answer pairs sits inside this entry's 6–12 band. *Beats Conversational FAQ Feed because two of the six answers are long enough that a fully-expanded feed becomes a wall of text.*
- **Visual style:** Glass Panel Accordion (assigned, glass-depth) over a tinted ground with `tex-copper` at very low opacity so the glass has something to refract.
- **Style family:** glass-depth
- **Animation:** Accordion Expand and Collapse with Height Transition (360ms, ease-out-quart, real height measurement) + Icon Rotate on Expand (plus→minus, 200ms, tied 1:1 to the click) + Staggered Fade-In on Scroll for the rows (90ms step) + Active Question Highlight Glow on the open row.
- **Element sequence:** eyebrow+h2+side call panel (one group) → rows stagger top to bottom → first row opens by default so the section never reads as a stack of closed bars.
- **Reduced motion:** instant open/close, instant icon swap.

### 10. Final CTA
- **Layout:** Full-Width CTA Banner (assigned) — one ask, brief supporting sentence, two contact affordances. *Beats Split CTA with Form: the brief names the primary action here as a call plus a click-to-text, and adding a third field group would dilute the single ask this entry is built around.*
- **Visual style:** Glass Panel over photography (assigned) — `vans-morning` as the bed, a deep gradient scrim, and the glass panel carrying the ask. Second deliberate use of **Layered Depth Composition** (photo → colour shape → glass), per DIRECTION.
- **Style family:** glass-depth (+ dark-moody in the scrim)
- **Animation:** Banner Background Slow Pan (28s, idle) + a grouped entrance for headline → supporting sentence → action pair + Button Magnetic Hover (≤3px) on the call button. No pulse: the page has two same-weight actions here, which is that entry's Avoid-when.
- **Element sequence:** bed pans continuously → h2 (clip reveal) → supporting sentence → call + text buttons together → reassurance microcopy last.
- **Reduced motion:** static bed, instant entrance, no magnetic pull.

### 11. Footer
- **Layout:** Footer with Trust Strip (assigned) — a single quiet reassurance line above the four columns. *Beats Split Footer with Final CTA Panel, whose Avoid-when is exactly this page: the CTA has already been repeated four times and a fifth would read pushy.*
- **Visual style:** Glass Divider Footer (assigned) — a frosted band separates the final CTA from the footer rather than a hard colour cut.
- **Style family:** glass-depth
- **Animation:** Link Column Staggered Fade-In on Scroll (one group per column, 90ms) + Underline Sweep on every footer link + Social Icon Hover lift + Back-to-Top Button Scroll Reveal.
- **Element sequence:** trust strip → wordmark+mission+social (col 1) → three link columns staggered → legal line last.
- **Reduced motion:** instant, no sweep.

### 12. Mobile sticky call bar
- **Layout:** Sticky or Floating CTA Bar (calls-to-action).
- **Visual style:** Glass Panel Sticky Bar.
- **Animation:** Sticky Bar Slide-In on Scroll Threshold (fires past 340px; the whole bar is one unit).
- **Reduced motion:** appears without slide.

---

## Site-specific motion techniques (written for this page, not in the kit)

1. **Layer Drift (`useLayerDrift`)** — merges scroll offset and pointer offset into one set of
   `--drift-x/--drift-y` variables per depth layer, so the hero's three layers respond to both
   without two competing transforms. Implements DIRECTION's featured *Layered Parallax Drift*
   and the assigned *Cursor-Reactive Parallax Layers* as one system. Off below 900px and under
   reduced motion.
2. **Refraction Tilt (`useRefractionTilt`)** — the photo-diagnosis panel tilts ≤4° toward the
   cursor while its specular sheen travels the opposite way at 1.6× the rate, so the glass reads
   as having thickness. Derived from *Cursor-Reactive Parallax Layers* + *Cursor-Reactive Glow*.
   Pointer-fine only; no-op under reduced motion.
3. **Live Current (`.lre-current`)** — a cyan node travels the drawn conduit trace on a 7s loop
   after the trace finishes drawing, at very low amplitude. Derived from *Slow Ambient Drift* and
   *Sequential Line Draw*; used exactly twice on the page (hero rail, coverage overlay) so it
   stays a detail rather than a motif. Static node under reduced motion.

---


---

## Pass 1 — Elevation sweep

Run after every section existed once. Each section's visual-styles, animations and
`image-and-visual-richness.md` entries were reopened and asked the same question: is
there a more distinctive option here that still respects that entry's own Avoid-when?

| Section | Outcome |
|---|---|
| Header | **Left as is.** Already at appropriate ambition — a nav bar that gets more designed starts competing with the hero widget, which is where this page's boldness is deliberately spent. |
| Hero | **Upgraded.** Added a three-step numbered rail inside the photo widget (`1 Send A Photo → 2 Add The Details → 3 We Call Back`). Structure-as-information: the widget genuinely is a sequence, so numbering encodes something true rather than decorating. Desktop only — on mobile it would cost fold height. Also repositioned both conduit traces out from behind the H1, where they read as a stray box rather than a background motif, and tightened the load sequence from ~1.3s to ~1.07s so the headline is never caught mid-reveal. |
| Google Reviews | **Upgraded.** Added **Oversized Quote Mark Typography** (`visual-styles/social-proof.md`) to the featured card only — its Avoid-when is "the layout shows many testimonials at once", which is why it is on the one featured quote and not on the four secondary cards. Featured quote raised to 28px so it fills the three-column cell. |
| Trust Badges | **Upgraded, downward.** The banner's h2 was set in tracked uppercase at h2-sm and out-shouted the badges it was introducing. Reset to sentence-weight Title Case in the muted on-dark tone — the four badges are now clearly the section's subject. |
| Why Us | **Recomposed.** The first pass was a 2×2 icon-and-blurb grid under a full-width section head — the same shape Reviews and Services already used, and the closest thing on the page to a template answer. Rebuilt as a 3×2 editorial grid: the section head takes the first cell, the four blurbs take the next four, and the sixth cell is `explaining-panel.webp` under a veil with a single caption line. That brings **Background Pattern Behind Foreground Photo** in properly (the hairline conduit grid is the pattern) and matches the photograph to the copy it sits beside — a technician explaining a panel, next to "Straight Answers, No Upselling". |
| Services | **Upgraded.** Strengthened the spotlight's colour treatment (**Duotone Background Wash Behind Photo**, restrained to a two-stop ink/royal wash rather than a full duotone, so the photo keeps its own colour) and equalised the two wide cards' media ratio so the secondary grid reads as one system rather than two. |
| Coverage | **Upgraded.** The zone chips were translucent enough that labels lost contrast over the brighter part of the photograph. Chips moved to an ink-tinted glass at a heavier blur; the hover state now fills with the secondary royal rather than the primary cyan, which keeps the label legible while the chip is active. |
| Our Story | **Upgraded.** Added a quiet call CTA below the sticky photo stack — the aside was 400px shorter than the story column and the gap read as an omission rather than as whitespace. Also a page-wide fix surfaced here (below). |
| FAQ | **Upgraded, slightly.** Raised the copper texture from 0.1 to 0.2 and lightened the wash over it so the glass has something to actually refract; at the first pass the texture was invisible and the "glass" was sitting on flat colour. |
| Final CTA | **Upgraded.** The scrim was heavy enough that `vans-morning` read as a flat blue field. Lightened the middle stop so the vans and the snow read through, which is the whole reason for choosing a photographic bed. |
| Footer | **Left as is.** Already carries the trust strip, the glass divider and four staggered columns; more would make the page's quietest moment loud. |

### The page-wide fix this pass found

`motion.css` resolves **every** finished entrance to `clip-path: inset(0 0 0 0)`. Only the
`clip` and `wipe` techniques need that at rest — on the others it silently clips each
revealed element to its own border box, which was throwing away every coloured shadow on
the page and every deliberate overhang: the story timeline markers (positioned into the
rail gutter), the offset photo and pull-quote in the story stack, and the card elevations
in Reviews, Services, Why Us, FAQ and the trust banner. `app.css` now opts the seven
non-clipping techniques out at the same specificity, declared after the kit rule so it
wins on order. This is the single biggest visual change in the whole build; the depth the
`glass-depth` direction depends on was being flattened everywhere.

## Pass 2 — Coherence sweep

Run with fresh eyes on the updated page.

- **Section-head shapes.** After Pass 1, five sections opened with an eyebrow + h2 block.
  They are not identical — Reviews is centred, Why Us's head sits inside the grid as its
  first cell, Coverage's is inside the floating glass card, Story's is in the right-hand
  column, Services' and FAQ's are left-aligned at different widths — so the repetition
  reads as a system rather than a loop. **No change.**
- **Two split-with-photo sections.** Why Us's recomposition and Our Story both put
  photography on a light ground. They are separated by Services and Coverage, and they
  differ structurally (a grid cell versus a sticky stack of two overlapping photos).
  **Kept**, but Why Us's photo was capped to one cell rather than a column so the two
  never read as the same layout twice.
- **Motion load.** Counted across the page: one Weighted Word Reveal (hero only, as the
  technique demands), two Live Current nodes (hero, coverage), one Refraction Tilt (the
  widget), one Slow Ambient pan (final CTA), one scroll-scrubbed rail (story). Everything
  else is Staggered Rise or Depth Settle. That is inside budget; **no walk-backs needed.**
  `useCursorGlow` from the kit was deliberately left unused — the Refraction Tilt already
  owns the widget's cursor response, and a second cursor-linked effect on the same panel
  is exactly the overload the richness file warns about.
- **Left-column whitespace.** Story and FAQ both have a sticky left column shorter than
  their right. Story's was filled in Pass 1; FAQ's was **kept as a deliberate quiet
  moment** — the section is already dense with six rows of glass, and filling the gutter
  would make the page's most utilitarian section its busiest.
- **Trust banner vs. footer trust strip.** Both restate credentials. Kept: the banner is a
  fixed-position requirement, the footer strip is a rating line in a different register,
  and they sit ~6,000px apart.


### Two further Pass 2 corrections

- **Compositing hint released at rest.** `motion.css` sets `will-change` on the rise,
  settle and focus techniques and never clears it, so every revealed element on the page
  stayed promoted to its own layer for the life of the session. On a page this tall that
  cost memory and, past a certain scroll depth, cost the layers their own raster — the
  trust badges, the story photographs and three service card images stopped painting
  entirely in a full-page render. `app.css` now returns `will-change: auto` once an
  entrance has finished.
- **Backdrop-filter scoped to where there is something behind it.** The review cards and
  the secondary service cards were carrying a blur over a flat tinted band — cost with no
  visible effect, and another needless compositing layer. Blur now stays only where the
  glass genuinely refracts something: the nav over the hero, the hero widget, the
  spotlight card over its photograph, the coverage card, the FAQ rows over the copper
  texture, the final CTA panel, the footer trust strip and the mobile sticky bar.

## Notes for Carter (flagged, not invented)

- No city or region is claimed anywhere. The Service Areas dropdown and the Coverage
  section use property-type categories instead of town names, and the Coverage section
  carries a visible placeholder flag saying so.
- All five reviews, the 4.9 aggregate, the phone, email and address are placeholders and
  are labelled as such in three places (reviews note, coverage note, footer legal line).
- No financing, no emergency/24-hour claim, no licence number, no years-in-business
  figure appears anywhere — none of them are on the source site.
