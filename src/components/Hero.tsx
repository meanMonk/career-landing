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
    <section className="container-max pt-24 sm:pt-28 pb-16 sm:pb-20" aria-labelledby="hero-heading">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8 mb-12 sm:mb-16"
        >
          <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Stop Losing Great Candidates to{' '}
            <span className="text-primary-800">Broken Hiring</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform any website into a professional hiring hub in 5 minutes.
            <br className="hidden sm:block" />
            No complex ATS, no developer needed, no spreadsheet chaos.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 sm:mb-20"
        >
          <button
            onClick={scrollToFeedback}
            className="btn-primary flex items-center justify-center gap-2 text-base px-6 sm:px-8 py-3 sm:py-4"
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
            className="btn-secondary flex items-center justify-center gap-2 text-base px-6 sm:px-8 py-3 sm:py-4"
            aria-describedby="features-description"
          >
            <span>See What We're Building</span>
          </button>
          <span id="features-description" className="sr-only">
            View the features we're developing
          </span>
        </motion.div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 sm:mb-20"
        >
          <div className="comparison-container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Before (Current Pain) */}
              <div className="comparison-card before text-left">
                <div className="comparison-header">
                  <XCircle className="comparison-icon text-red-500" aria-hidden="true" />
                  <h3 className="comparison-title text-red-800">Current Reality</h3>
                </div>
                <ul className="comparison-list" role="list">
                  <li className="comparison-item text-red-700">
                    <span className="comparison-bullet bg-red-400" aria-hidden="true"></span>
                    <span>Applications lost in email chaos</span>
                  </li>
                  <li className="comparison-item text-red-700">
                    <span className="comparison-bullet bg-red-400" aria-hidden="true"></span>
                    <span>Manual posting to 5+ job boards</span>
                  </li>
                  <li className="comparison-item text-red-700">
                    <span className="comparison-bullet bg-red-400" aria-hidden="true"></span>
                    <span>$300/month for unused ATS features</span>
                  </li>
                  <li className="comparison-item text-red-700">
                    <span className="comparison-bullet bg-red-400" aria-hidden="true"></span>
                    <span>Outdated career page design</span>
                  </li>
                </ul>
              </div>

              {/* After (With Our Solution) */}
              <div className="comparison-card after text-left">
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
                    <span>Write once, publish everywhere</span>
                  </li>
                  <li className="comparison-item text-green-700">
                    <span className="comparison-bullet bg-green-400" aria-hidden="true"></span>
                    <span>All applications in one dashboard</span>
                  </li>
                  <li className="comparison-item text-green-700">
                    <span className="comparison-bullet bg-green-400" aria-hidden="true"></span>
                    <span>5-minute setup, works everywhere</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* VS Indicator */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <div className="bg-white border-2 border-gray-300 rounded-full w-10 h-10 flex items-center justify-center font-semibold text-gray-600 shadow-sm text-sm">
                VS
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto pt-6 sm:pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500 mb-6">
            Built from real conversations with 20+ recruiters and founders
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-gray-400">
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