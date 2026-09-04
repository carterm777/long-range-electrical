/* ── Site-specific motion — Long Range Electrical ───────────────────────────
   Three techniques written for this page that are not in the shared kit. Each
   one is derived from a real entry in
   references/animation-and-motion-richness.md, named in SELECTION-LOG.md, and
   ships with its own reduced-motion fallback.

   1. useLayerDrift      — Layered Parallax Drift + Cursor-Reactive Parallax
                           Layers merged into one variable set, so the hero's
                           three depth layers never receive two competing
                           transforms.
   2. useRefractionTilt  — the glass panel tilts toward the cursor while its
                           specular sheen travels the other way at 1.6x, so the
                           glass reads as having thickness.
   3. useMagnetic        — Button Magnetic Hover, capped at 3px.
   ───────────────────────────────────────────────────────────────────────── */
import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from './motion.js'

const clamp = (n, min, max) => Math.min(Math.max(n, min), max)

/* ── 1. Layer Drift ────────────────────────────────────────────────────────
   Writes --dx / --dy (px) on the host element, blended from scroll progress
   and pointer position. depth < 1 lags the foreground, depth > 1 leads it.
   Flattened below `disableBelow` and under reduced motion. */
export function useLayerDrift({
  depth = 0.4,
  pointer = 14,
  scroll = 40,
  disableBelow = 900,
} = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const flat = () => {
      el.style.setProperty('--dx', '0px')
      el.style.setProperty('--dy', '0px')
    }
    if (prefersReducedMotion() || window.innerWidth < disableBelow) { flat(); return }

    let raf = null
    let px = 0
    let py = 0
    let sy = 0

    const write = () => {
      raf = null
      el.style.setProperty('--dx', `${(px * pointer * depth).toFixed(2)}px`)
      el.style.setProperty('--dy', `${(py * pointer * depth + sy * scroll * depth).toFixed(2)}px`)
    }
    const schedule = () => { if (raf === null) raf = requestAnimationFrame(write) }

    const onPointer = (e) => {
      px = clamp((e.clientX / window.innerWidth) * 2 - 1, -1, 1)
      py = clamp((e.clientY / window.innerHeight) * 2 - 1, -1, 1)
      schedule()
    }
    const onScroll = () => {
      const r = el.getBoundingClientRect()
      const centre = r.top + r.height / 2 - window.innerHeight / 2
      sy = clamp(centre / window.innerHeight, -1.6, 1.6)
      schedule()
    }
    const onResize = () => {
      if (window.innerWidth < disableBelow) { flat(); return }
      onScroll()
    }

    onScroll()
    window.addEventListener('pointermove', onPointer, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [depth, pointer, scroll, disableBelow])
  return ref
}

/* ── 2. Refraction Tilt ────────────────────────────────────────────────────
   --tilt-x / --tilt-y (deg) on the panel, --sheen-x / --sheen-y (%) on its
   highlight layer, moving in opposition. Pointer-fine devices only. */
export function useRefractionTilt({ max = 4, sheenRate = 1.6, disableBelow = 1024 } = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const rest = () => {
      el.style.setProperty('--tilt-x', '0deg')
      el.style.setProperty('--tilt-y', '0deg')
      el.style.setProperty('--sheen-x', '50%')
      el.style.setProperty('--sheen-y', '0%')
    }
    rest()
    if (prefersReducedMotion()) return
    if (window.matchMedia('(hover: none)').matches) return
    if (window.innerWidth < disableBelow) return

    let raf = null
    let nx = 0
    let ny = 0
    const write = () => {
      raf = null
      el.style.setProperty('--tilt-x', `${(-ny * max).toFixed(2)}deg`)
      el.style.setProperty('--tilt-y', `${(nx * max).toFixed(2)}deg`)
      el.style.setProperty('--sheen-x', `${(50 - nx * 50 * sheenRate).toFixed(1)}%`)
      el.style.setProperty('--sheen-y', `${(30 - ny * 40 * sheenRate).toFixed(1)}%`)
    }
    const move = (e) => {
      const r = el.getBoundingClientRect()
      nx = clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1)
      ny = clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1, 1)
      if (raf === null) raf = requestAnimationFrame(write)
    }
    const leave = () => {
      el.style.setProperty('--tilt-x', '0deg')
      el.style.setProperty('--tilt-y', '0deg')
      el.style.setProperty('--sheen-x', '50%')
      el.style.setProperty('--sheen-y', '0%')
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [max, sheenRate, disableBelow])
  return ref
}

/* ── 3. Magnetic hover — capped at 3px, per the repo's premium note ──────── */
export function useMagnetic(strength = 3) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    if (window.matchMedia('(hover: none)').matches) return
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width) * 2 - 1
      const y = ((e.clientY - r.top) / r.height) * 2 - 1
      el.style.setProperty('--mag-x', `${(x * strength).toFixed(2)}px`)
      el.style.setProperty('--mag-y', `${(y * strength).toFixed(2)}px`)
    }
    const leave = () => {
      el.style.setProperty('--mag-x', '0px')
      el.style.setProperty('--mag-y', '0px')
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  }, [strength])
  return ref
}
