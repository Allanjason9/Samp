"use client"

import { motion } from 'framer-motion'
import { CheckCircle, UserPlus, Calendar, Gift } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { title: "Sign Up", description: "Sign up and log in easily with social media integration.", icon: UserPlus, color: "green-600" },
    { title: "Track Expiry", description: "Use AI-driven tools to track your food's expiry dates.", icon: Calendar, color: "green-500" },
    { title: "Donate", description: "Donate excess food effortlessly through our platform.", icon: Gift, color: "green-400" },
  ]

  return (
    <motion.section 
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-${step.color}/10`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`w-20 h-20 rounded-full bg-${step.color} flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <step.icon className={`w-10 h-10 text-white`} />
              </motion.div>
              <h3 className={`text-2xl font-semibold mb-2 text-${step.color}`}>{step.title}</h3>
              <p className="text-green-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

