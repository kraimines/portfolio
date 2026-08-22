"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Leadership from "@/components/leadership"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <div className="border-t border-gray-100"></div>
      <Experience />
      <div className="border-t border-gray-100"></div>
      <Projects />
      <div className="border-t border-gray-100"></div>
      <Skills />
      <div className="border-t border-gray-100"></div>
      <Education />
      <div className="border-t border-gray-100"></div>
      <Leadership />
      <div className="border-t border-gray-100"></div>
      <Contact />
      <Footer />
    </main>
  )
}
