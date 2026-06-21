import { NAV_SECTIONS } from "@/constants"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [active, setActive] = useState<string>("perfil")
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      const offsets = NAV_SECTIONS.map(({ id }) => {
        const el = document.getElementById(id)
        return { id, top: el ? el.getBoundingClientRect().top : 9999 }
      })
      const current = offsets.filter((o) => o.top <= 120).at(-1)
      if (current) setActive(current.id)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/50  backdrop-blur-md  border-slate-700/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className={`max-w-3xl mx-auto px-6 py-3 flex items-center ${scrolled ? "justify-between" : "justify-center"}`}>
        {scrolled && (
          <span className="text-sm font-medium text-slate-200">
            Yecid Jr. <span className="text-blue-400">Perez</span>
          </span>
        )}
        <div className="flex gap-1">
          {NAV_SECTIONS.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs transition-all duration-200 ${
                active === id
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/50"
              }`}
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
