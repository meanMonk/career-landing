'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react'

export default function Hero() {
  const scrollToFeedback = () => {
    document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="container-max pt-16 sm:pt-20 pb-8 sm:pb-12" aria-labelledby="hero-heading">
      <div className="text-center space-content">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6"
        >
          <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Stop Losing Great Candidates to{' '}
            <span className="text-primary-800">Broken Hiring</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform any website into a professional hiring hub in 5 minutes.
            No complex ATS, no developer needed, no more spreadsheet chaos.
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="my-12 sm:my-16"
        >
          <div className="comparison-container">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Before (Current Pain) */}
              <div className="comparison-card before">
                <div className="comparison-header">
                  <XCircle className="comparison-icon text-red-500" aria-hidden="true" />
                  <h3 className="comparison-title text-red-800">Current Reality</h3>
                </div>
                <ul className="comparison-list" role="list">
                  <li className="comparison-item text-red-700">
                    <span className="comparison-bullet bg-red-400" aria-hidden="true"></span>
                    <span>Candidates apply via email → Lost in inbox</span>
                  </li>
                  <li className="comparison-item text-red-700">
                    <span className="comparison-bullet bg-red-400" aria-hidden="true"></span>
                    <span>Post same job to 5 different sites manually</span>
                  </li>
                  <li className="comparison-item text-red-700">
                    <span className="comparison-bullet bg-red-400" aria-hidden="true"></span>
                    <span>Pay $300/month for complex ATS nobody uses</span>
                  </li>
                  <li className="comparison-item text-red-700">
                    <span className="comparison-bullet bg-red-400" aria-hidden="true"></span>
                    <span>Career page looks like it's from 2010</span>
                  </li>
                </ul>
              </div>

              {/* After (With Our Solution) */}
              <div className="comparison-card after">
                <div className="comparison-header">
                  <CheckCircle className="comparison-icon text-green-500" aria-hidden="true" />
                  <h3 className="comparison-title text-green-800">With hire(idea)</h3>
                </div>
                <ul className="comparison-list" role="list">
                  <li className="comparison-item text-green-700">
                    <span className="comparison-bullet bg-green-400" aria-hidden="true"></span>
                    <span>Professional career page, auto-generated</span>
                  </li>
                  <li className="comparison-item text-green-700">
                    <span className="comparison-bullet bg-green-400" aria-hidden="true"></span>
                    <span>Write once, auto-post everywhere</span>
                  </li>
                  <li className="comparison-item text-green-700">
                    <span className="comparison-bullet bg-green-400" aria-hidden="true"></span>
                    <span>All applications organized in one place</span>
                  </li>
                  <li className="comparison-item text-green-700">
                    <span className="comparison-bullet bg-green-400" aria-hidden="true"></span>
                    <span>Setup in 5 minutes, works everywhere</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* VS Indicator */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <div className="bg-white border-2 border-gray-300 rounded-full w-12 h-12 flex items-center justify-center font-bold text-gray-600 shadow-lg">
                VS
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToFeedback}
            className="btn-primary flex items-center gap-2 text-base px-6 sm:px-8 py-3 sm:py-4"
            aria-describedby="feedback-description"
          >
            <span>Join Early Feedback Group</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          </button>
          <span id="feedback-description" className="sr-only">
            Join our early feedback group to help shape the product
          </span>

          <button
            onClick={scrollToFeatures}
            className="btn-secondary flex items-center gap-2 text-base px-6 sm:px-8 py-3 sm:py-4"
            aria-describedby="features-description"
          >
            <span>See What We're Building</span>
          </button>
          <span id="features-description" className="sr-only">
            View the features we're developing
          </span>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500 mb-4">
            Built based on conversations with 20+ recruiters and founders
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-soft" aria-hidden="true"></div>
              <span>No upfront payment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-soft" aria-hidden="true"></div>
              <span>5-minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse-soft" aria-hidden="true"></div>
              <span>Works everywhere</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 