import { useRef, useLayoutEffect, useState } from 'react'
import './ToggleButtonGroup.css'

export default function ToggleButtonGroup({ options, value, onChange }) {
  const trackRef  = useRef(null)
  const btnRefs   = useRef({})
  const [pill, setPill] = useState({ x: 0, w: 0 })

  useLayoutEffect(() => {
    const btn = btnRefs.current[value]
    const track = trackRef.current
    if (!btn || !track) return
    const tr = track.getBoundingClientRect()
    const br = btn.getBoundingClientRect()
    setPill({ x: br.left - tr.left, w: br.width })
  }, [value])

  return (
    <div className="tbg" ref={trackRef}>
      <span className="tbg__pill" style={{ transform: `translateX(${pill.x}px)`, width: pill.w }} />
      {options.map(o => (
        <button
          key={o.value}
          ref={el => { btnRefs.current[o.value] = el }}
          className={`tbg__btn${value === o.value ? ' tbg__btn--on' : ''}`}
          onClick={() => onChange(o.value)}
        >
          {o.label}
          {o.count != null && (
            <span className="tbg__badge">{o.count}</span>
          )}
        </button>
      ))}
    </div>
  )
}
