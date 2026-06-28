import Cookies from "js-cookie"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const App = () => {
  Cookies.set("FLAG", "Elemental_mi_querido_Watson")

  return (
    <div className="min-h-screen  bg-black text-slate-300 font-sans">
      <Navbar />
      <Header />
      <div className=" max-w-3xl mx-auto px-6 py-10 flex flex-col gap-12">
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </div>

      <footer className="max-w-3xl mx-auto px-6 py-8 border-t border-slate-800 mt-4">
        <p className="text-xs text-slate-600 text-center">
          Yecid Junior Perez Paucara · Santa Cruz, Bolivia ·{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}
export default App
