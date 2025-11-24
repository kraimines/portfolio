"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ViewCounter from "@/components/view-counter"

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 blur-3xl">
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>

      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ViewCounter />
    </main>
  )
}
