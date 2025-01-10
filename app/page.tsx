"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import HowItWorks from './components/HowItWorks'
import CommunityService from './components/CommunityService'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section 
        className="relative h-[600px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/hero-image.jpg"
          alt="Fresh produce"
          layout="fill"
          objectFit="cover"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-green-300/80 flex flex-col justify-center items-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to FreshTrack
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl mb-8 text-center max-w-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Affordable Food Solutions for a Sustainable Future
          </motion.p>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="/sign-in">
              <Button size="lg" className="mr-4 bg-green-100 text-green-800 hover:bg-green-200">
                Join the Movement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about-us">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Discover Our Impact
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-green-50 to-green-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto text-green-700">
            At FreshTrack, we are dedicated to reducing food waste while providing affordable options for our community. Our platform allows users to purchase near-expiry items at discounted rates, ensuring that quality food does not go to waste.
          </p>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Resell Near-Expiry Items",
                description: "Shop smart with our selection of discounted near-expiry products. Quality assured and eco-friendly.",
              },
              {
                title: "Expiry Tracker",
                description: "Stay informed with our innovative expiry tracker. Receive timely reminders to reduce household waste.",
              },
              {
                title: "Community Donation Program",
                description: "Give back by donating surplus food. We connect you with local NGOs to support those in need.",
              },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-green-50 p-6 rounded-lg shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2 text-green-700">{feature.title}</h3>
                <p className="text-green-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <HowItWorks />
      <CommunityService />
    </div>
  )
}

