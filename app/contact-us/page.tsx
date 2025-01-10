"use client"

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactUs() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-green-50 to-white">
      <motion.div 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input type="text" placeholder="Subject" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Send Message</Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Contact Information</h2>
            <div className="flex items-center space-x-4">
              <Phone className="text-green-600" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-green-600" />
              <span>info@freshtrack.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-green-600" />
              <span>123 Green Street, Eco City, 12345</span>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

