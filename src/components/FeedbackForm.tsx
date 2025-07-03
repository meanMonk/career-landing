'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, User, Building, Users, MessageSquare } from 'lucide-react'

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
      <section className="section-padding bg-gray-50" aria-labelledby="success-heading">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 sm:py-20"
          >
            <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mx-auto mb-6" aria-hidden="true" />
            <h2 id="success-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Thank You! 🎉
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Your feedback is incredibly valuable to us. We'll keep you updated on our progress
              and reach out if we have any follow-up questions.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="feedback" className="section-padding bg-gray-50" aria-labelledby="feedback-heading">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-content"
          >
            <h2 id="feedback-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Help Us Build This Right
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              We're not building in a vacuum. Every feature, every decision is based on real feedback
              from people like you who are dealing with hiring challenges every day.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-800 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm sm:text-base font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Share Your Pain Points</h3>
                  <p className="text-sm sm:text-base text-gray-600">Tell us what's frustrating about your current hiring process</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-800 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm sm:text-base font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Shape Our Roadmap</h3>
                  <p className="text-sm sm:text-base text-gray-600">Your input directly influences what we build first</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-800 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm sm:text-base font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Get Early Access</h3>
                  <p className="text-sm sm:text-base text-gray-600">Be among the first to try it when we launch</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-blue-50 rounded-lg border border-blue-200 mt-6 sm:mt-8">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm sm:text-base text-blue-800">
                    <strong>💡 Pro tip:</strong> The more specific your feedback, the better we can serve you.
                    Think about your last hiring experience - what would have made it 10x easier?
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card space-y-6" noValidate>
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Your Feedback</h3>
                <p className="text-sm text-gray-600">Help us understand your hiring needs better</p>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="form-label">
                  <User className="w-4 h-4 inline mr-2" aria-hidden="true" />
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@company.com"
                  required
                  aria-describedby="email-error"
                />
              </div>

              {/* Role */}
              <div>
                <label htmlFor="role" className="form-label">
                  <Building className="w-4 h-4 inline mr-2" aria-hidden="true" />
                  Your Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="form-select"
                  aria-describedby="role-help"
                >
                  <option value="">Select your role</option>
                  <option value="founder">Founder/CEO</option>
                  <option value="hr">HR Manager</option>
                  <option value="recruiter">Recruiter</option>
                  <option value="manager">Hiring Manager</option>
                  <option value="other">Other</option>
                </select>
                <p id="role-help" className="text-xs text-gray-500 mt-1">
                  This helps us understand your perspective
                </p>
              </div>

              {/* Team Size */}
              <div>
                <label htmlFor="teamSize" className="form-label">
                  <Users className="w-4 h-4 inline mr-2" aria-hidden="true" />
                  Team Size
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="form-select"
                  aria-describedby="team-size-help"
                >
                  <option value="">Select team size</option>
                  <option value="1-5">1-5 people</option>
                  <option value="6-15">6-15 people</option>
                  <option value="16-50">16-50 people</option>
                  <option value="50+">50+ people</option>
                </select>
                <p id="team-size-help" className="text-xs text-gray-500 mt-1">
                  Helps us tailor features to your scale
                </p>
              </div>

              {/* Current Solution */}
              <div>
                <label htmlFor="currentSolution" className="form-label">
                  How do you currently manage hiring?
                </label>
                <textarea
                  id="currentSolution"
                  name="currentSolution"
                  value={formData.currentSolution}
                  onChange={handleChange}
                  className="form-textarea"
                  rows={3}
                  placeholder="Email, spreadsheets, specific tools..."
                  aria-describedby="current-solution-help"
                />
                <p id="current-solution-help" className="text-xs text-gray-500 mt-1">
                  Tell us about your current workflow
                </p>
              </div>

              {/* Biggest Pain */}
              <div>
                <label htmlFor="biggestPain" className="form-label">
                  What's your biggest hiring challenge? <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="biggestPain"
                  name="biggestPain"
                  value={formData.biggestPain}
                  onChange={handleChange}
                  className="form-textarea"
                  rows={4}
                  placeholder="Be specific - what's the most frustrating part of your hiring process?"
                  required
                  aria-describedby="biggest-pain-help"
                />
                <p id="biggest-pain-help" className="text-xs text-gray-500 mt-1">
                  The more detail, the better we can help
                </p>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
                  <p className="text-sm text-red-800">
                    <strong>Error:</strong> {submitError}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 text-sm sm:text-base py-3 sm:py-4"
                aria-describedby="submit-help"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                    <span>Send Feedback</span>
                  </>
                )}
              </button>
              <p id="submit-help" className="text-xs text-gray-500 text-center mt-2">
                Takes 2 minutes • No spam • Unsubscribe anytime
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 