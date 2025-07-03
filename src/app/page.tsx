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
      <Hero />

      {/* Problem Recognition */}
      <ProblemSection />

      {/* Features */}
      <Features />

      {/* Demo Section */}
      <DemoSection />

      {/* Feedback Request */}
      <FeedbackForm />

      {/* Early Access */}
      <EarlyAccess />

      {/* About Founder */}
      <About />

      <Footer />
    </main>
  )
} 