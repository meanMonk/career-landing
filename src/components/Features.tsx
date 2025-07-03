'use client'

import { motion } from 'framer-motion'
import { FileText, Repeat, Zap } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Career Page",
    description: "Drop one line of code on your website. Automatically creates a branded career page with job board. No developer needed.",
    image: "/images/demo/page_career_builder.png",
    imagePosition: "object-top",
    mockup: {
      title: "Easy Embed Widget",
      content: (
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
          <div className="text-green-600">Just add this to your website:</div>
          <div className="text-blue-600">&lt;script src="hire.vaayulabs.xyz/widget.js"&gt;</div>
          <div className="text-gray-500 mt-2">✅ Auto-matches your brand colors</div>
          <div className="text-gray-500">✅ Mobile responsive</div>
          <div className="text-gray-500">✅ No coding required</div>
        </div>
      )
    }
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Never Lose Another Candidate",
    description: "All applications in one place. Email notifications when someone applies. No complex workflows or dashboards.",
    image: "/images/demo/page_application.png",
    imagePosition: "object-center",
    mockup: {
      title: "Clean Application View",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-white border rounded-lg">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">👨‍💻</div>
            <div className="flex-1">
              <div className="font-semibold">John Doe</div>
              <div className="text-sm text-gray-500">Senior Developer • 2 hours ago</div>
            </div>
            <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">New</div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">👩‍🎨</div>
            <div className="flex-1">
              <div className="font-semibold">Jane Smith</div>
              <div className="text-sm text-gray-500">UI Designer • 1 day ago</div>
            </div>
            <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Reviewed</div>
          </div>
        </div>
      )
    }
  },
  {
    icon: <Repeat className="w-6 h-6" />,
    title: "Auto-Post Jobs",
    description: "Write once, post to LinkedIn, Indeed, AngelList. Save hours of manual posting. Track which boards work best.",
    image: "/images/demo/page_job_sync.png",
    imagePosition: "object-contain",
    mockup: {
      title: "Multi-Platform Publishing",
      content: (
        <div className="space-y-3">
          <div className="text-sm text-gray-600 mb-3">Publishing "Senior Developer" to:</div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs">in</div>
              <span className="text-sm">LinkedIn Jobs</span>
              <div className="ml-auto text-green-600 text-xs">✓ Posted</div>
            </div>
            <div className="flex items-center gap-3 p-2 bg-orange-50 rounded">
              <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs">I</div>
              <span className="text-sm">Indeed</span>
              <div className="ml-auto text-green-600 text-xs">✓ Posted</div>
            </div>
            <div className="flex items-center gap-3 p-2 bg-purple-50 rounded">
              <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center text-white text-xs">A</div>
              <span className="text-sm">AngelList</span>
              <div className="ml-auto text-yellow-600 text-xs">⏳ Posting...</div>
            </div>
          </div>
        </div>
      )
    }
  }
]

export default function Features() {
  return (
    <section className="section-padding bg-white" aria-labelledby="features-heading">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 id="features-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Here's What We're Building
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Three core features that solve the biggest hiring pain points
          </p>
        </motion.div>

        <div className="space-section">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="space-content">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="bg-primary-800 text-white p-2 sm:p-3 rounded-lg" aria-hidden="true">
                      {feature.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-primary-800 bg-primary-50 px-3 py-1 rounded-full">
                      Feature {index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    {feature.title}
                  </h3>

                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Cropped Image Preview */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="feature-image-container">
                  <Image
                    src={feature.image}
                    alt={`${feature.title} feature preview`}
                    fill
                    className={`feature-image ${feature.imagePosition}`}
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* Hidden Mockup - Keep for future use */}
              <div className="hidden">
                <div className="card">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {feature.mockup.title}
                  </h4>
                  {feature.mockup.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20 p-6 sm:p-8 bg-gray-50 rounded-2xl"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Does this solve your hiring problems?
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            We're still building this and want to make sure we're on the right track.
          </p>
          <button
            onClick={() => document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
            aria-describedby="feedback-cta-description"
          >
            Share Your Thoughts
          </button>
          <span id="feedback-cta-description" className="sr-only">
            Jump to feedback form to share your thoughts on these features
          </span>
        </motion.div>
      </div>
    </section>
  )
} 