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
    <div className="container-max pt-20">
      <div className="text-center space-content">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Stop Losing Great Candidates to{' '}
            <span className="text-primary-800">Broken Hiring</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform any website into a professional hiring hub in 5 minutes.
            No complex ATS, no developer needed, no monthly fees.
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto my-12"
        >
          {/* Before (Current Pain) */}
          <div className="card bg-red-50 border-red-100 text-left">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-6 h-6 text-red-500" />
              <h3 className="text-lg font-semibold text-red-800">Current Reality</h3>
            </div>
            <ul className="space-y-3 text-sm text-red-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Candidates apply via email → Lost in inbox</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Post same job to 5 different sites manually</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Pay $300/month for complex ATS nobody uses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Career page looks like it's from 2010</span>
              </li>
            </ul>
          </div>

          {/* After (With Our Solution) */}
          <div className="card bg-green-50 border-green-100 text-left">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h3 className="text-lg font-semibold text-green-800">With hire(idea)</h3>
            </div>
            <ul className="space-y-3 text-sm text-green-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Professional career page, auto-generated</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Write once, auto-post everywhere</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>All applications organized in one place</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Setup in 5 minutes, works everywhere</span>
              </li>
            </ul>
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
            className="btn-primary flex items-center gap-2 text-base px-8 py-4"
          >
            Join Early Feedback Group
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={scrollToFeatures}
            className="btn-secondary flex items-center gap-2 text-base px-8 py-4"
          >
            See What We're Building
          </button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500 mb-4">
            Built based on conversations with 20+ recruiters and founders
          </p>
          <div className="flex items-center justify-center gap-8 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>No upfront payment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>5-minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Works everywhere</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 