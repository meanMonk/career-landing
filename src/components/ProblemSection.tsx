'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    quote: "I spend more time managing spreadsheets than actually talking to candidates. There has to be a better way.",
    avatar: "👨‍💼",
    name: "Sarah",
    title: "Startup Recruiter"
  },
  {
    quote: "Posting the same job to 5 different sites takes me 2 hours. It's so repetitive and frustrating.",
    avatar: "👩‍💼", 
    name: "Mike",
    title: "Agency Owner"
  },
  {
    quote: "The big ATS tools are way too complex for our 8-person team. We just need something simple that works.",
    avatar: "👨‍💻",
    name: "Lisa",
    title: "HR Manager"
  },
  {
    quote: "I lose track of where applications come from. Email, LinkedIn, our website... it's all scattered.",
    avatar: "👩‍💻",
    name: "Tom",
    title: "Small Business Owner"
  }
]

export default function ProblemSection() {
  return (
    <section id="problem" className="section-padding bg-gray-50" aria-labelledby="problems-heading">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 id="problems-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            We talked to 20+ recruiters — here's what they told us:
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Every conversation revealed the same pain points. Sound familiar?
          </p>
        </motion.div>

        {/* Chat-like Messages */}
        <div className="space-y-8 sm:space-y-10 max-w-3xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="chat-message"
            >
              {/* Avatar */}
              <div className="chat-avatar bg-white border-2 border-gray-200 shadow-sm">
                <span role="img" aria-label={`${problem.name} avatar`}>
                  {problem.avatar}
                </span>
              </div>

              {/* Message Content */}
              <div className="chat-content">
                <div className="chat-bubble bg-white border border-gray-200 shadow-sm">
                  <blockquote className="chat-text text-gray-900">
                    "{problem.quote}"
                  </blockquote>
                  <div className="chat-attribution">
                    <span className="text-gray-600">{problem.title}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse-soft" aria-hidden="true"></div>
            <span>These are real quotes from real people</span>
          </div>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Does this sound like your current hiring experience? We're building a solution
            that addresses exactly these problems.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 