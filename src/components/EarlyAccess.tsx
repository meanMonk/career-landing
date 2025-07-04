'use client'

import { motion } from 'framer-motion'
import { Target, Rocket, User, Settings } from 'lucide-react'

const benefits = [
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Custom setup support"
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Help shape the roadmap"
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Free for first 50 users"
  },
  {
    icon: <User className="w-5 h-5" />,
    title: "Direct access to the founder"
  },
]

export default function EarlyAccess() {
  const scrollToFeedback = () => {
    document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-primary-800 text-white section-padding" aria-labelledby="early-access-heading">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Column - Header and Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-content"
          >
            <h2 id="early-access-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
              If this resonates with you...
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20" aria-hidden="true">
                    {benefit.icon}
                  </div>
                  <span className="text-base sm:text-lg text-white/90 font-medium">{benefit.title}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white/5 rounded-lg border border-white/10">
              <p className="text-sm sm:text-base text-white/80">
                <strong className="text-white">No commitment required.</strong> Just honest feedback
                to help us build something you'll actually want to use.
              </p>
            </div>
          </motion.div>

          {/* Right Column - CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="mb-6">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Join Early Access
                </div>
                <div className="text-white/80 text-base sm:text-lg">
                  Shape the future of hiring tools
                </div>
              </div>

              <button
                onClick={scrollToFeedback}
                className="w-full bg-white text-primary-800 hover:bg-gray-50 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-base shadow-lg hover:shadow-xl focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-800 focus:outline-none"
                aria-describedby="early-access-cta-description"
              >
                <span>✏️ Join Early Feedback Group</span>
              </button>
              <span id="early-access-cta-description" className="sr-only">
                Join our early feedback group to help shape the product
              </span>

              <p className="text-xs sm:text-sm text-white/60 mt-4 text-center">
                Takes 2 minutes • Free forever • No spam
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 