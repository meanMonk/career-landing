'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigationItems = [
  { name: 'Problem', href: '#problem' },
  { name: 'Features', href: '#features' },
  { name: 'Demo', href: '#demo' },
  // { name: 'Feedback', href: '#feedback' },
  // { name: 'About', href: '#about' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white text-sm font-bold">hi</span>
            </div>
            <span className="text-xl font-bold text-primary-800">
              hire(idea)
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-800 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                {item.name}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => scrollToSection('#feedback')}
              className="ml-6 bg-primary-800 hover:bg-primary-900 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md focus:ring-2 focus:ring-primary-800 focus:ring-offset-2 focus:outline-none text-sm"
            >
              Get Early Access
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-primary-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-800 focus:ring-offset-2 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white py-4"
          >
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-primary-800 hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#feedback')}
                className="w-full bg-primary-800 hover:bg-primary-900 text-white font-medium px-4 py-3 rounded-lg transition-all duration-200 text-sm mt-4"
              >
                Get Early Access
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
} 