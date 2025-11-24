"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParallaxBackground from "@/components/parallax-background"
import ScrollIndicator from "@/components/scroll-indicator"
import FloatingElements from "@/components/floating-elements"
import StorySection from "@/components/story-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <ParallaxBackground />
      <FloatingElements />
      <ScrollIndicator />

      <Header />
      
      <div id="hero">
        <Hero />
      </div>

      <StorySection id="about" chapter="Chapter 01" title="The Beginning" direction="right">
        <About />
      </StorySection>

      <StorySection id="experience" chapter="Chapter 02" title="The Journey" direction="left" delay={0.2}>
        <Experience />
      </StorySection>

      <StorySection id="projects" chapter="Chapter 03" title="The Creations" direction="up" delay={0.3}>
        <Projects />
      </StorySection>

      <StorySection id="skills" chapter="Chapter 04" title="The Arsenal" direction="right" delay={0.2}>
        <Skills />
      </StorySection>

      <StorySection id="contact" chapter="Chapter 05" title="The Connection" direction="down" delay={0.2}>
        <Contact />
      </StorySection>

      <Footer />
    </main>
  )
}
