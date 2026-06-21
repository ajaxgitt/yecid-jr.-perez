import { useInView, motion } from "framer-motion"
import { useRef } from "react"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" } as const,
  },
}

const Section = ({
  id,
  children,
  className = "",
}: {
  id: string
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.section
      id={id}
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`scroll-mt-20 ${className}`}
    >
      {children}
    </motion.section>
  )
}

export default Section
