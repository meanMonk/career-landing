'use client'

import { motion } from 'framer-motion'
import { Code, Linkedin, Phone, TrendingUp, Twitter } from 'lucide-react'
import Image from 'next/image'

const credentials = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Solo founder, full-stack dev"
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Talked to 20+ recruiters"
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Building in public"
  }
]

export default function About() {
  return (
    <div className="bg-gray-50 section-padding">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center space-content">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About This Project
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building this because hiring shouldn't be this hard
            </p>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-52 h-52 mx-auto bg-gray-50 rounded-full flex items-center justify-center border-1 border-primary-300">
              <Image src="/images/demo/founder.png" alt="sahil - founder" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Hi, I'm Sahil. After seeing dozens of startups struggle with hiring tools that cost more than their rent, I decided to build something simpler — designed for speed, not stress.
            </p>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-800 text-white flex items-center justify-center">
                    {credential.icon}
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{credential.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://x.com/sahil_kashetwar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center gap-2 text-sm"
              >
                <Twitter className="w-4 h-4" />
                Follow on Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/sahil24"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center gap-2 text-sm"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 