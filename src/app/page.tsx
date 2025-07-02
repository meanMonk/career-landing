import About from '@/components/About'
import DemoSection from '@/components/DemoSection'
import EarlyAccess from '@/components/EarlyAccess'
import Features from '@/components/Features'
import FeedbackForm from '@/components/FeedbackForm'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import ProblemSection from '@/components/ProblemSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="section-padding">
        <Hero />
      </section>

      {/* Problem Recognition */}
      <section id="problem" className="section-padding bg-gray-50">
        <ProblemSection />
      </section>

      {/* Features */}
      <section id="features" className="section-padding">
        <Features />
      </section>

      {/* Demo Section */}
      <section id="demo" className="section-padding">
        <DemoSection />
      </section>

      {/* Feedback Request */}
      <section id="feedback" className="section-padding bg-white">
        <FeedbackForm />
      </section>

      {/* Early Access */}
      <section id="early-access" className="">
        <EarlyAccess />
      </section>

      {/* About Founder */}
      <section id="about" className="">
        <About />
      </section>

      <Footer />
    </main>
  )
} 