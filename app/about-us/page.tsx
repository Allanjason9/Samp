"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-green-50 to-white">
      <motion.div 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">About FreshTrack</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At FreshTrack, we are dedicated to reducing food waste while providing affordable options for our community. Our innovative platform connects consumers with discounted near-expiry products, helping to minimize waste and make quality food more accessible.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that by working together, we can create a more sustainable future for our planet and ensure that good food doesn't go to waste.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative h-64 md:h-full"
          >
            <Image
              src="/about-us-image.jpg"
              alt="FreshTrack team"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Reduced Food Waste</h3>
              <p className="text-gray-700">We've helped divert over 100,000 kg of food from landfills in the past year alone.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Community Support</h3>
              <p className="text-gray-700">Our donation program has provided meals to over 50,000 individuals in need.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Environmental Savings</h3>
              <p className="text-gray-700">By reducing food waste, we've helped save 150,000 liters of water and 75,000 kg of CO2 emissions.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

