"use client"

import ExpiryTracker from '../components/ExpiryTracker'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ExpiryTrackerPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-green-50 to-white">
      <motion.div 
        className="absolute top-0 left-0 w-full h-64 overflow-hidden z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/leaves-pattern.png"
          alt="Leaves pattern"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </motion.div>
      <div className="relative z-10">
        <ExpiryTracker />
      </div>
      <motion.div 
        className="fixed bottom-0 right-0 w-64 h-64 z-0"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src="/plant-illustration.png"
          alt="Plant illustration"
          layout="fill"
          objectFit="contain"
          className="opacity-30"
        />
      </motion.div>
    </div>
  )
}

