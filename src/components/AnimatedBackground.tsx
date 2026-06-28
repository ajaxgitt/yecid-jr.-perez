import { useEffect, useRef } from "react"

const AnimatedBackground = () => {
  const l1 = useRef<HTMLDivElement>(null)
  const l2 = useRef<HTMLDivElement>(null)
  const l3 = useRef<HTMLDivElement>(null)
  const l4 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cx = 0,
      cy = 0,
      tx = 0,
      ty = 0
    let rafId: number

    const layers = [
      { el: l1.current, depth: 0.08 },
      { el: l2.current, depth: 0.05 },
      { el: l3.current, depth: 0.04 },
      { el: l4.current, depth: 0.07 },
    ]

    const onMouseMove = (e: MouseEvent) => {
      tx = e.clientX - window.innerWidth / 2
      ty = e.clientY - window.innerHeight / 2
    }

    const tick = () => {
      cx += (tx - cx) * 0.06
      cy += (ty - cy) * 0.06
      for (const { el, depth } of layers) {
        if (el)
          el.style.transform = `translate(${cx * depth}px, ${cy * depth}px)`
      }
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMouseMove)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      {/* rombo — arriba izquierda */}
      <div
        ref={l1}
        style={{
          position: "absolute",
          top: "10%",
          left: "-2%",
          zIndex: 0,
          pointerEvents: "none",
          willChange: "transform",
          opacity: 0.3,
        }}
      >
        <svg width="130" height="130" viewBox="0 0 130 130">
          <rect
            x="15"
            y="15"
            width="100"
            height="100"
            rx="4"
            fill="none"
            stroke="#6366f1"
            strokeWidth="1.5"
            transform="rotate(45 65 65)"
          />
          <rect
            x="32"
            y="32"
            width="66"
            height="66"
            rx="2"
            fill="none"
            stroke="#6366f1"
            strokeWidth="0.7"
            transform="rotate(45 65 65)"
          />
        </svg>
      </div>

      {/* círculo con cruz — derecha centro */}
      <div
        ref={l2}
        style={{
          position: "absolute",
          top: "20%",
          right: "-1%",
          zIndex: 0,
          pointerEvents: "none",
          willChange: "transform",
          opacity: 0.25,
        }}
      >
        <svg width="110" height="110" viewBox="0 0 110 110">
          <circle
            cx="55"
            cy="55"
            r="46"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="0.8"
          />
          <circle cx="55" cy="55" r="5" fill="#8b5cf6" />
          <line
            x1="55"
            y1="7"
            x2="55"
            y2="103"
            stroke="#8b5cf6"
            strokeWidth="0.6"
          />
          <line
            x1="7"
            y1="55"
            x2="103"
            y2="55"
            stroke="#8b5cf6"
            strokeWidth="0.6"
          />
        </svg>
      </div>

      {/* cruz diagonal — arriba derecha */}
      <div
        ref={l3}
        style={{
          position: "absolute",
          top: "5%",
          right: "15%",
          zIndex: 0,
          pointerEvents: "none",
          willChange: "transform",
          opacity: 0.2,
        }}
      >
        <svg width="70" height="70" viewBox="0 0 70 70">
          <line
            x1="0"
            y1="0"
            x2="70"
            y2="70"
            stroke="#0ea5e9"
            strokeWidth="1"
          />
          <line
            x1="70"
            y1="0"
            x2="0"
            y2="70"
            stroke="#0ea5e9"
            strokeWidth="1"
          />
          <circle
            cx="35"
            cy="35"
            r="4"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      {/* triángulo — abajo izquierda */}
      <div
        ref={l4}
        style={{
          position: "absolute",
          bottom: "5%",
          left: "10%",
          zIndex: 0,
          pointerEvents: "none",
          willChange: "transform",
          opacity: 0.2,
        }}
      >
        <svg width="100" height="90" viewBox="0 0 100 90">
          <polygon
            points="50,5 95,85 5,85"
            fill="none"
            stroke="#6366f1"
            strokeWidth="1"
          />
          <polygon
            points="50,24 80,75 20,75"
            fill="none"
            stroke="#6366f1"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </>
  )
}

export default AnimatedBackground
