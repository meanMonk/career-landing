'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    email: '',
    role: '',
    company: '',
    teamSize: '',
    currentSolution: '',
    biggestPain: '',
    interestedFeatures: [] as string[],
    willingToPay: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement
      setFormData(prev => ({
        ...prev,
        interestedFeatures: checkbox.checked
          ? [...prev.interestedFeatures, value]
          : prev.interestedFeatures.filter(feature => feature !== value)
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          email: '',
          role: '',
          company: '',
          teamSize: '',
          currentSolution: '',
          biggestPain: '',
          interestedFeatures: [],
          willingToPay: '',
        })
      } else {
        // Handle validation errors or server errors
        const errorMessage = result.details && Array.isArray(result.details)
          ? result.details.join(', ')
          : result.error || 'Something went wrong. Please try again.'
        setSubmitError(errorMessage)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-20"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You! 🎉
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your feedback is incredibly valuable to us. We'll keep you updated on our progress
            and reach out if we have any follow-up questions.
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container-max">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-content"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Help Us Build This Right
          </h2>

          <p className="text-base text-gray-600 mb-8">
            We're not building in a vacuum. Every feature, every decision is based on real feedback
            from people like you who are dealing with hiring challenges every day.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary-800 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Share Your Pain Points</h3>
                <p className="text-sm text-gray-600">Tell us what's frustrating about your current hiring process</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary-800 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Shape Our Roadmap</h3>
                <p className="text-sm text-gray-600">Your input directly influences what we build first</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary-800 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Get Early Access</h3>
                <p className="text-sm text-gray-600">Be among the first to try it when we launch</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mt-8">
            <p className="text-sm text-blue-800">
              <strong>💡 Pro tip:</strong> The more specific your feedback, the better we can serve you.
              Think about your last hiring experience - what would have made it 10x easier?
            </p>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="card space-y-4">
            {/* Email */}
            <div>
              <label className="form-label">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your.email@company.com"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="form-label">Your Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select your role</option>
                <option value="founder">Founder/CEO</option>
                <option value="hr">HR Manager</option>
                <option value="recruiter">Recruiter</option>
                <option value="manager">Hiring Manager</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Team Size */}
            <div>
              <label className="form-label">Team Size</label>
              <select
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select team size</option>
                <option value="1-5">1-5 people</option>
                <option value="6-15">6-15 people</option>
                <option value="16-50">16-50 people</option>
                <option value="50+">50+ people</option>
              </select>
            </div>

            {/* Current Solution */}
            <div>
              <label className="form-label">How do you currently manage hiring?</label>
              <textarea
                name="currentSolution"
                value={formData.currentSolution}
                onChange={handleChange}
                className="form-textarea"
                rows={3}
                placeholder="Email, spreadsheets, specific tools..."
              />
            </div>

            {/* Biggest Pain */}
            <div>
              <label className="form-label">
                What do you think? What's missing? <span className="text-red-500">*</span>
              </label>
              <textarea
                name="biggestPain"
                value={formData.biggestPain}
                onChange={handleChange}
                className="form-textarea"
                rows={3}
                placeholder="Be specific - what's the most frustrating part?"
                required
              />
            </div>

            {/* Error Message */}
            {submitError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>Error:</strong> {submitError}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2 text-sm py-3"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Feedback
                </>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Takes 2 minutes • No spam • Unsubscribe anytime
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  )
} 