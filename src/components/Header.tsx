import { motion } from "framer-motion"
import { GitHubSvg } from "./LanguagesSvg"
import { LocationSvg, MailSvg, WhatsAppSvg } from "./icon-svg"
import AnimatedBackground from "./AnimatedBackground"
import IntroProfile from "./IntroProfile"

const Header = () => {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative  mx-auto  pt-24  overflow-hidden"
      >
        <AnimatedBackground />

        <div className="max-w-3xl  mx-auto px-6">
          <div className="  flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-3xl font-medium text-slate-100 mb-1">
                Yecid Junior Perez Paucara
              </h1>
              <p className="text-sm text-slate-500">
                Desarrollador Frontend · Nociones de backend e infraestructura ·
                Ing. en Sistemas
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 mt-5">
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <MailSvg /> ajaxoutlook@gmail.com
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <WhatsAppSvg /> +591 78761444
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <LocationSvg /> Santa Cruz, Bolivia
            </span>
            <a
              href="https://github.com/ajaxgitt"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors"
            >
              <GitHubSvg />
              github.com/ajaxgitt
            </a>
          </div>
        </div>
      <div className="max-w-3xl  mx-auto px-6 mt-10">
        <IntroProfile />
      </div>
      </motion.header>
    </>
  )
}

export default Header
